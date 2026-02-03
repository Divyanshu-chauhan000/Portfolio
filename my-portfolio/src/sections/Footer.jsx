import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <section id='footer' className='bg-[#020617] border-t border-gray-800'>
     <div className='max-w-6xl mx-auto py-10'>
         <div className='flex flex-col mg:flex-row items-center justify-between gap-6'>
            <h3 className='text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                  Divyanshu.dev
            </h3>
            <p className='text-sm text-gray-400 text-center'>
                 build clean and modern web experiences 
            </p>
          {/* social media icons  */}
            <div className='flex gap-4'>
               <a href="#" className='text-gray-400 hover:text-cyan-400 transition'><FaGithub size={20}/></a>
               <a href="#" className='text-gray-400 hover:text-cyan-400 transition'><FaLinkedin size={20}/></a>
               <a href="#" className='text-gray-400 hover:text-cyan-400 transition'><FaEnvelope size={20}/></a>
            </div>
         </div>

         {/* Bottom content ---> */}
         <div className='mt-8 border-t border-gray-800 pt-4 text-center'>
            <p className='text-gray-500 text-sm'>
                <span> &copy; </span> {new Date().getFullYear()} Divyanshu Chauhan  . All rights reserved.
            </p>
         </div>
     </div>
    </section>
  )
}

export default Footer
