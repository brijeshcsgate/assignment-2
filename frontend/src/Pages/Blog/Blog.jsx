import React from 'react';
import './Blog.css';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import SingleBlog from './SingleBlog/SingleBlog';

export default function Blog() {
  return (
    <div className="blogPage-Section">
      <div className="flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]">
        <Link to="/">
          <AiFillHome className="cursor-pointer" />
        </Link>
        <p className="cursor-pointer">Blog</p>
      </div>

      <div className="blogPage-section-main p-[2rem] flex flex-col gap-[1rem]">
        <p className="text-[30px] font-[500px]">From Our Blog</p>
        <div className="blogPage-section-main-blogs">
          <SingleBlog />
        </div>
      </div>
    </div>
  );
}
