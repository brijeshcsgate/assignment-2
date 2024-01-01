import React from "react";
import "./Header.css";

import UpperNavbar from "./UpperNavbar/UpperNavbar";
import LowerNavbar from "./LowerNavbar/LowerNavbar";

export default function Header() {
  return (
    <div className='header-section flex flex-col'>
      <UpperNavbar />
      <div className='pt-[3.4rem]'>
        <LowerNavbar />
      </div>
    </div>
  );
}
