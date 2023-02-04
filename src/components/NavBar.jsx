import React from 'react'
import logo from '../assets/sixpo-logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
// !add drawer function
  return (
    <div>
        <div className='flex h-[13vh] px-4 bg-black text-white '>
            <ul className='flex justify-evenly items-center uppercase w-[100%]'>
                <li><Link to='/about'>About Us</Link></li> 
                <li><Link to='/events'>Events</Link></li>
                <li className='lg:w-[9%] md:w-[15%]'>
                    <Link to='/'> 
                        <img className='w-[100%] justify-center items-center' src={logo} alt="/" />
                    </Link>
                   
                </li>
                <li><Link to='/blog'>Our Blog</Link></li>
                <li><Link to='/resources'>Resources</Link></li>
            </ul>
        </div>
  
    </div>
  )
}

export default NavBar
