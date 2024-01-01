import React, { useEffect, useState } from "react";
import "./UpperNavbar.css";

// import { FaUserAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

// import Avatar from "./Avatar";

// import avatarImg from "../../../Assets/Images/1.jpg";

import { Sling as Hamburger } from "hamburger-react";

import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";

import { FaUserAlt } from "react-icons/fa";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

import { useNavigate } from "react-router-dom";

import axios from "axios";

// import { useCookies } from "react-cookie";

// import { continueRender, delayRender } from "remotion";

// import { useCallback } from "react";

export default function UpperNavbar() {
  const { loginResponse, setLoginResponse } = useContext(ApiContext);

  const [showUpperNav, setShowUpperNav] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowUpperNav(true);
    }, 1000);
  }, []);

  // console.log(loginResponse);
  // const {cart} = useContext(ApiContext);
  // console.log(localStorage.getItem('user'));

  // const [userData, setUserData] = useState();

  // if (loginResponse === null || loginResponse === undefined) {
  //   const userData = JSON.parse(localStorage.getItem('userData'));
  //   setUserData(userData);
  // }

  // console.log(userData);

  // const [userData, setUserData] = useState(null);

  // const [handle] = useState(() => delayRender());

  // const fetchOneProduct = useCallback(async () => {
  //   const response = await axios.get(
  //     `http://localhost:8000/getOneProduct/${""}`
  //   );
  //   setUserData(response.data);

  //   continueRender(handle);
  // }, []);

  const navigate = useNavigate();

  // const [cookies, removeCookie] = useCookies([]);

  // const { loginError, loginResponse, setLoginResponse } =
  //   useContext(ApiContext);

  // console.log(userDataAfterLogin);

  const handleUserLogout = async () => {
    await axios.get("http://localhost:8000/logout");
    // setLoginError(true);
    // localStorage.setItem("email", data.data);
    navigate("/");
    // localStorage.removeItem("email");
    localStorage.removeItem("user");
    setLoginResponse([]);
    // localStorage.removeItem('cartData');
    // localStorage.removeItem('user');

    // const Logout = () => {
    //   removeCookie("token");
    //   navigate("/");
    // };
    // Logout();
  };

  // console.log(localStorage.getItem("email"));

  const [profileDropdown, setProfileDropdown] = React.useState(false);

  const [smallDeviceSideNav, setSmallDeviceSideNav] = React.useState(false);

  const [dropdownShopSmallDeviceSideNav, setDropdownShopSmallDeviceSideNav] =
    React.useState(false);

  // console.log(loginResponse);

  const [
    dropdownAboutUsSmallDeviceSideNav,
    setDropdownAboutUsSmallDeviceSideNav,
  ] = React.useState(false);

  return (
    <>
      {showUpperNav && (
        <div className='upperheader-section'>
          {smallDeviceSideNav && (
            <div className='smallDeviceMenu w-[70%] bg-white z-[1000] fixed top-[4rem] bg-brown h-screen p-[1rem] px-[10%]'>
              <div className='smallDeviceMenu-links text-white text-[18px] flex flex-col gap-[10px]'>
                <Link to='/'>Home</Link>
                <div className='flex flex-col gap-[6px]'>
                  <div
                    onClick={() =>
                      setDropdownShopSmallDeviceSideNav(
                        !dropdownShopSmallDeviceSideNav
                      )
                    }
                    className='flex flex-row gap-[1rem] items-center cursor-pointer'>
                    <p>Shop</p>
                    {!dropdownShopSmallDeviceSideNav ? (
                      <AiOutlineArrowRight className='text-[20px]' />
                    ) : (
                      <AiOutlineArrowDown className='text-[20px]' />
                    )}
                  </div>
                  {dropdownShopSmallDeviceSideNav && (
                    <div className='fade-in-top border-b rounded-[4px] p-[10px]'>
                      <Link to='/Shop'>
                        <p>All Categories</p>
                      </Link>
                      <Link to='/'>
                        <p>Face Cleanser</p>
                      </Link>
                      <Link to='/'>
                        <p>Moisturizer</p>
                      </Link>
                      <Link to='/'>
                        <p>Scrub</p>
                      </Link>
                      <Link to='/'>
                        <p>Body Butter</p>
                      </Link>
                      <Link to='/'>
                        <p>Clay</p>
                      </Link>
                      <Link to='/'>
                        <p>Lip Balm</p>
                      </Link>
                      <Link to='/'>
                        <p>Oil</p>
                      </Link>
                      <Link to='/'>
                        <p>Skincare Kit</p>
                      </Link>
                    </div>
                  )}
                </div>
                <div className='flex flex-col gap-[6px]'>
                  <p
                    onClick={() =>
                      setDropdownAboutUsSmallDeviceSideNav(
                        !dropdownAboutUsSmallDeviceSideNav
                      )
                    }
                    className='flex flex-row gap-[1rem] items-center cursor-pointer'>
                    <p>About</p>
                    {!dropdownAboutUsSmallDeviceSideNav ? (
                      <AiOutlineArrowRight className='text-[20px]' />
                    ) : (
                      <AiOutlineArrowDown className='text-[20px]' />
                    )}
                  </p>
                  {dropdownAboutUsSmallDeviceSideNav && (
                    <div className='fade-in-top border-b rounded-[4px] p-[10px]'>
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
                <Link to='/SkinCareQuiz'>Skin Care Quiz</Link>
                <Link to='/Testimonials'>Testimonial</Link>
                <Link to='/ContactUs'>Contact Us</Link>
              </div>
            </div>
          )}
          <div className='upperheader-section-links flex flex-row w-full bg-brown text-white p-[1rem] px-[10%]'>
            <div className='upperheader-section-links-left w-[70%] text-[14px] flex flex-row justify-between flex flex-row items-center'>
              <p className='cursor-pointer'>admin@zairaorganic.com</p>
              <p className='cursor-pointer'>+971585221518</p>
              <p className='cursor-default'>
                Free Shipping For Orders Above AED 300
              </p>
            </div>
            <div className='upperheader-section-links-right w-[30%]  flex flex-row justify-end items-center'>
              <div
                onClick={() => setSmallDeviceSideNav(!smallDeviceSideNav)}
                className='upperheader-section-links-right-hamburger hidden w-fit'>
                <Hamburger />
              </div>
              <div className='text-[14px] flex flex-row justify-end items-center gap-[10px]'>
                {(loginResponse === null ||
                  loginResponse === undefined ||
                  loginResponse.length === 0) && (
                  <Link to='/Login'>
                    <p className='cursor-pointer'>Login</p>
                  </Link>
                )}

                {loginResponse.length !== 0 && (
                  <div className='w-fit relative'>
                    <div
                      onMouseEnter={() => setProfileDropdown(true)}
                      onMouseLeave={() => setProfileDropdown(false)}
                      className='flex flex-row gap-[4px] items-center w-fit cursor-pointer'>
                      {/* <Avatar img={avatarImg} /> */}
                      <FaUserAlt />
                      <p>{loginResponse.name}</p>
                      {/* <p>{JSON.parse(localStorage.getItem('user')).name}</p> */}
                      {/* <p>Hello</p> */}
                    </div>
                    {profileDropdown && (
                      <div
                        onMouseEnter={() => setProfileDropdown(true)}
                        onMouseLeave={() => setProfileDropdown(false)}
                        className='flex flex-col text-black rounded-[4px] shadow-md absolute w-full pt-[10px] z-[100]'>
                        <Link to='/UserProfile'>
                          <p className='border-b hover:bg-gray-300 p-[8px] rounded-[4px] cursor-pointer bg-white'>
                            Profile
                          </p>
                        </Link>
                        <p
                          onClick={handleUserLogout}
                          className='hover:bg-gray-300 p-[8px] rounded-[4px] cursor-pointer bg-white'>
                          Logout
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
