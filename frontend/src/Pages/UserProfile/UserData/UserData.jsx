import React from 'react';
import './UserData.css';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { TbArrowBack } from 'react-icons/tb';

import Modal from '../../../Component/Modal/Modal';

// import img from "../../../Assets/Images/blog/img.jpg";

import GenderDropdown from './GenderDropdown';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useContext } from 'react';
import ApiContext from '../../../Context/api';

export default function UserData({ setShowUserData }) {
  const { handleCreateUser } = useContext(ApiContext);

  const [gender, setGender] = React.useState('');

  const formSchema = Yup.object().shape({
    password: Yup.string(),
    // .required("Password is mendatory")
    // .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string(),
    // .required("Password is mendatory")
    // .oneOf([Yup.ref("password")], "Passwords does not match"),
    name: Yup.string(),
    // .required("Name is required")
    // .min(6, "Name must be at least 6 char long")
    // .max(20, "Name must be at least 20 char long"),
    email: Yup.string(),
    // .required("Email is required"),
    contact: Yup.string(),
    // .required("Contact is required")
    // .min(10, "Contact must be at least 10 char long")
    // .max(10, "Contact must be at least 10 char long"),
    usercity: Yup.string(),
    useraddress: Yup.string(),
    userpostalcode: Yup.string(),
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

    // Api to create user
    handleCreateUser({ ...data, gender });

    reset({
      password: '',
      confirmPwd: '',
      name: '',
      email: '',
      contact: '',
      usercity: '',
      useraddress: '',
      userpostalcode: '',
    });
    setGender('');
    return false;
  }

  return (
    <div className="userData-section">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-pointer">User Data</p>
      </div>

      <div className="userData-section-main py-[1rem] px-[2rem] gap-[1rem] flex flex-col">
        <div className="flex flex-row gap-[1rem] items-center">
          <p className="text-[25px]">My Account</p>

          <TbArrowBack
            onClick={() => setShowUserData(false)}
            className="text-[25px] cursor-pointer"
          />
        </div>
        <div className="userData-section-main-myProfileInfo flex flex-col gap-[1rem] border p-[2rem]">
          <p className="text-[30px]">My Profile Information</p>
          <p className="text-[22px]">User Registration</p>

          <Modal
            button={
              <button className="py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit">
                Edit Profile
              </button>
            }
            submitForm={handleSubmit(onSubmit)}
            content={
              <div className="userData-section-main-myProfileInfo-form w-full w-[500px] p-[1rem] flex flex-col gap-[1rem]">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="userData-section-main-myProfileInfo-form-data flex flex-col gap-[8px]"
                >
                  {/* <div className='flex flex-row gap-[1rem] items-center'>
                    <img className='w-[100px] h-[100px]' src={img} alt='img' />
                    <input type='file' />
                  </div> */}
                  <div className="userData-section-main-myProfileInfo-form-data-lower">
                    <div className="flex flex-col gap-[8px] ">
                      <input
                        {...register('name')}
                        name="name"
                        type="text"
                        className={`form-control ${
                          errors.name
                            ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                            : 'p-[8px] border rounded-[4px]'
                        }`}
                        placeholder="Username"
                      />
                    </div>

                    <div className="flex flex-col gap-[8px] ">
                      <input
                        {...register('contact')}
                        name="contact"
                        type="number"
                        className={`form-control ${
                          errors.contact
                            ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                            : 'p-[8px] border rounded-[4px]'
                        }`}
                        placeholder="User Contact"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] ">
                      <input
                        name="password"
                        type="password"
                        {...register('password')}
                        className={`form-control ${
                          errors.password
                            ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                            : 'p-[8px] border rounded-[4px]'
                        }`}
                        placeholder="User Password"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] ">
                      <input
                        name="confirmPwd"
                        type="password"
                        {...register('confirmPwd')}
                        className={`form-control ${
                          errors.confirmPwd
                            ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                            : 'p-[8px] border rounded-[4px]'
                        }`}
                        placeholder="User Confirm Password"
                      />
                    </div>

                    <div className="flex flex-col gap-[8px] ">
                      <input
                        name="usercity"
                        type="text"
                        {...register('usercity')}
                        className={`form-control ${
                          errors.usercity
                            ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                            : 'p-[8px] border rounded-[4px]'
                        }`}
                        placeholder="User City"
                      />
                    </div>

                    <div className="flex flex-col gap-[8px] ">
                      <input
                        name="userpostalcode"
                        type="number"
                        {...register('userpostalcode')}
                        className={`form-control ${
                          errors.userpostalcode
                            ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                            : 'p-[8px] border rounded-[4px]'
                        }`}
                        placeholder="User Postal Code"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] ">
                    <input
                      {...register('email', {
                        required: true,
                        validate: handleEmailValidation,
                      })}
                      name="email"
                      type="email"
                      className={`form-control ${
                        errors.email
                          ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                          : 'p-[8px] border rounded-[4px]'
                      }`}
                      placeholder="User Email"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] ">
                    <textarea
                      name="useraddress"
                      type="number"
                      {...register('useraddress')}
                      className={`form-control ${
                        errors.useraddress
                          ? 'is-invalid p-[8px] border-red-500 border-solid border-[1px] rounded-[4px]'
                          : 'p-[8px] border rounded-[4px]'
                      }`}
                      rows={2}
                      placeholder="User Address (with Street No.)"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <GenderDropdown data={gender} setData={setGender} />
                  </div>
                </form>
              </div>
            }
          />

          <div className="userData-section-main-myProfileInfo-data">
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">User Name</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">User Email</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">User Contact</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">User Password</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">Gender</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">City</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">Address(Street No.)</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <p className="font-[500]">Postal Code</p>
              <input
                className="p-[1rem] border rounded-[4px]"
                value={'Syed Fahad Junaid'}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
