import React, { useEffect, useState } from 'react'
import moment from 'moment'


const POSTS_QUERY = `

{
    posts {
      id
      slug
      title
      content {
        html
      }
       image {
        id
        url
      }
       category {
        id
        slug
        title
      }
      authors {
        name
        id
        content {
          html
        }
        image {
          id
          url
        }
      }
      datePublished
      preview
    }
  }
`


function BlogCard() {
  const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master', { 
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({query: POSTS_QUERY})
        }).then(response => response.json())
        // .then(data=>console.log(data.data.posts))
        .then(data =>setPosts(data.data.posts))
    },[]);


        return(
        <div className='flex items-center justify-center'>
            {posts.map((post) =>(
                <div className='bg-white rounded-md shadow-md flex flex-col items-center justify-center w-[70%] mb-[5rem]'key={post.id}>
                    <img className='w-[100%] object-cover'  src={post.image.url} alt="picture here" />
                    <h3 className=' w-[90%] font-bold mx-4 text-xl' >{post.title}</h3>
                    <h4 className='text-lg ' >
                        {/* map over authors array */}
                        {post.authors?.map((author) => 
                    {return (`${author.name}`)})}  | {moment(post.datePublished).format('MMM DD, YYYY')} </h4>
                    <p className='text-lg mx-4'  >{post.preview}</p>

            </div>

          
           
          ))} 

        

        </div>
        )
    }
  


export default BlogCard
