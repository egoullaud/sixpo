import React from 'react'
import eventHero from '../assets/disabled-rep-flag.jpg'
import festivalPhoto from '../assets/Delone-Kelsey.jpg'
import Form from '../components/Form.jsx'

function Events() {
  return (
    <div>
      {/* hero */}
      <section className='flex'>
        <aside className='lg:w-[35%] lg:h-[80vh] md:w-1/4 z-0 bg-black bg-opacity-50'>

          <h1 className='font-bold md:text-3xl lg:text-5xl text-white my-[50%] md:mx-[1rem] lg:mx-[3rem]'>
            You're Invited! <br/> Join us at the SIXPO Festival April 2023</h1>

        </aside>
        <div className='md:w-3/4 lg:w-[100%] lg:h-[80vh]'>
         <img className='lg:w-full lg:h-[80vh] md:h-full object-cover object-top' 
         src={eventHero} 
         alt="Three Black and disabled folx (a non-binary person holding a cane, a non-binary person 
         sitting in a power wheelchair, and a femme sitting in a chair) look seriously at the camera while a rainbow pride 
         flag drapes on the wall behind them. Photo attributed to Disabled and Here project." />
        </div>
      </section>
      {/* event details */}
      <section className='flex flex-col bg-white my-[4rem]'>
        <div className=' flex justify-evenly 
                md:items-center'>
          <div className='flex flex-col  
                md:w-[60%]
                lg:w-[40%]'>
            <h2 className='font-bold text-2xl m-[2rem] underline
                lg:text-5xl'>
                  Event Details</h2>
            
            <p className=' mx-[2rem] lg:text-xl'> 
            <span className='font-bold lg:text-2xl'>Virtual:</span> April 1 - 19, 2023 <br/>
             <span className='font-bold lg:text-2xl'>In-person:</span> April 20 - 22, 2023 <br/>
             <span className='font-bold lg:text-2xl'>Cost:</span> By Donation<br/>
              </p>
            <p className='m-[2rem] lg:text-xl'> 
              <span className='font-bold'>Description: </span> 
              SIXPO (Sexuality, Inclusion and Exploration) is a festival organized by and for folks with disabilities. 
              In order to be as accessible as possible, the 2023 festival will be a hybrid model, meaning that some events will be online and 
              others will be in person. We hope to bring together a diverse group of people to discuss topics of sexuality in a supportive,
               collaborative and welcoming environment, and we hope you’ll join us!
            </p>
            <div className='flex justify-center'>
            <button className=' text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4
                      md:py-2 md:px-4 
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>Register</button>
            <button className='mx-10
             text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
             py-2 px-4
             md:py-2 md:px-4 
             lg:px-8 lg:py-3 lg:text-lg 
             hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>Learn More</button>
            <button className=' text-white bg-[#ff5b5b] rounded-lg font-bold shadow-lg
                      py-2 px-4
                      md:py-2 md:px-4 
                      lg:px-8 lg:py-3 lg:text-lg 
                      hover:transition-all hover:duration-500 hover:bg-[#ff7070]'>Donate</button>
            </div>
        
             
          </div>
          <div className='flex flex-col items-center justify-evenly 
                      md:w-[45%] md:items-start md:flex-row
                      lg:w-[50%]'>
            <img className='rounded-md  
                      p-4
                      md:w-[100%] 
                      lg:w-[60%] lg:m-[3rem]' 
            src={festivalPhoto} 
            alt="A man hugs his fiance while she smiles and tugs the bill of his hat." />
          </div>
        </div>
       
      </section>
      {/* what to expect */}
      <section>
        <div>
        <h3 className='font-bold text-2xl mx-[2rem]'>What to Expect</h3>
          <p className=' mx-[2rem] my-[1rem] text-xl'>You can expect a variety of vendors, presentations and workshops from a wide variety of organizations, experts and advocates! </p>
          <ul className='mx-[4rem] list-decimal'>
            <li className='my-2'>Week one will focus on the basics, introductory workshops, participants will have time to reflect on where they are at with their relationship to sexuality and maybe a chance to meet others who are attending SIXpo. </li>
            <li className='my-2'>Week two will dig deeper into topics of sexual health, sexual identity, consent, and self pleasure! </li>
            <li className='my-2'>Week three will be concluding discussions, summary workshops and celebrating what we’ve all learned! </li>
          </ul>
        </div>

      </section>
      {/* directions and contact form */}
      <section className='flex justify-evenly bg-black  text-white  border-b-2 border-b-[#ff7070] py-[3rem]
      flex-col
      lg:flex-row'>
        <div className='flex flex-col justify-center items-center lg:w-[50%] my-[3rem]'>
        <h1 className='font-bold text-3xl my-5'>Directions</h1>
        <iframe 
        className='rounded-md md:w-[80%]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8509.420531012636!2d-123.10118997099245!3d49.25750888275255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673e3669ce3ad%3A0x7c84d4bd7f6028b3!2sHeritage%20Hall!5e0!3m2!1sen!2sca!4v1676149056413!5m2!1sen!2sca"
         width="600" 
         height="450" s
         tyle="border:0;" 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">

         </iframe>
         <div className='flex  justify-start m-5 lg:w-[70%]'>
            <h2 className='font-bold text-2xl p-2 underline'>Location:</h2>
           <a target="_blank" href="https://www.google.com/maps/place/Heritage+Hall/@49.2572552,-123.1030644,17z/data=!3m2!4b1!5s0x548673e3716e6ddd:0xff07acb7c8760d7d!4m6!3m5!1s0x548673e3669ce3ad:0x7c84d4bd7f6028b3!8m2!3d49.2572552!4d-123.1008704!16s%2Fm%2F0n9gps0"> 
           <p className='px-5 hover:underline hover:transition-all hover:duration-500'>
                Heritage Hall <br/>
                3102 Main Street, <br/>
                Vancouver, BC V5T 3G7</p></a> 
            </div>
        </div>
        <div className='w-[75%] p-[3rem] lg:w-[30%] mx-auto'>
            <h1 className='text-3xl font-bold text-center my-3'>Contact Us</h1>
          <Form/>
        </div>

      </section>



    
    </div>
  )
}

export default Events
