import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {  SiC, SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = [
  {
    tech:"HTML",
    icon: <FaHtml5/> ,
  },
  {
    tech:"CSS",
    icon: <FaCss3Alt/> ,
  },
  {
    tech:"JavaScript",
    icon: <FaGithub/> ,
  },
  {
    tech:"React.Js",
    icon: <FaReact/> ,
  },
  {
    tech:"C++",
    icon: <SiCplusplus/> ,
  },
  {
    tech:"C",
    icon: <SiC/> ,
  },
  {
    tech:"Python",
    icon: <FaPython/> ,
  },
  {
    tech:"Github",
    icon: <FaGithub/> ,
  },
  
   
];

const Skills = () => {
  return (
   <section id='skills' className='py-20 bg-black relative' >
    <div className='max-w-6xl mx-auto px-6'>
      {/* Heading --->  */}
      <div className='text-center mb-14'>
        <h2 className='text-4xl mb-4 font-bold md:text-5xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>My Skills</h2>
        <p className='text-gray-200 mt-3'>Technologies I work with</p>
      </div>

      {/* Skills add krni ha  */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-4'>
          {skills.map((skill , index )=>(
            <div key={index} className='group bg-[#020617] gap-4 border cursor-pointer border-gray-800 rounded-xl py-6 px-4 flex items-center justify-content text-gray-200 shadow-md hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1 transition-all duration-300'>
              <span className='font-medium tracking-wide'>{skill.tech}</span>
              <span className='text-2xl text-cyan-400 group-hover:scale-110 transition'>{skill.icon}</span>
            </div>
          ))}
        </div>
    </div>
   </section>
  )
}

export default Skills
