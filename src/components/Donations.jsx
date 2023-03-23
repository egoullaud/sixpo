import React from "react";

function Donations() {
  return (
    <div
      className="bg-black text-white flex flex-col justify-center items-center pt-10
                "
    >
      <h1
        className="text-2xl font-bold my-[1rem] text-center
                md:text-3xl
                lg:text-4xl"
      >
        Support Us
      </h1>

      <ul
        className="list-disc pb-2 text-center
            lg:mt-5"
      >
        Your donation allows us to continue to:
        <li className="w-[70%] mx-auto">
          Celebrate sexual health, love, and relationships
        </li>
        <li className="w-[70%] mx-auto">
          Pay our Self-Advocates for their hard work
        </li>
        <li className="w-[70%] mx-auto">
          Nurture and improve our festival and community
        </li>
      </ul>

      <a
        href="https://www.optionsforsexualhealth.org/impact/donate/"
        target="_blank"
      >
        <button
          className="m-4 text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
    py-2 px-4
    md:py-2 md:px-4 
    lg:px-8 lg:py-3 lg:text-lg lg:mt-10
    hover:transition-all hover:duration-500 hover:bg-[#ff7070]"
        >
          Make a Donation
        </button>
      </a>

      <p
        className="font-bold pb-2 text-center
     lg:mt-6"
      >
        {" "}
        Please include the word: "SIXPO" in the "Dedication" section at the
        bottom of the page before clicking "next" to make sure your contribution
        reaches us!
      </p>
      <p
        className="pb-2 text-center
        lg:my-5"
      >
        For in-kind donations or other collaboration ideas, please fill out our
        contact form.
      </p>
    </div>
  );
}

export default Donations;
