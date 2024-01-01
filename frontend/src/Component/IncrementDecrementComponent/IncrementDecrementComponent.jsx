import React from "react";
import "./IncrementDecrementComponent.css";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useState } from "react";

export default function IncrementDecrementComponent({ data, setData }) {
  const [value, setValue] = useState(data);

  const handleIncrement = () => {
    setValue(value + 1);
    setData(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue(value - 1);
      setData(value - 1);
    } else {
      setValue(value);
      setData(value);
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
