import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

// import { Router, useNavigate } from "react-router-dom";

const ApiContext = createContext();

function ApiContextProvider({ children }) {
  const imageString = "http://localhost:8000/images/";

  // //// Users

  const [users, setUsers] = useState([]);

  const [userId, setUserId] = useState();

  const [userData, setUserData] = useState([]);

  const [userError, setUserError] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const [loginResponse, setLoginResponse] = useState([]);

  // --post
  const handleCreateUser = async (value) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/userRegister",
        value
      );
      const updatedUsers = [...users, response.data];
      setUsers(updatedUsers);
    } catch (err) {
      setUserError(true);
    }
  };

  // -get
  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8000/getUserData");
    setUsers(response.data);
  };

  // -put
  const editUsersById = async (userId, newStatus) => {
    const response = await axios.put(
      `http://localhost:8000/userUpdate/${userId}`,
      {}
    );
    const updatedUsers = users.map((user) => {
      if (user.userId === userId) {
        return { ...user, ...response.data };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // -delete
  const deleteUserById = async (userId) => {
    await axios.delete(`http://localhost:8000/deleteUser/${userId}`);
    const updatedUsers = users.filter((user) => {
      return user.userId !== userId;
    });
    setUsers(updatedUsers);
  };

  // //// Products

  const [products, setProducts] = useState([]);

  // const [productData, setProductData] = useState([]);

  // console.log(users);

  // --post
  const handleCreateProduct = async (value) => {
    const response = await axios.post(
      "http://localhost:8000/addProduct",
      value,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const updatedProducts = [...products, response.data];
    setProducts(updatedProducts);
  };

  // -get
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:8000/getProducts");
    setProducts(response.data);
  };

  // -put
  const editProductsById = async (productId, formData) => {
    const response = await axios.put(
      `http://localhost:8000/userUpdate/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const updatedProducts = products.map((product) => {
      if (product._id === productId) {
        return { ...product, ...response.data };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // -delete
  const deleteProductsById = async (productId) => {
    await axios.delete(`http://localhost:8000/deleteProduct/${productId}`);
    const updatedProducts = products.filter((product) => {
      return product._id !== productId;
    });
    setProducts(updatedProducts);
  };

  // //// Contacts

  const [contacts, setContacts] = useState([]);

  // --post
  const handleCreateContact = async (value) => {
    const response = await axios.post(
      "http://localhost:8000/addContact",
      value
    );
    const updatedContacts = [...contacts, response.data];
    setContacts(updatedContacts);
  };

  // -get
  const fetchContacts = async () => {
    const response = await axios.get("http://localhost:8000/getContacts");
    setContacts(response.data);
  };

  // // -put
  // const editContactsById = async (contactId, newStatus) => {
  //   const response = await axios.put(
  //     `http://localhost:8000/userUpdate/${contactId}`,
  //     {}
  //   );
  //   const updatedContacts = contacts.map((contact) => {
  //     if (contact._id === contactId) {
  //       return { ...contact, ...response.data };
  //     }
  //     return contact;
  //   });
  //   setContacts(updatedContacts);
  // };

  // -delete
  const deleteContactsById = async (contactId) => {
    await axios.delete(`http://localhost:8000/deleteContact/${contactId}`);
    const updatedContacts = contacts.filter((contact) => {
      return contact.contactId !== contactId;
    });
    setContacts(updatedContacts);
  };

  // //// Blogs
  const [blogs, setBlogs] = useState([]);
  // const [blog, setBlog] = useState([]);
  // --post
  const handleCreateBlogs = async (value) => {
    const response = await axios.post("http://localhost:8000/addBlog", value, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const updatedBlogs = [...blogs, response.data];
    setBlogs(updatedBlogs);
  };

  // -get
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:8000/getAllBlogs");
    setBlogs(response.data);
  };

  // // get one blog
  // const fetchOneBlog = async (BlogId) => {
  //   const response = await axios.get(
  //     `http://localhost:8000/getOneBlog/${BlogId}`
  //   );
  //   setBlog(response.data);
  // };

  // -put
  const editBlogsById = async (blogId, newStatus) => {
    const response = await axios.put(
      `http://localhost:8000/updateBlog/${blogId}`,
      {}
    );
    const updatedBlogs = blogs.map((blog) => {
      if (blog._id === blogId) {
        return { ...blog, ...response.data };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  // -delete
  const deleteBlogsById = async (blogId) => {
    await axios.delete(`http://localhost:8000/deleteBlog/${blogId}`);
    const updatedBlogs = blogs.filter((blog) => {
      return blog.blogId !== blogId;
    });
    setBlogs(updatedBlogs);
  };

  // //// Banner
  const [banners, setBanners] = useState([]);

  // --post
  const handleCreateBanners = async (value) => {
    const response = await axios.post(
      "http://localhost:8000/addBanner",
      value,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const updatedBanners = [...banners, response.data];
    setBanners(updatedBanners);
  };

  // -get
  const fetchBanners = async () => {
    const response = await axios.get("http://localhost:8000/getAllBanners");
    setBanners(response.data);
  };

  // -put
  const editBannersById = async (bannerId, formData) => {
    const response = await axios.put(
      `http://localhost:8000/updateBanner/${bannerId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const updatedBanners = banners.map((banner) => {
      if (banner.BannerId === bannerId) {
        return { ...banner, ...response.data };
      }
      return banner;
    });
    setBanners(updatedBanners);
  };

  // -delete
  const deleteBannersById = async (bannerId) => {
    await axios.delete(`http://localhost:8000/deleteBanner/${bannerId}`);
    const updatedBanners = banners.filter((banner) => {
      return banner.BannerId !== bannerId;
    });
    setBanners(updatedBanners);
  };

  // //// Cart

  const [cart, setCart] = useState([]);

  const [cartData, setCartData] = useState([]);

  const [singleCart, setSingleCart] = useState([]);

  // console.log(cartData);

  // console.log(localStorage.getItem('email'));
  // console.log(localStorage.getItem('cartData'));
  // console.log(localStorage.getItem('user'));
  // const [cartDataById, setCartDataById] = useState();

  const handleCreateCart = async (products) => {
    const response = await axios.post(
      `http://localhost:8000/carts/${cartData.CartId}/products`,

      products,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const updatedCart = [...cart, response.data];
    setCart(updatedCart);
  };

  // -get
  const fetchCart = async () => {
    const response = await axios.get("http://localhost:8000/CartGet");
    setCart(response.data);

    // localStorage.setItem('carts', JSON.stringify(response.data));
  };

  // -put
  const editCartProductsById = async (productId, productData) => {
    const response = await axios.put(
      `http://localhost:8000/carts/${singleCart.carts.CartId}/products/${productId}`,
      productData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const updatedCart = cart.map((data) => {
      if (data.CartId === singleCart.carts.CartId) {
        return { ...cart, ...response.data };
      }
      return cart;
    });
    setCart(updatedCart);
  };

  // -delete
  // const deleteCartById = async (cartId) => {
  //   await axios.delete(`http://localhost:8000/deleteBanner/${cartId}`);
  //   const updatedCart = cart.filter((cart) => {
  //     return cart.CartId !== cartId;
  //   });
  //   setCart(updatedCart);
  // };

  const deleteProductInCartById = async (productId) => {
    const response = await axios.delete(
      `http://localhost:8000/carts/${singleCart.carts.CartId}/products/${productId}`
    );
    const updatedCart = cart.map((data) => {
      if (data.CartId === singleCart.carts.CartId) {
        return { ...cart, ...response.data };
      }
      return cart;
    });
    setCart(updatedCart);
    // setSingleCart(updatedCart);
  };

  // console.log(singleCart);

  const fetchOneCart = async () => {
    const response = await axios.get(
      `http://localhost:8000/CartGetOne/${
        // JSON.parse(localStorage.getItem("user")).email
        localStorage.getItem("email")
      }`
    );
    setSingleCart(response.data);
  };

  // //// Reviews

  const [reviews, setReviews] = useState([]);
  // -post
  const handleCreateReviews = async (value) => {
    const response = await axios.post(
      "http://localhost:8000/reviewAdd",
      value,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const updatedReviews = [...reviews, response.data];
    setReviews(updatedReviews);
  };

  // console.log(reviews);

  // -get
  const fetchReviews = async () => {
    const response = await axios.get("http://localhost:8000/ReviewGet");
    setReviews(response.data);
  };

  // -put
  const editReviewsById = async (reviewId, formData) => {
    const response = await axios.put(
      `http://localhost:8000/ReviewUpdate/${reviewId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const updatedReviews = reviews.map((review) => {
      if (review.BannerId === reviewId) {
        return { ...review, ...response.data };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  // -delete
  const deleteReviewsById = async (reviewId) => {
    await axios.delete(`http://localhost:8000/ReviewDelete/${reviewId}`);
    const updatedReviews = reviews.filter((review) => {
      return review.BannerId !== reviewId;
    });
    setReviews(updatedReviews);
  };

  // ////Orders

  const [orders, setOrders] = useState([]);

  // console.log(renderedOrders[renderedOrders.length - 1]);

  // --post
  const handleCreateOrder = async (value) => {
    const response = await axios.post("http://localhost:8000/addOrder", value);
    const updatedOrders = [...orders, response.data];
    setOrders(updatedOrders);
  };

  // -get
  const fetchOrders = async () => {
    const response = await axios.get("http://localhost:8000/getOrder");
    setOrders(response.data);
  };

  // -getOneOrder
  const fetchOneOrders = async () => {
    const response = await axios.get("http://localhost:8000/getOneOrder/:id");
    setOrders(response.data);
  };

  // console.log(orders);

  // -put
  const editOrderById = async (orderId, newStatus) => {
    const response = await axios.put(
      `http://localhost:8000/updateOrder/:orderId`,
      {
        statusOfOrder: newStatus,
      }
    );
    const updatedOrders = orders.map((order) => {
      if (order.orderId === orderId) {
        return { ...order, ...response.data };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const deleteOrderById = async (orderId) => {
    await axios.delete(`http://localhost:8000/deleteBanner/${orderId}`);
    const updatedOrders = orders.filter((order) => {
      return order.BannerId !== orderId;
    });
    setOrders(updatedOrders);
  };

  // ------------------------------------------------------------------------
  // const [paymentSelection, setPaymentSelection] = useState("");

  // const [trackOrderId, setTrackOrderId] = useState();

  // // CUSTOMER DATA
  // const [customerData, setCustomerData] = useState();
  // // OrderData as Per Id
  // const [modalDataId, setModalDataId] = useState([]);
  // // ContactData as per Id
  // const [modalContactDataId, setModalContactDataId] = useState([]);
  // // Payment Data
  // const [paymentData, setPaymentData] = useState();
  // // Order Data
  // const [orderData, setOrderData] = useState();

  // // Order Status
  // const [statusData, setStatusData] = useState("Order Confirmed");

  // console.log(customerData);
  // console.log(paymentData);
  // console.log(orderData);

  // ORDERS API

  // ORDERS API
  // const [contactUsData, setContactUsData] = useState([]);

  // console.log(renderedOrders[renderedOrders.length - 1]);

  // // Contact Us API
  // // --post
  // const handleCreateContactData = async (value) => {
  //   const response = await axios.post(
  //     "http://localhost:4002/contactUsRegisterg",
  //     value
  //   );
  //   const updatedContactData = [...contactUsData, response.data];
  //   setContactUsData(updatedContactData);
  // };

  // // -get
  // const fetchContactData = async () => {
  //   const response = await axios.get("http://localhost:4002/contactUsGetdataw");
  //   setContactUsData(response.data);
  // };

  // // -delete
  // const deleteContactDataById = async (contactId) => {
  //   await axios.delete(`http://localhost:4002/contactUsDelete/${contactId}`);
  //   const updatedContactData = contactUsData.filter((contactData) => {
  //     return contactData.ContactUsId !== contactId;
  //   });
  //   setContactUsData(updatedContactData);
  // };

  // // -put
  // const editContactDataById = async (id, newStatus) => {
  //   const response = await axios.put(
  //     `http://localhost:4002/contactUsUpdate/${id}`,
  //     {
  //       statusOfOrder: newStatus,
  //     }
  //   );
  //   const updatedContactData = contactUsData.map((contactData) => {
  //     if (contactData.id === id) {
  //       return { ...contactData, ...response.data };
  //     }
  //     return contactData;
  //   });
  //   setContactUsData(updatedContactData);
  // };

  // console.log(contactUsData);

  // ------------------------------------------------------------
  return (
    <ApiContext.Provider
      value={{
        // paymentSelection,
        // setPaymentSelection,
        // paymentData,
        // setPaymentData,
        // customerData,
        // setCustomerData,
        // handleCreateOrder,
        // fetchOrders,
        // editOrderById,
        // orderData,
        // setOrderData,
        // orders,
        // setOrders,
        // statusData,
        // setStatusData,
        // modalDataId,
        // setModalDataId,
        // renderedOrders,
        // trackOrderId,
        // setTrackOrderId,
        // modalContactDataId,
        // setModalContactDataId,
        // contactUsData,
        // handleCreateContactData,
        // fetchContactData,
        // deleteContactDataById,
        // editContactDataById,
        // ------------------
        // handleUserLogin,
        loginError,
        setLoginError,
        // handleUserLogout,
        // userDataAfterLogin,
        handleCreateUser,

        userData,
        setUserData,

        loginResponse,
        setLoginResponse,
        // userData,
        fetchUsers,
        editUsersById,
        deleteUserById,
        users,
        setUsers,
        userError,
        userId,
        setUserId,
        handleCreateProduct,
        fetchProducts,
        editProductsById,
        deleteProductsById,
        products,
        setProducts,
        // productData,
        // setProductData,
        handleCreateContact,
        fetchContacts,
        deleteContactsById,
        contacts,
        setContacts,
        // Blogs
        handleCreateBlogs,
        fetchBlogs,
        editBlogsById,
        deleteBlogsById,
        blogs,
        setBlogs,
        // Banners
        handleCreateBanners,
        fetchBanners,
        editBannersById,
        deleteBannersById,
        banners,
        setBanners,
        // cart data
        handleCreateCart,
        fetchCart,
        // editCartById,
        editCartProductsById,
        // deleteCartById,
        fetchOneCart,
        deleteProductInCartById,
        cart,
        setCart,
        // setCartDataById,
        cartData,
        setCartData,
        singleCart,
        setSingleCart,
        // cartDataById,
        // cartDataAfterLogin,
        // Images
        imageString,

        // Reviews
        handleCreateReviews,
        editReviewsById,
        deleteReviewsById,
        fetchReviews,

        // Orders
        orders,
        handleCreateOrder,
        fetchOrders,
        editOrderById,
        fetchOneOrders,
        deleteOrderById,
      }}>
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContextProvider };
export default ApiContext;
