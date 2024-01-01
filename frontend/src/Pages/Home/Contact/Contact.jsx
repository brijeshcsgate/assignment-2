import React from "react";
import "./Contact.css";
import ContactForm from "../../ContactUs/ContactForm";

export default function Contact() {
  return (
    <div className='contact-section bg-brown flex flex-row w-full items-center'>
      <p className='contact-section-content text-white w-[50%] p-[2rem] text-justify'>
        Strengthen Your Relationships With Employees, Colleagues And Clients
        With Zaira Organic Skincare Corporate Gifting Concierge. From Affordable
        Gifting To Customized Gift Boxes, We're A One-Stop Solution For
        Corporate Gifting. Drop In A Query And We Will Help Deliver These
        Seamlessly.
      </p>

      <ContactForm />
    </div>
  );
}
