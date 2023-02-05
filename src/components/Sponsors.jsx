import React from 'react'
import baci from '../assets/BACI.png'
import canLogo from '../assets/CANlogo_sml.jpg'
import creativeBC from '../assets/Creative-BC-Logo-Banner-1.jpg'
import options from '../assets/options.png'
import posabilities from '../assets/posabilities.png'
import realTalk from '../assets/real-talk.png'

function Sponsors() {
  return (
    <div>
      <ul className='flex justify-evenly items-center lg:h-[12vh] my-6'>
        <li className='flex lg:w-[10%] lg:h-[5vh] md:w-1/6 mx-1 justify-center'><img src={baci} alt="" /></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><img src={canLogo} alt="" /></li>
        <li className='lg:w-[10%] md:w-1/6 mx-1'><img src={creativeBC} alt="" /></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><img src={options} alt="" /></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><img src={posabilities} alt="" /></li>
        <li className='lg:w-[10%] md:w-1/6 mx-1'><img src={realTalk} alt="" /></li>
      </ul>
    </div>
  )
}

export default Sponsors
