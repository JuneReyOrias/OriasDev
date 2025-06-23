import React, { useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaTimes,
  FaFileAlt,
} from 'react-icons/fa';

function Home() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gray-800  dark:bg-gray-900 relative overflow-hidden">
     
      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative">
        
        {/* Image - Centered */}
        <div className="relative md:absolute md:inset-0 flex justify-center items-center z-0 pointer-events-none">
          <img
            className="h-auto w-60 sm:w-72 md:w-80 lg:w-96 transition-all duration-300 rounded-full"
            src="images/June-removebg-preview.png"
            alt="Dev project preview"
          />
        </div>

        {/* Intro */}
        <div className="order-2 md:order-1 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 dark:text-white leading-tight">
            Hi, I'm June Rey <br />
            <span className="text-gray-600 dark:text-blue-400">Web Developer</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Passionate about building modern, responsive websites with clean code, creative design,
            and full-stack functionality.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4 text-blue-600 dark:text-blue-400 text-3xl">
            <FaHtml5 title="HTML5" className="hover:scale-110 hover:text-orange-500 transition" />
            <FaCss3Alt title="CSS3" className="hover:scale-110 hover:text-blue-500 transition" />
            <FaJsSquare title="JavaScript" className="hover:scale-110 hover:text-yellow-400 transition" />
            <FaReact title="ReactJS" className="hover:scale-110 hover:text-cyan-400 transition" />
          </div>
        </div>

        {/* Social Icons */}
 
        <div className="hidden md:flex flex-col gap-4 items-center absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <a href="https://github.com/JuneReyOrias" className="text-gray-500 hover:text-white transition transform hover:scale-110" 
        title="GitHub">
            <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/june-rey-orias-b61189278/" className="text-blue-600 hover:text-white transition transform hover:scale-110"
         title="LinkedIn">
            <FaLinkedin size={24} />
        </a>
      
        <a
            href="/resume.pdf" // <-- change to your actual resume file path
            className="text-green-500 hover:text-white transition transform hover:scale-110"
            title="Resume"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaFileAlt size={24} />
        </a>
        </div>


        {/* Floating Language/Tool Toggle */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {isLangOpen && (
            <div className="flex flex-col gap-3 p-4 bg-gray-700 dark:bg-gray-800 rounded-lg shadow-lg animate-fadeIn">
                <a href="https://github.com/JuneReyOrias" className="text-gray-500 hover:text-white transition transform hover:scale-110" 
        title="GitHub">
            <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/june-rey-orias-b61189278/" className="text-blue-600 hover:text-white transition transform hover:scale-110"
         title="LinkedIn">
            <FaLinkedin size={24} />
        </a>
      
        <a
            href="https://drive.google.com/drive/folders/1pI8Nq4g313L79jrguIJvaBqmYI-gy7ut" // <-- change to your actual resume file path
            className="text-green-500 hover:text-white transition transform hover:scale-110"
            title="Resume"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaFileAlt size={24} />
        </a>
            </div>
          )}
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          >
            {isLangOpen ? <FaTimes size={20} /> : <FaCode size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
