import React from 'react'
import BlogCard from '../components/BlogCard'
import BlogCategory from '../components/BlogCategory'

function Blog() {
  return (
    <div className='flex'>

      <div className='flex w-[20%] bg-gradient-to-t from-[#bcf0ff]  '>
          <BlogCategory/>
        </div>
        <div className='w-[80%]  flex flex-col justify-start items-center'>
          <h1 className='font-bold text-center text-5xl mt-[4rem]'>Articles</h1>
          <BlogCard/>
          </div>
    </div>
  )
}

export default Blog
