import React, { useEffect, useState } from "react";
import { request } from "graphql-request";

function Sponsors() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const { sponsors } = await request(
        "https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master",
        `
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
      );
      // console.log(sponsors);
      setSponsors(sponsors);
    };
    fetchSponsors();
  }, []);

  return (
    <div className="my-[2rem]">
      <h1
        className="font-bold m-4 text-center text-2xl
      lg:text-4xl"
      >
        Our Partners & Sponsors
      </h1>
      {sponsors.map((sponsor) => (
        <div
          className="grid grid-cols-2 justify-center items-center gap-2 mx-4
      md:grid-cols-5
      "
          key={sponsor.id}
        >
          {sponsor.resources?.map((resource) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
                key={resource.id}
              >
                <a href={resource.url} target="_blank">
                  {" "}
                  <img
                    className="w-[100%] max-h-20
            lg:max-h-48"
                    src={resource.image.url}
                    alt={resource.image.altText}
                  />
                  {/* <h1>{resource.title}</h1> */}
                </a>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
