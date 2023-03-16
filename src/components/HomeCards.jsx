import React from 'react'
import eventImg from '../assets/SIXPO-Landing-Page-Banner-scaled.webp'
import optionsImg from '../assets/resourcesImg.jpg'
import blogImg from '../assets/blogImg.jpg'
import { Link } from 'react-router-dom'

function HomeCards() {
  return (
    <div >
        <div className='flex 
        flex-col
        items-center
        md:items-start
        md:flex-row
        justify-evenly 
        lg:mx-[3rem]'>
            <div className='
            flex flex-col justify-center items-center m-3 rounded-md bg-white shadow-lg
            w-[90%]
            md:w-[33%] 
            lg:pb-[3rem]' id='EventCard'>
                <Link to='/events'>
                    <img className='w-[90%] m-4 md:h-[13vh] lg:h-[28vh] rounded-md object-cover' src={eventImg} alt="A black and white photo of a smiling woman caressing her fiance's face. the SIXpo logo stands in vibrant colors in the center foreground with the words `Coming Spring 2023` printed underneath." /></Link> 
                    <h5 className='font-bold text-lg md:text-xl lg:text-2xl lg:mt-[2rem]'>Sixpo Festival 2023</h5>
                     <p className='m-4 lg:mx-[3rem] text-center'>It's happening! Check out all the details about our upcoming Expo all about Sexuality, Inclusion, and Exploration for folx with disabilities!
                    </p>
                    <Link className='flex justify-center
                    md:w-[55%] 
                    lg:w-[65%] lg:mt-[1rem]' to='/events'>
                        <button className='m-4 text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
              py-2 px-4
              md:py-2 md:px-4 
              lg:px-8 lg:py-3 lg:text-lg 
              hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>
                        Join us</button></Link>
            </div>
            <div className='flex flex-col justify-center items-center my-3 rounded-md bg-white shadow-lg
            w-[90%]
            md:w-[33%] 
            lg:pb-[3rem]' id='EventCard'>
                <Link className='w-[100%]' to='/blog'><img className='w-[90%] m-4 md:h-[13vh] lg:h-[28vh] rounded-md object-cover' src={blogImg} alt="Close-up of a couple smiling and holding hands. The Black femme in the back wears compression gloves and looks lovingly at the non-binary Black person in the front, who sits in a power wheelchair. Photo attributed to Disabled and Here project." /></Link> 
                    <h5 className='font-bold text-lg md:text-xl lg:text-2xl lg:mt-[2rem]'>Our Blog</h5>
                     <p className='m-4 lg:mx-[3rem] text-center'>Check out our blog to learn more about SIXpo, our educators, and events!
                    </p>
                    <Link className='flex justify-center
                    md:w-[65%] 
                    lg:w-[65%] lg:mt-[1rem]' to='/blog'>
                        <button className='m-4 text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
              py-2 px-4
              md:py-2 md:px-4 
              lg:px-8 lg:py-3 lg:text-lg 
              hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>
                        Visit Blog</button></Link>
            </div>
            <div className='flex flex-col justify-center items-center m-3 rounded-md bg-white shadow-lg
            w-[90%]
            md:w-[33%] 
            lg:pb-[3rem]' id='EventCard'>
                <Link className='w-[100%]' to='/resources'><img className='w-[90%] m-4 md:h-[13vh] lg:h-[28vh] rounded-md object-cover' src={optionsImg} alt="A young couple sit on a stone wall holding hands with interlaced fingers. A building and trees are visible in the background and the photo has a yeloow-glow gradient from left to right. The Options Sexual health logo is shown in the middle of the photo with the words All About Choices to the left side. Below reads `Find all the information you are looking for so you can make the choices you want`. " /></Link> 
                    <h5 className='font-bold text-lg md:text-xl lg:text-2xl lg:mt-[2rem]'>Resources</h5>
                     <p className='m-4 lg:mx-[3rem] text-center'>We work diligently to provide you with up-to-date educational and crisis resources so you can learn more about sexuality, and find support.
                    </p>
                    <Link className='flex justify-center
                    md:w-[65%] 
                    lg:w-[65%] lg:mt-[1rem]' to='/resources'>
                        <button className='m-4 text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
              py-2 px-4
              md:py-2 md:px-4 
              lg:px-8 lg:py-3 lg:text-lg 
              hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>
                        Learn More</button></Link>
            </div>

        </div>
      
    </div>
  )
}

export default HomeCards
