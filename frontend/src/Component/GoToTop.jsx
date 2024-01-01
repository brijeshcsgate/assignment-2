import React from "react";
// import TapImg from '../assets/top.png';
import { IoIosArrowDropup } from "react-icons/io";

export default function GoToTop() {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className='gototop fixed bottom-[10px] right-[10px] w-fit z-[10]'>
      <IoIosArrowDropup
        onClick={handleClick}
        className='h-[40px] w-[40px] text-black cursor-pointer hover:text-[#2D2D2D]'
      />
    </div>
  );
}
