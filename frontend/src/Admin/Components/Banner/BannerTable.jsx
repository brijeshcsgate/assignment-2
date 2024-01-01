import React, { useState } from "react";

import SortableTable from "../../Components/Table/SortableTable";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import ScrollDialog from "../../Components/DraggableDialogBox/DraggableDialogBox";
import AlertDialog from "../../Components/AlertDialogBox/AlertDialogBox";
import BannerEditForm from "./BannerEditForm";

import bannerImage from "../../../Assets/Images/blog/img.jpg";

import PaginationComponent from "../PaginationComponent/PaginationComponent";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

export default function BannerTable() {
  const { banners, imageString, deleteBannersById } = useContext(ApiContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const [modalData, setModalData] = React.useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (BannerId) => {
    deleteBannersById(BannerId);
  };

  const sortingIcons = {
    ascending: <FaSortUp />,
    descending: <FaSortDown />,
    unsorted: <FaSort />,
  };

  // Array of data passed to table

  // const data = [
  //   {
  //     _id: 1,
  //     bannerImg: bannerImage,
  //     bannerTitle: "Banner 1",
  //     bannerLink: "ssvvjsf/ksbsdfj",
  //   },
  // ];

  const data = banners;

  const config = [
    {
      label: "SN",
      render: (data) => data.BannerId,
      sortValue: (data) => data.BannerId,
    },
    {
      label: "Banner Image",
      render: (data) => (
        <div className='flex flex-row justify-center'>
          <img
            className='w-[80px] h-[60px]'
            src={`${imageString}${data.BannerImage}`}
            alt={`${data.BannerTitle}-${data.BannerId}-img`}
          />
        </div>
      ),
      //   sortValue: (data) => <img src={data.bannerImg} />,
    },
    {
      label: "Banner Title",
      render: (data) => data.BannerTitle,
      sortValue: (data) => data.BannerTitle,
    },
    {
      label: "Banner Link",
      render: (data) => data.BannerLink,
      sortValue: (data) => data.BannerLink,
    },
    {
      label: "Action",
      render: (data) => (
        <div
          onClick={() => setModalData(data)}
          className='flex flex-row items-center justify-center'>
          {/* <Modal modalData={modalData} /> */}
          <ScrollDialog
            heading={"Edit Banner"}
            confirmBtn={"hidden"}
            name={"Edit"}
            content={
              <div>
                <BannerEditForm data={modalData} />
              </div>
            }
          />
          <AlertDialog
            alertDialogTitle={"Delete"}
            alertDialogContent={`Are you sure want to delete this banner ?`}
            handleClick={() => handleDelete(data.BannerId)}
            ButtonName={"Delete"}
          />
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
