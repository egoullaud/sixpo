import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import heartBg from '../assets/heart.png'
function Resources() {
  return (
    <div className=''>
      <NavBar/>
      <section>
        <div className='relative z-0 mt-[10rem]'>
          <img className='w-[80%] mx-auto' src={heartBg} alt="" />
          <div className='absolute md:top-[30%]'>
              <h1>Resources</h1>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Resources
