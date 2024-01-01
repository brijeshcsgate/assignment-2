import React from "react";
import logo from "../Assets/Images/logo.png";
import rightSectionImage from "./assets/AdminLogin/imageRight.png";

import Button from "../Component/Button";

import { useState, useRef, useEffect } from "react";
// import axios from 'axios';

import Admin from "./Admin";

import { BsEyeFill } from "react-icons/bs";

export default function AdminLogin() {
  // Axios Login Authentication
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // const { setAuth } = useContext(AuthContext);

  // const LOGIN_URL = 'http://localhost:3001/admin';

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user === "zaira" && pwd === "zaira98765") {
      setSuccess(true);
    } else {
      setErrorMsg("Wrong Credentials");
    }

    // try {
    //   const response = await axios.get(
    //     LOGIN_URL,
    //     // JSON.stringify({ userName: user, password: pwd }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(response.data.email, response.data.password);
    //   // console.log(response);
    //   if (response.data.email === user && response.data.password === "pwd") {
    //     setUser('');
    //     setPwd('');
    //     setSuccess(true);
    //   } else {
    //     setSuccess(false);
    //     setErrorMsg('Wrong Credentials');
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log(user, pwd);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {success ? (
        <Admin />
      ) : (
        <div className='flex flex-row justify-center p-[2rem]'>
          <div className='flex flex-row items-center justify-between border p-[2rem]'>
            <div className='flex w-[50%] flex-col items-center gap-[1rem]'>
              <img className='w-[250px] h-[150px]' src={logo} alt='logo' />
              <h1 className='text-[50px] font-[500] text-[#4273B9]'>WELCOME</h1>
              <form action='' className='flex flex-col gap-[10px]'>
                <div className='flex flex-col'>
                  <p className='font-[400] text-[#4273B9]'>Username</p>
                  <input
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    id='username'
                    type='email'
                    className='border-b-solid border-b-[2px] border-b-[#4273B9] p-[5px] outline-none'
                  />
                </div>
                <div className='flex flex-col'>
                  <p className='font-[400] text-[#4273B9]'>Password</p>
                  <div className='flex flex-row items-center border-b-solid border-b-[2px] border-b-[#4273B9]'>
                    <input
                      ref={userRef}
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      id='password'
                      type={showPassword ? "text" : "password"}
                      className='p-[5px] outline-none'
                    />
                    <BsEyeFill
                      onClick={() => setShowPassword(!showPassword)}
                      className={
                        showPassword
                          ? `text-[#1f1f1f] text-[20px]`
                          : `text-gray-300 text-[20px]`
                      }
                    />
                  </div>
                </div>
                <Button
                  onClick={handleSubmit}
                  className='flex flex-row justify-center bg-[#4273B9]'>
                  <p className='p-[10px]'>LOGIN</p>
                </Button>
              </form>
              <p
                ref={errRef}
                className={errorMsg ? "errmsg" : "offscreen"}
                aria-live='assertive'>
                {errorMsg}
              </p>
            </div>
            <div className='item-center flex w-[50%] flex-row items-center justify-center'>
              <img
                className='h-[500px] w-[400px]'
                src={rightSectionImage}
                alt='loginRightSectionImage'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
