import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import BlogCard from '../components/BlogCard'

function Blog() {
  return (
    <div>
      <NavBar/>
      <div className='flex bg-gradient-to-t from-[#bcf0ff]'>
        <div className='w-[20%]'>
          <h1 className='font-bold text-center text-xl my-4'>Categories</h1>
          {/* add category query */}
        </div>
        <div className='w-[80%]  flex flex-col justify-start items-center'>
          <h1 className='font-bold text-center text-3xl my-4'>Articles</h1>
          <BlogCard/>
          </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Blog
