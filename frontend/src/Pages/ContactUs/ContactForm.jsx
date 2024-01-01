import React from "react";
import "./ContactUs.css";

import LookingFor from "./Dropdowns/LookingFor";
import HearAboutUs from "./Dropdowns/HearAboutUs";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useContext } from "react";
import ApiContext from "../../Context/api";

export default function ContactForm() {
  const { handleCreateContact, fetchContacts } = useContext(ApiContext);
  const [contactWhatAreYouLookingFor, setContactWhatAreYouLookingFor] =
    React.useState("None");
  const [contactWhereDidYouHearAboutUs, setContactWhereDidYouHearAboutUs] =
    React.useState("None");

  const formSchema = Yup.object().shape({
    contactUserName: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 char long")
      .max(20, "Name must be at least 20 char long"),
    contactEmail: Yup.string()
      .email("Not a valid Email")
      .required("Email is required"),
    contactNumber: Yup.string()
      .required("Contact is required")
      .min(10, "Contact must be at least 10 char long")
      .max(13, "Contact must be at least 10 char long"),
    contactMessage: Yup.string().required("Message is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  //Email Validation
  const handleEmailValidation = (email) => {
    // console.log('ValidateEmail was called with', email);

    const isValid = isValidEmail(email);

    // const validityChanged =
    //   (errors.email && isValid) || (!errors.email && !isValid);
    // if (validityChanged) {
    //   console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid');
    // }

    return isValid;
  };

  function onSubmit(data) {
    // console.log(JSON.stringify(data, null, 8));

    handleCreateContact({
      ...data,
      contactWhatAreYouLookingFor,
      contactWhereDidYouHearAboutUs,
    });

    console.log({
      ...data,
      contactWhatAreYouLookingFor,
      contactWhereDidYouHearAboutUs,
    });
    reset({
      contactUserName: "",
      contactEmail: "",
      contactNumber: "",
      contactMessage: "",
    });
    setContactWhereDidYouHearAboutUs("None");
    setContactWhatAreYouLookingFor("None");
    fetchContacts();
    return false;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='contactus-section-form bg-[#f8f9fa] flex flex-col items-center gap-[10px] w-[50%] py-[2rem] px-[3rem]'>
      <div className='contactus-section-form-inputUpper flex flex-row gap-[10px] w-full'>
        <input
          {...register("contactUserName")}
          name='contactUserName'
          required
          type='text'
          className={`form-control ${
            errors.contactUserName
              ? "is-invalid w-[50%] p-[10px] border-[1px] border-solid border-red-600 rounded-[4px]"
              : "w-[50%] p-[10px] border-[1px] border-solid border-[#BFBFC0] rounded-[4px]"
          }`}
          placeholder='Name'
        />
        <input
          {...register("contactNumber")}
          name='contactNumber'
          required
          type='number'
          className={`form-control ${
            errors.contactNumber
              ? "is-invalid w-[50%] p-[10px] border-[1px] border-solid border-red-600 rounded-[4px]"
              : "w-[50%] p-[10px] border-[1px] border-solid border-[#BFBFC0] rounded-[4px]"
          }`}
          placeholder='Contact Number'
        />
      </div>
      <input
        {...register("contactEmail", {
          required: true,
          validate: handleEmailValidation,
        })}
        name='contactEmail'
        required
        type='email'
        placeholder='Email'
        className={`form-control ${
          errors.contactEmail
            ? "is-invalid w-full p-[10px] border-[1px] border-solid border-red-600 rounded-[4px]"
            : "w-full p-[10px] border-[1px] border-solid border-[#BFBFC0] rounded-[4px]"
        }`}
      />
      <div className='contactus-section-form-inputDropdowns flex flex-row gap-[10px] w-full'>
        <div className='flex flex-row w-[50%]'>
          <LookingFor
            data={contactWhatAreYouLookingFor}
            setData={setContactWhatAreYouLookingFor}
          />
        </div>
        <div className='flex flex-row w-[50%]'>
          <HearAboutUs
            data={contactWhereDidYouHearAboutUs}
            setData={setContactWhereDidYouHearAboutUs}
          />
        </div>
      </div>
      <textarea
        {...register("contactMessage")}
        name='contactMessage'
        required
        type='text'
        className={`form-control ${
          errors.contactMessage
            ? "is-invalid w-full p-[10px] border-[1px] border-solid border-red-600 rounded-[4px]"
            : "w-full p-[10px] border-[1px] border-solid border-[#BFBFC0] rounded-[4px]"
        }`}
        rows={"3"}
        placeholder='Message'
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className='bg-brown text-white p-[10px] rounded'>
        Submit
      </button>
    </form>
  );
}
