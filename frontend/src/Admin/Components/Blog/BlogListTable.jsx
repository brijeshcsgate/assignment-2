// import Table from '../Table/Table';
import React from "react";
import SortableTable from "../Table/SortableTable";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import PaginationComponent from "../PaginationComponent/PaginationComponent";

// import { useContext } from "react";
// import ApiContext from "../../../Context/api";

// import Dropdown from '../DropdownOrderStatus/DropdownOrderStatus';

import Modal from "../Modal/Modal";

// import {AiFillDelete} from 'react-icons/ai';

import { useContext } from "react";
import ApiContext from "../../../Context/api";

import DialogBox from "../DialogBox/DialogBox";

export default function BlogListTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const [modalBlogData, setModalBlogData] = React.useState([]);

  const { blogs, deleteBlogsById, imageString } = useContext(ApiContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteBlogData = (blogId) => {
    deleteBlogsById(blogId);
  };

  // const {
  //   contactUsData,
  //   modalContactDataId,
  //   setModalContactDataId,
  //   deleteContactDataById,
  // } = useContext(ApiContext);

  // console.log(modalContactDataId);

  // const [modalDataId, setModalDataId] = useState([]);

  // const [statusData, setStatusData] = useState(10);

  // console.log(orders);

  // console.log(typeof orders);
  // Sorting icons
  const sortingIcons = {
    ascending: <FaSortUp />,
    descending: <FaSortDown />,
    unsorted: <FaSort />,
  };

  //   Array of data passed to table
  //   const data = [
  //     {
  //       id: 1,
  //       customerName: 'Jon Snow',
  //       orderId: '#6312635',
  //       date: '19/12',
  //       quantity: 1,
  //       payment: 'Paid',
  //     },
  //   ];
  // const data = [
  //   {
  //     _id: 1,
  //     blogImg: "Jon Snow",
  //     blogTitle: "shvgdhgfv@jhbvjdhf.com",
  //   },
  // ];

  const data = blogs;

  // console.log(data[data.length - 1].blogImage);

  // const handleDeleteContactData = () => {
  //   deleteContactDataById(modalContactDataId.ContactUsId);
  // };

  // const data = contactUsData;
  //   const data = orders;

  const modalData = (
    <div className='flex flex-col gap-[10px]'>
      <p className='text-[14px] font-[500]'>Introduction</p>
      <p className='text-[10px]'>{modalBlogData.blogIntroduction}</p>
      <p className='text-[14px] font-[500]'>Text</p>
      <p className='text-[10px]'>{modalBlogData.blogText}</p>
      <p className='text-[14px] font-[500]'>Conclusion</p>
      <p className='text-[10px]'>{modalBlogData.blogConclusion}</p>
    </div>
  );

  // Array of config passed to table and sortingTable (means headers functionality)
  const config = [
    {
      label: "SN",
      render: (data) => data.BlogId,
      sortValue: (data) => data.BlogId,
    },
    {
      label: "Blog Image",
      render: (data) => (
        <img
          className='w-[80px] h-[60px]'
          src={`${imageString}${data.blogImage}`}
          alt='img'
        />
      ),
      // sortValue: (data) => data.blogImg,
    },
    {
      label: "Blog Title",
      render: (data) => data.blogTitle,
      sortValue: (data) => data.blogTitle,
    },
    {
      label: "Date",
      render: (data) => data.BlogDate,
      sortValue: (data) => data.BlogDate,
    },
    {
      label: "Message",
      render: (data) => (
        <div
          onClick={() => setModalBlogData(data)}
          className='flex cursor-pointer flex-row items-center justify-center'>
          <Modal modalData={modalData} />
        </div>
      ),
    },
    {
      label: "Delete",
      render: (data) => (
        <div
          // onClick={() => setModalContactDataId(data)}
          className='flex cursor-pointer flex-row items-center justify-center'>
          <DialogBox handleDelete={() => handleDeleteBlogData(data.BlogId)} />
        </div>
      ),
    },
  ];

  // console.log(modalContactDataId._id);

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
