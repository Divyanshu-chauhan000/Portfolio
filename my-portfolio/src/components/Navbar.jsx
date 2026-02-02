import React from 'react'
import {HiMenu , HiX} from "react-icons/hi";


const Navbar = () => {
  return (
    <div>
      <nav className='flex  items-center bg-transparent fixed top-0 left-0 h-[70px] w-full'>
         <div className='w-full px-6 max-w-7xl mx-auto flex items-center justify-between'>
            <div className='text-xl text-gray-600  font-bold tracking-wide hover:text-black transition-colors'>
            <h4>Divyanshu</h4>
         </div>
         <div className=''>
           <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-white'>
            <li className='cursor-pointer text-gray-600 hover:text-black transition-colors'>Home</li>
            <li className='cursor-pointer text-gray-600 hover:text-black transition-colors'>About</li>
            <li className='cursor-pointer text-gray-600 hover:text-black transition-colors'>Skills</li>
            <li className='cursor-pointer text-gray-600 hover:text-black transition-colors'>Projects</li>
            <li className='cursor-pointer text-gray-600 hover:text-black transition-colors'>Contact</li>
           </ul>
         </div>
         <div >
               <button className='ml-6 text-gray-600  px-5 py-2 rounded-full text-sm font-semibold  border border-black/20 hover:bg-gray-600 hover:text-white transition-all'>Resume</button>
         </div>
         </div>
      </nav>
    </div>
  )
}

export default Navbar
