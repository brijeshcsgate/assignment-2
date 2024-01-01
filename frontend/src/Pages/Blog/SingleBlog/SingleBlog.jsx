import React from "react";
import "./SingleBlog.css";

import blogImg from "../../../Assets/Images/blog/img.jpg";

import { useContext } from "react";
import NavigationContext from "../../../Context/navigation";
import ApiContext from "../../../Context/api";

import { Link } from "react-router-dom";

export default function SingleBlog() {
  const { setBlogPageLocation, setBlogId } = useContext(NavigationContext);

  const { blogs, imageString } = useContext(ApiContext);

  // const blogData = [
  //   {
  //     img: blogImg,
  //     text: 'ufvsjdvfs',
  //     label: 'blog1',
  //   },
  //   {
  //     img: blogImg,
  //     text: 'ufvsjdvfs',
  //     label: 'blog2',
  //   },
  //   {
  //     img: blogImg,
  //     text: 'ufvsjdvfs',
  //     label: 'blog3',
  //   },
  // ];

  const blogData = blogs;

  const renderedBlogData = blogData.map((data, index) => {
    return (
      <div
        onClick={() => setBlogId(index)}
        className='singleBlog-section-card flex flex-col gap-[1rem] p-[1rem] rounded-[6px] border hover:shadow-lg'
        key={index}>
        <img
          className='w-[400px] h-[350px]'
          src={`${imageString}${data.blogImage}`}
          alt={`${data.blogTitle}`}
        />
        <p className='text-[22px] font-[500]'>{data.blogTitle}</p>
        {/* <p className='text-[14px] text-gray-600'>
          {data.blogText.subStr(0, 30)}
        </p> */}
        <Link to={`/Blog/${data.BlogId}`}>
          <button
            onClick={() => setBlogPageLocation(`/Blog/${data.BlogId}`)}
            className='singleBlog-section-cardBTN py-[10px] px-[1rem] text-white bg-black border-black border-solid border-2 rounded-[4px] hover:bg-white hover:text-black transition duration-[0.5s] ease-in-out'>
            Read More
          </button>
        </Link>
      </div>
    );
  });

  return <div className='singleBlog-section-cards'>{renderedBlogData}</div>;
}
