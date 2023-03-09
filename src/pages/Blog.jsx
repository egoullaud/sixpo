import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import BlogCard from '../components/BlogCard'
import BlogCategory from '../components/BlogCategory'

function Blog() {
  return (
    <div>
      <NavBar/>
      <div className='flex bg-gradient-to-t from-[#bcf0ff]  '>
   
         
         
          <BlogCategory/>
        </div>
        <div className='w-[80%]  flex flex-col justify-start items-center'>
          <h1 className='font-bold text-center text-5xl mt-[4rem]'>Articles</h1>
          <BlogCard/>
          </div>
      
      
      <Footer/>
    </div>
  )
}

export default Blog
