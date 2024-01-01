// developed by Syed Fahad Junaid +91-8175913631

import React, { useCallback } from "react";
import "./App.css";

// import Route from './Component/Route';

import { useContext, useEffect } from "react";
import NavigationContext from "./Context/navigation";
import ApiContext from "./Context/api";

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

// Pages
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Cart from "./Pages/Cart/Cart";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProductPage from "./Pages/Products/ProductPage/ProductPage";
import SkinCareQuiz from "./Pages/SkinCareQuiz/SkinCareQuiz";
import Testimonials from "./Pages/Testimonials/Testimonials";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import BlogPage from "./Pages/Blog/BlogPage/BlogPage";
import FAQ from "./Pages/FAQ/FAQ";
import Page404 from "./Pages/Page404/Page404";
import Checkout from "./Pages/Cart/Checkout/Checkout";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import UserProfile from "./Pages/UserProfile/UserProfile";
import OrderConfirmationPage from "./Pages/Cart/Checkout/OrderConfirmationPage";

import GoToTop from "./Component/GoToTop";

// import AdminLogin from "./Admin/AdminLogin";
import Admin from "./Admin/Admin";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function App() {
  // const { paramsProductCode } = useParams();

  const {
    currentPath,
    // productId,
    cart,
    path,
    productPageLocation,
    blogPageLocation,
    blogId,
    cartValue,
  } = useContext(NavigationContext);

  const {
    fetchUsers,
    products,
    fetchProducts,
    fetchContacts,
    fetchBlogs,
    fetchBanners,
    fetchCart,
    fetchReviews,
    fetchOneCart,
    fetchOrders,

    loginResponse,
    setLoginResponse,

    cartData,
    setCartData,
    setUserData,
    userData,
  } = useContext(ApiContext);

  // const pathPosition = currentPath.search('=');
  // const productCode = currentPath.slice(pathPosition + 1);

  // const indexOfProduct = products.findIndex((data) => {
  //   if (productCode === data.productCode) {
  //     return data;
  //   }
  //   return 0;
  // });

  // console.log(indexOfProduct);

  // useEffect(() => {
  //   userData();
  // }, [userData]);

  // console.log(localStorage.getItem("userData"));

  useEffect(() => {
    window.scroll(0, 0);

    return () => {
      return null;
    };
  }, [currentPath]);

  // const renderedPaths = products.map((data) => {
  //   return '/Shop/id=${}'
  // })
  // console.log(filteredProduct[0]._id);
  // console.log(filteredProduct);

  // useCallback(() => {
  //   fetchUsers();
  //   fetchProducts();
  //   fetchContacts();
  // }, [fetchUsers, fetchProducts, fetchContacts]);

  const [isInitiallyFetched, setIsInitiallyFetched] = React.useState(false);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
    fetchContacts();
    fetchBlogs();
    fetchBanners();
    fetchCart();
    fetchReviews();
    fetchOneCart();
    fetchOrders();

    setTimeout(() => {
      let prev_items = JSON.parse(localStorage.getItem("cartData")) || [];
      let user_Data = JSON.parse(localStorage.getItem("user")) || [];
      setUserData(user_Data);
      setLoginResponse(user_Data);
      setCartData(prev_items);
      setIsInitiallyFetched(true);
    }, 3000);

    // if (
    //   loginResponse === null ||
    //   loginResponse === undefined ||
    //   loginResponse === false
    // ) {
    //   const userData = JSON.parse(localStorage.getItem('user'));
    //   setLoginResponse(userData);
    // }

    // const singleCartData = localStorage.getItem('cartData');
    // if (cartData === null || cartData === undefined || cartData === false) {
    //   setCartData(JSON.parse(singleCartData));
    // } else {
    //   setCartData([]);
    // }
  }, []);

  // if (
  //   cartData === null ||
  //   cartData === undefined ||
  //   cartData === false ||
  //   cartData.length === 0
  // ) {
  //   const cartDataLocal = response.data.find((data) => {
  //     return (
  //       JSON.parse(localStorage.getItem('email')) === data.customer_email
  //     );
  //   });
  //   setCartData(cartDataLocal);
  // }

  // console.log(loginResponse);

  // useEffect(() => {
  //   if (cartData === null || cartData === undefined || cartData === false) {
  //     // localStorage.setItem('cartData', JSON.stringify(cartData));
  //     const singleCartData = JSON.parse(localStorage.getItem('cartData'));
  //     setCartData(singleCartData);
  //   }
  // }, [cartData, setCartData]);

  // useEffect(() => {

  // }, []);

  // console.log(cartData);

  // console.log(userData);

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
  }, [cartData, isInitiallyFetched]);

  // console.log(cartData);
  // console.log(JSON.parse(localStorage.getItem('cartData')).CartId);

  // console.log(window.location.pathname);

  let productData = products;

  // if (path === "/Shop") {
  //   productData = products;
  // } else if (path === "/Shop/FaceCleanser") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Face Cleanser";
  //   });
  // } else if (path === "/Shop/Moisturizer") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Moisturizer";
  //   });
  // } else if (path === "/Shop/Scrub") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Scrub";
  //   });
  // } else if (path === "/Shop/BodyButter") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Body Butter";
  //   });
  // } else if (path === "/Shop/Clay") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Clay";
  //   });
  // } else if (path === "/Shop/LipBalm") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Lip Balm";
  //   });
  // } else if (path === "/Shop/Oil") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Oil";
  //   });
  // } else if (path === "/Shop/SkincareKit") {
  //   productData = products.filter((data) => {
  //     return data.productCategory === "Skincare Kit";
  //   });
  // }

  return (
    <BrowserRouter>
      {isInitiallyFetched && (
        <div className='App'>
          {/* <Header /> */}
          {currentPath !== "/admin" ? <Header /> : null}

          <GoToTop />
          <Routes>
            <Route path='/' element={<Home productData={products} />} />

            {/* Shop Page */}
            <Route path='/Shop' element={<Shop productsData={productData} />} />

            <Route
              path='/Shop/FaceCleanser'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/Moisturizer'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/Scrub'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/BodyButter'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/Clay'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/LipBalm'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/Oil'
              element={<Shop productsData={productData} />}
            />

            <Route
              path='/Shop/SkincareKit'
              element={<Shop productsData={productData} />}
            />

            {/*  ---------------------------- */}

            <Route path='/Login' element={<Login />} />

            <Route path='/Register' element={<Register />} />

            <Route path='/ShoppingCart' element={<Cart />} />

            <Route path='/ContactUs' element={<ContactUs />} />

            <Route path='/SkinCareQuiz' element={<SkinCareQuiz />} />

            <Route path='/Testimonials' element={<Testimonials />} />

            <Route path='/AboutUs' element={<AboutUs />} />

            <Route path='/Blog' element={<Blog />} />

            <Route path='/FAQ' element={<FAQ />} />

            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />

            <Route
              path='/TermsAndConditions'
              element={<TermsAndConditions />}
            />

            <Route path='/UserProfile' element={<UserProfile />} />

            <Route
              path='/orderconfirmation'
              element={<OrderConfirmationPage />}
            />

            <Route
              path='/Checkout'
              element={cartValue > 0 ? <Checkout /> : <Page404 />}
            />

            <Route path='/Shop/:paramsProductCode' element={<ProductPage />} />
            {/* <ProductPage pageIndex={indexOfProduct} /> */}

            <Route path='/Blog/:paramsBlogId' element={<BlogPage />} />

            <Route path='/admin' element={<Admin />} />
          </Routes>

          {currentPath !== "/admin" ? <Footer /> : null}
          {/* <Footer /> */}
        </div>
      )}
    </BrowserRouter>
  );
}
