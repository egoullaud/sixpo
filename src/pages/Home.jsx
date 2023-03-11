import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import heroImg from '../assets/disabled-line.jpg'
import { Link } from 'react-router-dom'
import Sponsors from '../components/Sponsors'
import community from '../assets/community.jpg'
import splitScreen from '../assets/splitscreen.png'
import HomeCards from '../components/HomeCards'

function Home() {
  return (
    <div >
     
      <section id='home-page-hero'>
        <div className='relative z-0'>
        <a href="https://affecttheverb.com/disabledandhere/" target="_blank"> <img src={heroImg} alt="Six disabled people of color smile and pose in front of a concrete wall. 
        Five people stand in the back, with the Black woman in the center holding up a chalkboard sign reading `disabled and here.` A South Asian person in a wheelchair sits in front." /></a> 
        <div className='absolute inset-0 bg-black bg-opacity-40 z-10 h-[6vh]'>
          <h1 className='h-[6vh] flex items-center justify-center text-white text-center text-4xl'>
           Sexuality | Inclusion | Exploration</h1>
        </div>
        <div className='absolute bottom-0 bg-[#404344] bg-opacity-80 z-10 h-[4vh] w-[100%]'>
          <div className='flex justify-center text-white bold text-2xl'>
            <h2 className='uppercase font-semibold text-xl'> Join us at Sixpo Festival 2023 | <Link to='/events' className=' text-xl uppercase font-semibold hover:underlin hover:transition-all hover:duration-500 hover:text-[#ffef91] hover:font-bold'>Learn More</Link></h2>
          </div>
        </div>
        </div>
      </section>
      <Sponsors/>
      <section className='md:mx-[2rem] lg:mx-[5rem] lg:mt-[5rem] md:mt-[5rem]' id='sixpo-intro'>
      <div>
        {/* //section title */}
       
        <div className='flex justify-evenly items-center'>
          {/* //container  */}
          <div className='w-[40%] flex flex-col items-center p-4'>
            {/* about  */}
            <h3 className='mb-4 lg:text-3xl md:text-2xl font-bold'>What is Sixpo?</h3>
            <p className='text-center'>
            We are a non-profit organization for folks who want to learn more about sexuality, and especially for folks with a lived experience of disability and those who support them. Whether you have never gone on a date, or you feel like you are a sexual expert, Sixpo is for you!
            <br/> <br/>
           
            SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities to discuss, reflect and learn about sexual wellness!
            </p>
            <Link className='lg:w-[45%] flex justify-center' to='/about'><button className='m-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:transition-all hover:duration-500 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Learn More</button></Link>
          </div>
          <div className='lg:w-[30%] md:w-[50%]'>
           <a href="https://affecttheverb.com/gallery/disabledandhere/proudlyqtpoc/" target="_blank"> <img className='rounded-md m-5' src={community} alt="Five disabled people of color with canes, prosthetic legs, and a wheelchair sit on a rooftop deck, laughing and sharing stories. Greenery and city high-rises are visible in the background." /></a>
            {/* image */}
          </div>
          
        </div>
        <div>
            {/* call to action area */}
            
          </div>
      </div>
      </section>  
      <section className=' bg-gradient-to-t from-[#bcf0ff] py-[10vh]'>
        
      <HomeCards/>
      </section> 
   
     
    </div>
  )
}

export default Home
