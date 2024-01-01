import React, { useEffect, useState } from 'react';
import './Products.css';

// import ProductImg1 from "../../Assets/Images/body Butter/Mango Body Butter - Avacado & Jojoba Oil/1I876RDFTY6E.jpg";

import RatingReadOnlyComp from '../../Component/Rating/RatingReadOnly';

import { HiOutlineShoppingBag } from 'react-icons/hi';

import { FiShare2 } from 'react-icons/fi';

import SnackBar from './SnackBar/SnackBar';

// import { useState } from "react";

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import NavigationContext from '../../Context/navigation';
import ApiContext from '../../Context/api';

// import { useParams } from "react-router-dom";

import { useLocation } from 'react-router-dom';

export default function Products({
  productsData,
  sortByValue,
  sideBarCategorySelectionPath,
}) {
  const { setProductPageLocation, currentPath, setPath } =
    useContext(NavigationContext);
  // const { products } = useContext(ApiContext)

  // const {cart} = useContext(ApiContext);

  let location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  });
  // console.log(location.pathname);

  // const [paramId, setParamId] = useState();

  const {
    setProductData,
    products,
    setCartDataById,
    imageString,
    handleCreateCart,
    cartDataAfterLogin,
    cart,
    cartData,
    setCartData,
    loginResponse,
  } = useContext(ApiContext);

  let productData = productsData;

  // if (sideBarCategorySelectionPath === "All Categories") {
  //   navigate("/Shop");
  // } else if (sideBarCategorySelectionPath === "Face Cleanser") {
  //   navigate("/Shop/FaceCleanser");
  // } else if (sideBarCategorySelectionPath === "Moisturizer") {
  //   navigate("/Shop/Moisturizer");
  // } else if (sideBarCategorySelectionPath === "Scrub") {
  //   navigate("/Shop/Scrub");
  // } else if (sideBarCategorySelectionPath === "Body Butter") {
  //   navigate("/Shop/BodyButter");
  // } else if (sideBarCategorySelectionPath === "Clay") {
  //   navigate("/Shop/Clay");
  // } else if (sideBarCategorySelectionPath === "Lip Balm") {
  //   navigate("/Shop/LipBalm");
  // } else if (sideBarCategorySelectionPath === "Oil") {
  //   navigate("/Shop/Oil");
  // } else if (sideBarCategorySelectionPath === "Skincare Kit") {
  //   // pathLocation = "/Shop/FaceCleanser";
  //   navigate("/Shop/SkincareKit");
  // }

  if (location.pathname === '/Shop') {
    productData = products;
  } else if (location.pathname === '/Shop/FaceCleanser') {
    productData = products.filter((data) => {
      return data.productCategory === 'Face Cleanser';
    });
  } else if (location.pathname === '/Shop/Moisturizer') {
    productData = products.filter((data) => {
      return data.productCategory === 'Moisturizer';
    });
  } else if (location.pathname === '/Shop/Scrub') {
    productData = products.filter((data) => {
      return data.productCategory === 'Scrub';
    });
  } else if (location.pathname === '/Shop/BodyButter') {
    productData = products.filter((data) => {
      return data.productCategory === 'Body Butter';
    });
  } else if (location.pathname === '/Shop/Clay') {
    productData = products.filter((data) => {
      return data.productCategory === 'Clay';
    });
  } else if (location.pathname === '/Shop/LipBalm') {
    productData = products.filter((data) => {
      return data.productCategory === 'Lip Balm';
    });
  } else if (location.pathname === '/Shop/Oil') {
    productData = products.filter((data) => {
      return data.productCategory === 'Oil';
    });
  } else if (location.pathname === '/Shop/SkincareKit') {
    productData = products.filter((data) => {
      return data.productCategory === 'Skincare Kit';
    });
  }

  const handleAddToBag = (id) => {
    // setCart([
    //   {
    //     // productCartImage: ProductImg1,
    //     productCartTitle: products[id].productTitle,
    //     productCartPrice: products[id].productPrice,
    //     productCartQuantity: 1,
    //     productCartId: products[id]._id,
    //   },
    // ]);

    // const productImage = `${imageString}${products[id].productCode}`;

    const cartData = {
      ProductId: products[id].productCode,
      product_imageId: products[id].productMainImage[0],
      productName: products[id].productTitle,
      productPrice: products[id].productPrice,
      quantity: 1,
    };

    handleCreateCart(cartData);

    const cartDataAfterAddingProduct = cart.find((data) => {
      return loginResponse.email === data.customer_email;
    });

    localStorage.setItem(
      'cartData',
      JSON.stringify(cartDataAfterAddingProduct)
    );

    setCartData(cartDataAfterAddingProduct);

    // const cartDataAfterAddingProduct = cart.find((data) => {
    //   return cartDataAfterLogin.customer_email === data.customer_email;
    // });

    // setCartDataById(cartDataAfterAddingProduct);
    // localStorage.setItem(
    //   "cartData",
    //   JSON.stringify(cartDataAfterAddingProduct)
    // );

    // handleCreateCart(cartData);
  };

  // const [productId, setProductId] = useState();

  // const [productPageLocation, setProductPageLocation] = useState();
  // const productData = [
  //   {
  //     img: ProductImg1,
  //     label: "Mango Ghee",
  //     price: "50",
  //   },
  //   {
  //     img: ProductImg1,
  //     label: "svgjsvdf",
  //     price: "50",
  //   },
  //   {
  //     img: ProductImg1,
  //     label: "sdfsdfs",
  //     price: "50",
  //   },
  // ];
  // let productData = productsData;
  // if (currentPath === "/Shop") {
  //   productData = products;
  // } else if (currentPath === "/Shop/FaceCleanser") {
  //   productData = products.filter((data) => {
  //     if (data.category === "Face Cleanser") {
  //       return data;
  //     }
  //   });
  // } else if (currentPath === "/Shop/Moisturizer") {
  // } else if (currentPath === "/Shop/Scrub") {
  // } else if (currentPath === "/Shop/BodyButter") {
  // } else if (currentPath === "/Shop/Clay") {
  // } else if (currentPath === "/Shop/LipBalm") {
  // } else if (currentPath === "/Shop/Oil") {
  // } else if (currentPath === "/Shop/SkincareKit") {
  // }

  // const productData = products;

  if (sortByValue === 'Name (Z - A)') {
    productData = productsData.sort((a, b) => {
      let fa = a.productTitle.toLowerCase();
      let fb = b.productTitle.toLowerCase();

      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });
  } else if (sortByValue === 'Name (A - Z)') {
    productData = productsData.sort((a, b) => {
      let fa = a.productTitle.toLowerCase();
      let fb = b.productTitle.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  } else if (sortByValue === 'Price (Low To High)') {
    productData = productsData.sort((a, b) => {
      return a.productPrice - b.productPrice;
    });
  } else if (sortByValue === 'Price (High To Low)') {
    productData = productsData.sort((a, b) => {
      return b.productPrice - a.productPrice;
    });
  }

  const renderedProductsSection = productData.map((data, index) => {
    return (
      <div
        key={`${data.productTitle}-${data.productPrice}-${index}`}
        // onClick={() => setProductData(data)}
        className="productsSection-product relative flex flex-col border transition delay-100 ease-in-out hover:shadow-md rounded-[10px] p-[1rem]"
      >
        <Link to={`/Shop/${data.productCode}`}>
          <img
            onClick={() => setProductPageLocation(`/Shop/${data.productCode}`)}
            className="productsSection-product-image w-[400px] h-[350px] border-b"
            src={`${imageString}${data.productMainImage[0]}`}
            alt={`${data.label}-${index}-img`}
          />
        </Link>
        <div className="productsSection-sharebtn fade-in hidden absolute cursor-pointer right-[1rem] top-[1rem] border-black hover:bg-black hover:text-white border-[1px] border-solid rounded-full p-[10px]">
          <FiShare2 className="productsSection-sharebtn-shareicon text-[25px]" />
        </div>
        <div className="productsSection-stock bg-black absolute py-[4px] px-[10px] left-0 top-[2rem] text-white">
          <p>{data.productAvailability}</p>
        </div>
        <div className="productsSection-content pt-[10px] flex flex-col gap-[10px]">
          <RatingReadOnlyComp rating={2.5} />
          <Link to={`/Shop/${data.productCode}`}>
            <p
              onClick={() =>
                setProductPageLocation(`/Shop/${data.productCode}`)
              }
              className="productsSection-content-name text-[18px] font-[500]"
            >
              {data.productTitle}
            </p>
          </Link>
          <p className="productsSection-content-price text-[25px]">{`AED ${data.productPrice}`}</p>
          <SnackBar
            button={
              <div className="productsSection-AddtoCartBTN flex flex-row">
                <p
                  onClick={() => handleAddToBag(index)}
                  className="text-white rounded-[4px] bg-black p-[10px] text-[20px] w-fit cursor-pointer flex flex-row gap-[4px] items-center"
                >
                  <p>Add To Bag</p>
                  {/* <HiOutlineShoppingBag className='productsSection-AddtoCartBTN-icon-smallScreen' /> */}
                  <HiOutlineShoppingBag className="productsSection-AddtoCartBTN-icon" />
                </p>

                {/* <HiOutlineShoppingBag className='rounded-r-[4px] productsSection-AddtoCartBTN-icon h-full fade-in w-fit hidden cursor-pointer text-white bg-black text-[25px] p-[10px]' /> */}
              </div>
            }
            message={`${data.productTitle} is added to cart!`}
          />
        </div>
      </div>
    );
  });
  return <div className="productsSection">{renderedProductsSection}</div>;
}
