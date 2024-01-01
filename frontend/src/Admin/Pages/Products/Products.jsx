import React from "react";
import "./Products.css";

import Dropdown from "./Dropdown/Dropdown";
import FormDropdown from "./Dropdown/FormDropdown";
import Checkbox from "./Checkbox";

import AlertDialog from "../../Components/AlertDialogBox/AlertDialogBox";
import ProductList from "./ProductList/ProductList";

// import { useEffect } from "react";
import { useContext } from "react";
import ApiContext from "../../../Context/api";

import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

export default function Products() {
  const { handleCreateProduct, products } = useContext(ApiContext);

  const [productAvailability, setProductAvailability] = React.useState("");
  const [productCurrency, setProductCurrency] = React.useState("");
  const [productCategory, setProductCategory] = React.useState("");

  const [productStatusNewProduct, setProductStatusNewProduct] =
    React.useState(false);
  const [productStatusBestSeller, setProductStatusBestSeller] =
    React.useState(false);
  const [productStatusSkinCareProduct, setProductStatusSkinCareProduct] =
    React.useState(false);

  // const [productBenefitsChange, setProductBenefitsChange] = React.useState();
  // const [productBenefits, setProductBenefits] = React.useState([]);

  // const [productBenefits1Change, setProductBenefits1Change] = React.useState();
  // const [productBenefits2Change, setProductBenefits2Change] = React.useState();
  // const [productBenefits3Change, setProductBenefits3Change] = React.useState();
  // const [productBenefits4Change, setProductBenefits4Change] = React.useState();
  // const [productBenefits5Change, setProductBenefits5Change] = React.useState();

  // const handleClickBenefits = (e) => {
  //   e.preventDefault();
  //   setProductBenefits([...productBenefits, productBenefitsChange]);
  // };

  // const renderedBenefits = productBenefits.map((data, index) => {
  //   return <p key={index}>{`${index + 1}) ${data}`}</p>;
  // });
  // const [benefitsIncrement, setBenefitsIncrement] = React.useState(0);
  // const [benefitsFieldValue, setbenefitsFieldValue] = React.useState(0);

  // const formSchema = Yup.object().shape({
  //   password: Yup.string()
  //     .required("Password is mandatory")
  //     .min(3, "Password must be at 3 char long"),
  //   confirmPassword: Yup.string()
  //     .required("Password is mandatory")
  //     .oneOf([Yup.ref("password")], "Passwords does not match"),
  //   name: Yup.string()
  //     .required("Name is required")
  //     .min(6, "Name must be at least 6 char long")
  //     .max(20, "Name must be at least 20 char long"),
  //   email: Yup.string()
  //     .email("Not a valid Email")
  //     .required("Email is required"),
  //   contact: Yup.string()
  //     .required("Contact is required")
  //     .min(10, "Contact must be at least 10 char long")
  //     .max(13, "Contact must be at least 10 char long"),
  //   city: Yup.string().required("City is required"),
  //   address: Yup.string().required("Address is required"),
  //   postalCode: Yup.string().required("Postal Code is required"),

  // });

  // const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  // const BenefitsField = (
  //   <textarea
  //     className='border p-[1rem] rounded-[4px] w-full'
  //     placeholder='Enter benefit text here'
  //     rows={1}
  //   />
  // );

  // console.log(benefitsArray);

  const [productMainImage, setProductMainImage] = React.useState([]);
  const [productImage1, setProductImage1] = React.useState([]);
  const [productImage2, setProductImage2] = React.useState([]);
  const [productImage3, setProductImage3] = React.useState([]);
  const [productImage4, setProductImage4] = React.useState([]);
  const [productImage5, setProductImage5] = React.useState([]);

  // const renderedImages = imagesArray.map((data, index) => {
  //   return <img key={index} src={data} alt={`img - ${index + 1}`} />;
  // });

  const AvailabilityStock = ["In Stock", "Out Of Stock", "Coming Soon"];
  // const Currency = ["AED", "₹", "$"];
  const Currency = ["AED"];
  const Category = [
    "Face Cleanser",
    "Moisturizer",
    "Scrub",
    "Body Butter",
    "Clay",
    "Lip Balm",
    "Oil",
    "Skincare Kit",
  ];

  const menuItems = [AvailabilityStock, Currency, Category];

  // const files = productMainImage ? [...productMainImage] : [];

  const onSubmit = (data) => {
    const formData = new FormData();

    // const images = [];
    // files.forEach((file, i) => {
    //   images.push(`productMainImage-${i}`, file, file.name);
    // });
    formData.append("productMainImage", productMainImage[0]);
    formData.append("productMainImage", productImage1[0]);
    formData.append("productMainImage", productImage2[0]);
    formData.append("productMainImage", productImage3[0]);
    formData.append("productMainImage", productImage4[0]);
    formData.append("productMainImage", productImage5[0]);
    formData.append(
      "productStatusSkinCareProduct",
      productStatusSkinCareProduct
    );
    formData.append("productStatusNewProduct", productStatusNewProduct);
    formData.append("productStatusBestSeller", productStatusBestSeller);
    // formData.append("productBenefits", productBenefits);
    formData.append("productBenefits1", data.productBenefits1);
    formData.append("productBenefits2", data.productBenefits2);
    formData.append("productBenefits3", data.productBenefits3);
    formData.append("productBenefits4", data.productBenefits4);
    formData.append("productBenefits5", data.productBenefits5);

    formData.append("productCategory", productCategory);
    formData.append("productCurrency", productCurrency);
    formData.append("productAvailability", productAvailability);
    // formData.append("productCurrency", productCurrency);
    formData.append("productTitle", data.productTitle);
    formData.append("productQuantity", data.productQuantity);
    formData.append("productPrice", data.productPrice);
    formData.append("productWeight", data.productWeight);
    formData.append("productShortDescription", data.productShortDescription);
    formData.append("productIngredients", data.productIngredients);
    formData.append("productHowToUse", data.productHowToUse);
    handleCreateProduct(formData);
    // console.log(productBenefits);
    // console.log(productMainImage);
    // handleCreateProduct({
    //   ...data,
    //   productAvailability,
    //   productCurrency,
    //   productCategory,
    //   productStatusNewProduct,
    //   productStatusBestSeller,
    //   productStatusSkinCareProduct,
    //   productMainImage,
    //   // productImage2,
    //   // productImage3,
    //   // productImage4,
    //   // productImage5,
    //   productBenefits,
    // });
    // console.log({
    //   ...data,
    //   productAvailability,
    //   productCurrency,
    //   productCategory,
    //   productStatusNewProduct,
    //   productStatusBestSeller,
    //   productStatusSkinCareProduct,
    //   productMainImage,
    //   // productImage2,
    //   // productImage3,
    //   // productImage4,
    //   // productImage5,
    //   productBenefits,
    // });
    // console.log(formData);
  };

  return (
    <div className='flex flex-col gap-[10px] p-[1rem]'>
      <p className='text-[20px] font-[500]'>Products</p>

      <div className='flex flex-col'>
        <Dropdown
          AddProductsContent={
            <div className='flex flex-col gap-[2rem]'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-[1rem]'>
                <div className='grid grid-cols-2 gap-[1rem]'>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Products Title</label>
                    <input
                      {...register("productTitle")}
                      type='text'
                      name='productTitle'
                      // className={`form-control ${
                      //   errors.productTitle
                      //     ? "border-solid border-red-500 border-[1px] p-[1rem] rounded-[4px]"
                      //     : "border p-[1rem] rounded-[4px]"
                      // }`}
                      className='border p-[1rem] rounded-[4px]'
                      placeholder='Enter Product Title'
                    />
                  </div>
                  {/* <div className='flex flex-col gap-[10px]'>
                    <label>Product Code</label>
                    <input
                      type='text'
                      name='productCode'
                      className='border p-[1rem] rounded-[4px]'
                      placeholder='Enter Product Code'
                    />
                  </div> */}
                  <div className='flex flex-col gap-[10px]'>
                    <label>Quantity</label>
                    <input
                      {...register("productQuantity")}
                      type='number'
                      name='productQuantity'
                      className='border p-[1rem] rounded-[4px]'
                      placeholder='Enter Quantity'
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Price</label>
                    <input
                      {...register("productPrice")}
                      type='number'
                      name='productPrice'
                      className='border p-[1rem] rounded-[4px]'
                      placeholder='Enter Price'
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Weight</label>
                    <input
                      {...register("productWeight")}
                      type='text'
                      name='productWeight'
                      className='border p-[1rem] rounded-[4px]'
                      placeholder='Enter Weight'
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Short Description</label>
                    <input
                      {...register("productShortDescription")}
                      type='text'
                      name='productShortDescription'
                      className='border p-[1rem] rounded-[4px]'
                      placeholder='Enter Short Description'
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Availability Stock</label>
                    <FormDropdown
                      menuItems={menuItems[0]}
                      data={productAvailability}
                      setData={setProductAvailability}
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Currency</label>
                    <FormDropdown
                      menuItems={menuItems[1]}
                      data={productCurrency}
                      setData={setProductCurrency}
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Category</label>
                    <FormDropdown
                      menuItems={menuItems[2]}
                      data={productCategory}
                      setData={setProductCategory}
                    />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <label>Choose your product status</label>
                    <div className='flex flex-row justify-between items-center'>
                      <Checkbox
                        setValue={setProductStatusNewProduct}
                        text={`New Product`}
                      />
                      <Checkbox
                        setValue={setProductStatusBestSeller}
                        text={`Best Seller`}
                      />
                      <Checkbox
                        setValue={setProductStatusSkinCareProduct}
                        text={`Skin Care Product`}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Ingredients</label>
                  <textarea
                    {...register("productIngredients")}
                    type='text'
                    name='productIngredients'
                    className='border p-[1rem] rounded-[4px]'
                    placeholder='Enter ingredients text here'
                    rows={3}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>How To Use</label>
                  <textarea
                    {...register("productHowToUse")}
                    type='text'
                    name='productHowToUse'
                    className='border p-[1rem] rounded-[4px]'
                    placeholder='Enter how to use text here'
                    rows={3}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Benefits</label>
                  {/* {benefitsArray} */}
                  {/* <textarea
                    onChange={(e) => setProductBenefitsChange(e.target.value)}
                    className='border p-[1rem] rounded-[4px] w-full'
                    placeholder='Enter benefit text here'
                    name='productBenefits'
                    rows={1}
                  />
                  <button
                    onClick={handleClickBenefits}
                    className='bg-black text-white rounded p-[10px]'>
                    Add Benefit
                  </button>
                  {renderedBenefits} */}
                  {/* {BenefitsField}
                  {BenefitsField}
                  {BenefitsField}
                  {BenefitsField}
                  {BenefitsField} */}
                  {/* <div className='flex flex-row gap-[1rem] items-center'>
                    <input
                      className='p-[1rem] border rounded-[4px] w-[300px]'
                      placeholder='Enter number of benefits field to add'
                      onChange={(e) => setBenefitsIncrement(e.target.value)}
                    />
                    {"X"}
                    <button
                      onClick={handleAddBenefitsField}
                      className='p-[10px] w-[100px] h-fit bg-black text-white'>
                      Add More
                    </button>
                  </div> */}
                  <textarea
                    // onChange={(e) => setProductBenefits1Change(e.target.value)}
                    className='border p-[1rem] rounded-[4px] w-full'
                    placeholder='Enter benefit text here'
                    name='productBenefits1'
                    {...register("productBenefits1")}
                    rows={1}
                  />
                  <textarea
                    // onChange={(e) => setProductBenefits2Change(e.target.value)}
                    className='border p-[1rem] rounded-[4px] w-full'
                    placeholder='Enter benefit text here'
                    name='productBenefits2'
                    {...register("productBenefits2")}
                    rows={1}
                  />
                  <textarea
                    // onChange={(e) => setProductBenefits3Change(e.target.value)}
                    className='border p-[1rem] rounded-[4px] w-full'
                    placeholder='Enter benefit text here'
                    name='productBenefits3'
                    {...register("productBenefits3")}
                    rows={1}
                  />
                  <textarea
                    // onChange={(e) => setProductBenefits4Change(e.target.value)}
                    className='border p-[1rem] rounded-[4px] w-full'
                    placeholder='Enter benefit text here'
                    name='productBenefits4'
                    {...register("productBenefits4")}
                    rows={1}
                  />
                  <textarea
                    // onChange={(e) => setProductBenefits5Change(e.target.value)}
                    className='border p-[1rem] rounded-[4px] w-full'
                    placeholder='Enter benefit text here'
                    name='productBenefits5'
                    {...register("productBenefits5")}
                    rows={1}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Main Image</label>
                  <input
                    type='file'
                    {...register("file1")}
                    onChange={(e) => setProductMainImage(e.target.files)}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Image 1</label>
                  <input
                    type='file'
                    {...register("file2")}
                    onChange={(e) => setProductImage1(e.target.files)}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Image 2</label>
                  <input
                    type='file'
                    {...register("file3")}
                    onChange={(e) => setProductImage2(e.target.files)}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Image 3</label>
                  <input
                    type='file'
                    {...register("file4")}
                    onChange={(e) => setProductImage3(e.target.files)}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Image 4</label>
                  <input
                    type='file'
                    {...register("file5")}
                    onChange={(e) => setProductImage4(e.target.files)}
                  />
                </div>
                <div className='flex flex-col gap-[10px]'>
                  <label>Image 5</label>
                  <input
                    type='file'
                    {...register("file6")}
                    onChange={(e) => setProductImage5(e.target.files)}
                  />
                </div>

                {/* <div className='flex flex-row gap-[10px]'>{renderedImages}</div> */}
              </form>

              <AlertDialog
                alertDialogTitle={"Submit"}
                alertDialogContent={`Are you sure want to these changes ?`}
                handleClick={handleSubmit(onSubmit)}
                ButtonName={"Submit"}
              />
            </div>
          }
          productList={<ProductList />}
        />
      </div>
    </div>
  );
}
