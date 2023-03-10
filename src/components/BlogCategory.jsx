import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom'

const BLOG_CATEGORY_QUERY = `

{
    blogCategories {
      id
      slug
      title
    }
  }
`
function BlogCategory() {
const [blogCategories, setBlogCategories] = useState([]);

useEffect(() => {
    fetch('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master', {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({query: BLOG_CATEGORY_QUERY})
    }).then(response=> response.json())
    // .then(data =>console.log(data.data.blogCategories))
    .then(data => setBlogCategories(data.data.blogCategories))
}, []);

  return (
    <div className='w-[20%] border-r-[1px] border-r-black bg-white pt-[4rem]'>
        
        {/* <div className='flex items-center justify-center my-[2rem]'>
            <SearchBar/>
        </div>  */}
        
        {blogCategories.map((blogCategory) =>
        {return (
            <ul key={blogCategory.id} >
           <Link to={"/posts/"+blogCategory.slug}>
                <li
                 className='font-semibold text-center text-xl py-2 border-t-[1px] border-t-black mx-1' >
                    {blogCategory.title}</li>

           </Link>
           </ul>
           
        )}
        )}
      </div>
   
  )
}

export default BlogCategory

