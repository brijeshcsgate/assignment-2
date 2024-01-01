import React from 'react';
import './Register.css';

import { AiFillHome } from 'react-icons/ai';
import { BsPenFill } from 'react-icons/bs';
import { PiArrowLineRight } from 'react-icons/pi';

import GenderDropdown from './GenderDropdown';

// simport { useState } from "react";
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useContext } from 'react';
import ApiContext from '../../../Context/api';

import SnackBar from './RegisterSnackBar';

export default function Register() {
  const [gender, setGender] = React.useState('');

  // API
  const { handleCreateUser, users, userError } = useContext(ApiContext);

  const [emailExistMessage, setEmailExistMessage] = React.useState('');

  const [email, setEmail] = React.useState();

  // console.log(users);

  // let uniqueData = '';

  const uniqueData = users.find((user) => {
    if (user.email === email) {
      return user.email;
    } else {
      return user;
    }
  });

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPassword: Yup.string()
      .required('Password is mandatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
    name: Yup.string()
      .required('Name is required')
      .min(6, 'Name must be at least 6 char long')
      .max(20, 'Name must be at least 20 char long'),
    email: Yup.string()
      .email('Not a valid Email')
      .required('Email is required'),
    contact: Yup.string()
      .required('Contact is required')
      .min(10, 'Contact must be at least 10 char long')
      .max(13, 'Contact must be at least 10 char long'),
    city: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    postalCode: Yup.string().required('Postal Code is required'),
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

    handleCreateUser({ ...data, gender });
    // console.log({ ...data, gender });
    if (!userError) {
      reset({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        contact: '',
        city: '',
        address: '',
        postalCode: '',
      });
      setGender('');
      setEmailExistMessage('Account Successfully Created');
      return false;
    }

    // console.log(uniqueData.email);
    // if (uniqueData.email === data.email) {
    //   // console.log(true);
    //   setEmailExistMessage("Email Already Exist");
    // } else {
    //   // console.log(false);

    //   handleCreateUser({ ...data, gender });
    //   // console.log({ ...data, gender });
    //   if (userError) {
    //     reset({
    //       name: "",
    //       password: "",
    //       confirmPassword: "",
    //       email: "",
    //       contact: "",
    //       city: "",
    //       address: "",
    //       postalCode: "",
    //     });
    //     setGender("");
    //     setEmailExistMessage("Account Successfully Created");
    //     return false;
    //   }
    // }
  }

  return (
    <div className="registerSection flex flex-col">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-default">Register</p>
      </div>

      <div className="registerSection-btns flex flex-row gap-[1rem] justify-center py-[3rem]">
        <Link to="/Login">
          <div className="registerSection-btn flex flex-row gap-[1rem] border-2 border-solid border-black p-[1rem] cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
            <p>Login</p>
            <PiArrowLineRight className="text-[22px]" />
          </div>
        </Link>
        <div className="registerSection-btn flex flex-row gap-[1rem] bg-black text-white border-2 border-solid border-black p-[1rem] cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
          <p>Register</p>
          <BsPenFill className="text-[22px]" />
        </div>
      </div>

      <div className="registerSection-formcontent flex flex-col items-center gap-[1rem]">
        <h3 className="text-[30px] font-[500]">User Registration</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="registerSection-form flex flex-col gap-[1rem] w-[50%] p-[2rem]"
        >
          <div className="flex flex-col gap-[10px]">
            <label>Name</label>
            <input
              {...register('name')}
              name="name"
              required
              type="text"
              className={`form-control ${
                errors.name
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your name"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.name?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Email</label>
            <input
              {...register('email', {
                required: true,
                validate: handleEmailValidation,
              })}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className={`form-control ${
                errors.email
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your email"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.email?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Contact</label>
            <input
              {...register('contact')}
              name="contact"
              required
              type="number"
              className={`form-control ${
                errors.contact
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your contact"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.contact?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Password</label>
            <input
              name="password"
              // type="password"
              {...register('password')}
              type="password"
              required
              className={`form-control ${
                errors.password
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your password"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.password?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              // type="password"
              {...register('confirmPassword')}
              type="password"
              required
              className={`form-control ${
                errors.confirmPassword
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your password"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.confirmPassword?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Gender</label>
            <GenderDropdown data={gender} setData={setGender} />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>City</label>
            <input
              name="city"
              // type="password"
              {...register('city')}
              type="text"
              required
              className={`form-control ${
                errors.city
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your city"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.city?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Postal Code</label>
            <input
              name="postalCode"
              // type="password"
              {...register('postalCode')}
              required
              type="number"
              className={`form-control ${
                errors.postalCode
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your postal code"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.postalCode?.message}
          </div>

          <div className="flex flex-col gap-[10px]">
            <label>Address (Street No.)</label>
            <textarea
              rows={3}
              name="address"
              // type="password"
              {...register('address')}
              required
              type="text"
              className={`form-control ${
                errors.address
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              placeholder="Enter your address"
            />
          </div>
          <div className="invalid-feedback text-red-600">
            {errors.address?.message}
          </div>

          {/* {emailExistMessage !== "" && (
            <p className='text-red-400'>{emailExistMessage}</p>
          )} */}
          {userError && <p className="text-red-600">Email Already Exist.</p>}

          {/* <SnackBar
            // Message={
            //   emailExistMessage === 'Email Already Exist'
            //     ? 'Email Already Exist'
            //     : 'Account Successfully Created'
            // }
            Button={
              <button
                onClick={handleSubmit(onSubmit)}
                className="bg-black p-[1rem] text-white "
              >
                Register
              </button>
            }
            Severity={emailExistMessage}
          /> */}

          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-black p-[1rem] text-white "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
