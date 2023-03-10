import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {request} from 'graphql-request'
import moment from 'moment'
import { Link } from 'react-router-dom';

function SelectedBlogCatCard() {
    const [blogCategory, setBlogCategory] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchBlogCategory = async () => {
        const { blogCategory } = await  
        request('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master', `
        {
            blogCategory(where: {slug: "${slug}"}) {
              posts {
                id
                preview
                image {
                  url
                }
                datePublished
                slug
                title
                authors {
                  name
                }
              }
            }
          }
        `
        );
        console.log(blogCategory);
        setBlogCategory(blogCategory);
    };
    fetchBlogCategory();
}, [slug]);

    
  return (
    <div>
     <div className='flex items-center justify-center mt-[5rem]'>
            {blogCategory.posts?.map((post) =>(
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
    </div>
  )
}

export default SelectedBlogCatCard
