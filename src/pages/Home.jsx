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
      <NavBar/>
      <section id='hero'>
        <div className='relative z-0'>
          <img src={heroImg} alt="/" />
        <div className='absolute inset-0 bg-black bg-opacity-40 z-10 h-[6vh]'>
          <h1 className='h-[6vh] flex items-center justify-center text-white text-center text-4xl'>
           Sexuality | Inclusion | Exploration</h1>
        </div>
        <div className='absolute bottom-0 bg-[#404344] bg-opacity-80 z-10 h-[4vh] w-[100%]'>
          <div className='flex justify-center text-white bold text-2xl'>
            <h2> Join us at Sixpo Festival 2023 <Link to='/events' className='underline text-xl'>Learn More</Link></h2>
          </div>
        </div>
        </div>
      </section>
      <Sponsors/>
      <section className='md:mx-[2rem] lg:mx-[5rem]' id='sixpo-intro'>
      <div>
        {/* //section title */}
       
        <div className='flex justify-evenly items-center'>
          {/* //container  */}
          <div className='w-[40%] flex flex-col items-center p-4'>
            {/* about  */}
            <h1 className='mb-4 lg:text-3xl font-bold'>What is Sixpo?</h1>
            <p className='text-center'>information about sixpo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, voluptatibus <br/> <br/>
            SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities to discuss, reflect and learn about sexual wellness!
            </p>
            <Link className='w-[45%] flex justify-center' to='/about'><button className='m-4 py-2 px-4 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Learn More</button></Link>
          </div>
          <div className='w-[30%]'>
            <img className='rounded-md m-5' src={community} alt="" />
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
   
      <Footer/>
    </div>
  )
}

export default Home
