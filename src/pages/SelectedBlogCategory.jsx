import React from 'react'
import BlogCategory from '../components/BlogCategory'
import SelectedBlogCatCard from '../components/SelectedBlogCatCard'

const SELECTED_BLOG_CATEGORY_QUERY =`
{
  blogCategories {
    slug
    title
    posts {
      id
      slug
      title
      preview
      datePublished
      image {
        url
      }
      authors {
        name
      }
    }
  }
}

`


function SelectedBlogCategory() {
  return (
    <div className='flex bg-black bg-opacity-70  '>
        <div className='hidden bg-white  m-[1rem] rounded shadow-lg
            md:w-[20%] md:flex md:justify-center'>
            <BlogCategory/>
            </div>
      
      <div className='w-[80%]  flex flex-col justify-start items-center mb-[5rem]'>
          <h1 className='font-bold text-center my-[4rem] mx-[1rem] text-white text-4xl
                        md:text-5xl'>Welcome to our blog!</h1>
        <SelectedBlogCatCard/>
        </div>
  </div>
  )
}

export default SelectedBlogCategory
