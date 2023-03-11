import React, { useState } from 'react'
import logo from '../assets/sixpo-logo.png'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function NavBar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <nav className='flex justify-between items-center h-[13vh] bg-black text-white'>
        {/* <nav className='
        h-[13vh] 
        md:flex  md:h-[13vh] md:px-4 
        lg:h-[15vh] 
         bg-black text-white font-bold'> */}
            
            <h1 className='h-[13vh] w-[25%] flex  md:hidden '>
                <Link to='/'> 
                    <img className='w-[100%] m-2 justify-center items-center ' src={logo} alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below." />
                </Link>
            </h1>
            
            <ul className=' hidden 
            md:flex md:justify-center md:items-center uppercase w-[100%] pt-2 
            lg:py-5 lg:mx-[8rem]'>
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
        {/* </nav> */}
        {/* mobile navigation */}
        <div onClick={handleNav} className='block md:hidden mx-4 mb-2 z-10'>
                {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/> }
        </div>
        <div className={!nav ? 'fixed left-[-100%] h-full' : 'z-10 fixed left-0 top-0 bg-black h-full w-[60%] text-white border-r-2 border-gray-200 ease-in-out transition-all duration-500'}>
        <h1 className='h-[13vh] w-[40%] flex  md:hidden '>
                <Link to='/'> 
                    <img className='w-[100%] m-2 justify-center items-center ' src={logo} alt="SIXpo logo: a bright pink heart with the word SIXPO in yellow across the front and the word Festival printed in outlined letters below." />
                </Link>
            </h1>
        <ul className='flex flex-col items-start uppercase w-[100%] pt-2 lg:py-5 lg:mx-[8rem]'>
                <li className='my-1 p-2 w-[100%] border-b-2 border-gray-200 hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]'><Link  to='/about'>About Us</Link></li> 
                <li className='my-1 p-2 w-[100%] border-b-2 border-gray-200 hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]'><Link  to='/events'>Events</Link></li>
                <li className='my-1 p-2 w-[100%] border-b-2 border-gray-200 hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]'><Link  to='/blog'>Our Blog</Link></li>
                <li className='my-1 p-2 w-[100%] border-b-2 border-gray-200 hover:ease-in-out hover:duration-500 hover:underline hover:text-[#ffef91]'><Link  to='/resources'>Resources</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
