import React, { useEffect } from "react";
import AlertDialog from "../AlertDialogBox/AlertDialogBox";
// import TextEditor from "../../../Component/TextEditor/TextEditor";

import { useForm } from "react-hook-form";

import { useContext } from "react";
import ApiContext from "../../../Context/api";

export default function AddBlogForm() {
  const { register, handleSubmit } = useForm();
  const [blogIntroduction, setBlogIntroduction] = React.useState("");
  const [blogText, setBlogText] = React.useState("");
  const [blogConclusion, setBlogConclusion] = React.useState("");
  const [blogImage, setBlogImage] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");

  const { handleCreateBlogs, fetchBlogs } = useContext(ApiContext);

  // useEffect(() => {
  //   fetchBlogs();
  // }, [])

  // const [data, setData] = React.useState();

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const onSubmit = (data) => {
    // const blogImage = await convertToBase64(blogImageData);
    // setData({
    //   blogImage,
    //   blogIntroduction,
    //   blogText,
    //   blogConclusion,
    //   blogTitle,
    // });
    // const formData = new FormData();
    // formData.append("blogImage", blogImage);
    // formData.append("blogIntroduction", blogIntroduction);
    // formData.append("blogText", blogText);
    // formData.append("blogConclusion", blogConclusion);
    // formData.append("blogTitle", blogTitle);
    // console.log(formData);
    // handleCreateBlogs(formData);
    // handleCreateBlogs({
    //   blogImage,
    //   blogIntroduction,
    //   blogText,
    //   blogConclusion,
    //   blogTitle,
    // });
    const formData = new FormData();
    formData.append("blogImage", blogImage[0]);
    formData.append("blogIntroduction", blogIntroduction);
    formData.append("blogText", blogText);
    formData.append("blogConclusion", blogConclusion);
    formData.append("blogTitle", blogTitle);
    handleCreateBlogs(formData);
    // console.log(formData);
    fetchBlogs();
  };
  // console.log(data);

  return (
    <div className='flex flex-col gap-[2rem]'>
      <form className='flex flex-col gap-[1rem]'>
        <div className='grid grid-cols-2 gap-[1rem]'>
          <div className='flex flex-col gap-[10px]'>
            <label>Blog Image</label>
            <input
              type='file'
              {...register("file")}
              id='image'
              onChange={(e) => setBlogImage(e.target.files)}
              className='border p-[1rem] rounded-[4px]'
            />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <label>Blog Title</label>
            <input
              className='border p-[1rem] rounded-[4px]'
              name='blogTitle'
              {...register("blogTitle")}
              placeholder='Enter blog title'
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Blog Introduction</label>
          {/* <textarea
            rows={7}
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter blog introduction'
          /> */}
          {/* <TextEditor
            data={blogIntroductionText}
            setData={setBlogIntroductionText}
          /> */}
          <textarea
            rows={7}
            className='border p-[1rem] rounded-[4px]'
            name='blogIntroduction'
            {...register("blogIntroduction")}
            placeholder='Enter blog text'
            onChange={(e) => setBlogIntroduction(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Blog Text</label>
          {/* <textarea
            rows={7}
            className='border p-[1rem] rounded-[4px]'
            placeholder='Enter blog text'
          /> */}
          {/* <TextEditor data={blogText} setData={setBlogText} /> */}
          <textarea
            rows={7}
            className='border p-[1rem] rounded-[4px]'
            name='blogText'
            {...register("blogText")}
            placeholder='Enter blog text'
            onChange={(e) => setBlogText(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-[10px]'>
          <label>Blog Conclusion</label>
          <textarea
            rows={7}
            className='border p-[1rem] rounded-[4px]'
            name='blogConclusion'
            {...register("blogConclusion")}
            placeholder='Enter blog conclusion'
            onChange={(e) => setBlogConclusion(e.target.value)}
          />
          {/* <TextEditor
            data={blogConclusionText}
            setData={setBlogConclusionText}
          /> */}
        </div>
        {/* <div className='flex flex-row gap-[10px]'>{renderedImages}</div> */}
      </form>

      <button className=''>
        <AlertDialog
          alertDialogTitle={"Submit"}
          alertDialogContent={`Are you sure want to these changes ?`}
          handleClick={handleSubmit(onSubmit)}
          ButtonName={"Submit"}
        />
      </button>
    </div>
  );
}
