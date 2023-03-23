import React from "react";
import ResourceCard from "../components/resources/ResourceCard";

function Resources() {
  return (
    <div className="flex flex-col  bg-black bg-opacity-70 pb-[10rem]  ">
      <h1
        className="font-bold w-[100%] text-white text-center my-[5rem] text-3xl
     md:text-5xl"
      >
        Resources
      </h1>
      <section className="flex ">
        <ResourceCard />
      </section>
    </div>
  );
}

export default Resources;
