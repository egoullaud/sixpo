import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import heartBg from '../assets/heart.png'
function Resources() {
  return (
    <div className=''>
      <NavBar/>
      <section>
     
        <div className='relative z-0'>
          <img className='w-[80%] mx-auto mt-[5rem]' src={heartBg} alt="" />
          
        </div>
        <div className='absolute md:top-[15%] w-[100%] mt-5'>
              <h1 className='md:text-5xl font-bold w-[100%] text-center'>Resources</h1>
          </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Resources
