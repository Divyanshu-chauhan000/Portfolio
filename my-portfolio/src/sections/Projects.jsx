import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import edubridge from "../assets/images/edubridge.png";
import personalPortfolio from "../assets/images/personalPortfolio.png";
import portfoliogenerator from "../assets/images/portfoliogenerator.png";
import sprinkler from "../assets/images/sprinkler.png"

const projects = [
  {
    title: "Edugram-Student Social Media Plateform",
    description:
    "A social media platform designed for students to share posts, connect with peers, and interact in an academic-focused environment. Built using React.js with basic backend integration.",
    tech:[
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    ],
    link:"#",
    image:edubridge
  }, 
  {
    title: "PortFolio - Generator",
    description:
    "A React-based portfolio generator that allows users to quickly create a personal portfolio using reusable components and dynamic data handling.",
    tech:[
    "React.js",
    "JavaScript",
    ],
    link:"#",
    image:portfoliogenerator,
  }, 
  {
    title: "Landing Page",
    description:
    "Responsive and modern landing pages built using HTML and CSS with a focus on layout, typography, and clean UI.",
    tech: ["HTML", "CSS"],
    link: "#",
    image:sprinkler,
  }, 
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio website showcasing projects and skills, built using React.js and Tailwind CSS with a modern design.",
    tech: ["React.js", "Tailwind CSS"],
    link: "#",
    image:personalPortfolio,
  }, 
]


const Projects = () => {
  return (
    //Section Wrapper
   <section id='projects' className='relative py-24 bg-black'>
     <div className='max-w-6xl mx-auto px-6'>
         {/* Section ki heading ---> */}
         <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent font-bold mb-4'>Projects</h2>
            <p className='text-gray-200 max-w-2xl mx-auto'>
            Real-world projects demonstrating my frontend skills along with basic backend integration.
            </p>
         </div>
         {/* Projects:---- */}
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index)=>(
            <div key={index} className='group flex flex-col h-full rounded-2xl bg-[#020617]  border border-gray-500 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1  transition-all duration-300'>
              {/* project preview k liy  imaage lgani ha baad me  */}
              <div className='h-44 rounded-t-2xl  w-full'>
                <img src={project.image} alt="none" />
              </div>
              {/* Project ka content: - */}
              <div className='p-6 flex flex-col h-full'>
                  <h3 className='text-xl font-semibold text-gray-200 mb-2'>{project.title}</h3>
                  <p className='text-gray-400 text-sm mb-4 leading-relaxed'>{project.description}</p>
                  {/* technology used are  */}
                  <div className='flex flex-wrap gap-2 mb-5'>
                          {project.tech.map((items , idx) =>(
                            <span key={idx} className='text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700'>{items}</span>
          ))}
                  </div>
                  {/* Links bhi to provide krni ha  */}
                  <a href={project.link} className='mt-auto inline-flex items-center  gap-1 text-sm font-medium text-cyan-500 hover:underline'>View Projects <FiArrowUpRight className='text-base transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1'/> </a>
              </div>
            </div>

          ))}
         </div>
     </div>
   </section>
  )
}

export default Projects;
