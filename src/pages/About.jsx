import React from 'react'
import coupleBW from '../assets/sixpo-couple-backs.jpg'
import coupleSmile from '../assets/couple-smile.jpg'
import handHold from '../assets/hand-hold.jpg'
import { Link } from 'react-router-dom'
import Sponsors from '../components/Sponsors'

function About() {
  return (
    <div>
     {/* hero */}
      <section>
        <div className='relative z-0'>
          <img  src={coupleBW} alt="black and white picture of a man and woman sitting on a blanket in the grass with their backs to the camera and the woman's arm wrapped lovingly around the back of her partner." />
          <div className='absolute left-0 bg-black bg-opacity-60 z-10 w-[100%]
          top-[15%] h-auto
          md:top-[15%] md:h-auto
          lg:top-[14%] lg:h-auto
          xl:top-[23%] xl:h-auto
          '>
            <div className='flex flex-col justify-center items-center 
            my-[1rem]
            md:my-[2rem]
            lg:my-[4rem] 
            '>
                <h1 className='text-white text-center font-bold  
                              text-base mx-1
                              md:text-3xl md:w-[90%]
                              lg:w-[90%] lg:text-4xl'>
                    SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities.</h1>
                <h2 className='hidden text-white text-center font-bold mt-[1rem]
                             md:block md:w-[85%]  md:text-2xl 
                              lg:w-[85%] lg:text-2xl'>
                    Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo festival is for you!</h2>
                <Link className='flex justify-center items-center 
                              md:w-[25%] md:mt-[1rem]
                              lg:mt-[2rem]' 
                              to='/events'>
                    <button className='mt-4  hover:bg-[#ff7070] hover:transition-all hover:duration-500 text-white bg-[#ff5b5b] rounded-lg font-semibold shadow-lg
                              py-1 px-2 text-xs
                              md:py-2 md:px-4 md:text-xl
                              lg:px-8 lg:py-3 lg:text-2xl'>
                    Join the Event</button>
                </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* top paragraph */}
        <div className='flex flex-col justify-center items-center my-[2rem] md:mt-[5rem]'>
         
          <h1 className='w-[90%]  text-black text-center font-bold 
                  text-base
                  md:text-xl
                  lg:text-4xl lg:leading-loose '> 
              SIXpo: Sexuality, Inclusion and eXploration is a three week virtual expo run by and for folks with disabilities. During the three 
              weeks we will host a number of online workshops, panels, presentations and discussions over zoom. 
            </h1>
            <Link className='flex justify-center items-center 
                          w-[60%]
                          md:w-[60%] 
                          mt-[1rem]
                          ' 
                          to='/events'>
                      <button className=' hover:transition-all hover:duration-500 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                          py-2 px-4
                          md:py-2 md:px-4
                          lg:px-8 lg:py-3 lg:text-lg'>
                            Join the Event</button>
                  </Link>
        </div>

        
          {/* who is sixpo? */}
          <div className='flex items-center justify-center
                    w-[100%]
                    md:w-[95%] md:flex-row md:pt-[3rem]
                    lg:m-[4rem] md:m-[1rem] lg:pt-[5rem] '>
              <div className='flex flex-col  items-center justify-center 
              md:flex-row'>
                  <img className='rounded-md w-[80%] m-[2rem]
                  md:w-[40%] md:m-[2rem]
                          ' 
                          src={coupleSmile} 
                          alt="A disabled man and woman sitting on a blanket in the grass smiling, 
                          holding hands and leaning their heads to touch together. The Black woman wears a read patterend headband, 
                          dark green jacket and flower-printed skirt. The man wears a red shirt with the letter H printed in dark blue." />
                
              <div>
              <div className='flex flex-col items-center'>
                <h3 className='my-4 font-bold px-4
                   text-xl
                   md:text-xl
                   lg:text-4xl'> 
                    Who is Sixpo for?
                </h3>
                <p className=' text-left px-4 mb-[1rem]
                md:text-lg
                lg:text-xl'>
                SIXpo is for folks who want to learn more about sexuality and especially for folks with lived experience of disability and 
                their support. Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo is for you! Wherever you are 
                in your relationship to sexuality, that is where you are supposed to be. We can all learn and explore a little more about sexuality, so come join!
                </p>
             
               
                </div>
                  
                
             
              </div>
            </div>  
             </div>
      {/* who is behind */}
             <div className='flex items-center justify-center
                    w-[100%]
                    md:w-[95%] md:flex-row md:pt-[3rem]
                    lg:m-[4rem] md:m-[1rem] lg:pt-[5rem] '>
              <div className='flex flex-col  items-center justify-center 
              md:flex-row'>
                  <img className='rounded-md w-[80%] m-[2rem]
                  md:w-[40%] md:m-[2rem]
                          ' 
                          src={handHold} 
                          alt="Close up of disabled couple holding hands with interlaced fingers. A Black woman wears a floral printed skirt, 
                          and the man wears a red shirt with the letter H printed in dark blue." />
                
              <div>
              <div className='flex flex-col items-center justify-center'>
                
                <h3 className='my-4 font-bold px-4
                   text-xl
                   md:text-xl
                   lg:text-4xl'> 
                  Who is behind Sixpo?
                </h3>
                <p className=' text-left px-4 mb-[1rem]
                      md:text-lg
                      lg:text-xl'>
                    SIXPO is the product of a lot of hard work by a bold, growing group of advocates, people working in the disability support sector, 
                    sexual health professionals, and many more. This year’s festival has been made possible by a grant from Community Living BC, managed by Options for 
                    Sexual Health with support from Building Caring Communities and Real Talk, and generous donations of time, money and other resources.
                </p>

                </div>
                  
                
             
              </div>
            </div>  
             </div>
       {/* sponsors */}
       <Sponsors/>
      </section>
     
      </div>
  
    
   
  )
}

export default About
