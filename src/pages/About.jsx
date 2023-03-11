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
          <div className='absolute lg:top-[35%] md:top-[30%] left-0 bg-black bg-opacity-60 z-10 lg:h-[40vh] md:h-[25vh] w-[100%]'>
            <div className='flex flex-col justify-center items-center lg:my-[4rem] md:my-[2rem]'>
                <h1 className='text-white text-center lg:w-[60%] md:w-[80%] font-bold lg:text-4xl md:text-2xl'>
                    SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities.</h1>
                <h2 className='lg:w-[45%] md:w-[65%] text-white text-center font-bold lg:text-xl md:text-base mt-[1rem]'>
                    Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo festival is for you!</h2>
                <Link className='flex justify-center items-center md:w-[25%] lg:mt-[3rem]' to='/events'><button className='my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:bg-[#ff7070] hover:transition-all hover:duration-500 text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                       Join the Event</button></Link>
            </div>
          
          </div>
          
        </div>
      </section>
      <section>
        <div className='flex justify-evenly items-start'>
          <div className='flex flex-col w-[50%] p-[3rem]'>
          <img className='md:h-[50vh] lg:w-[90%] lg:h-auto rounded-md lg:m-[4rem] mb-[3rem]' src={coupleSmile} alt="A man and woman sitting on a blanket in the grass smiling, holding hands and leaning their heads to touch together. The Black woman wears a read patterend headband, dark green jacket and flower-printed skirt. The man wears a red shirt with the letter H printed in dark blue." />
          <img className='xl:hidden md:h-[50vh] lg:w-[90%] lg:h-auto rounded-md lg:m-[4rem] mb-[3rem]]' src={handHold} alt="Close up of interracial couple holding hands with interlaced fingers. The woman wears a floral printed skirt, and the man wears a red shirt with the letter H printed in dark blue." />
          </div>
          
          <div className='flex flex-col items-center md:w-[50%] lg:m-[4rem] md:m-[1rem] lg:pt-[5rem] md:pt-[3rem]'>
              <h1 className='w-[90%] text-black text-center font-bold lg:text-2xl md:text-xl my-[2rem]'> 
              SIXpo: Sexuality, Inclusion and eXploration is a three week virtual expo run by and for folks with disabilities. During the three 
              weeks we will host a number of online workshops, panels, presentations and discussions over zoom. </h1>
              <h2 className='w-[75%] lg:text-lg md:text-base mb-2 text-justify font-semibold xl:text-2xl'> 
              Our Mission
              </h2>
              <ul className='xl:w-[70%] list-disc'>
                <li>SIXpo is an expo with different presenters, events, activities, and experiences.</li>
                <li>SIXpo is based in Greater Vancouver, and welcomes people from around the world to our online platform.</li>
                <li>SIXpo brings together resources for sexual, physical, mental, and emotional health – and shares them with everyone. </li>
                <li>SIXpo is an accessible space to learn, discover, share knowledge, collaborate, and reflect.</li>
                <li>SIXpo is an inclusive space where all people are welcome – all bodies, minds, genders, cultures, and orientations – and we are particularly committed to welcoming people with disabilities. </li>
                <li>SIXpo celebrates the sexualities and identities of all people.</li>
                <li>SIXpo brings people together to build a movement in society.</li>
                <li>SIXpo is the first in an annual series.</li>
                <li>SIXpo helps all people realize their sexual potential.</li>
              </ul>
              <p className='w-[85%] lg:text-xl md:text-lg font-semibold text-center my-[2rem]'>
              SIXpo is for folks who want to learn more about sexuality and especially for folks with lived experience of disability and 
              their support. Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo is for you! Wherever you are 
              in your relationship to sexuality, that is where you are supposed to be. We can all learn and explore a little more about sexuality, so come join!
              </p>
             
             <Link className='flex justify-center items-center md:w-[35%] lg:mt-[1rem]' to='/events'><button className=' my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:transition-all hover:duration-500 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                       Join the Event</button></Link>
                       
          </div>
        </div>
      </section>
     

  
    
    </div>
  )
}

export default About
