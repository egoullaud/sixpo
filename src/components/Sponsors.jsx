import React from 'react'
import baci from '../assets/BACI.png'
import canLogo from '../assets/CANlogo_sml.jpg'
import creativeBC from '../assets/Creative-BC-Logo-Banner-1.jpg'
import options from '../assets/options.png'
import posabilities from '../assets/posabilities.png'
import realTalk from '../assets/real-talk.png'

function Sponsors() {
  return (
    <aside className=' border-b-gray border-b-2 '>
      <h1 className='text-2xl font-bold m-4 w-full '>Our Sponsors and Partners:</h1>
      <ul className='flex justify-evenly items-center lg:h-[12vh] my-6'>
        <li className='flex lg:w-[10%] lg:h-[5vh] md:w-1/6 mx-1 justify-center'><a href="https://gobaci.com/" target="_blank"><img className='w-full' src={baci} alt="Burnaby Association for Community Inclusion" /></a></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><a href="https://www.canbc.org/" target="_blank"><img src={canLogo} alt="Citizens for Accessible Neighbourhoods logo" /></a></li>
        <li className='lg:w-[10%] md:w-1/6 mx-1'><a href="https://www.creativebc.com/" target="_blank"><img src={creativeBC} alt="Creative BC Logo" /></a></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><a href="https://www.optionsforsexualhealth.org/" target="_blank"><img src={options} alt="Options for Sexual Health Logo" /></a></li>
        <li className='lg:w-[12%] md:w-1/6 mx-1'><a href="https://www.posabilities.ca/" target="_blank"><img src={posabilities} alt="Posabilities Logo" /></a></li>
        <li className='lg:w-[10%] md:w-1/6 mx-1'><a href="https://www.real-talk.org/" target="_blank"><img src={realTalk} alt="Real Talk: Free, Accessible Sexual Health Education Logo" /></a></li>
      </ul>
    </aside>
  )
}

export default Sponsors
