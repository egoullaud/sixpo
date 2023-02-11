import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import coupleBW from '../assets/sixpo-couple-backs.jpg'
import coupleSmile from '../assets/couple-smile.jpg'
import handHold from '../assets/hand-hold.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <NavBar/>
      <section>
        <div className='relative z-0'>
          <img className='' src={coupleBW} alt="" />
          <div className='absolute lg:top-[35%] md:top-[30%] left-0 bg-black bg-opacity-60 z-10 lg:h-[40vh] md:h-[25vh] w-[100%]'>
            <div className='flex flex-col justify-center items-center lg:my-[4rem] md:my-[2rem]'>
                <h1 className='text-white text-center lg:w-[60%] md:w-[80%] font-bold lg:text-4xl md:text-2xl'>
                    SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities.</h1>
                <h2 className='lg:w-[45%] md:w-[65%] text-white text-center font-bold lg:text-xl md:text-base mt-[1rem]'>
                    Whether you have never gone on a date, or you feel like you are a sexual expert, SIXpo festival is for you!</h2>
                <Link className='flex justify-center items-center md:w-[25%] lg:mt-[3rem]' to='/events'><button className='my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                       See Event Info</button></Link>
            </div>
          
          </div>
          
        </div>
      </section>
      <section>
        <div className='flex justify-evenly items-start'>
          <div className='flex flex-col w-[50%] p-[3rem]'>
          <img className='md:h-[50vh] lg:w-[90%] lg:h-auto rounded-md lg:m-[4rem] mb-[3rem]' src={coupleSmile} alt="" />
          <img className='lg:hidden md:h-[50vh] rounded-md lg:m-[4rem]' src={handHold} alt="" />
          </div>
          
          <div className='flex flex-col items-center md:w-[50%] lg:m-[4rem] md:m-[1rem] lg:pt-[5rem] md:pt-[3rem]'>
              <h1 className='w-[90%] text-black text-center font-bold lg:text-2xl md:text-xl my-[2rem]'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iste culpa explicabo odio provident soluta 
                  et, eaque dicta atque ipsam obcaecati error fugiat minima voluptatum porro vero iure, ullam numquam adipisci?</h1>
              <p className='w-[75%] lg:text-lg md:text-base my-[2rem] text-justify'> 
                Officia rerum dolores facilis esse provident eum optio dicta delectus excepturi veniam doloremque molestiae 
                accusamus reiciendis, repellat non eos saepe. Quidem voluptatum sunt adipisci atque quae amet vero, hic, nobis, 
                distinctio quam aspernatur iure officiis ex quis consectetur eius rem quas ipsam fuga soluta maiores recusandae 
                voluptatibus. Quaerat doloribus illum debitis!  Dolor harum 
                natus non sunt maxime blanditiis hic, possimus nulla voluptas delectus voluptatibus dolore ratione aperiam magni
                  at repellendus eveniet sapiente iste maiores sint, odio nostrum dignissimos! Optio, minima! Exercitationem, 
                  excepturi!
              </p>
              <p className='w-[85%] lg:text-xl md:text-lg font-semibold text-center my-[2rem]'>
              Similique modi aliquam quisquam, quidem fuga neque aut officia 
                impedit ullam nemo deserunt suscipit reiciendis corrupti itaque pariatur doloremque ipsa tempora alias
                 veritatis temporibus deleniti! Rerum ea molestias et eum provident illo eveniet ad, nostrum eius quisquam.
              </p>
             
             <Link className='flex justify-center items-center md:w-[35%] lg:mt-[1rem]' to='/events'><button className=' my-4 md:py-2 md:px-4 lg:px-8 lg:py-3 lg:text-lg hover:bg-[#ff7070] text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg'>
                       Join the Event</button></Link>
                       
          </div>
        </div>
      </section>
     

  
      <Footer/>
    </div>
  )
}

export default About
