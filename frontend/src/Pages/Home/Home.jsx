import React, { useContext } from "react";
import "./Home.css";

// import HeroImage1 from "../../Assets/Images/HeroImages/Banner/1.jpg";
// import HeroImage2 from "../../Assets/Images/HeroImages/Banner/2.jpg";
// import HeroImage3 from "../../Assets/Images/HeroImages/Banner/3.jpg";
// import HeroImage4 from "../../Assets/Images/HeroImages/Banner/4.jpg";
// import HeroImage5 from "../../Assets/Images/HeroImages/Banner/5.jpg";
// import HeroImage6 from "../../Assets/Images/HeroImages/Banner/Glow Kit.jpg";

import CoffeeMoisturizerZOS from "../../Assets/Images/HeroImages/CoffeeMoisturizerZOS.png";
import ZOSCoffeeScrubBenefits from "../../Assets/Images/HeroImages/ZOSCoffeeScrubBenefits.png";

import HomeBannerImg from "../../Assets/Images/HeroImages/banner2.png";

// Sections
import SwiperHeroCarousel from "../../Component/SwiperCarousel/SwiperCarousel";
import Contact from "./Contact/Contact";

// Products
import Products from "../Products/Products";

//Blogs
import SingleBlog from "../Blog/SingleBlog/SingleBlog";
import ApiContext from "../../Context/api";

// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { ToastContainer, toast } from "react-toastify";

// import { useEffect } from "react";
// import axios from "axios";

