import React from "react";
import heroImg from "../assets/disabled-line.jpg";
import { Link } from "react-router-dom";
import Sponsors from "../components/Sponsors";
import community from "../assets/community.jpg";
import HomeCards from "../components/HomeCards";
import Donations from "../components/Donations";
import Form from "../components/Form";

function Home() {
  return (
    <div>
      <section id="home-page-hero">
        <div className="relative z-0">
          <img
            src={heroImg}
            alt="Six disabled people of color smile and pose in front of a concrete wall. Five people stand in the back, with the Black woman in the center holding up a chalkboard sign reading `disabled and here.` A South Asian person in a wheelchair sits in front. Photo attributed to Disabled and Here project."
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10 h-[6vh]">
            <h1
              className="h-[6vh] flex items-center justify-center text-white text-center 
          md:text-3xl
          lg:text-3xl
          xl:text-3xl"
            >
              Sexuality | Inclusion | Exploration
            </h1>
          </div>
          <div className="absolute bottom-0 bg-[#404344] bg-opacity-80 z-10 h-[4vh] lg:h-[6vh] w-[100%]">
            <div className="flex justify-center items-center ">
              <h2
                className="uppercase text-white text-sm 
            md:text-lg md:py-2
            lg:py-2 lg:text-2xl"
              >
                {" "}
                Join us at Sixpo Festival 2023 |
                <Link
                  to="/events"
                  className=" lg:text-xl uppercase  hover:underline hover:transition-all hover:duration-500 hover:text-[#ffef91] hover:font-bold"
                >
                  Learn More
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section
        className="md:mx-[2rem] lg:mx-[3rem] lg:mt-[5rem] md:mt-[5rem]"
        id="sixpo-intro"
      >
        <section>
          {/* //section title */}

          <div className="flex flex-col md:flex-row justify-around items-center my-[2rem]">
            {/* //container  */}

            <div className=" w-[100%] md:w-[50%]  flex flex-col items-center  p-4">
              {/* about  */}

              <h3
                className=" font-bold
            text-xl mb-3
             md:text-3xl
             lg:text-5xl lg:mb-[4rem]"
              >
                What is Sixpo?
              </h3>
              <p
                className="text-justify md:text-left mb-[2rem] 
            lg:mx-[1rem]"
              >
                SIXPO is a festival organized by and for folks with
                disabilities, where we will discuss, reflect and learn together
                about all sorts of topics related to relationships and sexual
                wellness! There will be panel discussions, speakers and
                workshops, with plenty of opportunities to engage in
                conversations with peers and experts about a broad range of
                topics. Whether these types of conversations are brand new for
                you, or you are really confident in talking about sexuality, we
                have events that are right for you!
              </p>
              <Link
                className="md:w-[45%] lg:w-[65%] flex justify-center"
                to="/about"
              >
                <button
                  className=" text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4
                      md:py-2 md:px-4 
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:transition-all hover:duration-500 hover:bg-[#ff7070]"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div
              className="flex items-center justify-center 
          w-[80%] 
          md:w-[50%]
          lg:w-[48%]"
            >
              <img
                className="rounded-md m-5"
                src={community}
                alt="Five disabled people of color with canes, prosthetic legs, and a wheelchair sit on a rooftop deck, 
           laughing and sharing stories. Greenery and city high-rises are visible in the background. Photo attributed to Disabled and Here project."
              />
              {/* image */}
            </div>
          </div>
          <div>
            <section
              className="xl:text-5xl lg:text-5xl
       md:text-5xl md:py-[5rem]
       text-3xl py-[5rem]
         font-bold text-center w-[100%]"
            >
              <h2>Intimacy is for everyone.</h2>
            </section>
          </div>
        </section>
      </section>
      <section className=" bg-gradient-to-t from-[#bcf0ff] py-[5vh]">
        <HomeCards />
      </section>
      <Sponsors />
      <section
        className="bg-black flex flex-col items-center justify-center py-[5rem]
        lg:flex-row lg:items-start lg:px-4
        "
      >
        <div
          className="w-[90%] mb-[2rem]
          lg:mx-3  lg:w-[50%]"
        >
          <Donations />
        </div>
        <div
          className="w-[90%]
          md:w-[75%]
          lg:w-[50%]
          lg:px-[1rem]"
        >
          <h1
            className="text-2xl font-bold my-[1rem] text-center text-white
                md:text-3xl
                lg:text-4xl"
          >
            Contact Us
          </h1>
          <Form />
        </div>
      </section>
    </div>
  );
}

export default Home;
