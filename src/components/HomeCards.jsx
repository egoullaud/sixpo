import React from 'react'
import eventImg from '../assets/SIXPO-Landing-Page-Banner-scaled.webp'
import optionsImg from '../assets/resourcesImg.jpg'
import blogImg from '../assets/blogImg.jpg'

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
                    <button className='mb-4 p-2 w-[45%] hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>Join us</button>
            </div>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md' id='EventCard'>
                 <img className='w-[90%] h-[13vh] m-4 rounded-md object-cover' src={blogImg} alt="" />
                    <h3 className='font-bold text-xl'>Our Blog</h3>
                     <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <button className='mb-4 p-2 w-[45%] hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>Visit Blog</button>
            </div>
            <div className='bg-white shadow-lg w-[30%] flex flex-col justify-center items-center m-4 rounded-md' id='EventCard'>
                 <img className='w-[90%] h-[13vh] m-4 rounded-md' src={optionsImg} alt="" />
                    <h3 className='font-bold text-xl'>Resources</h3>
                     <p className='m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Recusandae dicta, officia aperiam corporis qui, repellendus 
                        beatae aliquam aut laudantium quidem id, dolore quod. Esse, 
                        culpa?
                    </p>
                    <button className='mb-4 p-2 w-[45%] hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                        Learn More</button>
            </div>

        </div>
      
    </div>
  )
}

export default HomeCards
