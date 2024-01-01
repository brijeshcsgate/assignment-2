import React from "react";
import "./AdminHome.css";

// import Card1 from '../../assets/AdminHomeCards/cardIcon1.png';
import Card2 from "../../assets/AdminHomeCards/cardIcon2.png";
import Card3 from "../../assets/AdminHomeCards/cardIcon3.png";

import OrderTable from "../../Components/OrderTable/OrderTable";

import { useContext } from "react";
import ApiContext from "../../../Context/api";
import UsersTable from "../../Components/UsersTable/UsersTable";
import ProductList from "../Products/ProductList/ProductList";
import ContactTable from "../../Components/ContactTable/ContactTable";
import BlogTable from "../../Components/Blog/BlogListTable";
import BannerTable from "../../Components/Banner/BannerTable";

export default function AdminHome() {
  const { orders } = useContext(ApiContext);

  // const renderedPaymentData = orders.map((data) => {
  //   return data.orderTotalCost;
  // })

  // console.log(renderedPaymentData);

  const sum = orders.reduce((accumulator, object) => {
    return accumulator + object.orderTotalCost;
  }, 0);

  // console.log(sum);

  const cardData = [
    // {
    //   img: Card1,
    //   title: 'Total Customer',
    //   value: '200',
    //   bgcolor: 'bg-[#5FC6CB]',
    // },
    {
      img: Card2,
      title: "Total Orders",
      value: orders.length,
      bgcolor: "bg-[#4273B9]",
    },
    {
      img: Card3,
      title: "Total Earning",
      value: sum,
      bgcolor: "bg-[#40C783]",
    },
  ];

  const renderedCardData = cardData.map((data, index) => {
    return (
      <div
        key={`${data.title}-${index}`}
        className={`admin-homeSection-card flex flex-row items-center gap-[10px] rounded-[6px] p-[1rem] ${data.bgcolor}`}>
        <div className='flex flex-col items-center gap-[10px]'>
          <img className='w-[80px]' src={data.img} alt={`${data.title}-img`} />
          <p className='font-[500] text-white'>{data.title}</p>
        </div>
        <h1 className='text-[30px] font-[500] text-white'>{data.value}</h1>
      </div>
    );
  });

  return (
    <div className='adminhome-section flex flex-col gap-[1rem] p-[1rem]'>
      <div className='admin-homeSection-cards'>{renderedCardData}</div>
      <div className='flex flex-col gap-[10px]'>
        <div className=''>
          <p className='text-[20px] font-[500]'>Orders</p>
        </div>
        <OrderTable />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <div className=''>
          <p className='text-[20px] font-[500]'>Users</p>
        </div>
        <UsersTable />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <div className=''>
          <p className='text-[20px] font-[500]'>Products</p>
        </div>
        <ProductList />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <div className=''>
          <p className='text-[20px] font-[500]'>Contact Us</p>
        </div>
        <ContactTable />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <div className=''>
          <p className='text-[20px] font-[500]'>Blog</p>
        </div>
        <BlogTable />
      </div>

      <div className='flex flex-col gap-[10px]'>
        <div className=''>
          <p className='text-[20px] font-[500]'>Banner</p>
        </div>
        <BannerTable />
      </div>
    </div>
  );
}
