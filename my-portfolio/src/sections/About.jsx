import React from "react";

const About = () => {
  return (
    // section wrapper
    <section
      id="about"
      className="relative py-24  bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Background Blur Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="relative max-w-6xl mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* left content ----> */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting modern <br /> <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">web experiences</span>
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              I’m a Web Developer and B.Tech CSE student who loves building
              clean, responsive, and engaging web applications. I specialize
              in creating scalable user interfaces using React.js and
              Tailwind CSS.
            </p>
            <p className="text-gray-600 mb-5 leading-relaxed">
              I focus on transforming ideas into smooth digital experiences
              with attention to performance, accessibility, and visual
              consistency. I’m actively looking for web developer internship
              or entry-level roles to grow and contribute to real-world
              products.
            </p>

            <div className="flex gap-4 ">
                   <a href="/resume.pdf" className="px-7 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition">Download Resume</a>
                   <a href="#projects" className="px-7 py-3 rounded-xl  border border-gray-300  font-medium hover:bg-gray-100 transition">View Projects</a>
            </div>
          </div>
          {/* Right content -----> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
               {
               ["React.js",
               "Tailwind CSS",
               "JavaScript",
               "HTML & CSS ",
               "Git & Git", 
               "Responsive UI",
              ].map((skill,index) => (
                <div key={index} className="group p-5 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition">
                      <div className="text-gray-900 font-semibold mb-1 group hover:text-purple-600 transition">{skill}</div>
                      <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
               ))};
          </div>
         </div>
      </div>
    </section>
  );
};

export default About;
