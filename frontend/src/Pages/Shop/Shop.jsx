import React, { useContext } from "react";
import "./Shop.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import FilterDropdown from "./FilterDropdown";
import Products from "../Products/Products";

import bannerImg from "../../Assets/Images/shoppagebanner.png";

import CheckboxComp from "../../Component/CheckboxComp/CheckboxComp";

import MobileCategoryDropdown from "./MobileCategoryDropdown";
import ApiContext from "../../Context/api";
// import NavigationContext from '../../Context/navigation';

// import Link from "../../LinkComponent/Link";

// import { useNavigate } from "react-router-dom";

export default function Shop({ productsData }) {
  const { products } = useContext(ApiContext);

  // const navigate = useNavigate();

  // const { currentPath } = useContext(NavigationContext);

  // const [faceCleanser, setFaceCleanser] = React.useState(false);
  // const [moisturizer, setMoisturizer] = React.useState(false);
  // const [scrub, setScrub] = React.useState(false);
  // const [bodyButter, setBodyButter] = React.useState(false);
  // const [clay, setClay] = React.useState(false);
  // const [lipBalm, setLipBalm] = React.useState(false);
  // const [oil, setOil] = React.useState(false);
  // const [skincareKit, setSkincareKit] = React.useState(false);

  const [sideBarCategorySelectionPath, setSideBarCategorySelectionPath] =
    React.useState("");

  if (sideBarCategorySelectionPath === "All Categories") {
    productsData = products;
  } else if (sideBarCategorySelectionPath === "Face Cleanser") {
    productsData = products.filter((data) => {
      return data.productCategory === "Face Cleanser";
    });
  } else if (sideBarCategorySelectionPath === "Moisturizer") {
    productsData = products.filter((data) => {
      return data.productCategory === "Moisturizer";
    });
  } else if (sideBarCategorySelectionPath === "Scrub") {
    productsData = products.filter((data) => {
      return data.productCategory === "Scrub";
    });
  } else if (sideBarCategorySelectionPath === "Body Butter") {
    productsData = products.filter((data) => {
      return data.productCategory === "Body Butter";
    });
  } else if (sideBarCategorySelectionPath === "Clay") {
    productsData = products.filter((data) => {
      return data.productCategory === "Clay";
    });
  } else if (sideBarCategorySelectionPath === "Lip Balm") {
    productsData = products.filter((data) => {
      return data.productCategory === "Lip Balm";
    });
  } else if (sideBarCategorySelectionPath === "Oil") {
    productsData = products.filter((data) => {
      return data.productCategory === "Oil";
    });
  } else if (sideBarCategorySelectionPath === "Skincare Kit") {
    productsData = products.filter((data) => {
      return data.productCategory === "Skincare Kit";
    });
  }

  // console.log(sideBarCategorySelectionPath);

  // const categoryData = [
  //   {faceCleanser},
  //   {moisturizer},
  //   {scrub},
  //   bodyButter,
  //   clay,
  //   lipBalm,
  //   oil,
  //   skincareKit,
  // ];

  // const categoryMap = categoryData.map((data) => {
  //   return
  // });
  // let pathLocation = "/Shop";
  // if (sideBarCategorySelectionPath === "All Categories") {
  //   pathLocation = "/Shop";
  // } else if (sideBarCategorySelectionPath === "Face Cleanser") {
  //   pathLocation = "/Shop/FaceCleanser";
  // } else if (sideBarCategorySelectionPath === "Moisturizer") {
  //   pathLocation = "/Shop/Moisturizer";
  // } else if (sideBarCategorySelectionPath === "Scrub") {
  //   pathLocation = "/Shop/Scrub";
  // } else if (sideBarCategorySelectionPath === "Body Butter") {
  //   pathLocation = "/Shop/BodyButter";
  // } else if (sideBarCategorySelectionPath === "Clay") {
  //   pathLocation = "/Shop/Clay";
  // } else if (sideBarCategorySelectionPath === "Lip Balm") {
  //   pathLocation = "/Shop/LipBalm";
  // } else if (sideBarCategorySelectionPath === "Oil") {
  //   pathLocation = "/Shop/Oil";
  // } else if (sideBarCategorySelectionPath === "Skincare Kit") {
  //   // pathLocation = "/Shop/FaceCleanser";
  //   pathLocation = "/Shop/SkincareKit";
  // }

  const names = [
    "All Categories",
    "Face Cleanser",
    "Moisturizer",
    "Scrub",
    "Body Butter",
    "Clay",
    "Lip Balm",
    "Oil",
    "Skincare Kit",
  ];

  const [sortByValue, setSortByValue] = React.useState("");
  return (
    <div className='shopSection flex flex-col'>
      <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
        <Link to='/'>
          <AiFillHome className='cursor-pointer' />
        </Link>
        <p className='cursor-default'>Shop</p>
      </div>

      <img className='shopSection-bannerImg' src={bannerImg} alt='bannerImg' />
      <div className='shopSection-main p-[2rem] flex flex-row gap-[1rem] w-full'>
        <div className='shopSection-main-filter w-[20%] border p-[1rem] flex flex-col gap-[1rem]'>
          <p className='text-[20px] font-[500]'>Category</p>
          <div className='shopSection-main-filterCategories flex flex-col'>
            <div className='shopSection-main-filterCategory flex flex-row gap-[1rem] items-center'>
              <div className='flex flex-col gap-[1rem]'>
                <Link to={"/Shop"}>
                  <p className='cursor-pointer'>All Categories</p>
                </Link>
                <Link to={"/Shop/FaceCleanser"}>
                  <p>Face Cleanser</p>
                </Link>
                <Link to={"/Shop/Moisturizer"}>
                  <p>Moisturizer</p>
                </Link>
                <Link to={"/Shop/Scrub"}>
                  <p>Scrub</p>
                </Link>
                <Link to={"/Shop/BodyButter"}>
                  <p>Body Butter</p>
                </Link>
                <Link to={"/Shop/Clay"}>
                  <p>Clay</p>
                </Link>
                <Link to={"/Shop/LipBalm"}>
                  <p>Lip Balm</p>
                </Link>
                <Link to={"/Shop/Oil"}>
                  <p>Oil</p>
                </Link>
                <Link to={"/Shop/SkincareKit"}>
                  <p>Skincare Kit</p>
                </Link>
              </div>
              {/* <CheckboxComp
                pathLocation={pathLocation}
                setSideBarCategorySelectionPath={
                  setSideBarCategorySelectionPath
                }
              /> */}

              {/* <p>Face Cleanser</p> */}
            </div>

            {/* <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setMoisturizer} />
              <p>Moisturizer</p>
            </div>

            <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setScrub} />
              <p>Scrub</p>
            </div>
            <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setBodyButter} />
              <p>Body Butter</p>
            </div>
            <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setClay} />
              <p>Clay</p>
            </div>
            <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setLipBalm} />
              <p>Lip Balm</p>
            </div>
            <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setOil} />
              <p>Oil</p>
            </div>
            <div className="shopSection-main-filterCategory flex flex-row gap-[1rem] items-center">
              <CheckboxComp selectCategory={setSkincareKit} />
              <p>Skincare Kit</p>
            </div> */}
          </div>
        </div>
        <div className='shopSection-main-products w-[80%] flex flex-col gap-[1rem]'>
          <div className='shopSection-main-products-filter flex flex-row gap-[1rem] items-center justify-end'>
            <div className='shopSection-main-products-filter-mobile flex flex-col gap-[10px] w-full'>
              <p>Category</p>
              <MobileCategoryDropdown
                names={names}
                setSideBarCategorySelectionPath={
                  setSideBarCategorySelectionPath
                }
              />
            </div>
            <div className='flex flex-col gap-[10px] w-full'>
              <p>Sort By</p>
              <FilterDropdown data={sortByValue} setData={setSortByValue} />
            </div>
          </div>

          <div className='shopSection-main-products-product'>
            <Products sortByValue={sortByValue} productsData={productsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
