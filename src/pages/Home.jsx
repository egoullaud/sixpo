import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import heroImg from '../assets/disabled-line.jpg'

function Home() {
  return (
    <div>
      <NavBar/>
      <div className=''>
    <img src={heroImg} alt="/" />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
