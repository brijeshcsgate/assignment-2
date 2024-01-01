import React, { useState } from "react";
import "./Checkout.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import BillingForm from "./BillingForm/BillingForm";

import img from "../../../Assets/Images/blog/img.jpg";

import { useContext } from "react";
import NavigationContext from "../../../Context/navigation";
import ApiContext from "../../../Context/api";

import DialogOnOrderCompeletion from "./DialogOnOrderCompletion";

import Alert from "./Alert";

import { useNavigate, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartValue, setCartValue } = useContext(NavigationContext);

  const { loginResponse, singleCart, imageString, handleCreateOrder } =
    useContext(ApiContext);

  const priceFilterArray = singleCart.carts.products.map((data) => {
    return data.productPrice * data.quantity;
  });

  let totalPrice = 0;

  for (let i = 0; i < priceFilterArray.length; i++) {
    totalPrice += priceFilterArray[i];
  }

  const productData = singleCart.carts.products.map((data) => {
    return {
      productName: data.productName,
      quantity: data.quantity,
      ProductId: data.ProductId,
      productPrice: data.productPrice,
      productTotalPrice: data.productPrice * data.quantity,
    };
  });

  console.log(productData);

  // console.log(location.pathname);
  // console.log(loginResponse);

  if (loginResponse.length === 0 && location.pathname === "/Checkout") {
    navigate("/login");
  }

  // //////// Checkout FORM

  const [region, setRegion] = React.useState("");

  const [placeOrderButton, setPlaceOrderButton] = useState(false);

  const [formDataToSubmit, setFormDataToSubmit] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userMobileNo: "",
    userZipcode: "",
    userRegion: "",
    userAddress1: "",
    userAddress2: "",
  });

  const formSchema = Yup.object().shape({
    // password: Yup.string()
    //   .required("Password is mandatory")
    //   .min(3, "Password must be at 3 char long"),
    // confirmPassword: Yup.string()
    //   .required("Password is mandatory")
    //   .oneOf([Yup.ref("password")], "Passwords does not match"),
    userFirstName: Yup.string()
      .required("Name is required")
      .min(4, "First Name must be at least 6 char long")
      .max(20, "First Name must be at least 20 char long"),
    userLastName: Yup.string()
      .required("Name is required")
      .min(4, "Last Name must be at least 6 char long")
      .max(20, "Name must be at least 20 char long"),
    userEmail: Yup.string()
      .email("Not a valid Email")
      .required("Email is required"),
    userMobileNo: Yup.string()
      .required("Contact is required")
      .min(10, "Contact must be at least 10 char long")
      .max(13, "Contact must be at least 10 char long"),
    userZipcode: Yup.string()
      .required("userZipcode is required")
      .min(3, "Zipcode must be at least 10 char long")
      .max(10, "Zipcode must be at least 10 char long"),
    // city: Yup.string().required("City is required"),
    userRegion: Yup.string().required("Region is required"),
    userAddress1: Yup.string().required("Address is required"),
    userAddress2: Yup.string(),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email) => {
    // console.log('ValidateEmail was called with', email);

    const isValid = isValidEmail(email);

    // const validityChanged =
    //   (errors.email && isValid) || (!errors.email && !isValid);
    // if (validityChanged) {
    //   console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid');
    // }

    return isValid;
  };

  const onSubmit = (data) => {
    // userFirstName,
    //   userLastName,
    //   userMobileNo,
    //   userEmail,
    //   userZipcode,
    //   userRegion,
    //   userAddress1,
    //   userAddress2,
    //   // orderId,
    //   orderDate,
    //   orderTotalCost,
    //   statusOfOrder,
    //   paymentStatus,
    //   products,
    //   totalPrice

    // const formData = new FormData();
    // formData.append('userFirstName', data.userFirstName)
    // formData.append('userLastName', data.userLastName)
    // formData.append('userEmail', data.userEmail)
    // formData.append('userMobileNo', data.userMobileNo)
    // formData.append('userZipcode', data.userZipcode)
    // formData.append('userRegion', data.userRegion)
    // formData.append('userAddress1', data.userAddress1)
    // formData.append('userAddress2', data.userAddress2)

    console.log(data);
    setFormDataToSubmit(data);
    reset({
      userFirstName: "",
      userLastName: "",
      userEmail: "",
      userMobileNo: "",
      userZipcode: "",
      userRegion: "",
      userAddress1: "",
      userAddress2: "",
    });
    setPlaceOrderButton(true);
    return false;
  };

  const handlePlaceOrder = () => {
    // navigate("/");

    // const formData = new FormData();
    // formData.append("userFirstName", formDataToSubmit.userFirstName);
    // formData.append("userLastName", formDataToSubmit.userLastName);
    // formData.append("userEmail", formDataToSubmit.userEmail);
    // formData.append("userMobileNo", formDataToSubmit.userMobileNo);
    // formData.append("userZipcode", formDataToSubmit.userZipcode);
    // formData.append("userRegion", formDataToSubmit.userRegion);
    // formData.append("userAddress1", formDataToSubmit.userAddress1);
    // formData.append("userAddress2", formDataToSubmit.userAddress2);
    // formData.append("orderTotalCost", totalPrice);
    // formData.append("statusOfOrder", "Order Confirmed");
    // formData.append("paymentStatus", "Unpaid");
    // formData.append("products", productData);
    // formData.append("totalPrice", totalPrice);

    // handleCreateOrder(formData);
    // console.log(formData);
    const formData = {
      userFirstName: formDataToSubmit.userFirstName,
      userLastName: formDataToSubmit.userLastName,
      userEmail: formDataToSubmit.userEmail,
      userMobileNo: Number(formDataToSubmit.userMobileNo),
      userZipcode: Number(formDataToSubmit.userZipcode),
      userRegion: formDataToSubmit.userRegion,
      userAddress1: formDataToSubmit.userAddress1,
      userAddress2: formDataToSubmit.userAddress2,
      orderTotalCost: totalPrice,
      statusOfOrder: "Order Confirmed",
      paymentStatus: "Unpaid",
      products: productData,
      totalPrice: totalPrice,
    };

    handleCreateOrder(formData);

    // console.log(formData);
  };

  const renderedCheckoutProducts = singleCart.carts.products.map(
    (data, index) => {
      return (
        <div
          key={index}
          className='checkout-section-main-checkoutContent-left-section flex flex-row gap-[10px]'>
          <img
            className='w-[70px] h-[70px]'
            src={`${imageString}${data.product_imageId}`}
            alt={`${data.productName}-${index}-img`}
          />
          <p className='checkout-section-main-checkoutContent-left-section-ProductName text-[25px]'>
            {data.productName}
          </p>
          <p className='checkout-section-main-checkoutContent-left-section-price'>{`AED ${data.productPrice} X ${data.quantity}`}</p>
        </div>
      );
    }
  );

  // const handlePurchaseClick = () => {
  //   console.log("Order Place");
  // };

  return (
    <div className='checkout-section'>
      <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
        <Link to='/'>
          <AiFillHome className='cursor-pointer' />
        </Link>
        <p className='cursor-pointer'>Checkout</p>
      </div>

      <div className='checkout-section-main flex flex-col py-[1rem] px-[2rem] items-center gap-[1rem on]'>
        <p className='text-[30px]'>We Need Details To Final Checkout</p>
        <div className='checkout-section-main-checkoutContent w-full flex flex-row gap-[1rem] border shadow-lg p-[1rem]'>
          <div className='checkout-section-main-checkoutContent-left w-[60%] flex flex-col gap-[1rem]'>
            {/* <div className='checkout-section-main-checkoutContent-left-login'>
              <Link to='/Login'>
                <button className='checkout-section-loginBTN py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
                  Login
                </button>
              </Link>
            </div>
            <div className='flex flex-row gap-[4px] text-[25px]'>
              <p>---</p>
              <p>OR</p>
              <p>---</p>
            </div> */}

            {/* Non Login Users */}
            <div className='checkout-section-billingAddress flex flex-col gap-[1rem]'>
              <p className='text-[25px]'>Shipping Address</p>
              {!placeOrderButton && (
                <BillingForm
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  handleEmailValidation={handleEmailValidation}
                  register={register}
                  region={region}
                  setRegion={setRegion}
                  errors={errors}
                />
              )}
              {placeOrderButton && (
                <div className='flex flex-col gap-[1rem]'>
                  <div className='flex flex-row justify-between items-center'>
                    <p>First Name</p>
                    <p className='text-[20px]'>
                      {formDataToSubmit.userFirstName}
                    </p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Last Name</p>
                    <p className='text-[20px]'>
                      {formDataToSubmit.userLastName}
                    </p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Email</p>
                    <p className='text-[20px]'>{formDataToSubmit.userEmail}</p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Mobile Number</p>
                    <p className='text-[20px]'>
                      {formDataToSubmit.userMobileNo}
                    </p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Address</p>
                    <p className='text-[20px]'>
                      {formDataToSubmit.userAddress1}
                    </p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Landmark</p>
                    <p className='text-[20px]'>
                      {formDataToSubmit.userAddress2}
                    </p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Region</p>
                    <p className='text-[20px]'>{formDataToSubmit.userRegion}</p>
                  </div>
                  <div className='flex flex-row justify-between gap-[10px] items-center'>
                    <p>Zipcode</p>
                    <p className='text-[20px]'>
                      {formDataToSubmit.userZipcode}
                    </p>
                  </div>
                  <button
                    // onClick={handleSubmit(onSubmit)}
                    onClick={() => setPlaceOrderButton(false)}
                    className='checkout-section-main-checkoutContent-left-section-btn py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] w-fit ease-in-out'>
                    Edit Order
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className='checkout-section-main-checkoutContent-left w-[40%] flex flex-col gap-[1rem]'>
            <p className='text-[25px]'>Product Details</p>
            {renderedCheckoutProducts}
            {/* <div className='checkout-section-main-checkoutContent-left-section flex flex-row gap-[10px]'>
              <img className='w-[70px] h-[70px]' src={img} alt='product-img' />
              <p className='checkout-section-main-checkoutContent-left-section-ProductName text-[25px]'>{`Charcoal Aloe Vera`}</p>
              <p className='checkout-section-main-checkoutContent-left-section-price'>{`AED ${40} X ${1}`}</p>
            </div> */}

            <div className='checkout-section-main-checkoutContent-left-section'>
              <p className='text-[25px]'>{`Shipping Fee`}</p>
              <p className='checkout-section-main-checkoutContent-left-section-price'>{`AED ${15}`}</p>
            </div>

            <div className='checkout-section-main-checkoutContent-left-section'>
              <p className='text-[25px]'>{`Total Price`}</p>
              <p className='checkout-section-main-checkoutContent-left-section-price'>{`AED ${totalPrice}`}</p>
            </div>

            <div className='flex flex-row justify-center'>
              {!placeOrderButton && (
                <button
                  onClick={handleSubmit(onSubmit)}
                  className='checkout-section-main-checkoutContent-left-section-btn py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
                  Submit Details To Place Order
                </button>
              )}
              {placeOrderButton && (
                <Link to='/orderconfirmation'>
                  <button
                    // onClick={handleSubmit(onSubmit)}
                    onClick={handlePlaceOrder}
                    className='checkout-section-main-checkoutContent-left-section-btn py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
                    Purchase Now | Cash On Delivery
                  </button>
                </Link>
              )}
              {/* {placeOrderButton && (
                <DialogOnOrderCompeletion
                  button={
                    <button
                      // onClick={handleSubmit(onSubmit)}
                      onClick={handlePlaceOrder}
                      className='checkout-section-main-checkoutContent-left-section-btn py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
                      Purchase Now | Cash On Delivery
                    </button>
                  }
                  content={
                    <div className='checkout-section-main-completion p-[3rem] bg-[#EDF7ED]'>
                      <Alert
                        alertContent={
                          "Your Order has been successfully placed."
                        }
                      />
                    </div>
                  }
                />
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
