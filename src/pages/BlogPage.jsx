import React, {useState, useEffect} from 'react'
import moment from 'moment'
import BlogCategory from '../components/BlogCategory'


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
          altText
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
     <div className='flex flex-col bg-black bg-opacity-70 '>
       
           <h1 className='font-bold text-center my-[4rem] mx-[1rem] text-white text-4xl
                        md:text-5xl'>Welcome to our blog!</h1>
          <div className='flex mb-[10rem]'>
            <div className='hidden bg-white  mx-[1rem] rounded shadow-lg
                  md:w-[20%] md:flex md:justify-center'>
                  <BlogCategory/>
            </div>
          
        
      <main className='
         flex flex-col justify-start items-center w-[100%]
         md:w-[80%] '>
          
        <section className='flex items-center justify-center'>
            {posts.map((post) =>(
              <div 
              className='bg-white rounded shadow-md flex flex-col items-center justify-center 
               w-[100%] 
               md:w-[90%] 'key={post.id}>
                    <img className='w-[95%]  object-cover rounded m-4'  src={post.image.url} alt={post.image.altText} />
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
                    <div key={author.id} 
                         className='bg-slate-100 rounded-md mx-4 mb-[2rem]
                              '>
                       <h1 className='font-bold text-3xl text-center pt-[1rem]
                              '>
                        About the Author</h1>
                        <div className='flex flex-col items-center justify-center 
                                '>
                            <div className='flex flex-col items-center mx-[3rem] mt-[1rem]
                            lg:ml-4 lg:mx-0 '>
                                <img className='rounded-full w-[75%] md:w-[45%] lg:w-[30%]' src={author.image.url}></img>
                                <h1 className='font-normal text-2xl'>{author.name}</h1>
                            </div>
                            <div>
                                <p className='text-left m-4' dangerouslySetInnerHTML={{__html:author.content.html}}></p>
                            </div>
                        </div>
                    </div>
                    ))}   
                </div>
            </div>
          ))} 
        </section>
      </main>
    </div>
    </div>
      )
  }



export default BlogPage
