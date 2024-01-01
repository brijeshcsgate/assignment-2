import React from "react";
import DropdownBlog from "./DropdownBlog/DropdownBlog";
import BlogListTable from "../../Components/Blog/BlogListTable";
import AddBlogForm from "../../Components/Blog/AddBlogForm";

export default function Blog() {
  return (
    <div className='flex flex-col gap-[10px] p-[1rem]'>
      <p className='text-[20px] font-[500]'>Blog</p>

      <DropdownBlog AddBlog={<AddBlogForm />} BlogList={<BlogListTable />} />
    </div>
  );
}
