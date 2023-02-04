import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sixpo-logo.png'

function Footer() {
    // !add responsive functionality
  return (
    <div className='flex justify-between items-center bg-black text-white h-[13vh] px-2'>
      <div className='w-[15%] items-center'>
           <Link to='/'><img src={logo} alt="/" /> </Link> 
      </div>
        <div className='w-[85%]'>
            <p className='text-center p-4 text-sm'> Members of SIXPO respectfully acknowledge that we live, learn and gather on the unceded, traditional and ancestral territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh Úxwumixw (Squamish), səl̓ilw̓ətaʔɬ (Tsleil-Waututh) the Katzie, Kwantlen, Kwikwetlem, Qayqayt and Tla'amin Nations.
            </p>
            <p className='text-center text-xs'>Copyright Lee Goullaud 2023</p>
        </div>
      </div>
    
  )
}

export default Footer
