import React from 'react'
import coupleBW from '../assets/sixpo-couple-backs.jpg'
import coupleSmile from '../assets/couple-smile.jpg'
import handHold from '../assets/hand-hold.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
     
      <section>
        <div className='relative z-0'>
          <img className='' src={coupleBW} alt="black and white picture of a man and woman sitting on a blanket in the grass with their backs to the camera and the woman's arm wrapped lovingly around the back of her partner." />
          <div className='absolute left-0 bg-black bg-opacity-60 z-10 w-[100%]
          top-[15%] h-[22vh]
          md:top-[30%] md:h-[25vh]
           lg:top-[35%] lg:h-[40vh]
          '>
            <div className='flex flex-col justify-center items-center 
            my-[1rem]
            md:my-[2rem]
            lg:my-[4rem] 
            '>
                <h1 className='text-white text-center font-bold  
                              text-base mx-1
                              md:text-2xl md:w-[80%]
                              lg:w-[60%] lg:text-4xl'>
                    SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities.</h1>
                <h2 className='hidden text-white text-center font-bold mt-[1rem]
                             md:block md:w-[65%]  md:text-base 
                              lg:w-[45%] lg:text-xl'>
                    Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo festival is for you!</h2>
                <Link className='flex justify-center items-center 
                              md:w-[25%]
                              lg:mt-[3rem]' 
                              to='/events'>
                    <button className='my-4  hover:bg-[#ff7070] hover:transition-all hover:duration-500 text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                              py-1 px-2 text-xs
                              md:py-2 md:px-4 
                              lg:px-8 lg:py-3 lg:text-lg'>
                    Join the Event</button>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col justify-evenly items-start
                md:flex-row'>
          <div className='hidden p-[3rem] 
                lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[50%]
           
            '>
              <img className='rounded-md
              lg:m-[4rem] lg:w-[90%] lg:h-auto' 
              src={coupleSmile} 
              alt="A disabled couple sit on a blanket in the grass smiling, 
              holding hands, and leaning their heads to touch together. The Black woman wears a read patterend headband, 
              dark green jacket and flower-printed skirt. The man wears a red shirt with the letter H printed in dark blue." />
              <img className='rounded-md 
              lg:w-[90%] lg:h-auto lg:m-[4rem]
              xl:hidden' 
              src={handHold} 
              alt="Close up of disabled couple holding hands with interlaced fingers. A Black woman wears a floral printed skirt, 
              and the man wears a red shirt with the letter H printed in dark blue." />
          </div>
          
          <div className='flex flex-col items-center 
          w-[100%]
          md:w-[50%] md:pt-[3rem]
          lg:m-[4rem] md:m-[1rem] lg:pt-[5rem] '>
              <h1 className='w-[90%] my-[2rem] text-black text-center font-bold 
                  text-base
                  md:text-xl
                  lg:text-2xl '> 
              SIXpo: Sexuality, Inclusion and eXploration is a three week virtual expo run by and for folks with disabilities. During the three 
              weeks we will host a number of online workshops, panels, presentations and discussions over zoom. </h1>
              <img className='rounded-md 
                  w-[60%]
                  mb-[2rem] md:h-auto
                  lg:hidden' 
                  src={coupleSmile} 
                  alt="A disabled man and woman sitting on a blanket in the grass smiling, 
                  holding hands and leaning their heads to touch together. The Black woman wears a read patterend headband, 
                  dark green jacket and flower-printed skirt. The man wears a red shirt with the letter H printed in dark blue." />
              <h2 className='mb-4 font-bold w-[100%] px-4
                   text-xl
                   md:text-xl
                   lg:text-2xl'> 
                  Who is behind Sixpo?
              </h2>
              <p className='w-[90%] text-left px-4'>SIXPO is the product of a lot of hard work by a bold, growing group of advocates, people working in the disability support sector, 
                sexual health professionals, and many more. This year’s festival has been made possible by a grant from Community Living BC, managed by Options for 
                Sexual Health with support from Building Caring Communities and Real Talk, and generous donations of time, money and other resources by: </p>
              <ul className='w-[75%] list-disc px-8 mb-[2rem]'>
                <li>PosAbilities</li>
                <li>Inclusion Powell River</li>
                <li>AbOUT</li>
                <li>Chronically Queer</li>
                <li>CAN BC</li>
                <li>Techlink </li>
              </ul>
              <img className='rounded-md 
                  w-[60%]
                  mb-[2rem] md:h-auto
                  lg:hidden' 
              src={handHold} 
              alt="Close up of disabled couple holding hands with interlaced fingers. A Black woman wears a floral printed skirt, 
              and the man wears a red shirt with the letter H printed in dark blue." />
              <h3 className='mb-4 font-bold w-[100%] px-4
                   text-xl
                   md:text-xl
                   lg:text-2xl'> 
              Who is Sixpo for?
              </h3>
              <p className='w-[90%] text-left px-4 mb-[1rem]
               md:text-lg
               lg:text-xl'>
              SIXpo is for folks who want to learn more about sexuality and especially for folks with lived experience of disability and 
              their support. Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo is for you! Wherever you are 
              in your relationship to sexuality, that is where you are supposed to be. We can all learn and explore a little more about sexuality, so come join!
              </p>
             
             <Link className='flex justify-center items-center 
              w-[60%]
              md:w-[35%] 
              lg:mt-[1rem]' 
              to='/events'>
              <button className=' mt-4 mb-[3rem] hover:transition-all hover:duration-500 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
              py-2 px-4
              md:py-2 md:px-4
              lg:px-8 lg:py-3 lg:text-lg'>
                       Join the Event</button></Link>
                       
          </div>
        </div>
      </section>
     

  
    
    </div>
  )
}

export default About
