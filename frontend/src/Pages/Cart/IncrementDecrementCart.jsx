import React from "react";
// import "./IncrementDecrementComponent.css";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useState } from "react";

import { useContext } from "react";
import ApiContext from "../../Context/api";

export default function IncrementDecrementComponent({
  quantityValue,
  productData,
  // data,
  // setData,
}) {
  const { editCartProductsById } = useContext(ApiContext);
  const [value, setValue] = useState(quantityValue);

  //   console.log(quantityValue, data[cartId].productCartQuantity);

  const handleIncrement = () => {
    setValue(value + 1);
    editCartProductsById(productData._id, {
      ProductId: productData.ProductId,
      product_imageId: productData.product_imageId,
      productName: productData.productName,
      quantity: value + 1,
      productPrice: productData.productPrice,
    });
    console.log({
      ProductId: productData.ProductId,
      product_imageId: productData.product_imageId,
      productName: productData.productName,
      quantity: value + 1,
      productPrice: productData.productPrice,
    });
    // setData(value + 1);
    // const newArray = data.filter((d) => if (d.productCartId === cartId) );
    // console.log(newArray);
    // const newArray = data;

    // console.log(data);
    // setData(data);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);

      editCartProductsById(productData._id, {
        ProductId: productData.ProductId,
        product_imageId: productData.product_imageId,
        productName: productData.productName,
        quantity: value - 1,
        productPrice: productData.productPrice,
      });
      // setData(value - 1);
    } else {
      setValue(value);
      editCartProductsById(productData._id, {
        ProductId: productData.ProductId,
        product_imageId: productData.product_imageId,
        productName: productData.productName,
        quantity: value,
        productPrice: productData.productPrice,
      });
      // setData(value);
    }
  };

  return (
    <div className='flex flex-row gap-[1.5rem] items-center border rounded-[4px] w-fit p-[8px]'>
      <HiMinus
        onClick={handleDecrement}
        className={
          value === 1
            ? "cursor-pointer text-gray-300"
            : "cursor-pointer text-[#1f1f1f]"
        }
      />
      <div className='flex w-[2rem] flex-row justify-center'>
        <p className='cursor-default'>{value}</p>
      </div>

      <HiPlus
        onClick={handleIncrement}
        className='cursor-pointer text-[#1f1f1f]'
      />
    </div>
  );
}
