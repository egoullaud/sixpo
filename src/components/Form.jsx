import React from 'react'

function Form() {
  return (
    <div>
      <div>
      <form action="https://formsubmit.co/sixpowebadmn@gmail.com" method="POST" class="space-y-2">
            {/* <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" /> */}
            <div>
              <label 
              for="name" 
              class="block mb-2 text-sm font-medium text-white">
                Your Name</label>
              <input 
              type="name" 
              id="name" 
              name="name"
              class=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-[#bc] block w-full p-2.5
              " 
              placeholder="John Doe" required/>
           </div>
           <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white" >Your email</label>
              <input type="email" id="email" name="email address"
              class=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
              " 
              placeholder="johndoe@youremail.com" required/>
          </div>
          <div>
              <label for="text" class="block mb-2 text-sm font-medium text-white">Your Phone Number</label>
              <input type="text" id="phone" name="phone number" 
              class=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
              placeholder="(555) 555-5555" />
          </div>
          <label for="where" class="block mb-2 text-sm font-medium text-white">Where did you hear about us?</label>
              <input type="text" id="where" placeholder="Tell us!" name="where did you hear about us" 
              class=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
              " 
              />
          <div class="flex flex-col ">
          <label class="flex  items-start mb-2 text-sm font-medium text-white" name='interested-in'>I'm interested in:</label>
            <div class='flex items-center justify-center text-white'>
                <input type="checkbox" id="volunteering" class="text-black" name='volunteering' value="yes" />
                <label htmlFor="volunteering" class='mx-2 text-sm'>Volunteering</label>
            </div>
            <div class='flex items-center justify-center text-white'>
                <input type="checkbox" id="sponsoring" class="text-black" name="sponsoring" value="yes" />
                <label htmlFor="sponsoring" class='ml-2 mr-5 my-1 text-sm'>Sponsoring</label>
            </div>
            <div class='flex items-center justify-center text-white'>
                <input type="checkbox" id="collaborating" class="text-black" name='collaborating' value="yes" />
                <label htmlFor="collaborating" class='mx-2 text-sm'>Collaborating</label>
            </div>
        
             
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" rows="6" 
              class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 
              focus:ring-primary-500 focus:border-primary-500
               " 
              placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" name="message"
          class="flex items-center justify-center text-center rounded-md hover:bg-[#ff7070] hover:transition-all hover:duration-500 bg-black w-[200px] border-2 border-[#F86E6E] font-medium my-6 mx-auto py-3 text-white'">
            Send message</button>
      </form>
      </div>
    </div>
  )
}

export default Form
