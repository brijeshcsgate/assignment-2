// import Table from '../Table/Table';
import React from "react";
import SortableTable from "../Table/SortableTable";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import "./OrderTable.css";

import PaginationComponent from "../PaginationComponent/PaginationComponent";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

import Dropdown from "../DropdownOrderStatus/DropdownOrderStatus";

// import PaginationComponent from '../PaginationComponent/PaginationComponent';

// import { BsFillEyeFill } from 'react-icons/bs';

import Modal from "../Modal/Modal";

function OrderPage() {
  // const [modalDataId, setModalDataId] = useState([]);

  const { orders } = useContext(ApiContext);

  console.log(orders);

  const [statusData, setStatusData] = React.useState("None");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // console.log(orders);

  // console.log(typeof orders);
  // Sorting icons
  const sortingIcons = {
    ascending: <FaSortUp />,
    descending: <FaSortDown />,
    unsorted: <FaSort />,
  };

  // Array of data passed to table
  // const data = [
  //   {
  //     id: 1,
  //     customerName: 'Jon Snow',
  //     orderId: '#6312635',
  //     date: '19/12',
  //     quantity: 1,
  //     payment: 'Paid',
  //   },
  // ];
  const data = [
    {
      _id: 1,
      customerName: "Jon Snow",
      orderId: "#6312635",
      date: "19/12",
      quantity: 1,
      orderCost: "Paid",
    },
    {
      _id: 2,
      customerName: "Jon Snow",
      orderId: "#6312635",
      date: "19/12",
      quantity: 1,
      orderCost: "Paid",
    },
  ];
  // const data = orders;

  const modalData = (
    <div className='flex flex-col'>
      <div className='flex w-full flex-row items-center justify-between border-b p-[1rem]'>
        <h3>{`Order No. : ${data.orderId}`}</h3>

        <Dropdown
          orderId={data.orderId}
          data={statusData}
          setData={setStatusData}
        />
      </div>

      <div className='flex w-full flex-row border-b px-[1rem] py-[2rem]'>
        <div className='flex w-[50%] flex-col gap-[10px]'>
          <h4 className='text-[#4273B9]'>Customer Info</h4>
          <div className='flex flex-col gap-[6px]'>
            <p>{`Name: ${data.userName}`}</p>
            <p>{`Email: ${data.userEmail}`}</p>
            <p>{`Phone: ${data.userMobileNo}`}</p>
          </div>
        </div>

        <div className='flex w-[50%] flex-col gap-[10px]'>
          <h4 className='text-[#4273B9]'>Shipping Address</h4>
          <div className='flex flex-col gap-[6px]'>
            <p>{`${data.userHouseNumber}`}</p>
            <p>{`${data.userStreetAddress}`}</p>
            <p>{`${data.userCity}, ${data.userState}`}</p>
            <p>{`Pincode : ${data.userZipcode}`}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-row p-[1rem]'>
        <div className='flex w-[50%] flex-col gap-[1rem] border p-[10px]'>
          <h3 className='font-[500]'>Price</h3>
          <div className='flex flex-col gap-[10px] border-b'>
            <div className='flex flex-row justify-between'>
              <p>Sub Total</p>
              <p>{data.orderTotalCost}</p>
            </div>
            <div className='flex flex-row justify-between'>
              <p>Shipping</p>
              <p>Free</p>
            </div>
          </div>
          <div className='flex flex-row justify-between py-[2rem]'>
            <p>Total</p>
            <p className='text-[#4273B9]'>{data.orderTotalCost}</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Array of config passed to table and sortingTable (means headers functionality)
  const config = [
    {
      label: "SN",
      render: (data) => data._id,
      sortValue: (data) => data._id,
    },
    {
      label: "Customer Name",
      render: (data) => data.customerName,
      sortValue: (data) => data.customerName,
    },
    {
      label: "Order ID",
      render: (data) => data.orderId,
      sortValue: (data) => data.orderId,
    },
    {
      label: "Date",
      render: (data) => data.date,
      sortValue: (data) => data.date,
    },
    {
      label: "Quantity",
      render: (data) => data.quantity,
      sortValue: (data) => data.quantity,
    },
    {
      label: "Amount",
      render: (data) => data.orderCost,
      sortValue: (data) => data.orderCost,
    },
    {
      label: "Action",
      render: (data) => (
        <div
          // onClick={() => setModalDataId(data)}
          className='flex flex-row items-center justify-center'>
          <Modal modalData={modalData} />
        </div>
      ),
    },
  ];

  const keyFn = (data) => {
    return data._id;
  };

  // console.log(modalId);

  // Below is returning table with sort and don't sort functionality
  return (
    <div>
      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
        sortingIcons={sortingIcons}
        // setModalId={setModalId}
      />
      <PaginationComponent
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        data={data}
      />
    </div>
  );
}

export default OrderPage;
