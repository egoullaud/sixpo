import React, { useEffect, useState } from 'react'
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
    <div className='w-[20%] border-r-[1px] border-r-black'>
        
         <h1 className='my-[2rem] text-center'>search bar</h1>
        
        {blogCategories.map((blogCategory) =>
        {return (
            <h1 className='font-semibold text-center text-xl py-2 border-t-[1px] border-t-black mx-1'>{blogCategory.title}</h1>
        )}
        )}
      </div>
   
  )
}

export default BlogCategory
