import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';


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
        <div className='flex items-center justify-center mt-[5rem]'>
            {posts.map((post) =>(
                <div className='bg-white rounded shadow-md flex flex-col items-center justify-center w-[70%] mb-[5rem] 'key={post.id}>
                    <img className='w-[95%]  object-cover rounded m-4'  src={post.image.url} alt="picture here" />
                    <h3 className=' w-[90%] text-center font-bold mx-4 md:text-xl lg:text-2xl mt-6' >{post.title}</h3>
                    <h4 className='text-base mt-3' >
                        {/* map over authors array */}
                        {post.authors?.map((author) => 
                    {return (`${author.name}`)})}  | {moment(post.datePublished).format('MMM DD, YYYY')} </h4>
                    <p className='text-base mx-4 mt-4 text-center'  >{post.preview}</p>
                    <Link className='md:w-[45%] flex justify-center lg:mt-[1rem]' to={"/blog/"+post.slug}><button className='my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:transition-all hover:duration-500 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Continue Reading</button></Link>

            </div>

          
           
          ))} 

        

        </div>
        )
    }
  


export default BlogCard
