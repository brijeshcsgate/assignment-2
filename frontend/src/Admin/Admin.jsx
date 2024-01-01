import React, { useState } from "react";
import "./Admin.css";

import logo from "../Assets/Images/logo.png";
import { BiSolidUser } from "react-icons/bi";

import AdminHome from "./Pages/AdminHome/AdminHome";

// Pages
import Orders from "./Pages/Orders/Orders";
// import PaymentMethodSettings from "./Pages/PaymentMethodSettings/PaymentMethodSettings";
import ContactPage from "./Pages/ContactPage/ContactPage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import Products from "./Pages/Products/Products";
import Blog from "./Pages/Blog/Blog";
import Banner from "./Pages/Banner/Banner";

import AdminAccountModal from "./Components/AdminAccountModal";
import AlertDialog from "./Components/AlertDialogBox/AlertDialogBox";

// side nav icons
import sideNavIcon1 from "./assets/AdminSideNavIcons/icon1.png";
import sideNavIcon2 from "./assets/AdminSideNavIcons/icon2.png";
// import sideNavIcon3 from './assets/AdminSideNavIcons/icon3.png';
// import sideNavIcon4 from './assets/AdminSideNavIcons/icon4.png';
// import sideNavIcon5 from './assets/AdminSideNavIcons/icon5.png';
// import sideNavIcon6 from './assets/AdminSideNavIcons/icon6.png';
// import sideNavIcon7 from "./assets/AdminSideNavIcons/icon7.png";

import { BiSupport } from "react-icons/bi";
import { BiSolidUserDetail } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { PiFlagBannerBold } from "react-icons/pi";

