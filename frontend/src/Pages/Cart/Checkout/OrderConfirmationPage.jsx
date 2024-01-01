import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderConfirmationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  });

  return (
    <div className='orderConfirmation p-[1rem]'>
      <p className='text-[30px] font-[400]'>Order confirmed</p>
      <div className='text-[20px] flex flex-row gap-[1rem]'>
        <p>Order Id</p>
        <p>12345678990</p>
      </div>
    </div>
  );
}
