import React, { useContext, useEffect, useRef } from "react";
import "./LowerNavbar.css";

import logo from "../../../Assets/Images/logo.png";

// import { FaShoppingCart } from "react-icons/fa";
// import shopcartImg from "../../../Assets/Images/topcart.png";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";

import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import ApiContext from "../../../Context/api";

import axios from "axios";

export default function LowerNavbar() {
  const [hoverShopDropdown, setHoverShopDropdown] = useState(false);
  const [hoverAboutDropdown, setHoverAboutDropdown] = useState(false);

  const {
    products,
    loginError,
    cartDataAfterLogin,
    cartDataById,
    cartData,
    fetchOneCart,
    singleCart,
    setSingleCart,
    cart,
  } = useContext(ApiContext);

  // const [cartShow, setCartShow] = React.useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCartShow(true);
  //   }, 5000);
  // }, []);

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

  const [searchData, setSearchData] = useState("");

  // console.log(localStorage.getItem('cartData'));

  const [openSearch, setOpenSearch] = useState(false);

  const divEl = useRef();
  const searchBar = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (
        !divEl.current.contains(event.target) &&
        !searchBar.current.contains(event.target)
      ) {
        setOpenSearch(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const searchProductData = products.filter((data) => {
    if (searchData === "" || searchData === undefined) {
      return data.productTitle === null;
    }
    return data.productTitle.includes(searchData);
  });

  // console.log(searchProductData);

  const handleSearch = () => {
    setOpenSearch(false);
    setSearchData("");
  };

  // console.log(localStorage.getItem('cartData'));

  // let cartLength = '';
  // if (
  //   localStorage.getItem('cartData') === null ||
  //   localStorage.getItem('cartData') === undefined
  // ) {
  //   cartLength = 0;
  // } else {
  //   cartLength = JSON.parse(localStorage.getItem('cartData')).products.length;
  // }

  // let cartLength = '';
  // if (
  //   localStorage.getItem('cartData') === null ||
  //   localStorage.getItem('cartData') === undefined
  // ) {
  //   cartLength = 0;
  // } else {
  //   cartLength = JSON.parse(localStorage.getItem('cartData')).products.length;
  // }

  return (
    <div className='lowernavbar-section'>
      <div className='lowernavbar-section-main flex flex-row px-[3rem]'>
        <div className='lowernavbar-section-main-logo w-[20%] flex flex-row items-center'>
          <Link to='/'>
            <img
              className='lowernavbar-section-main-logo-img w-[200px]'
              src={logo}
              alt='Zaira-Logo-Img'
            />
          </Link>
        </div>
        <div className='lowernavbar-section-main w-[80%] flex flex-col'>
          <div className='lowernavbar-section-main-links  flex flex-row border-b gap-[3rem]'>
            <div className='lowernavbar-section-main-menu w-[95%] flex flex-row items-center py-[1rem] pr-[2rem] pl-[1rem] justify-between border-r'>
              <div className=''>
                <Link to='/'>Home</Link>
              </div>
              <div
                onMouseEnter={() => setHoverShopDropdown(true)}
                onMouseLeave={() => setHoverShopDropdown(false)}
                className='relative'
                to='/'>
                <div className='flex flex-row cursor-pointer gap-[8px] items-center justify-center'>
                  <p>Shop</p>
                  <MdOutlineKeyboardArrowDown className='text-[20px]' />
                </div>
                {hoverShopDropdown && (
                  <div
                    onMouseEnter={() => setHoverShopDropdown(true)}
                    onMouseLeave={() => setHoverShopDropdown(false)}
                    className='absolute fade-in bg-white p-[1rem] shadow-md flex flex-col gap-[1rem] z-[100] w-[200px]'>
                    <Link to='/Shop'>
                      <p>All Categories</p>
                    </Link>
                    <Link to='/Shop/FaceCleanser'>
                      <p>Face Cleanser</p>
                    </Link>
                    <Link to='/Shop/Moisturizer'>
                      <p>Moisturizer</p>
                    </Link>
                    <Link to='/Shop/Scrub'>
                      <p>Scrub</p>
                    </Link>
                    <Link to='/Shop/BodyButter'>
                      <p>Body Butter</p>
                    </Link>
                    <Link to='/Shop/Clay'>
                      <p>Clay</p>
                    </Link>
                    <Link to='/Shop/LipBalm'>
                      <p>Lip Balm</p>
                    </Link>
                    <Link to='/Shop/Oil'>
                      <p>Oil</p>
                    </Link>
                    <Link to='/Shop/SkincareKit'>
                      <p>Skincare Kit</p>
                    </Link>
                  </div>
                )}
              </div>
              <div className=''>
                <Link to='/SkinCareQuiz'>Skin Care Quiz</Link>
              </div>
              <div className=''>
                <Link to='/Testimonials'>Testimonial</Link>
              </div>
              <div
                onMouseEnter={() => setHoverAboutDropdown(true)}
                onMouseLeave={() => setHoverAboutDropdown(false)}
                className='relative'
                to='/'>
                <div className='flex flex-row gap-[8px] cursor-pointer items-center justify-center'>
                  <p>About Us</p>
                  <MdOutlineKeyboardArrowDown className='text-[20px]' />
                </div>
                {hoverAboutDropdown && (
                  <div
                    onMouseEnter={() => setHoverAboutDropdown(true)}
                    onMouseLeave={() => setHoverAboutDropdown(false)}
                    className='absolute fade-in bg-white p-[1rem] shadow-md flex flex-col gap-[1rem] z-[100] w-[200px]'>
                    <Link to='/AboutUs'>
                      <p>About Us</p>
                    </Link>
                    <Link to='/Blog'>
                      <p>Blog</p>
                    </Link>
                    <Link to='/FAQ'>
                      <p>FAQ</p>
                    </Link>
                  </div>
                )}
              </div>
              <div className=''>
                <Link to='/ContactUs'>Contact Us</Link>
              </div>
            </div>
            <div className='lowernavbar-section-main-menu-cartIcon w-[5%] py-[1rem]'>
              <div className='lowernavbar-section-main-menu-cart relative w-fit relative'>
                {/* <img
                  className='w-[40px] h-[40px]'
                  src={shopcartImg}
                  alt='shopcart-img'
                /> */}
                <Link to='/ShoppingCart'>
                  <HiOutlineShoppingCart className='text-[35px] cursor-pointer' />

                  <div className='text-[12px] font-[500] rounded-full w-[16px] h-[16px] bg-black flex flex-row items-center justify-center text-white absolute top-0 right-0'>
                    {/* {cartData === undefined
                      ? JSON.parse(localStorage.getItem('cartData')).products
                          .length
                      : cartData.products.length} */}
                    {singleCart.carts.products.length}
                    {/* {
                      JSON.parse(localStorage.getItem('cartData')).products
                        .length
                    } */}
                    {/* {cartLength} */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div
              onClick={() => setOpenSearch(true)}
              className='lowernavbar-section-main-search p-[1rem] flex flex-row items-center justify-between '
              ref={searchBar}>
              <input
                type='text'
                value={searchData}
                placeholder='Search'
                className='outline-none w-full'
                onChange={(e) => setSearchData(e.target.value)}
              />
              <FiSearch className='text-[30px]' />
            </div>

            {openSearch && (
              <div
                className='flex flex-col bg-white border absolute w-full z-[1000]'
                ref={divEl}>
                {searchProductData.map((data, index) => {
                  return (
                    <div key={index} onClick={handleSearch}>
                      <Link to={`/Shop/${data.productCode}`}>
                        <p className='p-[10px] text-[12px] cursor-pointer hover:bg-gray-300'>
                          {data.productTitle}
                        </p>
                      </Link>
                    </div>
                  );
                })}
                {searchProductData.length === 0 && (
                  <p className='p-[10px]'>No Result Found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
