import React from 'react'
import eventImg from '../assets/SIXPO-Landing-Page-Banner-scaled.webp'
import optionsImg from '../assets/resourcesImg.jpg'
import blogImg from '../assets/blogImg.jpg'
import { Link } from 'react-router-dom'

function HomeCards() {
  return (
    <div >
        <div className='flex justify-evenly lg:mx-[5rem]'>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md lg:pb-[3rem] ' id='EventCard'>
                 <img className='w-[90%] m-4 md:h-[13vh] lg:h-[28vh] rounded-md object-cover' src={eventImg} alt="" />
                    <h3 className='font-bold md:text-xl lg:text-2xl lg:mt-[2rem]'>Sixpo Festival 2023</h3>
                     <p className='m-4 lg:mx-[5rem] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <Link className='md:w-[45%]  flex justify-center lg:mt-[1rem]' to='/events'><button className='my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Join us</button></Link>
            </div>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md lg:pb-[3rem] ' id='EventCard'>
                 <img className='w-[90%] md:h-[13vh] lg:h-[28vh] m-4 rounded-md object-cover' src={blogImg} alt="" />
                    <h3 className='font-bold md:text-xl lg:text-2xl lg:mt-[2rem]'>Our Blog</h3>
                     <p className='m-4 lg:mx-[5rem] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <Link className='md:w-[45%] flex justify-center lg:mt-[1rem]' to='/blog'><button className='my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Visit Blog</button></Link>
            </div>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md lg:pb-[3rem] ' id='EventCard'>
                 <img className='w-[90%] md:h-[13vh] lg:h-[28vh] m-4 rounded-md object-cover' src={optionsImg} alt="" />
                    <h3 className='font-bold md:text-xl lg:text-2xl lg:mt-[2rem]'>Resources</h3>
                     <p className='m-4 lg:mx-[5rem] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <Link className='md:w-[45%] flex justify-center lg:mt-[1rem]' to='/resources'><button className='my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Learn More</button></Link>
            </div>

        </div>
      
    </div>
  )
}

export default HomeCards
