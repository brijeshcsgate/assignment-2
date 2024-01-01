import React from "react";
import "./UsersTable.css";

import SortableTable from "../Table/SortableTable";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import ScrollDialog from "../DraggableDialogBox/DraggableDialogBox";
import AlertDialog from "../AlertDialogBox/AlertDialogBox";

import UserData from "./UserData/UserData";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

import PaginationComponent from "../PaginationComponent/PaginationComponent";

export default function UsersTable() {
  const { users, userId, setUserId, deleteUserById } = useContext(ApiContext);

  const handleDelete = () => {
    deleteUserById(userId);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortingIcons = {
    ascending: <FaSortUp />,
    descending: <FaSortDown />,
    unsorted: <FaSort />,
  };

  // console.log(users);

  // Array of data passed to table

  // const data = [
  //   {
  //     _id: 1,
  //     userName: "Jon Snow",
  //     userEmail: "#6312635",
  //     userContact: "19/12",
  //     date: "682542",
  //   },
  // ];

  // console.log(users);

  const data = [...users];
  const config = [
    {
      label: "SN",
      render: (data) => (
        <div className='w-[80px] text-justify break-all'>{data._id}</div>
      ),
      sortValue: (data) => (
        <div className='w-[80px] text-justify break-all'>{data._id}</div>
      ),
    },
    {
      label: "User Name",
      render: (data) => data.name,
      sortValue: (data) => data.name,
    },
    {
      label: "User Email",
      render: (data) => data.email,
      sortValue: (data) => data.email,
    },
    {
      label: "User Contact",
      render: (data) => data.contact,
      sortValue: (data) => data.contact,
    },
    // {
    //   label: "Date joined",
    //   render: (data) => data.createdAt,
    //   sortValue: (data) => data.createdAt,
    // },
    {
      label: "Orders",
      render: (data) => (
        <div
          //   onClick={() => setModalDataId(data)}
          className='flex flex-row items-center justify-center'>
          {/* <Modal modalData={modalData} /> */}
          <ScrollDialog
            heading={"View Orders"}
            confirmBtn={"hidden"}
            name='View Orders'
            content={<div>Hello</div>}
          />
        </div>
      ),
    },
    {
      label: "Action",
      render: (data) => (
        <div
          //   onClick={() => setModalDataId(data)}
          className='flex flex-row items-center justify-center'>
          {/* <Modal modalData={modalData} /> */}
          <ScrollDialog
            heading={"View Information"}
            name={"View Profile"}
            confirmBtn={"hidden"}
            content={
              <div>
                <UserData data={data} />
              </div>
            }
          />
          <div onClick={() => setUserId(data._id)}>
            <AlertDialog
              alertDialogTitle={"Delete"}
              alertDialogContent={`Are you sure want to delete this user ?`}
              handleClick={handleDelete}
              ButtonName={"Delete"}
            />
          </div>
        </div>
      ),
    },
  ];

  const keyFn = (data) => {
    return data._id;
  };

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
