import React from 'react'
import eventImg from '../assets/SIXPO-Landing-Page-Banner-scaled.webp'
import optionsImg from '../assets/resourcesImg.jpg'
import blogImg from '../assets/blogImg.jpg'
import { Link } from 'react-router-dom'

function HomeCards() {
  return (
    <div className=''>
        <div className='flex'>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md' id='EventCard'>
                 <img className='w-[90%] m-4 rounded-md' src={eventImg} alt="" />
                    <h3 className='font-bold text-xl'>Sixpo Festival 2023</h3>
                     <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <Link className='w-[45%] flex justify-center' to='/events'><button className='mb-4 py-2 px-4 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Join us</button></Link>
            </div>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md' id='EventCard'>
                 <img className='w-[90%] h-[13vh] m-4 rounded-md object-cover' src={blogImg} alt="" />
                    <h3 className='font-bold text-xl'>Our Blog</h3>
                     <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <Link className='w-[45%] flex justify-center' to='/blog'><button className='mb-4 py-2 px-4 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Visit Blog</button></Link>
            </div>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md' id='EventCard'>
                 <img className='w-[90%] h-[13vh] m-4 rounded-md' src={optionsImg} alt="" />
                    <h3 className='font-bold text-xl'>Resources</h3>
                     <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <Link className='w-[45%] flex justify-center' to='/resources'><button className='mb-4 py-2 px-4 hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Learn More</button></Link>
            </div>

        </div>
      
    </div>
  )
}

export default HomeCards
