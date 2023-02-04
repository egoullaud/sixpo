import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import heroImg from '../assets/disabled-line.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <NavBar/>
      <div >
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
      <Footer/>
      </div>
    </div>
  )
}

export default Home
