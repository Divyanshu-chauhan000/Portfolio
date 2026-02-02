import React from 'react'

const Hero = () => {
  return (
    // Section wrapper
    <section id='home' className='min-h-screen pt-[70px] bg-black text-white flex items-center'>
    
   {/* center container */}
    <div className='max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center'>

      {/* Left-side content */}
    <div >
      <p className='text-sm text-gray-400 mb-2'>Hi, I am Divyanshu</p>
      <h1 className='text-4xl  md:text-6xl font-bold leading-tight mb-6'>Frontend Developer <br/> building modern web Experiences</h1>
      <p className='text-gray-400 mb-8 max-w-lg'> I specialize in React.js and modern UI development, reating fast, responsive and user-friendly web applications.</p>
   
    {/*  Buttons --> Action  */}
    <div className='flex gap-4'>
      <button className='px-6 py-3 rounded-full bg-white text-black font-medium hover: opacity-90 transition'>View Projects</button>
      <button className=' px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition'>Contact Me</button>
    </div>
    </div>

      {/* Right-side container */}
    <div className=' md:flex justify-center '>
      <div className='w-72 h-72 rounded-full bg-white/5 border border-white/10'>

      </div>
    </div>
    </div>



    </section>
  )
}

export default Hero
