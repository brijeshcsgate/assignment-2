import React, { useState } from "react";
import AlertDialog from "../AlertDialogBox/AlertDialogBox";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

import { useForm } from "react-hook-form";

export default function BannerEditForm({ data }) {
  const { editBannersById, imageString } = useContext(ApiContext);

  console.log(data);

  // const banner = banners.filter((data) => {
  //   return data.BannerId === BannerId;
  // });

  const [bannerImage, setBannerImage] = useState();
  const [bannerTitle, setBannerTitle] = useState(data.BannerTitle);
  const [bannerLink, setBannerLink] = useState(data.BannerLink);

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("BannerImage", bannerImage[0]);
    formData.append("BannerTitle", bannerTitle);
    formData.append("BannerImage", bannerLink);
    console.log(formData);
    editBannersById(data.BannerId, formData);
  };
  return (
    <div className='flex flex-col gap-[1rem]'>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-[1rem]'>
        <div className='flex flex-col gap-[10px]'>
          <label>Banner Image</label>
          <input
            className='p-[1rem] border rounded-[4px]'
            type='file'
            {...register("file")}
            id='image'
            onChange={(e) => setBannerImage(e.target.files)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Banner Title</label>
          <input
            type='text'
            name='bannerTitle'
            value={bannerTitle}
            placeholder='Enter banner title'
            className='p-[1rem] border rounded-[4px]'
            {...register("bannerTitle")}
            onChange={(e) => setBannerTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Banner Link</label>
          <input
            type='text'
            name='bannerLink'
            value={bannerLink}
            placeholder='Enter banner link'
            className='p-[1rem] border rounded-[4px]'
            {...register("bannerLink")}
            onChange={(e) => setBannerLink(e.target.value)}
          />
        </div>
      </form>
      <button
        //   onClick={handleSubmit}
        className=''>
        <AlertDialog
          alertDialogTitle={"Submit"}
          alertDialogContent={`Are you sure want to these changes ?`}
          handleClick={handleSubmit(onSubmit)}
          ButtonName={"Submit"}
        />
      </button>
    </div>
  );
}
