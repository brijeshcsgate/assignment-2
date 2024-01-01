import React, { useState } from "react";

import SortableTable from "../../../Components/Table/SortableTable";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import ScrollDialog from "../../../Components/DraggableDialogBox/DraggableDialogBox";
import AlertDialog from "../../../Components/AlertDialogBox/AlertDialogBox";
import ProductData from "./ProductData";
import ProductForm from "./ProductForm";

import PaginationComponent from "../../../Components/PaginationComponent/PaginationComponent";

import { useContext } from "react";
import ApiContext from "../../../../Context/api";

export default function ProductList() {
  const { products, deleteProductsById } = useContext(ApiContext);

  const [productData, setProductData] = useState();

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

  // Array of data passed to table

  // const data = [
  //   {
  //     _id: 1,
  //     category: "Jon Snow",
  //     title: "#6312635",
  //     productCode: "19/12",
  //     quantity: "682542",
  //     avalabilityStock: "vjsv",
  //   },
  // ];

  const handleDeleteProductData = (productData) => {
    console.log(productData.productCode);
    deleteProductsById(productData.productCode);
  };

  const data = products;

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
      label: "Product Category",
      render: (data) => data.productCategory,
      sortValue: (data) => data.productCategory,
    },
    {
      label: "Product Title",
      render: (data) => data.productTitle,
      sortValue: (data) => data.productTitle,
    },
    {
      label: "Product Code",
      render: (data) => data.productCode,
      sortValue: (data) => data.productCode,
    },
    {
      label: "Quantity",
      render: (data) => data.productQuantity,
      sortValue: (data) => data.productQuantity,
    },
    {
      label: "View",
      render: (data) => (
        <div
          //   onClick={() => setModalDataId(data)}
          className='flex flex-row items-center justify-center'>
          {/* <Modal modalData={modalData} /> */}
          <ScrollDialog
            heading={"View Product"}
            name={"View"}
            confirmBtn={"hidden"}
            content={
              <div>
                <ProductData data={data} />
              </div>
            }
          />
        </div>
      ),
    },
    {
      label: "Action",
      render: (data) => (
        <div
          onClick={() => setProductData(data)}
          className='flex flex-row items-center justify-center'>
          {/* <Modal modalData={modalData} /> */}
          <ScrollDialog
            heading={"Edit Product"}
            confirmBtn={"hidden"}
            name={"Edit"}
            content={
              <div>
                <ProductForm productData={productData} />
              </div>
            }
          />
          <AlertDialog
            alertDialogTitle={"Delete"}
            alertDialogContent={`Are you sure want to delete this user ?`}
            handleClick={() => handleDeleteProductData(data)}
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
