import React, { useEffect, useCallback, useState } from "react";
import "./ProductPage.css";

import Reviews from "./Reviews/Reviews";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { LiaWeightHangingSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { BiSolidCartDownload } from "react-icons/bi";

// images
// import img1 from "../../../Assets/Images/body Butter/Coffee Body Butter/2O987YYU764W.jpg";
// import img2 from "../../../Assets/Images/body Butter/Coffee Body Butter/3I876TRTY764W.jpg";
// import img3 from "../../../Assets/Images/body Butter/Coffee Body Butter/1876RDFT54.jpg";

import IncrementDecrementComponent from "../../../Component/IncrementDecrementComponent/IncrementDecrementComponent";
// import ImageMagnify from "./ImageMagnify/ImageMagnify";

import { useContext } from "react";
import ApiContext from "../../../Context/api";
// import NavigationContext from '../../../Context/navigation';

import { useParams } from "react-router-dom";

import SnackBar from "../SnackBar/SnackBar";

import { continueRender, delayRender } from "remotion";

import axios from "axios";
import ImageComp from "./ImageComp";

export default function ProductPage() {
  // const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState(null);

  // const [userData, setUserData] = useState();
  const {
    handleCreateCart,
    imageString,
    userDataAfterLogin,
    cartDataAfterLogin,
    cart,
    setCartDataById,

    cartData,
    setCartData,
    loginResponse,
  } = useContext(ApiContext);

  // const userData = JSON.parse(localStorage.getItem("userData"));

  const [handle] = useState(() => delayRender());

  const { paramsProductCode } = useParams();

  const fetchOneProduct = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:8000/getOneProduct/${paramsProductCode}`
    );
    setProduct(response.data);
    // await setUserData(userDataAfterLogin);

    continueRender(handle);
  }, [paramsProductCode, handle]);

  useEffect(() => {
    fetchOneProduct();
  }, []);

  // console.log(userData.name);

  // console.log(product.product.productBenefits);
  // console.log(paramsProductCode);

  // console.log(paramsProductCode);
  const [productQuantity, setProductQuantity] = React.useState(1);

  const handleAddToBagClick = (cartProduct) => {
    // const productImage = `${imageString}${cartProduct.product.productCode}`;
    const products = {
      ProductId: cartProduct.product.productCode,
      product_imageId: cartProduct.product.productMainImage[0],
      productName: cartProduct.product.productTitle,
      quantity: productQuantity,
      productPrice: cartProduct.product.productPrice,
    };

    handleCreateCart(products);

    const cartDataAfterAddingProduct = cart.find((data) => {
      return loginResponse.email === data.customer_email;
    });

    console.log(cartDataAfterAddingProduct);

    localStorage.setItem(
      "cartData",
      JSON.stringify(cartDataAfterAddingProduct)
    );

    // console.log(JSON.parse(localStorage.getItem('cartData')));

    setCartData(cartDataAfterAddingProduct);

    // localStorage.setItem('cartData');

    // localStorage.removeItem("cartData");

    // const cartDataAfterAddingProduct = cart.find((data) => {
    //   return cartDataAfterLogin.customer_email === data.customer_email;
    // });
    // localStorage.setItem(
    //   "cartData",
    //   JSON.stringify(cartDataAfterAddingProduct)
    // );

    // const cartDataAfterAddingProduct = cart.find((data) => {
    //   return cartDataAfterLogin.customer_email === data.customer_email;
    // });

    // setCartDataById(cartDataAfterAddingProduct);

    // console.log(products);
  };

  // console.log(product.product.productMainImage[0]);
  // const defaultImage = product
  //   ? `${imageString}${product.product.productMainImage[0]}`
  //   : null;
  // const [selectImage, setSelectImage] = React.useState(img1);

  // const product = products.filter((data) => {
  //   return paramsProductCode === data.productCode;
  // });

  // console.log(paramsProductCode);

  // console.log(products[0]?.productTitle);

  // const { currentPath } = useContext(NavigationContext);

  // let filteredProduct;

  // const filterProductFunction = () => {
  //   const pathPosition = currentPath.search("=");
  //   const productCode = currentPath.slice(pathPosition + 1);

  //   filteredProduct = products.filter((data) => {
  //     if (productCode === data.productCode) {
  //       return data;
  //     }
  //     return [];
  //   });
  // };

  // useEffect(() => {
  //   filterProductFunction();
  // }, []);

  // console.log(filteredProduct);

  // const handleAddToBagClick = () => {
  //   setCart([
  //     // {
  //     //   productCartImage: img1,
  //     //   productCartTitle: product.product.productTitle,
  //     //   productCartPrice: product.product.productPrice,
  //     //   productCartQuantity: productQuantity,
  //     //   productCartId: product.product._id,
  //     // },
  //   ]);
  // };

  // console.log(productData[0]);

  // const productPageData = [
  //   {
  //     benefits: [
  //       "Goat Milk's Creaminess Lends Well To Conditions Like Eczema, Psoriasis, And Dry Skin, As It Keeps Skin Nourished And Hydrated Thanks To Its Non-Stripping Properties.",
  //       "Helps Keep Your Skin Youthful And Acne-Free Due To Its Content Of Exfoliating Lactic Acid.",
  //       "Goat Milks High Anti Inflammatory Properties Help Nourish Dry, Itchy And Eczema & Psoriasis Prone Skin. Goat Milk Promotes Skin Glowing By Reducing Pigmentation, Fine Lines & Wrinkles.",
  //       "Raw Wild Honey's Anti Bacterial Properties Not Only Heals Wounds & Reduce Acne But It Also Hydrates & Rejuvenates Skin.",
  //       "Lavender Oil Helps Cleanse Your Skin From Dirt And Impurities Plus Lessen Redness And Irritation. The Lavender Oil Can Also Be Used To Treat Psoriasis.",
  //     ],
  //   },
  //   {
  //     benefits: [
  //       "Goat Milk's Creaminess Lends Well To Conditions Like Eczema, Psoriasis, And Dry Skin, As It Keeps Skin Nourished And Hydrated Thanks To Its Non-Stripping Properties.",
  //       "Helps Keep Your Skin Youthful And Acne-Free Due To Its Content Of Exfoliating Lactic Acid.",
  //     ],
  //   },
  // ];

  // console.log(productPageData[1].benefits);

  // const renderedBenefits = product.product.productBenefits.map(
  //   (data, index) => {
  //     return (
  //       <div className='flex flex-row gap-[1rem]' key={index}>
  //         <div className='w-fit h-fit bg-black rounded-full flex flex-row items-center justify-center mt-[4px]'>
  //           <p className='w-[15px] h-[15px] '></p>
  //         </div>
  //         <p className='productPageSection-main-content-descriptionText text-[14px] text-gray-600'>
  //           {data}
  //         </p>
  //       </div>
  //     );
  //   }
  // );

  return (
    <div>
      {product ? (
        <div className='productPageSection flex flex-col'>
          <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
            <Link to='/'>
              <AiFillHome className='cursor-pointer' />
            </Link>
            <p className='cursor-pointer'>Shop</p>
            <p>{`>`}</p>
            <p className='cursor-default'>{product.product.productTitle}</p>
          </div>

          <div className='productPageSection-main p-[2rem] w-full flex flex-row gap-[2rem] border-b'>
            <ImageComp
              product={product}
              handleAddToBagClick={handleAddToBagClick}
            />
            <div className='productPageSection-main-content w-[60%] flex flex-col gap-[1rem]'>
              <p className='productPageSection-main-content-productName text-[25px] font-[500]'>
                {product.product.productTitle}
              </p>
              <div className='productPageSection-main-content-HeadSub flex flex-col gap-[10px] py-[10px] border-b'>
                <p className='productPageSection-main-content-HeadSubText'>{`Product Code : ${product.product.productCode}`}</p>
                <p className='productPageSection-main-content-HeadSubText'>{`Product Category : ${product.product.productCategory}`}</p>
                <p className='productPageSection-main-content-HeadSubText'>{`Availability : ${product.product.productAvailability}`}</p>
                <div className='flex flex-row gap-[10px] items-center'>
                  <p className='productPageSection-main-content-HeadSubText'>{`Weight : ${product.product.productWeight}`}</p>
                  <LiaWeightHangingSolid className='productPageSection-main-content-HeadSubText-icon' />
                </div>
              </div>

              <div className='productPageSection-main-content-price-Rating flex flex-row items-center gap-[1rem]'>
                <p className='text-[25px] font-[500]'>{`${product.product.productCurrency} ${product.product.productPrice}`}</p>
                <div className='flex flex-row gap-[1rem] items-center'>
                  <div className='flex flex-row gap-[4px] bg-black items-center h-fit p-[4px] rounded-[4px]'>
                    <AiFillStar className='text-yellow-500' />
                    <p className='text-white '>{`${4.5}`}</p>
                  </div>
                  <p className='text-gray-600'>{`${`12345`} Ratings & ${`12345`} Reviews`}</p>
                </div>
              </div>

              {/* Mobile Buttons */}
              <div className='productPageSection-main-mainButtons-Mobile flex flex-row gap-[1rem] w-full'>
                <SnackBar
                  button={
                    <button className='border-black hover:bg-white hover:text-black border-solid border-2 transition duration-[0.5s] ease-in-out w-full flex flex-row gap-[10px] bg-black text-white p-[1rem] items-center justify-center rounded-[8px]'>
                      <p>Add To Cart</p>
                      <PiShoppingBagOpenFill className='text-[25px]' />
                    </button>
                  }
                  message={`${product.product.productTitle} is added to cart!`}
                />

                <button className='border-[#137E2B] hover:border-[#137E2B] hover:text-[#137E2B] hover:bg-white transition duration-[0.5s] ease-in-out border-solid border-2 w-full flex flex-row gap-[10px] bg-[#137E2B] items-center text-white p-[1rem] justify-center rounded-[8px]'>
                  <p>Buy Now</p>
                  <BiSolidCartDownload className='text-[25px]' />
                </button>
              </div>

              <p className='productPageSection-main-content-descriptionText text-[14px] text-justify text-gray-600'>
                {product.product.productShortDescription}
              </p>

              <p className='text-[22px] font-[500]'>{`Ingredients`}</p>

              <p className='productPageSection-main-content-descriptionText text-[14px] text-justify text-gray-600'>
                {product.product.productIngredients}
              </p>

              <IncrementDecrementComponent
                data={productQuantity}
                setData={setProductQuantity}
              />

              <div className='flex flex-row gap-[10px] items-center pt-[1rem]'>
                <p className='text-[16px] font-[500]'>{`Shipping`}</p>
                <FaShippingFast className='text-[16px]' />
              </div>

              <p className='productPageSection-main-content-descriptionText text-[14px] text-justify text-gray-600'>
                {`Shipping is such an important factor in the success of any business. Whether you sell products online or run a physical store.`}
              </p>
            </div>
          </div>

          <div className='productPageSection-description p-[2rem] w-full flex flex-col gap-[1rem] border-b'>
            <p className='text-[22px] font-[500]'>{`Description`}</p>
            <div className='productPageSection-description-content px-[2rem]'>
              <p className='text-[18px] font-[500]'>{`How To Use`}</p>
              <p className='productPageSection-main-content-descriptionText text-[14px] text-justify text-gray-600'>
                {product.product.productHowToUse}
              </p>
            </div>

            <div className='productPageSection-description-content flex flex-col gap-[4px] px-[2rem]'>
              <p className='text-[18px] font-[500]'>{`Benefits`}</p>
              {/* {renderedBenefits} */}

              {product.product.productBenefits1 !== "" && (
                <div className='flex flex-row gap-[1rem]'>
                  <div className='w-fit h-fit bg-black rounded-full flex flex-row items-center justify-center mt-[4px]'>
                    <p className='w-[15px] h-[15px] '></p>
                  </div>
                  <p className='productPageSection-main-content-descriptionText text-[14px] text-gray-600'>
                    {product.product.productBenefits1}
                  </p>
                </div>
              )}
              {product.product.productBenefits2 !== "" && (
                <div className='flex flex-row gap-[1rem]'>
                  <div className='w-fit h-fit bg-black rounded-full flex flex-row items-center justify-center mt-[4px]'>
                    <p className='w-[15px] h-[15px] '></p>
                  </div>
                  <p className='productPageSection-main-content-descriptionText text-[14px] text-gray-600'>
                    {product.product.productBenefits2}
                  </p>
                </div>
              )}
              {product.product.productBenefits3 !== "" && (
                <div className='flex flex-row gap-[1rem]'>
                  <div className='w-fit h-fit bg-black rounded-full flex flex-row items-center justify-center mt-[4px]'>
                    <p className='w-[15px] h-[15px] '></p>
                  </div>
                  <p className='productPageSection-main-content-descriptionText text-[14px] text-gray-600'>
                    {product.product.productBenefits3}
                  </p>
                </div>
              )}
              {product.product.productBenefits4 !== "" && (
                <div className='flex flex-row gap-[1rem]'>
                  <div className='w-fit h-fit bg-black rounded-full flex flex-row items-center justify-center mt-[4px]'>
                    <p className='w-[15px] h-[15px] '></p>
                  </div>
                  <p className='productPageSection-main-content-descriptionText text-[14px] text-gray-600'>
                    {product.product.productBenefits4}
                  </p>
                </div>
              )}
              {product.product.productBenefits5 !== "" && (
                <div className='flex flex-row gap-[1rem]'>
                  <div className='w-fit h-fit bg-black rounded-full flex flex-row items-center justify-center mt-[4px]'>
                    <p className='w-[15px] h-[15px] '></p>
                  </div>
                  <p className='productPageSection-main-content-descriptionText text-[14px] text-gray-600'>
                    {product.product.productBenefits5}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className='productPageSection-description-content-Reviews flex flex-col gap-[4px] p-[2rem]'>
            <p className='text-[22px] font-[500]'>{`Reviews`}</p>
            {/* <Reviews product={product} /> */}
          </div>
        </div>
      ) : null}
    </div>
  );
}
