// import Table from '../Table/Table';
import React from "react";
import SortableTable from "../Table/SortableTable";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

// import { useContext } from "react";
// import ApiContext from "../../../Context/api";

// import Dropdown from '../DropdownOrderStatus/DropdownOrderStatus';

import Modal from "../Modal/Modal";

// import {AiFillDelete} from 'react-icons/ai';

import DialogBox from "../DialogBox/DialogBox";
import PaginationComponent from "../PaginationComponent/PaginationComponent";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

export default function ContactTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const [modalDataId, setModalDataId] = React.useState([]);

  const { contacts, deleteContactsById, fetchContacts } =
    useContext(ApiContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
  //     contactName: "Jon Snow",
  //     contactEmail: "shvgdhgfv@jhbvjdhf.com",
  //     contactPhone: "48546438765",
  //     whatAreYouLookingFor: "svfdjsvf",
  //     whereDidYouHearAboutUs: "sjdfvfsdhvh",
  //     contactMessage: "ibfjysbdfjsbdfdfdfdfdsf",
  //   },
  //   {
  //     _id: 2,
  //     contactName: "Arya Stark",
  //     contactEmail: "shvgdhgfv@jhbvjdhf.com",
  //     contactPhone: "48546438765",
  //     whatAreYouLookingFor: "svfdjsvf",
  //     whereDidYouHearAboutUs: "sjdfvfsdhvh",
  //     contactMessage: "fghfgh",
  //   },
  // ];

  const data = contacts;
  const handleDeleteContactData = () => {
    deleteContactsById(modalDataId.contactId);
    fetchContacts();
  };

  // const data = contactUsData;
  //   const data = orders;

  const modalData = (
    <div className='flex flex-col gap-[10px]'>
      <div className='flex flex-col gap-[6px]'>
        <p>{`What this user looking for : ${modalDataId.contactWhatAreYouLookingFor}`}</p>
        <p>{`Where this heard about us : ${modalDataId.contactWhereDidYouHearAboutUs}`}</p>
      </div>
      <p className='text-[16px] font-[500]'>Message:</p>
      <p>{modalDataId.contactMessage}</p>
    </div>
  );

  // Array of config passed to table and sortingTable (means headers functionality)
  const config = [
    // {
    //   label: "SN",
    //   render: (data) => (
    //     <div className='w-[80px] text-justify break-all'>{data._id}</div>
    //   ),
    //   sortValue: (data) => (
    //     <div className='w-[80px] text-justify break-all'>{data._id}</div>
    //   ),
    // },
    {
      label: "SN",
      render: (data) => (
        <div className='w-[80px] text-justify break-all'>{data.contactId}</div>
      ),
      sortValue: (data) => (
        <div className='w-[80px] text-justify break-all'>{data.contactId}</div>
      ),
    },
    {
      label: "Contact Name",
      render: (data) => data.contactUserName,
      sortValue: (data) => data.contactUserName,
    },
    {
      label: "Contact Email",
      render: (data) => (
        <div className='w-[80px] text-justify break-all'>
          {data.contactEmail}
        </div>
      ),
      sortValue: (data) => (
        <div className='w-[80px] text-justify break-all'>
          {data.contactEmail}
        </div>
      ),
    },
    {
      label: "Contact Phone",
      render: (data) => data.contactNumber,
      sortValue: (data) => data.contactNumber,
    },
    // {
    //   label: "Looking For",
    //   render: (data) => (
    //     <div className='w-[80px] text-justify break-all'>
    //       {data.contactWhatAreYouLookingFor}
    //     </div>
    //   ),
    //   sortValue: (data) => (
    //     <div className='w-[80px] text-justify break-all'>
    //       {data.contactWhatAreYouLookingFor}
    //     </div>
    //   ),
    // },
    {
      label: "Date",
      render: (data) => data.createdAt,
      sortValue: (data) => data.createdAt,
    },
    {
      label: "Message",
      render: (data) => (
        <div
          onClick={() => setModalDataId(data)}
          className='flex cursor-pointer flex-row items-center justify-center'>
          <Modal modalData={modalData} />
        </div>
      ),
    },
    {
      label: "Delete",
      render: (data) => (
        <div
          onClick={() => setModalDataId(data)}
          className='flex cursor-pointer flex-row items-center justify-center'>
          <DialogBox handleDelete={handleDeleteContactData} />
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
