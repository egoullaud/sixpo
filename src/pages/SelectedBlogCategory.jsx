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
    <div className='flex bg-gradient-to-t from-[#bcf0ff] '>

    
        <BlogCategory/>
      
      <div className='w-[80%]  flex flex-col justify-start items-center'>
        <h1 className='font-bold text-center text-5xl mt-[4rem]'>Articles</h1>
        <SelectedBlogCatCard/>
        </div>
  </div>
  )
}

export default SelectedBlogCategory
