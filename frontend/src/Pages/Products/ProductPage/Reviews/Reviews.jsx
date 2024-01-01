import React from 'react';
import './Reviews.css';
import RatingReadOnly from '../../../../Component/Rating/RatingReadOnly';
import RatingControlled from '../../../../Component/Rating/RatingControlled';

import Modal from '../../../../Component/Modal/Modal';

import { FaPencilAlt } from 'react-icons/fa';

import { useContext, useCallback, useEffect } from 'react';
import ApiContext from '../../../../Context/api';

import { continueRender, delayRender } from 'remotion';

import axios from 'axios';

export default function Reviews({
  product,
  //  reviews,
  //  users
}) {
  // const localStorage.getItem('user');

  const [users, setUsers] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  const [handle] = React.useState(() => delayRender());

  const { handleCreateReviews } = useContext(ApiContext);

  const fetchUsers = useCallback(async () => {
    const response = await axios.get('http://localhost:8000/getUserData');
    setUsers(response.data);

    continueRender(handle);
  }, [handle]);

  const fetchReviews = useCallback(async () => {
    const response = await axios.get('http://localhost:8000/ReviewGet');
    setReviews(response.data);

    continueRender(handle);
  }, [handle]);

  useEffect(() => {
    fetchUsers();
    fetchReviews();
  }, []);

  const productsReviews = reviews.map((productReviewData, index) => {
    const filterUser = users.filter((userData) => {
      return userData.email === productReviewData.customer_email;
    });
    const findReviewByProductId = reviews.find((reviewData) => {
      return product.product.productCode === reviewData.product_id;
    });
    return {
      name: filterUser[index].name,
      review_text: findReviewByProductId.review_text,
      rating: findReviewByProductId.review_rating,
    };
  });

  console.log(productsReviews);

  const [rating, setRating] = React.useState(0);

  const [productReviewText, setProductReviewText] = React.useState('');

  const submitForm = () => {
    const formData = new FormData();

    formData.append('review_rating', rating);
    formData.append('review_text', productReviewText);
    formData.append('product_id', product.product.productCode);
    formData.append(
      'customer_id',
      JSON.parse(localStorage.getItem('user'))._id
    );
    formData.append(
      'customer_email',
      JSON.parse(localStorage.getItem('user')).email
    );

    handleCreateReviews(formData);
    // console.log(formData);
    // console.log(productReviewText);
  };

  // const reviewsData = [
  //   {
  //     name: 'Syed',
  //     review:
  //       "This is really cool and really good! It's so awesome that it's hard to put into words how great it is. It's something that just has to be seen and experienced to really understand how wonderful it is.",
  //     rating: 5,
  //   },
  //   {
  //     name: 'Fahad',
  //     review:
  //       "This is really cool and really good! It's so awesome that it's hard to put into words how great it is. It's something that just has to be seen and experienced to really understand how wonderful it is.",
  //     rating: 4,
  //   },
  //   {
  //     name: 'Junaid',
  //     review:
  //       "This is really cool and really good! It's so awesome that it's hard to put into words how great it is. It's something that just has to be seen and experienced to really understand how wonderful it is.",
  //     rating: 1.5,
  //   },
  // ];

  const reviewsData = productsReviews;

  const renderedReviews = reviewsData.map((data, index) => {
    return (
      <div
        className="reviewsSection-Review flex flex-col gap-[1rem]"
        key={index}
      >
        <div className="reviewsSection-Review-head flex flex-row gap-[1rem] items-center">
          <div className="reviewsSection-Review-head-left p-[1.5rem] rounded-full border-blue-400 border-[2px] border-solid w-[30px] h-[30px] flex flex-row items-center justify-center">
            <p className=" text-[22px] font-[500]">
              {data.name[0].toUpperCase()}
            </p>
          </div>
          <div className="reviewsSection-Review-head-right flex flex-col gap-[10px]">
            <p className="reviewsSection-Review-head-right-name text-[18px] font-[500]">
              {data.name}
            </p>
            <RatingReadOnly rating={data.rating} />
          </div>
        </div>

        <p className="text-[14px] text-gray-600 text-justify px-[1rem]">
          {data.review_text}
        </p>
      </div>
    );
  });
  return (
    <div className="reviewsSection flex flex-col gap-[1rem] px-[2rem]">
      <div className="reviewsSection-ratings flex flex-row gap-[1rem] items-center">
        <p className="reviewsSection-ratings-number text-[25px] font-[700]">
          {4.7}
        </p>
        <RatingReadOnly rating={4.7} />
        <p className="reviewsSection-ratings-reviewsNumber text-[14px] text-gray-600">
          1454 reviews
        </p>
      </div>

      {/* <button className='reviewsSection-addReviewBTN rounded-[4px] items-center border-blue-400 border-[2px] border-solid w-fit py-[1rem] px-[2rem] flex flex-row gap-[10px] text-blue-400 hover:bg-blue-400 hover:text-white transition duration-[0.5s] ease-in-out'>
        <p>Add A Review</p>
        <FaPencilAlt />
      </button> */}
      <Modal
        submitHide={''}
        submitForm={submitForm}
        button={
          <button className="reviewsSection-addReviewBTN rounded-[4px] items-center border-blue-400 border-[2px] border-solid w-fit py-[1rem] px-[2rem] flex flex-row gap-[10px] text-blue-400 hover:bg-blue-400 hover:text-white transition duration-[0.5s] ease-in-out">
            <p>Add A Review</p>
            <FaPencilAlt />
          </button>
        }
        content={
          <div className="reviewsSection-addReview-modalcontent flex flex-col w-[500px]">
            <div className="reviewsSection-addReview-modalcontent-head flex flex-row gap-[1rem] bg-black text-white p-[1rem] items-center">
              <FaPencilAlt className="text-[20px]" />
              <div className="flex flex-col gap-[10px]">
                <p>Rate and Review</p>
                <p>Give the product review</p>
              </div>
            </div>

            <div className="reviewsSection-addReview-modalcontent-content p-[1rem] flex flex-col gap-[1rem]">
              <div className="reviewsSection-Review-head flex flex-row gap-[1rem] items-center">
                <div className="reviewsSection-Review-head-left p-[1.5rem] rounded-full border-blue-400 border-[2px] border-solid w-[30px] h-[30px] flex flex-row items-center justify-center">
                  <p className=" text-[22px] font-[500]">
                    {JSON.parse(
                      localStorage.getItem('user')
                    ).name[0].toUpperCase()}
                  </p>
                </div>
                <div className="reviewsSection-Review-head-right flex flex-col gap-[5px]">
                  <p className="reviewsSection-Review-head-right-name text-[14px] font-[500]">
                    {JSON.parse(localStorage.getItem('user')).name}
                  </p>
                  <p className="text-[12px] text-gray-600">
                    Your review will be posted publicly on the web
                  </p>
                  <RatingControlled defaultRating={0} setRating={setRating} />
                </div>
              </div>

              <form className="w-full">
                <textarea
                  className="p-[10px] w-full border rounded-[6px]"
                  rows={3}
                  placeholder="Share details of your own experience at this place ."
                  onChange={(e) => setProductReviewText(e.target.value)}
                />
              </form>
            </div>
          </div>
        }
      />

      {/* <div className="reviewsSection-ratings-reviews-bars">

      </div> */}

      <div className="reviewsSection-Reviews py-[2rem] flex flex-col gap-[1rem]">
        <p className="text-[14px] font-[500]">{`Reviews (${reviewsData.length})`}</p>
        {renderedReviews}
      </div>
    </div>
  );
}
