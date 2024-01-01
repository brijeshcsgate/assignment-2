import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';

import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

import FooterLower from './FooterLower/FooterLower';

export default function Footer() {
  return (
    <div className="footersection">
      <div className="footerSection-upper bg-brown text-grey gap-[2rem] p-[2rem] border-b">
        <div className="footerSection-aboutus flex flex-col gap-[1rem]">
          <p className="footerSection-heading border-b-[2px] border-solid border-b-white py-[1rem] text-[22px]">
            About Us
          </p>
          <p className="footerSection-aboutus-content text-justify">
            Like Every Small Business Faniac, I Had Always Wished & Dreamt To
            Start My Own Skincare Line. With An Overall 7 Years Of Experience In
            Working With Various Beauty Brands Across The Region & Having A
            Deeper Connection With Skin Issues, Concerns It Only Made Sense To
            Have Brand That Catered To Those Niches
          </p>
          <div className="footerSection-socialLinks flex flex-row gap-[1rem]">
            <div className="footerSection-socialLink hover:bg-white hover:text-[#2d2d2d] rounded-full border p-[10px] cursor-pointer">
              <BsInstagram />
            </div>
            <div className="footerSection-socialLink hover:bg-white hover:text-[#2d2d2d] rounded-full border p-[10px] cursor-pointer">
              <BsFacebook />
            </div>
            <div className="footerSection-socialLink hover:bg-white hover:text-[#2d2d2d] rounded-full border p-[10px] cursor-pointer">
              <BsTwitter />
            </div>
          </div>
        </div>
        <div className="footerSection-myaccount">
          <p className="footerSection-heading border-b-[2px] border-solid border-b-white py-[1rem] text-[22px]">
            My Account
          </p>
          <div className="footerSection-links flex flex-col">
            <Link to="/">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Home
              </button>
            </Link>
            <Link to="/Register">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Register Account
              </button>
            </Link>
            <Link to="/Shop">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Shop Now
              </button>
            </Link>
            <Link to="/PrivacyPolicy">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Privacy Policy
              </button>
            </Link>
            <Link to="/TermsAndConditions">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Terms And Conditions
              </button>
            </Link>
          </div>
        </div>
        <div className="footerSection-customerservice">
          <p className="footerSection-heading border-b-[2px] border-solid border-b-white py-[1rem] text-[22px]">
            Customer Service
          </p>
          <div className="footerSection-links flex flex-col">
            <Link to="/Blog">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Blog
              </button>
            </Link>
            <Link to="/ContactUs">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                Contact Us
              </button>
            </Link>
            <Link to="/FAQ">
              <button className="footerSection-link hover:opacity-30 hover:text-black hover:pl-[1rem] hover:bg-white border-b py-[1rem] w-full text-start">
                FAQ
              </button>
            </Link>
          </div>
        </div>
        <div className="footerSection-contactus flex flex-col gap-[1rem]">
          <p className="footerSection-heading border-b-[2px] border-solid border-b-white py-[1rem] text-[22px]">
            Contact Us
          </p>
          <div className="footerSection-contactusLinks flex flex-row gap-[10px] items-center">
            <div className="footerSection-contactusLinks-icon rounded-full p-[1rem] border w-fit h-fit">
              <MdLocationOn className="text-[30px]" />
            </div>
            <p>Address: Dubai – Al WarqaAl Warqa, United Arab Emirates</p>
          </div>

          <div className="footerSection-contactusLinks flex flex-row gap-[10px] items-center">
            <div className="footerSection-contactusLinks-icon rounded-full p-[1rem] border w-fit h-fit">
              <FaPhoneAlt className="text-[30px]" />
            </div>
            <p>+971585221518</p>
          </div>

          <div className="footerSection-contactusLinks flex flex-row gap-[10px] items-center">
            <div className="footerSection-contactusLinks-icon rounded-full p-[1rem] border w-fit h-fit">
              <GrMail className="text-[30px]" />
            </div>
            <p>Admin@Zairaorganic.Com</p>
          </div>
        </div>
      </div>
      <FooterLower />
    </div>
  );
}
