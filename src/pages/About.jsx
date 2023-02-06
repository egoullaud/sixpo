import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import coupleBW from '../assets/sixpo-couple-backs.jpg'
import yellowCircle from '../assets/yellow-circle.png'
import blueCircle from '../assets/blue-circle.png'
function About() {
  return (
    <div>
      <NavBar/>
      <section >
        <div>
          <img className='' src={coupleBW} alt="" />
          
        </div>
      </section>
      <section className='flex md:flex-row items-center justify-evenly h-[60vh]'>
        <div className='flex justify-evenly items-center'>
          <div className='flex justify-center items-center mx-5 w-[50%] '>     
            <img className='relative z-0' src={yellowCircle} alt="" />
            <div className='absolute lg:w-[25%] md:w-[35%]'>
              <h1 className='font-bold text-2xl text-center mb-4'>What is Sixpo?</h1>
              <p className='text-center lg:text-base md:text-sm'>
                SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with 
                disabilities, in which we will discuss, reflect and learn together about all sorts of topics 
                related to sexual wellness! There will be panel discussions, speakers and workshops, with plenty 
                of opportunities to engage in conversations with peers and experts about a broad range of topics. 
                Whether these types of conversations are brand new for you, or you are really confident in 
                discussing sexuality, we will have events that are right for you!
                </p>
              </div>

          </div>
          <div className='flex flex-col justify-center items-center mx-5 w-[50%]'>
            <img className='relative z-0' src={blueCircle} alt="" />
            <div className='absolute lg:w-[25%] md:w-[35%]'>
              <h1 className='font-bold text-2xl text-center mb-4'>Who is Sixpo?</h1>
              <p className='text-center lg:text-base md:text-sm'>
              SIXPO is for folks who want to learn more about sexuality, and especially for folks with lived 
              experience of disability and those who support them. Whether you have never gone on a date, or you 
              feel like you are a sexual expert, SIXpo is for you! Wherever you are in your relationship to 
              sexuality, that is where you are supposed to be. We can all benefit from learning together and 
              exploring a little more about sexuality – so come join us!
              </p>
            </div>
            
          </div>
          
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
