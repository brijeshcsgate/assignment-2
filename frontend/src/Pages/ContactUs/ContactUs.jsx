import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import ContactForm from './ContactForm';

export default function ContactUs() {
  return (
    <div className="contactus-section flex flex-col gap-[1rem]">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-default">Contact Us</p>
      </div>

      <div className="contactus-section-main flex flex-col gap-[2rem] p-[2rem]">
        <div className="contactus-section-mainContent bg-brown flex flex-row w-full items-center">
          <p className="text-white w-[50%] p-[2rem] text-justify">
            Welcome To Zaira Organic Skincare's Contact Us Page! We're Thrilled
            To Be Your Go-To Destination For Premium, Organic Skincare Products
            In The UAE. Whether You Have Questions, Feedback, Or Want To Explore
            Corporate Gifting Options, Our Dedicated Team Is Here To Assist You.
            Contact Us Today And Experience The Beauty Of Organic Skincare.
          </p>

          <ContactForm />
        </div>

        <div className="contactus-section-text text-justify flex flex-col gap-[1rem]">
          <p>Dear Valued Customer,</p>
          <p>
            Welcome To Zaira Organic Skincare, Your Destination For Premium
            Skincare Products In The United Arab Emirates. We Are Delighted To
            Have You Visit Our Contact Us Page.
          </p>
          <p>
            At Zaira Organic Skincare, We Are Passionate About Providing You
            With The Finest Organic Skincare Solutions That Nourish And Enhance
            Your Natural Beauty. We Understand The Importance Of Self-Care And
            The Desire For Products That Are Not Only Effective But Also
            Sustainable And Environmentally Friendly.
          </p>
          <p>
            Whether You Have A Query, Feedback, Or Are Interested In Our
            Corporate Gifting Services, We Are Here To Assist You Every Step Of
            The Way. Our Dedicated Team Is Committed To Delivering Exceptional
            Customer Service And Ensuring Your Experience With Zaira Organic
            Skincare Is Nothing Short Of Extraordinary.
          </p>
          <p>
            Thank You For Choosing Us As Your Skincare Partner. We Look Forward
            To Hearing From You And Helping You Discover The Power Of Organic
            Skincare!
          </p>
        </div>
      </div>
    </div>
  );
}
