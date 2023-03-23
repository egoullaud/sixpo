import React from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogCategory from "../components/blog/BlogCategory";

function Blog() {
  return (
    <div className="flex flex-col bg-black bg-opacity-70">
      <h1
        className="font-bold text-center my-[4rem] mx-[1rem] text-white text-4xl
                        md:text-5xl"
      >
        Welcome to our blog!
      </h1>
      <div className="flex mb-[13rem]">
        <div
          className="hidden bg-white  mx-[1rem] rounded shadow-lg
              md:w-[20%] md:flex md:justify-center"
        >
          <BlogCategory />
        </div>

        <div
          className="flex flex-col justify-start items-center 
                        w-[100%]
                        md:w-[80%]
                        md:justify-center"
        >
          {/* <div className='flex bg-white w-[100%]'>
            <BlogCategory/>
          </div> */}
          <BlogCard />
        </div>
      </div>
    </div>
  );
}

export default Blog;
