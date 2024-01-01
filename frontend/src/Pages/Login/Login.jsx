import React, { useContext, useEffect, useState } from 'react';
import './Login.css';

import { AiFillHome } from 'react-icons/ai';
import { BsPenFill } from 'react-icons/bs';
import { PiArrowLineRight } from 'react-icons/pi';

// import { useState } from "react";
import { Link } from 'react-router-dom';
import ApiContext from '../../Context/api';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function Login() {
  // const [activeBtn, setActiveBtn] = useState("Login");

  const {
    loginError,
    setLoginError,
    loginResponse,
    setLoginResponse,
    users,
    cart,
    cartData,
    setCartData,
  } = useContext(ApiContext);

  // console.log(loginResponse);
  const navigate = useNavigate();

  const [userLoginEmail, setUserLoginEmail] = useState();
  const [userLoginPassword, setUserLoginPassword] = useState();

  // const [loginError, setLoginError] = useState(false);

  const handleUserLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/signin', {
        email: email,
        password: password,
      });

      const userData = users.find((data) => {
        return JSON.parse(response.config.data).email === data.email;
      });
      setLoginResponse(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('email', JSON.parse(response.config.data).email);
      const singleCartData = cart.find((data) => {
        return JSON.parse(response.config.data).email === data.customer_email;
      });

      // if (singleCartData === undefined || singleCartData === null) {
      //   setCartData([]);
      // } else {
      //   setCartData(singleCartData);
      // }

      localStorage.setItem('cartData', JSON.stringify(singleCartData));
    } catch (err) {
      setLoginError(true);
    }
  };

  // console.log(localStorage.getItem('email'));
  // console.log(localStorage.getItem('cartData'));
  // console.log(localStorage.getItem('user'));

  // console.log(loginResponse);

  // useEffect(() => {
  //   handleUserLogin();
  // }, []);

  // console.log(loginResponse);

  // const { users } = useContext(ApiContext);

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mandatory')
      .min(3, 'Password must be at 3 char long'),
    email: Yup.string()
      .email('Not a valid Email')
      .required('Email is required'),
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

  let error;

  const handleClickLogin = (data) => {
    // User Login

    handleUserLogin(data.email, data.password);
    if (loginError) {
      error = 'Invalid Credentials';
    } else {
      reset({
        password: '',
        email: '',
      });
      navigate('/');
      return false;
    }
  };

  // console.log(data);

  return (
    <div className="loginSection flex flex-col">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-default">Login</p>
      </div>

      <div className="loginSection-btns flex flex-row gap-[1rem] justify-center py-[3rem]">
        <div className="loginSection-btn flex flex-row gap-[1rem] bg-black text-white border-2 border-solid border-black p-[1rem] cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
          <p>Login</p>
          <PiArrowLineRight className="text-[22px]" />
        </div>
        <Link to="/Register">
          <div className="loginSection-btn flex flex-row gap-[1rem] border-2 border-solid border-black p-[1rem] cursor-pointer rounded-[10px] hover:bg-black hover:text-white">
            <p>Register</p>
            <BsPenFill className="text-[22px]" />
          </div>
        </Link>
      </div>

      <div className="loginSection-formcontent flex flex-col items-center gap-[1rem]">
        <h3 className="text-[30px] font-[500]">User Login</h3>
        <form
          onSubmit={handleSubmit(handleClickLogin)}
          className="loginSection-form flex flex-col gap-[1rem] w-[50%] p-[2rem]"
        >
          <div className="flex flex-col gap-[10px]">
            <label>Email</label>
            <input
              {...register('email', {
                required: true,
                validate: handleEmailValidation,
              })}
              name="email"
              type="email"
              className={`form-control ${
                errors.email
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              // className='p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              placeholder="Enter your registered email"
              onChange={(e) => setUserLoginEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label>Password</label>
            <input
              {...register('password')}
              type="password"
              required
              className={`form-control ${
                errors.password
                  ? 'is-invalid p-[1rem] border-2 border-solid border-red-500 rounded-[4px]'
                  : 'p-[1rem] border-2 border-solid border-light-grey rounded-[4px]'
              }`}
              // className='p-[1rem] border-2 border-solid border-light-grey'
              placeholder="Enter your password"
              onChange={(e) => setUserLoginPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit(handleClickLogin)}
            className="bg-black p-[1rem] text-white "
          >
            Login
          </button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}
