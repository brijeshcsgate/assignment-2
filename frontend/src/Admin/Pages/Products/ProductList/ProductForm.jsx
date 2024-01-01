import React, { useState } from "react";
import FormDropdown from "../Dropdown/FormDropdown";
// import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox";
import AlertDialog from "../../../Components/AlertDialogBox/AlertDialogBox";

import { useForm } from "react-hook-form";

import { useContext } from "react";
import ApiContext from "../../../../Context/api";

export default function ProductForm({ productData }) {
  // const [stock, setStock] = React.useState("");
  // const [currency, setCurrency] = React.useState("");
  // const [category, setCategory] = React.useState("");

  const { editProductsById } = useContext(ApiContext);

  const { register, handleSubmit, reset, formState } = useForm();

  const [productTitle, setProductTitle] = useState(productData.productTitle);

  const [productQuantity, setProductQuantity] = useState(
    productData.productQuantity
  );

  const [productPrice, setProductPrice] = useState(productData.productPrice);

  const [productWeight, setProductWeight] = useState(productData.productWeight);

  const [productShortDescription, setProductShortDescription] = useState(
    productData.productShortDescription
  );

  const [productAvailability, setProductAvailability] = useState(
    productData.productAvailability
  );

  const [productCurrency, setProductCurrency] = useState(
    productData.productCurrency
  );

  const [productCategory, setProductCategory] = useState(
    productData.productCategory
  );

  const [productStatusNewProduct, setProductStatusNewProduct] = React.useState(
    productData.productStatusNewProduct
  );
  const [productStatusBestSeller, setProductStatusBestSeller] = React.useState(
    productData.productStatusBestSeller
  );
  const [productStatusSkinCareProduct, setProductStatusSkinCareProduct] =
    React.useState(productData.productStatusSkinCareProduct);

  const [productIngredients, setProductIngredients] = useState(
    productData.productIngredients
  );

  const [productHowToUse, setProductHowToUse] = useState(
    productData.productHowToUse
  );

  const [productBenefits1, setProductBenefits1] = React.useState(
    productData.productBenefits1
  );
  const [productBenefits2, setProductBenefits2] = React.useState(
    productData.productBenefits2
  );
  const [productBenefits3, setProductBenefits3] = React.useState(
    productData.productBenefits3
  );
  const [productBenefits4, setProductBenefits4] = React.useState(
    productData.productBenefits4
  );
  const [productBenefits5, setProductBenefits5] = React.useState(
    productData.productBenefits5
  );

  const [productMainImage, setProductMainImage] = React.useState();
  const [productImage1, setProductImage1] = React.useState();
  const [productImage2, setProductImage2] = React.useState();
  const [productImage3, setProductImage3] = React.useState();
  const [productImage4, setProductImage4] = React.useState();
  const [productImage5, setProductImage5] = React.useState();

  const AvailabilityStock = ["In Stock", "Out Of Stock", "Coming Soon"];
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

  // const BenefitsField = (
  //   <textarea
  //     className='border p-[1rem] rounded-[4px] w-full'
  //     placeholder='Enter benefit text here'
  //     rows={1}
  //   />
  // );

  const onSubmit = () => {
    // console.log("Submit");

    // const editProductData = {
    //   productTitle: productTitle,
    //   productQuantity: productQuantity,
    //   productPrice: productPrice,
    //   productWeight: productWeight,
    //   productShortDescription: productShortDescription,
    //   productAvailability: productAvailability,
    //   productCurrency: productCurrency,
    //   productStatusNewProduct: productStatusNewProduct,
    //   productStatusBestSeller: productStatusBestSeller,
    //   productStatusSkinCareProduct: productStatusSkinCareProduct,
    //   productIngredients: productIngredients,
    //   productHowToUse: productHowToUse,
    //   productBenefits1: productBenefits1,
    //   productBenefits2: productBenefits2,
    //   productBenefits3: productBenefits3,
    //   productBenefits4: productBenefits4,
    //   productBenefits5: productBenefits5,
    // };

    const formData = new FormData();

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
    formData.append("productCategory", productCategory);
    formData.append("productCurrency", productCurrency);
    formData.append("productAvailability", productAvailability);

    formData.append("productBenefits1", productBenefits1);
    formData.append("productBenefits2", productBenefits2);
    formData.append("productBenefits3", productBenefits3);
    formData.append("productBenefits4", productBenefits4);
    formData.append("productBenefits5", productBenefits5);

    formData.append("productCategory", productCategory);
    formData.append("productCurrency", productCurrency);
    formData.append("productAvailability", productAvailability);

    formData.append("productTitle", productTitle);
    formData.append("productQuantity", productQuantity);
    formData.append("productPrice", productPrice);
    formData.append("productWeight", productWeight);
    formData.append("productShortDescription", productShortDescription);
    formData.append("productIngredients", productIngredients);
    formData.append("productHowToUse", productHowToUse);

    editProductsById(formData);
  };
  return (
    <div className='flex flex-col gap-[1rem]'>
      <form className='flex flex-col gap-[1rem]'>
        {/* <div className='grid grid-cols-2 gap-[1rem]'> */}
        <div className='flex flex-col gap-[10px]'>
          <label>Products Title</label>
          <input
            type='text'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter Product Title'
            name='productTitle'
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
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
            type='number'
            name='productQuantity'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter Quantity'
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Price</label>
          <input
            type='number'
            name='productPrice'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter Price'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Weight</label>
          <input
            type='text'
            name='productWeight'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter Weight'
            value={productWeight}
            onChange={(e) => setProductWeight(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Short Description</label>
          <input
            type='text'
            name='productShortDescription'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter Short Description'
            value={productShortDescription}
            onChange={(e) => setProductShortDescription(e.target.value)}
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
        {/* </div> */}
        <div className='flex flex-col gap-[10px]'>
          <label>Ingredients</label>
          <textarea
            type='text'
            name='productIngredients'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter ingredients text here'
            rows={3}
            value={productIngredients}
            onChange={(e) => setProductIngredients(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>How To Use</label>
          <textarea
            type='text'
            name='productHowToUse'
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter how to use text here'
            rows={3}
            value={productHowToUse}
            onChange={(e) => setProductHowToUse(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Benefits</label>
          {/* {benefitsArray} */}
          {/* <textarea
            className='border p-[1rem] rounded-[4px] w-full'
            placeholder='Enter benefit text here'
            rows={1}
          />
          <button className='bg-black text-white rounded p-[10px]'>
            Add Benefit
          </button> */}
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
            rows={3}
            value={productBenefits1}
            onChange={(e) => setProductBenefits1(e.target.value)}
          />
          <textarea
            // onChange={(e) => setProductBenefits2Change(e.target.value)}
            className='border p-[1rem] rounded-[4px] w-full'
            placeholder='Enter benefit text here'
            name='productBenefits2'
            {...register("productBenefits2")}
            rows={3}
            value={productBenefits2}
            onChange={(e) => setProductBenefits2(e.target.value)}
          />
          <textarea
            // onChange={(e) => setProductBenefits3Change(e.target.value)}
            className='border p-[1rem] rounded-[4px] w-full'
            placeholder='Enter benefit text here'
            name='productBenefits3'
            {...register("productBenefits3")}
            rows={3}
            value={productBenefits3}
            onChange={(e) => setProductBenefits3(e.target.value)}
          />
          <textarea
            // onChange={(e) => setProductBenefits4Change(e.target.value)}
            className='border p-[1rem] rounded-[4px] w-full'
            placeholder='Enter benefit text here'
            name='productBenefits4'
            {...register("productBenefits4")}
            rows={3}
            value={productBenefits4}
            onChange={(e) => setProductBenefits4(e.target.value)}
          />
          <textarea
            // onChange={(e) => setProductBenefits5Change(e.target.value)}
            className='border p-[1rem] rounded-[4px] w-full'
            placeholder='Enter benefit text here'
            name='productBenefits5'
            {...register("productBenefits5")}
            rows={3}
            value={productBenefits5}
            onChange={(e) => setProductBenefits5(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Main Image</label>
          <input
            type='file'
            {...register("file")}
            onChange={(e) => setProductMainImage(e.target.files)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Image 1</label>
          <input
            type='file'
            onChange={(e) => setProductImage1(e.target.files)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Image 2</label>
          <input
            type='file'
            onChange={(e) => setProductImage2(e.target.files)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Image 3</label>
          <input
            type='file'
            onChange={(e) => setProductImage3(e.target.files)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Image 4</label>
          <input
            type='file'
            onChange={(e) => setProductImage4(e.target.files)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Image 5</label>
          <input
            type='file'
            onChange={(e) => setProductImage5(e.target.files)}
          />
        </div>

        {/* <div className='flex flex-row gap-[10px]'>{renderedImages}</div> */}
      </form>

      <button
        // onClick={handleSubmit}
        className=''>
        <AlertDialog
          alertDialogTitle={"Submit"}
          alertDialogContent={`Are you sure want to these changes ?`}
          handleClick={handleSubmit(onSubmit)}
          ButtonName={"Submit"}
        />
      </button>
    </div>
  );
}
