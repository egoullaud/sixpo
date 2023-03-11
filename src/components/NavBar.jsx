import React from 'react'
import logo from '../assets/sixpo-logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
// !add drawer function
  return (
    <div>
        <div className='flex md:h-[13vh] lg:h-[15vh] md:px-4 bg-black text-white font-bold'>
            <ul className='flex justify-center items-center uppercase w-[100%] pt-2 lg:py-5 lg:mx-[8rem]'>
                <li><Link className='lg:mx-[4rem] md:mx-[3rem] hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]' to='/about'>About Us</Link></li> 
                <li><Link className='lg:mx-[4rem md:mx-[3rem] hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]' to='/events'>Events</Link></li>
                <li className='lg:w-[11%] md:w-[15%]'>
                    <Link to='/'> 
                        <img className='w-[100%] justify-center items-center' src={logo} alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below." />
                    </Link>
                   
                </li>
                <li><Link className='lg:mx-[4rem] md:mx-[3rem] hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]' to='/blog'>Our Blog</Link></li>
                <li><Link className='lg:mx-[4rem] md:mx-[3rem] hover:transition-all hover:duration-500 hover:underline hover:text-[#ffef91]' to='/resources'>Resources</Link></li>
            </ul>
        </div>
  
    </div>
  )
}

export default NavBar
