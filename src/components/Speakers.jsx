import React, { useEffect, useState } from "react";

const SPEAKERS_QUERY = `
{
    speakers {
      id
      name
      image {
        url
        altText
      }
      url
      description
    }
  }
`;

function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch(
      "https://ca-central-1.cdn.hygraph.com/content/cleeq0yjw61mv01uo3jtbetgq/master",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: SPEAKERS_QUERY }),
      }
    )
      .then((response) => response.json())
      // .then(data=>console.log(data.data.posts))
      .then((data) => setSpeakers(data.data.speakers));
  }, []);

  return (
    <div
      className="flex flex-col items-start my-4
    lg:flex-row
    "
    >
      {speakers.map((speaker) => (
        <div
          className="flex flex-col justify-center items-center m-4 
        lg:justify-center"
          key={speaker.id}
        >
          <img
            className="rounded w-[90%]
            md:w-[50%]
            lg:w-[100%] lg:max-h-64 lg:object-cover lg:object-top"
            src={speaker.image.url}
            alt={speaker.image.altText}
          />
          <h2 className="font-bold text-xl my-2">{speaker.name}</h2>
          <a href={speaker.url} target="_blank">
            <h2 className="text-lg text-blue-600">Visit their website</h2>
          </a>
          <p
            className="w-[90%] my-2
           md:text-lg md:w-[75%]
           lg:w-[90%] lg:text-center"
          >
            {speaker.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Speakers;
