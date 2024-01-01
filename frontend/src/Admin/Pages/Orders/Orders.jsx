import React from "react";
import "./Orders.css";
import OrderTable from "../../Components/OrderTable/OrderTable";
import DropdownOrders from "./Dropdown/DropdownOrders";

export default function Orders() {
  return (
    <div className='flex flex-col gap-[10px] p-[1rem]'>
      <p className='text-[20px] font-[500]'>Orders</p>

      <DropdownOrders UserOrderDetails={<OrderTable />} />
    </div>
  );
}