export default function Admin() {
  const [activeSideMenu, setActiveSideMenu] = useState("dashboard");

  const [openAdminAccountDropdown, setOpenAdminAccountDropdown] =
    useState(false);

  const handleSubmit = (e) => {
    console.log("Submit");
  };

  return (
    <div className='admin-section'>
      <div className='admin-section-upperNav fixed flex w-full flex-row items-center border-b bg-white py-[4px] z-[100]'>
        <div className='admin-section-upperNav-left flex w-[20%] flex-row items-center justify-center'>
          <img
            className='w-[150px] cursor-pointer'
            src={logo}
            alt='oleena-logo'
          />
        </div>
        <div className='admin-section-upperNav-right flex w-[80%] flex-row items-center justify-between px-[1rem]'>
          <h3 className='text-[20px] font-semibold text-[#4273B9]'>Overview</h3>
          <div className='w-fit cursor-pointer rounded-full  relative'>
            <div
              onMouseEnter={() => setOpenAdminAccountDropdown(true)}
              onMouseLeave={() => setOpenAdminAccountDropdown(false)}
              className='flex flex-row gap-[5px] items-center'>
              <p>Admin</p>
              <BiSolidUser className='text-[30px]' />
            </div>
            {openAdminAccountDropdown && (
              <div
                onMouseEnter={() => setOpenAdminAccountDropdown(true)}
                onMouseLeave={() => setOpenAdminAccountDropdown(false)}
                className='flex flex-col rounded-[4px] bg-white absolute top-[1.7rem] w-full py-[10px] border'>
                <AdminAccountModal
                  modalContent={
                    <div className='flex flex-col gap-[1rem]'>
                      <p className='text-[30px] font-[500]'>
                        Admin Information
                      </p>
                      <p className='text-[12px] text-center text-blue-400'>
                        Change admin username or password
                      </p>
                      <form className='flex flex-col gap-[1rem]'>
                        <div className='flex flex-col gap-[4px]'>
                          <label>Admin Username</label>
                          <input
                            type='text'
                            className='p-[1rem] border-b'
                            placeholder='Enter new username'
                          />
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                          <label>Admin Password</label>
                          <input
                            type='password'
                            className='p-[1rem] border-b'
                            placeholder='Enter new password'
                          />
                        </div>
                      </form>
                      <button
                        //   onClick={handleSubmit}
                        className=''>
                        <AlertDialog
                          alertDialogTitle={"Submit"}
                          alertDialogContent={`Are you sure want to these changes ?`}
                          ButtonName={"Submit"}
                          handleClick={handleSubmit}
                        />
                      </button>
                    </div>
                  }
                  modalButton={
                    <p className='cursor-pointer hover:bg-gray-300 px-[4px]'>
                      Account
                    </p>
                  }
                />

                <p className='cursor-pointer hover:bg-gray-300 px-[4px]'>
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='admin-section-lowerSection flex flex-row pt-[5rem]'>
        <div className='admin-section-lowerSection-sideNav w-[20%] border-r p-[1rem]'>
          <div
            onClick={() => setActiveSideMenu("dashboard")}
            className={`flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] ${
              activeSideMenu === "dashboard" ? "bg-[#4273B9]" : "bg-[#474747]"
            } p-[10px] hover:bg-[#4273B9]`}>
            <img
              className='h-[30px] w-[30px]'
              src={sideNavIcon1}
              alt='sideNavIcon1'
            />
            <p className='font-[500] text-white'>Dashboard</p>
          </div>

          <div className='mt-[1rem] flex flex-col gap-[10px]'>
            <div
              onClick={() => setActiveSideMenu("orders")}
              className={`sideNav-menuItems ${
                activeSideMenu === "orders" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              <img
                className='h-[30px] w-[30px]'
                src={sideNavIcon2}
                alt='sideNavIcon2'
              />
              <p
                className={`font-[500] ${
                  activeSideMenu === "orders" && "text-white"
                } text-[#1f1f1f]`}>
                Orders
              </p>
            </div>
            {/* <div
              onClick={() => setActiveSideMenu("paymentmethodsettings")}
              className={`sideNav-menuItems ${
                activeSideMenu === "paymentmethodsettings" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              <img
                className='h-[30px] w-[30px]'
                src={sideNavIcon7}
                alt='sideNavIcon7'
              />
              <p
                className={`font-[500] ${
                  activeSideMenu === "paymentmethodsettings" && "text-white"
                } text-[#1f1f1f]`}>
                Payment Method Settings
              </p>
            </div> */}
            <div
              onClick={() => setActiveSideMenu("users")}
              className={`sideNav-menuItems ${
                activeSideMenu === "users" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              {/* <img
                className="h-[30px] w-[30px]"
                src={sideNavIcon7}
                alt="sideNavIcon7"
              /> */}
              <BiSolidUserDetail className='text-[30px]' />
              <p
                className={`font-[500] ${
                  activeSideMenu === "users" && "text-white"
                } text-[#1f1f1f]`}>
                Users
              </p>
            </div>
            <div
              onClick={() => setActiveSideMenu("products")}
              className={`sideNav-menuItems ${
                activeSideMenu === "products" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              {/* <img
                className="h-[30px] w-[30px]"
                src={sideNavIcon7}
                alt="sideNavIcon7"
              /> */}
              <AiFillProfile className='text-[30px]' />
              <p
                className={`font-[500] ${
                  activeSideMenu === "products" && "text-white"
                } text-[#1f1f1f]`}>
                Products
              </p>
            </div>
            <div
              onClick={() => setActiveSideMenu("contactus")}
              className={`sideNav-menuItems ${
                activeSideMenu === "contactus" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              {/* <img
                className="h-[30px] w-[30px]"
                src={sideNavIcon7}
                alt="sideNavIcon7"
              /> */}
              <BiSupport className='text-[30px]' />
              <p
                className={`font-[500] ${
                  activeSideMenu === "contactus" && "text-white"
                } text-[#1f1f1f]`}>
                Contact Us
              </p>
            </div>
            <div
              onClick={() => setActiveSideMenu("blog")}
              className={`sideNav-menuItems ${
                activeSideMenu === "blog" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              {/* <img
                className="h-[30px] w-[30px]"
                src={sideNavIcon7}
                alt="sideNavIcon7"
              /> */}
              <FaBlog className='text-[30px]' />
              <p
                className={`font-[500] ${
                  activeSideMenu === "blog" && "text-white"
                } text-[#1f1f1f]`}>
                Blog
              </p>
            </div>
            <div
              onClick={() => setActiveSideMenu("banner")}
              className={`sideNav-menuItems ${
                activeSideMenu === "banner" && "bg-[#4273B9]"
              } flex cursor-pointer flex-row items-center gap-[1rem] rounded-[6px] p-[8px] hover:bg-[#4273B9]`}>
              {/* <img
                className="h-[30px] w-[30px]"
                src={sideNavIcon7}
                alt="sideNavIcon7"
              /> */}
              <PiFlagBannerBold className='text-[30px]' />
              <p
                className={`font-[500] ${
                  activeSideMenu === "banner" && "text-white"
                } text-[#1f1f1f]`}>
                Banner
              </p>
            </div>
          </div>
        </div>
        <div className='admin-section-lowerSection-mainPart w-[80%] overflow-y-auto'>
          {activeSideMenu === "dashboard" && <AdminHome />}
          {activeSideMenu === "orders" && <Orders />}
          {/* {activeSideMenu === "paymentmethodsettings" && (
            <PaymentMethodSettings />
          )} */}
          {activeSideMenu === "users" && <UsersPage />}
          {activeSideMenu === "products" && <Products />}
          {activeSideMenu === "contactus" && <ContactPage />}
          {activeSideMenu === "blog" && <Blog />}
          {activeSideMenu === "banner" && <Banner />}
        </div>
      </div>
    </div>
  );
}
