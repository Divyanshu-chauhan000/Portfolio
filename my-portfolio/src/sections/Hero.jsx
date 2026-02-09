import React from 'react'
import myPic from '../assets/images/myPic.jpeg'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    // Section wrapper
    <section id='home' className='min-h-screen pt-[70px] bg-black text-white flex items-center'>
    
   {/* center container */}
    <div className='max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center'>
        {/* Left-side content */}
    <div >
      <p className='text-sm text-gray-200 mb-2'>Hi, I am <span className='font-bold'>Divyanshu</span></p>
      <h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-700 animate-pulse bg-clip-text text-transparent'>Frontend Developer </h1>
      <span className='text-4xl text-gray-200  md:text-6xl font-bold leading-tight mb-6'>building modern web Experiences</span>
      <p className='text-gray-400 mb-8 mt-4 max-w-lg'> I specialize in React.js and modern UI development, reating fast, responsive and user-friendly web applications.</p>
   
    {/*  Buttons --> Action  */}
    <div className='flex gap-4'>
      <button className='px-7 py-3 rounded-xl bg-[#0202617] border border-gray-800 text-gray-200 font-medium shadow-lg hover:shadow-cyan-500/20 hover:translate-y-1 hover:border-cyan-400 transition'>View Projects</button>
      <button className="px-7 py-3 rounded-xl text-gray-900 border bg-gray-200  font-medium hover:bg-black hover:text-gray-200 transition">Contact Me</button>
    </div>

    {/* Social media icons ---> */}
    <div className='flex  gap-4  mt-8 text-xl'>
      <a href="" className=' hover:bg-green-400 rounded-full p-1 transition duration-300'><FaWhatsapp/></a>
      <a href="" className=' hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full p-1 transition duration-300'><FaInstagram/></a>
      <a href="" className=' hover:bg-[#0a66c2] rounded-full p-1 transition duration-300'><CiLinkedin/></a>
      <a href="" className=' hover:bg-[#2b3137] rounded-full p-1 transition duration-300'><FaGithub/></a>
    
    </div>
    </div>

      {/* Right-side container */}
    <div className=' md:flex justify-center relative'>
      <div className='absolute left-20 top-10   '>
        <p className='text-sm backdrop-blur-md px-2 py-1 rounded-lg border border-gray-700 text-gray-200 animate-slow-bounce'>Modern UI</p>
      </div>
      <div className='absolute right-20 bottom-10 '>
        <p className='text-sm backdrop-blur-md px-2 py-1 rounded-lg border border-gray-700 text-gray-200 animate-slow-bounce'>Responsive</p>
      </div>
      <div className='w-72 h-72 hidden sm:block shadow-xl shadow-cyan-500/20  rounded-full bg-white/5 border  border-cyan-400/20 '>
       <img className='w-full h-full rounded-full object-cover' src={myPic} alt="" />
      </div>
    </div>
    </div>

    </section>
  )
}

export default Hero
