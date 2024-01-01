import React, { useCallback, useEffect } from "react";
import "./Cart.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import { useState } from "react";

import IncrementDecrementComponent from "./IncrementDecrementCart";

// import { useEffect } from "react";

// import cartImg from "../../Assets/Images/Clay/Brazilian Yellow Clay/19865446768787.jpg";

import { useContext } from "react";
// import NavigationContext from "../../Context/navigation";
import ApiContext from "../../Context/api";

import axios from "axios";

export default function Cart() {
  // const [cartValue, setCartValue] = useState(1);

  // const { cartValue } = useContext(NavigationContext);

  // const { cart, setCart } = useContext(ApiContext);

  const [cartId, setCartId] = useState(0);

  // const objectIndex = cart.findIndex((obj) => obj.id === cartId);

  const {
    cart,
    imageString,
    deleteProductInCartById,
    singleCart,
    fetchOneCart,
    setSingleCart,
    loginResponse,

    // editCartProductsById,
  } = useContext(ApiContext);

  const priceFilterArray = singleCart.carts.products.map((data) => {
    return data.productPrice * data.quantity;
  });

  let totalPrice = 0;

  for (let i = 0; i < priceFilterArray.length; i++) {
    totalPrice += priceFilterArray[i];
  }

  // console.log(loginResponse);

  // console.log(priceFilterArray);

  // console.log(totalPrice);
  // const [total, setTotal] = useState(totalPrice);

  const [quantity, setQuantity] = useState(1);

  // const [pageCart, setPageCart] = useState();

  // useEffect(() => {
  //   const fetchOneCart = async () => {
  //     const response = await axios.get(
  //       `http://localhost:8000/CartGetOne/${
  //         JSON.parse(localStorage.getItem("user")).email
  //       }`
  //     );
  //     setSingleCart(response.data);
  //     // setPageCart(response.data);
  //   };
  //   fetchOneCart();
  //   // fetchOneCart();
  // }, []);

  // const fetchCart = useCallback(async () => {
  //   const response = await axios.get(
  //     `http://localhost:8000/CartGetOne/${
  //       JSON.parse(localStorage.getItem("user")).email
  //     }`
  //   );
  //   setPageCart(response.data);
  // }, [setPageCart]);

  useEffect(() => {
    const fetchOneCart = async () => {
      const response = await axios.get(
        `http://localhost:8000/CartGetOne/${
          // JSON.parse(localStorage.getItem("user")).email
          localStorage.getItem("email")
        }`
      );
      setSingleCart(response.data);
    };
    fetchOneCart();
  }, [cart, setSingleCart]);

  // useEffect(() => {

  //   // fetchOneCart();
  // }, [setSingleCart]);

  // console.log(singleCart.carts.products);

  // const newArray = cart;

  // useEffect(() => {
  //   setCart(newArray);
  // }, [newArray, setCart]);

  // const cartData = [
  //   {
  //     id: 1,
  //     image: cartImg,
  //     productName: "Charcoal Aloe Vera",
  //     productPrice: 40,
  //     quantity: 2,
  //   },
  //   {
  //     id: 2,
  //     image: cartImg,
  //     productName: "Product",
  //     productPrice: 400000,
  //     quantity: 2,
  //   },
  // ];

  // const cartDataById = cart.find((data) => {
  //   return (
  //     JSON.parse(localStorage.getItem("cartData")).customer_email ===
  //     data.customer_email
  //   );
  // });

  // console.log(cartDataById.products[2].product_imageId);
  // let cartLength = [];
  // if (
  //   localStorage.getItem("cartData") === null ||
  //   localStorage.getItem("cartData") === undefined
  // ) {
  //   cartLength = [];
  // } else {
  //   cartLength = JSON.parse(localStorage.getItem("cartData")).products;
  // }
  // const cartData = JSON.parse(localStorage.getItem('cartData')).products;
  const cartData = singleCart.carts.products;

  const handleDeleteCartProduct = (_id) => {
    deleteProductInCartById(_id);
    // const fetchOneCart = async () => {
    //   const response = await axios.get(
    //     `http://localhost:8000/CartGetOne/${
    //       JSON.parse(localStorage.getItem("user")).email
    //     }`
    //   );
    //   setSingleCart(response.data);
    // };
    // fetchOneCart();
  };

  // const handleUpdateCartProducts = () => {
  //   editCartProductsById();
  // };

  // let productQuantity = cart[cartId].productCartQuantity;
  // console.log(cartData);

  const renderedCartData = cartData.map((data, index) => {
    return (
      <div
        key={`${data.id}-${data.productCartTitle}-${index}`}
        className='shoppingCartSection-cartData flex flex-row gap-[1rem] w-full border'>
        <div className=''>{index + 1}</div>
        <div>
          <img
            className='w-[70px] h-[60px]'
            src={`${imageString}${data.product_imageId}`}
            alt={`${data.productName}-${index}-img`}
          />
        </div>
        <div>{data.productName}</div>
        <div>{data.productPrice}</div>
        <div
          // onClick={() => setCartId(index)}
          className=''>
          <IncrementDecrementComponent
            quantityValue={data.quantity}
            productData={data}
            // data={quantity}
            // setData={setQuantity}
            // cartId={cartId}
          />
        </div>
        <div>{data.productPrice * data.quantity}</div>
        <div>
          <MdDelete
            onClick={() => handleDeleteCartProduct(data._id)}
            className='text-[30px] cursor-pointer'
          />
        </div>
      </div>
    );
  });

  // Mobile Data
  const renderedMobileCartData = cartData.map((data, index) => {
    return (
      <div
        key={`${data.id}-${data.productName}-${index}`}
        className='shoppingCartSection-cartDataMobile flex flex-row gap-[1rem] w-full border p-[1rem]'>
        {/* <div className=''>{index + 1}</div> */}
        <div className='w-[20%] flex flex-row items-center justify-center'>
          <img
            className='w-fit h-fit'
            src={`${imageString}${data.product_imageId}`}
            alt={`${data.productName}-${index}-img`}
          />
        </div>
        <div className='flex flex-col w-[30%] gap-[6px]'>
          <div className='text-[14px] font-[600]'>{data.productName}</div>
          <div className='flex flex-col gap-[6px] text-[14px]'>
            <p className='font-[500]'>Price</p>
            <p>{`AED ${data.productPrice}`}</p>
          </div>

          <div className='flex flex-row items-center'>
            <MdDelete className='text-[20px] cursor-pointer' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-[6px] text-[14px] w-[50%]'>
          <p className='text-[18px] font-[500]'>Total</p>
          <p>{`AED ${data.productPrice}`}</p>
          <div className=''>
            <IncrementDecrementComponent
              data={quantity}
              setData={setQuantity}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='shoppingCartSection flex flex-col'>
      <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
        <Link to='/'>
          <AiFillHome className='cursor-pointer' />
        </Link>
        <p className='cursor-default'>Shopping Cart</p>
      </div>

      <div className='shoppingCartSection-main p-[2rem]'>
        {cartData.length === 0 ? (
          <div className='shoppingCartSection-mainEmpty p-[2rem] shadow-lg border'>
            <p className='text-[22px] text-center'>Your Cart Is Empty</p>
          </div>
        ) : (
          <div className='shoppingCartSection-mainNotEmpty shadow-lg p-[2rem] border flex flex-col items-center gap-[1rem] justify-center w-full'>
            <div className='shoppingCartSection-mainNotEmpty-heads flex flex-row gap-[1rem] w-full border'>
              <p>Sr No.</p>
              <p>Image</p>
              <p>Product Name</p>
              <p>Product Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Action</p>
            </div>

            {renderedCartData}
          </div>
        )}

        {/* Mobile View */}
        {singleCart.carts.products.length === 0 ? (
          <div className='shoppingCartSection-mainEmptyMobile p-[2rem] shadow-lg border'>
            <p className='text-[22px] text-center'>Your Cart Is Empty</p>
          </div>
        ) : (
          <div className='shoppingCartSection-mainNotEmptyMobile'>
            {renderedMobileCartData}
          </div>
        )}

        {singleCart.carts.products.length !== 0 && (
          <div className='py-[1rem] flex flex-col'>
            <div className='flex flex-row justify-between text-[20px] font-[500]'>
              <p>Grand Total</p>
              <p>{`AED ${totalPrice}`}</p>
            </div>
            {loginResponse.length === 0 && (
              <div className='shoppingCartSection-checkout p-[1rem] flex flex-row justify-center'>
                <Link to='/login'>
                  <button className='shoppingCartSection-checkout-btn py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
                    PLease Login To Continue
                  </button>
                </Link>
              </div>
            )}
            {loginResponse.length !== 0 && (
              <div className='shoppingCartSection-checkout p-[1rem] flex flex-row justify-center'>
                <Link to='/Checkout'>
                  <button className='shoppingCartSection-checkout-btn py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
