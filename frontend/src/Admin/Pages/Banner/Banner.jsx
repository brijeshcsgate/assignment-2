import React from "react";
import "./Banner.css";

import DropdownBanner from "./DropdownBanner/DropdownBanner";
import BannerForm from "../../Components/Banner/BannerForm";
import BannerTable from "../../Components/Banner/BannerTable";

export default function Banner() {
  return (
    <div className='flex flex-col gap-[10px] p-[1rem]'>
      <p className='text-[20px] font-[500]'>Banner</p>
      <DropdownBanner
        AddBanner={<BannerForm />}
        BannerTable={<BannerTable />}
      />
    </div>
  );
}
