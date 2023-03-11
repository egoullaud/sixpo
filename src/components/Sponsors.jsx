import React from 'react'
import baci from '../assets/BACI.png'
import canLogo from '../assets/CANlogo_sml.jpg'
import creativeBC from '../assets/Creative-BC-Logo-Banner-1.jpg'
import options from '../assets/options.png'
import posabilities from '../assets/posabilities.png'
import realTalk from '../assets/real-talk.png'

function Sponsors() {
  return (
    <div className=' border-b-gray border-b-2 '>
      <ul className='flex justify-evenly items-center lg:h-[12vh] my-6'>
        <li className='flex lg:w-[10%] lg:h-[5vh] md:w-1/6 mx-1 justify-center'><img src={baci} alt="Burnaby Association for Community Inclusion" /></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><img src={canLogo} alt="Citizens for Accessible Neighbourhoods logo" /></li>
        <li className='lg:w-[10%] md:w-1/6 mx-1'><img src={creativeBC} alt="Creative BC Logo" /></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><img src={options} alt="Options for Sexual Health Logo" /></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><img src={posabilities} alt="Posabilities Logo" /></li>
        <li className='lg:w-[10%] md:w-1/6 mx-1'><img src={realTalk} alt="Real Talk: Free, Accessible Sexual Health Education Logo" /></li>
      </ul>
    </div>
  )
}

export default Sponsors
