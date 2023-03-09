import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
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

function BlogPage() {
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
      <div>
        <NavBar/>
        <div className='flex bg-gradient-to-t from-[#bcf0ff]  '>
        <div className='w-[20%]'>
          <h1 className='font-bold text-center text-xl my-4'>Categories</h1>
          {/* add category query */}
        </div>
        <div className='w-[80%]  flex flex-col justify-start items-center'>
          <h1 className='font-bold text-center text-3xl my-4'>Articles</h1>
      <div className='flex items-center justify-center mt-[5rem]'>
          {posts.map((post) =>(
              <div className='bg-white rounded shadow-md flex flex-col items-center justify-center w-[90%] mb-[5rem] 'key={post.id}>
                  <img className='w-[95%]  object-cover rounded m-4'  src={post.image.url} alt="picture here" />
                  <h3 className=' w-[90%] text-center font-bold mx-4 md:text-xl lg:text-2xl mt-6' >{post.title}</h3>
                  <h4 className='text-base mt-3' >
                      {/* map over authors array */}
                      {post.authors?.map((author) => 
                  {return (`${author.name}`)})}  | {moment(post.datePublished).format('MMM DD, YYYY')} </h4>
                  <p className='text-base m-4 p-4 text-left ' dangerouslySetInnerHTML={{__html: post.content.html}}></p>
              
              {/* about the author */}
             
              <div>
              {post.authors?.map((author) => 
                  (
                   <div className=' bg-slate-100 p-5 rounded-md mx-[2rem] mb-[2rem]'>
                    <h1 className='font-bold text-3xl'>About the Author</h1>
                    <div className='flex flex-row  items-center justify-center '>
                      <div className='flex flex-col items-center'>
                      <img className='rounded-full w-[100%]' src={author.image.url}></img>
                      <h1 className='font-normal text-2xl my-4'>{author.name}</h1>
                      </div>
                      
                      <p className='p-[3rem] text-justify' dangerouslySetInnerHTML={{__html:author.content.html}}></p>

                    </div>
                    </div>
                  ))}   
              </div>

          </div>

        
         
        ))} 
        </div>
        </div>
      </div>
      <Footer/>
      </div>
      )
  }



export default BlogPage
