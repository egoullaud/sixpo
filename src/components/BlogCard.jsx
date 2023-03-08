import React from 'react'
import {useQuery} from '@apollo/client'
import { GET_BLOG_POSTS } from '../graphql/Queries'

function BlogCard() {
    const {loading, error, data} = useQuery(GET_BLOG_POSTS);
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error Message</p>
    if (!loading) {
        console.log(data.blogPosts)
        return(
        <div>
            {data.blogPosts.title}
        </div>
        )
    }
  
}

export default BlogCard
