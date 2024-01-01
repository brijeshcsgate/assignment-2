import React from "react";
// import "./UserData.css";

// import Link from "../../../Component/Link";
// import { AiFillHome } from "react-icons/ai";

// import Modal from "../../../Component/Modal/Modal";

// import img from "../../../Assets/Images/blog/img.jpg";

export default function UserData({ data }) {
  return (
    <div className=''>
      <div className=' flex flex-col'>
        <div className=' flex flex-col gap-[1rem]'>
          <p className='text-[30px]'>User Profile Information</p>
          {/* <p className='text-[22px]'>User Registration</p> */}

          <div className='grid grid-cols-2 gap-[1rem]'>
            <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>User Name</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={data.name}
                disabled
              />
            </div>
            <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>User Email</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={data.email}
                disabled
              />
            </div>
            <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>User Contact</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={data.contact}
                disabled
              />
            </div>
            {/* <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>User Password</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={"Syed Fahad Junaid"}
                disabled
              />
            </div> */}
            <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>Gender</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={data.gender}
                disabled
              />
            </div>
            <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>City</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={data.city}
                disabled
              />
            </div>

            <div className='flex flex-col gap-[10px] '>
              <p className='font-[500]'>Postal Code</p>
              <input
                className='p-[1rem] border rounded-[4px]'
                value={data.postalCode}
                disabled
              />
            </div>
          </div>
          <div className='flex flex-col gap-[10px] '>
            <p className='font-[500]'>Address(Street No.)</p>
            <textarea
              className='p-[1rem] border rounded-[4px]'
              value={data.address}
              disabled
            />
          </div>
          <div className='flex flex-col gap-[10px] '>
            <p className='font-[500]'>Created On</p>
            <input
              className='p-[1rem] border rounded-[4px]'
              value={data.createdAt}
              disabled
            />
          </div>
          <div className='flex flex-col gap-[10px] '>
            <p className='font-[500]'>Last Updated On</p>
            <input
              className='p-[1rem] border rounded-[4px]'
              value={data.updatedAt}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}
