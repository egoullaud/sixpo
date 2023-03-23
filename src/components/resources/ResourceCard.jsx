import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const RESOURCES_CATEGORIES_QUERY = `
{
    resourceCategories {
      id
      slug
      title
      resources {
        id
        slug
        title
        url
        image {
          url
        }
        content {
          html
        }
      }
    }
  }
`;
const RESOURCES_QUERY = `
{
    resources {
      id
      slug
      title
      url
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
    }
  }

`;

function ResourceCard() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(
      "https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: RESOURCES_QUERY }),
      }
    )
      .then((response) => response.json())
      // .then(data=>console.log(data.data.resources))
      .then((data) => setResources(data.data.resources));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {resources.map((resource) => (
        <div
          className="bg-white my-2 rounded shadow-lg flex flex-col items-center justify-evenly
                             w-[90%] 
                             md:flex-row
                             lg:w-[75%]"
          key={resource.id}
        >
          <img
            className="rounded 
                      md:w-[35%]
                      lg:w-[20%] max-h-56 m-2"
            src={resource.image.url}
            alt={resource.image.altText}
          />

          <div
            className="flex flex-col items-center text-center mb-4 w-[90%]
                                  md:text-left md:mr-4 md:w-[60%] md:items-start
                                  "
          >
            <h3
              className=" font-bold mx-4 mt-2 text-2xl
                                 md:text-left
                                lg:mt-6 
                                "
            >
              {resource.title}
            </h3>
            <a href={resource.url} target="_blank" className="">
              {" "}
              <h4
                className=" text-blue-600  font-semibold mx-4 mt-2 
                                md:text-lg  md:text-left
                                "
              >
                {" "}
                Visit Website
              </h4>
            </a>
            <p
              className="text-base mx-4 my-2 text-center
                       md:text-left"
              dangerouslySetInnerHTML={{ __html: resource.content.html }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceCard;
