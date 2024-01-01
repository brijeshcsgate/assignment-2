import React, { useContext } from "react";
import "./ProductPage.css";
import ApiContext from "../../../Context/api";
import ImageMagnify from "./ImageMagnify/ImageMagnify";
import SnackBar from "../SnackBar/SnackBar";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { BiSolidCartDownload } from "react-icons/bi";

export default function ImageComp({ product, handleAddToBagClick }) {
  const { imageString } = useContext(ApiContext);
  const [selectImage, setSelectImage] = React.useState(
    `${imageString}${product.product.productMainImage[0]}`
  );

  return (
    <div className='productPageSection-main-images w-[40%] flex flex-row gap-[8px]'>
      <div className='productPageSection-main-images-left w-[20%] flex flex-col gap-[10px]'>
        {product.product.productMainImage.map((data, index) => {
          return (
            <img
              onClick={() => setSelectImage(`${imageString}${data}`)}
              className='productPageSection-main-imageSmall'
              src={`${imageString}${data}`}
              alt='img1'
              key={index}
            />
          );
        })}
        {/* <img
      onClick={() => setSelectImage(img1)}
      className='productPageSection-main-imageSmall'
      src={img1}
      alt='img1'
    />
    <img
      onClick={() => setSelectImage(img2)}
      className='productPageSection-main-imageSmall'
      src={img2}
      alt='img2'
    />
    <img
      onClick={() => setSelectImage(img3)}
      className='productPageSection-main-imageSmall'
      src={img3}
      alt='img3'
    /> */}
      </div>
      <div className='productPageSection-main-images-right w-[80%] flex flex-col gap-[1rem]'>
        {/* <img
  className='productPageSection-main-imageLarge border border-2 border-solid w-full h-[400px] rounded-[4px]'
  src={selectImage}
  alt={`${selectImage}-img`}
/> */}

        {/* Desktop Image */}
        <div className='productPageSection-main-images-right-Desktop'>
          <ImageMagnify src={selectImage} />
        </div>

        {/* Mobile Image */}
        <img
          className='productPageSection-main-images-right-Mobile w-full border-2 rounded-[4px]'
          src={selectImage}
          alt='Shop-Img'
        />

        {/* Desktop Button */}
        <div className='productPageSection-main-mainButtons flex flex-row gap-[1rem] w-full'>
          <SnackBar
            button={
              <button
                onClick={() => handleAddToBagClick(product)}
                className='border-black hover:bg-white hover:text-black border-solid border-2 transition duration-[0.5s] ease-in-out w-full flex flex-row gap-[10px] bg-black text-white p-[1rem] items-center justify-center rounded-[8px]'>
                <p>Add To Cart</p>
                <PiShoppingBagOpenFill className='text-[25px]' />
              </button>
            }
            message={`${product.product.productTitle} is added to cart!`}
          />

          <button className='border-[#137E2B] hover:border-[#137E2B] hover:text-[#137E2B] hover:bg-white transition duration-[0.5s] ease-in-out border-solid border-2 w-full flex flex-row gap-[10px] bg-[#137E2B] items-center text-white p-[1rem] justify-center rounded-[8px]'>
            <p>Buy Now</p>
            <BiSolidCartDownload className='text-[25px]' />
          </button>
        </div>
      </div>
    </div>
  );
}
