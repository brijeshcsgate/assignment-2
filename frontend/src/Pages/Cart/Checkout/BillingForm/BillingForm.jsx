import React from "react";
import "./BillingForm.css";

import RegionDropdown from "./RegionDropdown";

export default function BillingForm({
  onSubmit,
  handleSubmit,
  handleEmailValidation,
  register,
  region,
  setRegion,
  errors,
}) {
  // const [region, setRegion] = React.useState("");

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className='billingForm-section flex flex-col gap-[1rem]'>
      <div className='billingForm-section-inputs-up'>
        <input
          {...register("userFirstName")}
          name='userFirstName'
          // className='billingForm-section-inputs-up-input'
          required
          className={`form-control ${
            errors.userFirstName
              ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
              : "billingForm-section-inputs-up-input"
          }`}
          type='text'
          placeholder='First Name'
        />
        <input
          {...register("userLastName")}
          name='userLastName'
          // className='billingForm-section-inputs-up-input'
          required
          className={`form-control ${
            errors.userLastName
              ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
              : "billingForm-section-inputs-up-input"
          }`}
          type='text'
          placeholder='Last Name'
        />
        <input
          {...register("userMobileNo")}
          name='userMobileNo'
          // className='billingForm-section-inputs-up-input'
          required
          className={`form-control ${
            errors.userMobileNo
              ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
              : "billingForm-section-inputs-up-input"
          }`}
          type='number'
          placeholder='Mobile Number'
        />
        <input
          // {...register("userEmail")}
          {...register("userEmail", {
            required: true,
            validate: handleEmailValidation,
          })}
          name='userEmail'
          // className='billingForm-section-inputs-up-input'
          required
          className={`form-control ${
            errors.userEmail
              ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
              : "billingForm-section-inputs-up-input"
          }`}
          type='email'
          placeholder='Email'
        />
      </div>

      <input
        {...register("userZipcode")}
        name='userZipcode'
        // className='billingForm-section-inputs-up-input'
        required
        className={`form-control ${
          errors.userZipcode
            ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
            : "billingForm-section-inputs-up-input"
        }`}
        type='number'
        placeholder='Zipcode'
      />

      <input
        {...register("userRegion")}
        name='userRegion'
        // className='billingForm-section-inputs-up-input'
        required
        className={`form-control ${
          errors.userRegion
            ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
            : "billingForm-section-inputs-up-input"
        }`}
        type='text'
        placeholder='Region'
      />

      {/* <RegionDropdown data={region} setData={setRegion} /> */}

      <div className='billingForm-section-inputs-up'>
        <textarea
          {...register("userAddress1")}
          name='userAddress1'
          rows={3}
          required
          // className='billingForm-section-inputs-up-input'
          className={`form-control ${
            errors.userAddress1
              ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
              : "billingForm-section-inputs-up-input"
          }`}
          type='text'
          placeholder='Address'
        />

        <textarea
          {...register("userAddress2")}
          name='userAddress2'
          rows={3}
          // className='billingForm-section-inputs-up-input'
          className={`form-control ${
            errors.userAddress2
              ? "is-invalid p-[1rem] w-full border-2 border-solid border-red-500 rounded-[4px] outline-none"
              : "billingForm-section-inputs-up-input"
          }`}
          type='text'
          placeholder='Landmark (Optional)'
        />
      </div>
    </form>
  );
}
