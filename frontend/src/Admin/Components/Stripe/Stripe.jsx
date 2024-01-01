import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';

import { useContext } from 'react';
import ApiContext from '../../../context/api';
import NavigationContext from '../../../context/navigation';

import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  // My Data
  const {
    setOrderData,
    handleCreateOrder,
    customerData,
    // paymentData,
    statusData,
  } = useContext(ApiContext);

  const {
    cartPrice,
    setCartPrice,
    cartQuantity,
    setCartQuantity,
    shippingValue,
    setIncrementDecrementValue,
    finalPrice,
    setConfirmationOrderPage
  } = useContext(NavigationContext);

  const handleClickNext = () => {

    setConfirmationOrderPage("confirm");
    setOrderData({
      orderId: `OLS001`,
      orderDate: '27/06/2023',
      orderProducName: 'Oleena Shade',
      orderQuantity: cartQuantity,
      orderType: 'Shade',
      orderPrice: 900,
      orderTotalCost: finalPrice,
      orderPaymentStatus: 'Paid',
      statusOfOrder: 'Order Confirmed',
    });

    handleCreateOrder({
      userEmail: customerData.userEmail,
      userName: customerData.userName,
      userMobileNo: customerData.userMobileNo,
      userCity: customerData.userCity,
      userState: customerData.userState,
      userZipcode: customerData.userZipcode,
      userHouseNumber: customerData.userHouseNumber,
      userStreetAddress: customerData.userStreetAddress,
      // userCardNumber: paymentData.userCardNumber,
      // userCardCVVNumber: paymentData.userCardCVVNumber,
      // userCardExpiryMonth: paymentData.userCardExpiryMonth,
      // userCardExpiryYear: paymentData.userCardExpiryYear,

      orderProducName: 'Oleena Shade',
      orderQuantity: cartQuantity,
      orderType: 'Shade',
      orderPrice: 900,
      orderTotalCost: finalPrice,
      orderPaymentStatus: 'Paid',
      statusOfOrder: statusData,
    });

    // setConfirmationOrderPage(!confirmationOrderPage);
    setCartPrice(cartPrice + shippingValue);
    setCartQuantity('');
    setIncrementDecrementValue(1);
  };

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://localhost:3000/shop/orderconfirmed',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      handleClickNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        onClick={handleSubmit}
        className="flex w-[200px] flex-row justify-center gap-[1rem] rounded-[6px] border-none bg-[#4273B9] p-[10px] text-[20px] text-white transition delay-150 ease-in-out hover:bg-[#224e8c] hover:text-gray-200"
        type="submit"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Stripe = ({ productPaymentAmount }) => {
  const options = {
    mode: 'payment',
    amount: productPaymentAmount,
    currency: 'aed',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
