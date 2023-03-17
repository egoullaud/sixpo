import React, { useEffect, useState } from 'react'

const SPONSORS_QUERY=`
  {
  sponsors {
    resources {
      id
      title
      slug
      url
      content {
        html
      }
      image {
        url
      }
    }
  }
}
`

function Sponsors() {
  const [sponsors,setSponsors] = useState([]);

useEffect(() => {
    fetch('https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master', { 
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({query: SPONSORS_QUERY})
    }).then(response => response.json())
    // .then(data=>console.log(data.data.sponsors))
    .then(data =>setSponsors(data.data.sponsors))
},[]);

  return (
    <aside className=' border-b-gray border-b-2 '>
     {sponsors.resources?.map((resource) =>(
      <div key={resource.id}>
        <h1>{resource.title}</h1>
      </div>

     ))}
    </aside>
  )
}

export default Sponsors
