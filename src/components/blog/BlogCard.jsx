import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

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
`;

function BlogCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: POSTS_QUERY }),
      }
    )
      .then((response) => response.json())
      // .then(data=>console.log(data.data.posts))
      .then((data) => setPosts(data.data.posts));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {posts.map((post) => (
        <div
          className="bg-white rounded shadow-md flex flex-col items-center justify-center
                             w-[90%] 
                             md:w-[90%] 
                             lg:flex-row lg:w-[80%]"
          key={post.id}
        >
          <Link
            className="w-[100%] object-cover lg:ml-4
                                    lg:w-[50%] xl:m-4"
            to={"/blog/" + post.slug}
          >
            <img
              className="rounded max-h-56"
              src={post.image.url}
              alt={post.image.altText}
            />
          </Link>
          <div
            className="flex flex-col text-center mr-4 mb-4
                                  md:text-left"
          >
            <h3
              className=" w-[90%]  font-bold mx-4 mt-2 
                                lg:mt-6 md:text-xl
                                lg:text-2xl"
            >
              {post.title}
            </h3>
            <h4 className="font-semibold mt-3 mx-4">
              {/* map over authors array */}
              {post.authors?.map((author) => {
                return `${author.name}`;
              })}{" "}
              | {moment(post.datePublished).format("MMM DD, YYYY")}{" "}
            </h4>
            <p className="text-base mx-4 my-2">
              {post.preview}{" "}
              <Link className="font-semibold mx-1" to={"/blog/" + post.slug}>
                <button className="underline hover:font-bold transition-all duration-700">
                  Read More
                </button>
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
