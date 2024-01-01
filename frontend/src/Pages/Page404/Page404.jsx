import React from 'react';
import './Page404.css';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

export default function Page404() {
  return (
    <div className="page404Section flex flex-col">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-pointer">Page Not Found</p>
      </div>

      <div className="page404Section-main p-[2rem] flex flex-col gap-[1rem]">
        <p className="text-[200px]">404</p>
        <p className="text-[30px]">OPPS! PAGE NOT BE FOUND</p>
        <p className="">
          Sorry But The Page You Are Looking For Does Not Exist, Have Been
          Removed, Name Changed Or Is Temporarity Unavailable.
        </p>
        <Link to="/">
          <button className="text-white border-black border-2 border-solid bg-black transition duration-[0.5s] ease-in-out rounded-[4px] hover:bg-white hover:text-black py-[1rem] px-[2rem]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
