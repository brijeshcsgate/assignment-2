import React, { useEffect, useState, useCallback } from "react";
import "./BlogPage.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

// import img from "../../../Assets/Images/blog/img.jpg";
import Contact from "../../Home/Contact/Contact";

import {
  useParams,
  // useLocation
} from "react-router-dom";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

import axios from "axios";

import { continueRender, delayRender } from "remotion";

export default function BlogPage() {
  const [blog, setBlog] = useState(null);

  const { paramsBlogId } = useParams();

  const [handle] = useState(() => delayRender());

  const fetchOneBlog = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:8000/getOneBlog/${paramsBlogId}`
    );
    setBlog(await response.data);

    continueRender(handle);
  }, [paramsBlogId, handle]);

  useEffect(() => {
    fetchOneBlog();
  }, []);

  const {
    imageString,
    // fetchOneBlog
  } = useContext(ApiContext);

  // const location = useLocation();
  // const path = location.pathname.substr(6);

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setError] = useState(null);

  // const fsdf = blog ? "Hello" : null;
  // console.log(fsdf);

  // get one blog
  // const fetchOneBlog = async (BlogId) => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8000/getOneBlog/${BlogId}`
  //     );
  //     setBlog(response.data);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // async function getBlogs(BlogId) {
  //   setIsLoading(true);

  //   try {
  //     const blog = await fetchOneBlog(paramsBlogId);
  //     setBlog(blog);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // const blog = [
  // {
  //   _id: {
  //     $oid: "64cb7acdebadc3364e51f25d",
  //   },
  //   blogTitle: "gsdvgsdvchgsdghcvsdc",
  //   blogImage: ["blogImage-1691056845153.png"],
  //   blogIntroduction: "csdcsdjvcjsdgvcjsdcsd",
  //   blogText: "sdcsdcsdcsdcd",
  //   blogConclusion: "sdcsdcsdcsd",
  //   BlogId: "blg20230803153045",
  //   BlogDate: {
  //     $date: "2023-08-03T10:00:45.154Z",
  //   },
  //   __v: 0,
  // },
  // ];

  return (
    <div>
      {/* {isLoading && <p>Loading...</p>}
      {isError && !isLoading && <p>Oops! An Error has Occurred, Try Again</p>} */}
      {blog ? (
        <div className='blogSinglePage-Section'>
          <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
            <Link to='/'>
              <AiFillHome className='cursor-pointer' />
            </Link>
            <Link to='/Blog'>
              <p className='cursor-pointer'>Blog</p>
            </Link>
            <p>{`>`}</p>
            <p className='cursor-default'>{`Blog`}</p>
          </div>

          <div className='blogSinglePage-Section-main flex flex-col gap-[1rem] py-[1rem] px-[2rem]'>
            <div className='blogSinglePage-Section-main-head flex flex-row gap-[1rem] w-full items-center'>
              <div className='blogSinglePage-Section-main-heading w-[70%]'>
                <p className='text-[50px]'>{blog.blog.blogTitle}</p>
              </div>
              <div className='blogSinglePage-Section-main-image w-[30%]'>
                <img
                  className='w-[400px] h-[350px]'
                  src={`${imageString}${blog.blog.blogImage}`}
                  alt={`${blog.blog.blogTitle}-${blog.blog.BlogId}-img`}
                />
              </div>
            </div>

            <div className='blogSinglePage-Section-main-text '>
              <p className='text-[25px] font-[500]'>Introduction</p>
              <p className='text-[16px] text-justify'>
                {blog.blog.blogIntroduction}
              </p>
            </div>

            <div className='blogSinglePage-Section-main-text '>
              {/* <p className='text-[25px] font-[500]'>Introduction</p> */}
              <p className='text-[16px] text-justify'>{blog.blog.blogText}</p>
            </div>

            <div className='blogSinglePage-Section-main-text '>
              <p className='text-[25px] font-[500]'>Conclusion</p>
              <p className='text-[16px] text-justify'>
                {blog.blog.blogConclusion}
              </p>
            </div>
            <div className='blogPage-section-AddComment py-[2rem] flex flex-col gap-[1rem] border-t-[4px] border-t-solid border-black'>
              <p className='text-[30px] font-[500px]'>Add Comment</p>
              <Contact />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
