import React from 'react'
import {HiMenu , HiX} from "react-icons/hi";


const Navbar = () => {
  return (
    <div>
      <nav className='flex  items-center bg-transparent border-b border-cyan-700 shadow-lg shadow-cyan-500/20  fixed top-0 left-0 h-[70px] w-full'>
         <div className='w-full px-6 max-w-6xl mx-auto flex items-center justify-between'>
            <div className='text-xl text-gray-200  font-bold tracking-wide  transition-colors'>
            <a href="#">Divyanshu</a>
            </div>
         <div className=''>
           <ul className='hidden md:flex  items-center gap-6 text-sm font-medium text-white'>
            <li  className='home cursor-pointer shadow-lg  py-1 px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20'>Home</li>
            <li className='home cursor-pointer shadow-lg  py-2 px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>About</li>
            <li className='home cursor-pointer shadow-lg  py-2 px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>Skills</li>
            <li className='home cursor-pointer shadow-lg  py-2 px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>Projects</li>
            <li className='home cursor-pointer shadow-lg  py-2 px-4 rounded-full text-gray-200 hover:border hover:border-cyan-400 hover:shadow-cyan-500/20 transition-colors'>Contact</li>
           </ul>
         </div>
         <div >
               <button className='ml-6 text-gray-200  px-5 py-2 rounded-full text-sm font-semibold  border border-gray-600 hover:border-cyan-400 hover:text-white hover:shadow-cyan-500/20 transition-all'>Resume</button>
         </div>
         </div>
      </nav>
    </div>
  )
}

export default Navbar
