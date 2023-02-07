import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import coupleBW from '../assets/sixpo-couple-backs.jpg'
import coupleSmile from '../assets/couple-smile.jpg'
import handHold from '../assets/hand-hold.jpg'
function About() {
  return (
    <div>
      <NavBar/>
      <section >
        <div>
          <img className='' src={coupleBW} alt="" />
          
        </div>
      </section>
      <section className='pb-[5rem]'>
        <div className='flex flex-col justify-start w-[100%] items-start'>
          <h1 className='font-bold text-5xl m-[5rem]'>About us</h1>
        
        <div className='flex flex-row'>
          <div className=' '>     
           
              <h1 className='font-bold text-2xl text-center mb-4'>What is Sixpo?</h1>
              <p className='text-left '>
                SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with 
                disabilities, in which we will discuss, reflect and learn together about all sorts of topics 
                related to sexual wellness! There will be panel discussions, speakers and workshops, with plenty 
                of opportunities to engage in conversations with peers and experts about a broad range of topics. 
                Whether these types of conversations are brand new for you, or you are really confident in 
                discussing sexuality, we will have events that are right for you!
                </p>
          <img src={handHold} alt="" />

          </div>
          <div className=''>
           
              <h1 className='font-bold text-2xl text-center mb-4'>Who is Sixpo?</h1>
              <p className='text-right'>
              SIXPO is for folks who want to learn more about sexuality, and especially for folks with lived 
              experience of disability and those who support them. Whether you have never gone on a date, or you 
              feel like you are a sexual expert, SIXpo is for you! Wherever you are in your relationship to 
              sexuality, that is where you are supposed to be. We can all benefit from learning together and 
              exploring a little more about sexuality – so come join us!
              </p>
           
              <img src={coupleSmile} alt="" />
          </div>
          
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
