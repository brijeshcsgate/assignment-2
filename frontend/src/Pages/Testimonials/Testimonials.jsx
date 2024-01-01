import React from "react";
import "./Testimonials.css";
import Page404 from "../Page404/Page404";

// import Link from "../../Component/Link";
// import { AiFillHome } from "react-icons/ai";

export default function Testimonials() {
  return (
    // <div className='testimonialsPageSection flex flex-col'>
    //   <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
    //     <Link to='/'>
    //       <AiFillHome className='cursor-pointer' />
    //     </Link>
    //     <p className='cursor-pointer'>Page Not Found</p>
    //   </div>

    //   <div className='testimonialsPageSection-main p-[2rem]'>
    //     <p className='text-[200px]'>404</p>
    //     <p className='text-[30px]'>OPPS! PAGE NOT BE FOUND</p>
    //     <p className="">Sorry But The Page You Are Looking For Does Not Exist, Have Been Removed, Name Changed Or Is Temporarity Unavailable.</p>
    //   </div>
    // </div>
    <Page404 />
  );
}
