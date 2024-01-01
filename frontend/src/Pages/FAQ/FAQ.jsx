import React from "react";
import "./FAQ.css";

// import Link from "../../Component/Link";
// import { AiFillHome } from "react-icons/ai";
import Page404 from "../Page404/Page404";

export default function FAQ() {
  return (
    <div className='blogPage-Section'>
      {/* <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
        <Link to='/'>
          <AiFillHome className='cursor-pointer' />
        </Link>
        <p className='cursor-pointer'>FAQ</p>
      </div> */}

      <div className='blogPage-Section-main'>
        <Page404 />
      </div>
    </div>
  );
}
