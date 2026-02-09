import React from "react";
import { FaEnvelope, FaPaperPlane, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading ---->   */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Me{" "}
          </h2>
          <p className="text-gray-100 mt-3">
            Lets's work together or just say hello
          </p>
        </div>
        {/* contact section  ---> */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl  shadow-lg p-8 md:p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name input field  */}
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#020617] border border-gray-700  rounded-lg pl-12 pr-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
            {/* Email input feild  */}
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#020617] border border-gray-700  rounded-lg pl-12 pr-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
            {/* Message input field  */}
            <div className="md:col-span-2">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-[#020617] border border-gray-700  rounded-lg  pl-4 pr-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="group bg-[#020617] gap-4 border cursor-pointer border-gray-800 rounded-xl py-6 px-4 flex items-center justify-content text-gray-200 shadow-md hover:border-cyan-400 hover:shadow-cyan-500/20 hover:translate-y-1 transition-all duration-300"
            >
              Send Message <FaPaperPlane />{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
