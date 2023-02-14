import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import eventHero from '../assets/disabled-rep-flag.jpg'
import festivalPhoto from '../assets/Delone-Kelsey.jpg'
import Form from '../components/Form.jsx'

function Events() {
  return (
    <div>
      <NavBar/>
      <section className='flex'>
        <div className='lg:w-[35%] lg:h-[80vh] md:w-1/4 z-0 bg-black bg-opacity-50'>

          <h1 className='font-bold md:text-3xl lg:text-5xl text-white my-[50%] md:mx-[1rem] lg:mx-[3rem]'>
            You're Invited! <br/> Join us at the SIXPO Festival April 2023</h1>

        </div>
        <div className='md:w-3/4 lg:w-[100%] lg:h-[80vh]'>
          <img className='lg:w-full lg:h-[80vh] md:h-full object-cover object-top' src={eventHero} alt="" />
        </div>
      </section>
      <section className='flex flex-col bg-white'>
        <div className=' flex justify-evenly md:items-center'>
          <div className='flex flex-col lg:w-[40%] md:w-[40%]'>
            <h2 className='font-bold text-2xl lg:text-5xl m-[2rem] underline'>Event Details</h2>
            <p className=' mx-[2rem] lg:text-xl'> <span className='font-bold lg:text-2xl'>Virtual:</span> April 1 - 19, 2023 <br/>
             <span className='font-bold lg:text-2xl'>In-person:</span> April 20 - 22, 2023 <br/>
             <span className='font-bold lg:text-2xl'>Cost:</span> By Donation<br/>
              </p>
            <p className='m-[2rem] lg:text-xl'> 
              <span className='font-bold'>Description: </span> 
              SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities, 
              in which we will discuss, reflect and learn together about all sorts of topics related to sexual 
              wellness! There will be panel discussions, speakers and workshops, with plenty of opportunities to 
              engage in conversations with peers and experts about a broad range of topics. Whether these types of
               conversations are brand new for you, or you are really confident in discussing sexuality, we will 
               have events that are right for you!
             </p>
             
          </div>
          <div className='flex items-center justify-evenly lg:w-[50%] md:w-[60%]'>
            <img className='m-[3rem] lg:w-[60%] md:w-[70%] rounded-md' src={festivalPhoto} alt="" />
          </div>
        </div>
      </section>
      <section className='flex justify-evenly bg-black  text-white  border-b-2 border-b-[#ff7070]'>
        <div className='flex flex-col justify-center items-center md:w-[50%] my-[3rem]'>
        
        <iframe 
        className='rounded-md md:w-[80%]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8509.420531012636!2d-123.10118997099245!3d49.25750888275255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673e3669ce3ad%3A0x7c84d4bd7f6028b3!2sHeritage%20Hall!5e0!3m2!1sen!2sca!4v1676149056413!5m2!1sen!2sca"
         width="600" 
         height="450" s
         tyle="border:0;" 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">

         </iframe>
         <div className='flex  justify-start m-5 w-[70%]'>
            <h2 className='font-bold text-2xl p-2 underline'>Location:</h2>
           <a target="_blank" href="https://www.google.com/maps/place/Heritage+Hall/@49.2572552,-123.1030644,17z/data=!3m2!4b1!5s0x548673e3716e6ddd:0xff07acb7c8760d7d!4m6!3m5!1s0x548673e3669ce3ad:0x7c84d4bd7f6028b3!8m2!3d49.2572552!4d-123.1008704!16s%2Fm%2F0n9gps0"> 
           <p className='px-5 hover:underline hover:transition-all hover:duration-500'>
                Heritage Hall <br/>
                3102 Main Street, <br/>
                Vancouver, BC V5T 3G7</p></a> 
            </div>
        </div>
        <div className='md:w-[50%] p-[3rem] lg:w-[30%]'>

          <Form/>
        </div>

      </section>



      <Footer/>
    </div>
  )
}

export default Events