export default function Home() {
  // const navigate = useNavigate();

  // const [cookies, removeCookie] = useCookies([]);
  // const [username, setUsername] = React.useState("");

  // // console.log(cookies.token);

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/login");
  //     }
  //     const { data } = await axios.post(
  //       "http://localhost:8000",
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { status, user } = data;
  //     setUsername(user);
  //     return status
  //       ? toast(`Hello ${user}`, {
  //           position: "top-right",
  //         })
  //       : (removeCookie("token"), navigate("/login"));
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);
  // // const Logout = () => {
  // //   removeCookie("token");
  // //   navigate("/signup");
  // // };

  // console.log(username);

  const { products, banners, imageString } = useContext(ApiContext);

  // console.log(products);
  const ourMostLovedProductsFilter = products.filter((data) => {
    return data.productStatusBestSeller === true;
  });

  // console.log(ourMostLovedProductsFilter);

  const ourNewLaunchesProductsFilter = products.filter((data) => {
    return data.productStatusNewProduct === true;
  });
  // console.log(ourNewLaunchesProductsFilter);

  const personalizedSkincareKitsProductsFilter = products.filter((data) => {
    return data.productStatusSkinCareProduct === true;
  });
  // console.log(personalizedSkincareKitsProductsFilter);
  // const heroCarouselData = [
  //   HeroImage1,
  //   HeroImage2,
  //   HeroImage3,
  //   HeroImage4,
  //   HeroImage5,
  //   HeroImage6,
  // ];

  const heroCarouselData = banners;

  // const renderedHeroCarousel = heroCarouselData.map((data, index) => {
  //   return (
  //     <div
  //       key={index}
  //       className='hero-section flex h-screen flex-row items-center h-[400px]'
  //       style={{
  //         backgroundImage: `url('${data}')`,
  //         backgroundRepeat: "no-repeat",
  //         backgroundSize: "cover",
  //       }}></div>
  //   );
  // });
  const renderedHeroCarousel = heroCarouselData.map((data, index) => {
    return (
      <div
        key={index}
        className='hero-section-carousel flex h-screen flex-row items-center w-full h-[600px]'>
        <img
          className='hero-section-carouselImage w-full h-full'
          src={`${imageString}${data.BannerImage}`}
          alt={`${data.BannerTitle}-${data.BannerId}-img`}
        />
      </div>
    );
  });
  return (
    <div className='homepage-section flex flex-col gap-[1rem]'>
      <div className='homepage-section-herocarousel'>
        <SwiperHeroCarousel data={renderedHeroCarousel} />
      </div>
      <div className='homepage-section-OurMostLovedProductsSection p-[2rem] flex flex-col gap-[1rem]'>
        <p className='text-[30px] font-[500px]'>Our Most Loved Products</p>
        <div className='ourMostLovedProducts-section'>
          <Products productsData={ourMostLovedProductsFilter} />
        </div>
      </div>
      <div className='homepage-section-OurMostLovedProductsSection p-[2rem] flex flex-col gap-[1rem]'>
        <p className='text-[30px] font-[500px]'>Our New Launches</p>
        <div className='ourMostLovedProducts-section'>
          <Products productsData={ourNewLaunchesProductsFilter} />
        </div>
      </div>
      <div className='homepage-section-OurMostLovedProductsSection p-[2rem] flex flex-col gap-[1rem]'>
        <p className='text-[30px] font-[500px]'>All Products</p>
        <div className='ourMostLovedProducts-section'>
          <Products productsData={products} />
        </div>
      </div>

      <div className='homepage-section-images flex flex-row p-[2rem] w-full gap-[2rem]'>
        <img
          className='w-[50%] cursor-pointer'
          src={CoffeeMoisturizerZOS}
          alt='CoffeeMoisturizerZOS'
        />
        <img
          className='w-[50%] cursor-pointer'
          src={ZOSCoffeeScrubBenefits}
          alt='ZOSCoffeeScrubBenefits'
        />
      </div>

      <div className='homepage-section-homebannerimages p-[2rem]'>
        <img src={HomeBannerImg} alt='HomeBannerImg' />
      </div>

      <div className='homepage-section-PersonalizedSkincareKits p-[2rem] flex flex-col gap-[1rem]'>
        <p className='text-[30px] font-[500px]'>Personalized Skincare Kits</p>
        <div className='ourMostLovedProducts-section'>
          <Products productsData={personalizedSkincareKitsProductsFilter} />
        </div>
      </div>

      <div className='homepage-section-CorporateGifting p-[2rem] flex flex-col gap-[1rem]'>
        <p className='text-[30px] font-[500px]'>Corporate Gifting</p>
        <Contact />
        {/* <div className='bg-brown flex flex-row w-full items-center'>
          <p className='text-white w-[50%] p-[2rem] text-justify'>
            Strengthen Your Relationships With Employees, Colleagues And Clients
            With Zaira Organic Skincare Corporate Gifting Concierge. From
            Affordable Gifting To Customized Gift Boxes, We're A One-Stop
            Solution For Corporate Gifting. Drop In A Query And We Will Help
            Deliver These Seamlessly.
          </p>

          <form className='homepage-section-CorporateGifting-form bg-[#f8f9fa] flex flex-col items-center gap-[10px] w-[50%] py-[2rem] px-[3rem]'>
            <div className='flex flex-row gap-[10px] w-full'>
              <input
                placeholder='Name'
                className='w-[50%] p-[10px] border-[1px] border-solid border-brown'
              />
              <input
                placeholder='Number'
                className='w-[50%] p-[10px] border-[1px] border-solid border-brown'
              />
            </div>
            <input
              placeholder='Email'
              className='w-full p-[10px] border-[1px] border-solid border-brown'
            />
            <textarea
              rows={"3"}
              placeholder='Message'
              className='w-full p-[10px] border-[1px] border-solid border-brown'
            />
            <button className='bg-brown text-white p-[10px] rounded'>
              Submit
            </button>
          </form>
        </div> */}
      </div>

      <div className='homepage-section-FromOurBlog p-[2rem] flex flex-col gap-[1rem]'>
        <p className='text-[30px] font-[500px]'>From Our Blog</p>
        <div className='ourMostLovedProducts-section'>
          <SingleBlog />
        </div>
      </div>
    </div>
  );
}
