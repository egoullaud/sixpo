import React, { useEffect, useState } from 'react'
import BlogSearchResults from './BlogSearchResults'


const BLOG_CATEGORY_SEARCH_QUERY =`
{
blogCategories {
    id
    slug
    title
    posts {
      id
      preview
      slug
      title
      datePublished
      authors {
        name
      }
      image {
        url
      }
    }
  }
}
`


function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // let slug = searchTerm.split('').join('-').toLowerCase()

        setSearchResults([])
        fetch('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({query: BLOG_CATEGORY_SEARCH_QUERY})
        }).then(response=> response.json())
        .then(data =>console.log(data.data.searchResults))
        setSearchTerm("")


        // fetch('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master')
    }
    
// useEffect(() => {
//     fetch('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master', {
//         method: "POST",
//         headers: {"Content-Type" : "application/json"},
//         body: JSON.stringify({query: BLOG_CATEGORY_SEARCH_QUERY})
//     }).then(response=> response.json())
//     .then(data =>console.log(data.data.searchResults))
//     // .then(data => setSearchResults(data.data.searchResults))
// }, []);
   
  return (
    <div>
      <form onSubmit={onSubmit}>
          <input type="text" 
          placeholder='search blog'
          value={searchTerm}
          onChange={handleChange} 
          className='border-[2px] border-gray-500 rounded-lg text-center p-2 text-lg active:border-[#ff5b5b]'/>
          <input type="submit" className='hidden'/>
        </form>
        <BlogSearchResults searchResults={searchResults}/>
    </div>
  )
}

export default SearchBar
