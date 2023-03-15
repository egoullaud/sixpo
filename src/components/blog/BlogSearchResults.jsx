import React from 'react'

function BlogSearchResults(props) {
  return (
    <div>
      <ul>
        {props.searchResults.map(posts => (
            <li key={posts.id}>
                <h4>{posts.title}</h4>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogSearchResults
