import React from "react";

import { useContext } from "react";
import ApiContext from "../../../../Context/api";

export default function ProductData({ data }) {
  const { imageString } = useContext(ApiContext);
  return (
    <div className='flex flex-col gap-[1rem]'>
      <p className='text-[30px]'>Product Information</p>

      <div className='grid grid-cols-2 gap-[1rem]'>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Category</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productCategory}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Product Title</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productTitle}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Product Code</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productCode}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Quantity</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productQuantity}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Avalability Stock</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productAvailability}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Price</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productPrice}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Currency</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productCurrency}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>New Product</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productStatusNewProduct}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Best Seller</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productStatusBestSeller}
            disabled
          />
        </div>
        <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Status</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.productStatusSkinCareProduct}
            disabled
          />
        </div>
        {/* <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Short Description</p>
          <textarea
            className='p-[1rem] border rounded-[4px]'
            value={data.productShortDescription}
            disabled
          />
        </div> */}
        {/* <div className='flex flex-col gap-[10px] '>
          <p className='font-[500]'>Date Added</p>
          <input
            className='p-[1rem] border rounded-[4px]'
            value={data.createdAt}
            disabled
          />
        </div> */}
      </div>
      <div className='flex flex-col gap-[10px] '>
        <p className='font-[500]'>Short Description</p>
        <textarea
          className='p-[1rem] border rounded-[4px]'
          value={data.productShortDescription}
          disabled
        />
      </div>
      <div className='flex flex-col gap-[10px] '>
        <p className='font-[500]'>Images</p>
        {/* <input
          className='p-[1rem] border rounded-[4px]'
          value={"Syed Fahad Junaid"}
          disabled
        /> */}
        <div className='flex flex-row'>
          {data.productMainImage.map((data, index) => {
            return (
              <img
                className='w-[70px] h-[60px]'
                key={index}
                src={`${imageString}${data}`}
                alt={`img-${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
