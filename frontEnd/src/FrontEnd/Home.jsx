import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaCode,
  FaTimes,
} from 'react-icons/fa';

function Home() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-800 dark:bg-gray-900 relative"
    >
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center gap-y-6 lg:gap-y-0 gap-x-10 lg:gap-x-20">

        {/* Image (Top on mobile, left on desktop) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="h-auto w-60 sm:w-72 md:w-80 lg:w-96 transition-all duration-300 rounded-full"
            src="images/June-removebg-preview.png"
            alt="Developer Portrait"
          />
        </div>

        {/* Intro Text (Bottom on mobile, right on desktop) */}
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Hi, I'm June Rey <br />
              <span className="text-blue-400">Web Developer</span>
            </h1>
            <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Passionate about building modern, responsive websites with clean code,
              creative design, and full-stack functionality.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4 text-blue-400 text-3xl">
              <FaHtml5 className="hover:scale-110 hover:text-orange-500 transition" />
              <FaCss3Alt className="hover:scale-110 hover:text-blue-500 transition" />
              <FaJsSquare className="hover:scale-110 hover:text-yellow-400 transition" />
              <FaReact className="hover:scale-110 hover:text-cyan-400 transition" />
            </div>
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex flex-col gap-4 items-center absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
          <a
            href="https://github.com/JuneReyOrias"
            className="text-gray-500 hover:text-white transition hover:scale-110"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/june-rey-orias-b61189278/"
            className="text-blue-600 hover:text-white transition hover:scale-110"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://drive.google.com/file/d/1pVT7glrJ6kUOVBFUDFuc_LsLOS0R4nid/view?usp=sharing"
            className="text-green-500 hover:text-white transition hover:scale-110"
            title="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt size={24} />
          </a>
        </div>

        {/* Mobile Floating Button */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {isLangOpen && (
            <div className="flex flex-col gap-3 p-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-lg">
              <a href="https://github.com/JuneReyOrias" className="text-gray-400 hover:text-white transition hover:scale-110" title="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/june-rey-orias-b61189278/" className="text-blue-600 hover:text-white transition hover:scale-110" title="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://drive.google.com/file/d/1pVT7glrJ6kUOVBFUDFuc_LsLOS0R4nid/view?usp=sharing" className="text-green-500 hover:text-white transition hover:scale-110" title="Resume" target="_blank" rel="noopener noreferrer">
                <FaFileAlt size={24} />
              </a>
            </div>
          )}
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            {isLangOpen ? <FaTimes size={20} /> : <FaCode size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
