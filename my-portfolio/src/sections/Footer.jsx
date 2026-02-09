import React from "react";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";

const Footer = () => {
  const [link, setLink] = useState([
    {
      item: "Home",
    },
    {
      item: "About",
    },
    {
      item: "Skills",
    },
    {
      item: "Projects",
    },
    {
      item: "Contact",
    },
  ]);

  return (
    <section id="footer" className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto py-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left section */}
        <div className="text-gray-200 ">
          <a href="#">
            <h1 className="text-xl font-bold">Divyanshu</h1>
          </a>
          <p className="py-4">Crafting clean, scalable web experiences</p>
        </div>
        {/* Right section */}
        <div className="flex  justify-around items-center">
          {/* footer-links */}

          <div className="text-white gap-4 flex  ">
            {link.map((val, index) => (
              <a href="" key={index} >{val.item}</a>
            ))}
          </div>

          {/* footer social media links */}

          <div className="flex  gap-4 text-gray-200   text-xl">
            <a
              href=""
              className=" hover:bg-green-400 rounded-full p-1 transition duration-300"
            >
              <FaWhatsapp />
            </a>
            <a
              href=""
              className=" hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full p-1 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className=" hover:bg-[#0a66c2] rounded-full p-1 transition duration-300"
            >
              <CiLinkedin />
            </a>
            <a
              href=""
              className=" hover:bg-[#2b3137] rounded-full p-1 transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
