import React, { useEffect } from "react";
import "./UserProfile.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import img from "../../Assets/Images/blog/img.jpg";

import UserData from "./UserData/UserData";

import { useContext } from "react";
import ApiContext from "../../Context/api";

export default function UserProfile() {
  const [showUserData, setShowUserData] = React.useState(false);

  const [userId, setUserId] = React.useState(false);

  const { editUsersById, users, loginResponse } = useContext(ApiContext);

  // useEffect(() => {
  //   setUserId(JSON.parse(loginResponse.config.data));
  // }, []);

  console.log(userId);
  const userOrderData = [
    {
      id: 12345,
      trackingId: 12345,
      price: 12345,
      data: 12345,
    },
    {
      id: 54321,
      trackingId: 54321,
      price: 54321,
      data: 54321,
    },
  ];

  const renderedUserOrderData = userOrderData.map((data, index) => {
    return (
      <div className='userProfile-orderdata-data' key={index}>
        <div>
          <p>{data.id}</p>
        </div>
        <div>
          <p>{data.trackingId}</p>
        </div>
        <div>
          <p>{data.price}</p>
        </div>
        <div>
          <p>{data.data}</p>
        </div>
        <div>
          <button className='underline'>View</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      {showUserData && <UserData setShowUserData={setShowUserData} />}
      {!showUserData && (
        <div className='userProfile-section'>
          <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
            <Link to='/'>
              <AiFillHome className='cursor-pointer' />
            </Link>
            <p className='cursor-pointer'>User Profile</p>
          </div>

          <div className='userProfile-section-main px-[2rem] py-[1rem]'>
            <div className='userProfile-section-main-upper flex flex-row w-full items-center'>
              {/* <div className='userProfile-section-main-upper-left w-[30%] flex flex-row justify-center'>
                <img
                  className='w-[300px] h-[300px] rounded-full border-2 border-solid border-gray-500 shadow-lg'
                  src={img}
                  alt={`img`}></img>
              </div> */}
              <div className='userProfile-section-main-upper-left w-[70%] flex flex-col gap-[1rem]'>
                <div className='flex flex-row gap-[1rem] items-center'>
                  <p className='text-[30px]'>{`Syed Fahad Junaid`}</p>
                  <button
                    onClick={() => setShowUserData(true)}
                    className='py-[1rem] px-[2rem] bg-black text-white hover:text-black hover:bg-white border-2 border-solid border-black rounded-[4px] transition duration-[0.5s] ease-in-out w-fit'>
                    Edit
                  </button>
                </div>
                <p>{`+91-8175913631`}</p>
                <p>{`syedfahadjunaid@gmail.com`}</p>
                <p>{`Lucknow, Uttar Pradesh`}</p>
              </div>
            </div>
          </div>
          <div className='userProfile-section-main-head p-[1rem] bg-black text-white flex flex-row justify-center'>
            <p className='text-[25px]'>We Are So Happy To See You</p>
          </div>

          <div className='userProfile-section-main-lower px-[2rem] py-[1rem] flex flex-row gap-[1rem]'>
            <div className='w-[50%] flex flex-col gap-[1rem]'>
              <p className='text-[20px]'>My Skincare Journal</p>
              <p className='userProfile-section-main-lower-bigtext text-[50px]'>
                Before Joining Zaira Organic Skincare
              </p>
              <div className='userProfile-section-main-upper-left w-full flex flex-row justify-center'>
                <img
                  className='w-[300px] h-[300px] rounded-full border-2 border-solid border-gray-500 shadow-lg'
                  src={img}
                  alt={`img`}
                />
              </div>
              <div className='p-[1rem] flex flex-row justify-center border-[#932951] border-solid border-[1px] rounded-[4px] bg-[#F8D7DA]'>
                <label
                  for='beforeJoiningUserImage'
                  // onClick={() => setShowUserData(true)}
                  className='text-[#932951] underline text-center cursor-pointer'>
                  Upload Image
                </label>
                <input
                  className='hidden'
                  type='file'
                  id='beforeJoiningUserImage'
                />
              </div>
              <p className='userProfile-section-main-lower-bigtext text-[50px]'>
                After Joining Zaira Organic Skincare
              </p>
              <div className='userProfile-section-main-upper-left w-full flex flex-row justify-center'>
                <img
                  className='w-[300px] h-[300px] rounded-full border-2 border-solid border-gray-500 shadow-lg'
                  src={img}
                  alt={`img`}
                />
              </div>
              <div className='p-[1rem] flex flex-row justify-center border-[#932951] border-solid border-[1px] rounded-[4px] bg-[#F8D7DA]'>
                <label
                  for='afterJoiningUserImage'
                  // onClick={() => setShowUserData(true)}
                  className='text-[#932951] underline text-center cursor-pointer'>
                  Upload Image
                </label>
                <input
                  className='hidden'
                  type='file'
                  id='afterJoiningUserImage'
                />
              </div>
            </div>

            <div className='w-[50%] bg-[#FFE7DA] p-[1rem] flex flex-col gap-[1rem]'>
              <p className='text-[40px] font-[300]'>My Skincare Journal</p>
              <p>
                All Orders Summary Will Be Displayed Here Along With The
                Products That Were Puchased
              </p>
              <div className='userProfile-orderdata flex flex-col gap-[1rem]'>
                <div className='userProfile-orderdata-heads'>
                  <div>
                    <p>ID</p>
                  </div>
                  <div>
                    <p>Tracking No</p>
                  </div>
                  <div>
                    <p>Price</p>
                  </div>
                  <div>
                    <p>Data</p>
                  </div>
                  <div>
                    <p>View Details</p>
                  </div>
                </div>
                {renderedUserOrderData.length > 0 ? (
                  renderedUserOrderData
                ) : (
                  <p className='p-[1rem] text-center'>No Orders Yet</p>
                )}

                <p className='text-[40px] font-[300]'>Upcoming Products</p>
                <div className='userProfile-upcomingProducts flex flex-row gap-[1rem] justify-center'>
                  <img src={img} alt='img' />
                  <img src={img} alt='img' />
                </div>

                <p className='text-[40px] font-[300]'>Email</p>
                <p>admin@Zairaorganic.Com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
