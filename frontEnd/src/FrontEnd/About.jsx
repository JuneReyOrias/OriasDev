import React from 'react';
import { FaArrowRight, FaGraduationCap, FaBookOpen } from 'react-icons/fa';

function About() {
  return (
    <section id='about' className="bg-center bg-no-repeat bg-[url('/images/about-bg.jpg')] bg-gray-800 bg-blend-multiply text-white">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-20">
        {/* Heading */}
        <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-tight md:text-5xl lg:text-6xl">
          Get to Know Me
        </h1>

        {/* Introduction */}
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          I’m <span className="font-semibold text-blue-400">June Rey</span>, a passionate and continuously growing Web Developer. I specialize in crafting responsive, clean, and impactful digital experiences that align with business goals and user needs.
        </p>

        {/* Mission & Vision */}
        <div className="mt-8 bg-white/10 rounded-xl p-8 backdrop-blur-md shadow-lg max-w-4xl mx-auto text-left space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">🎯 My Mission</h2>
            <p className="text-gray-300 text-base md:text-lg">
              To build intuitive, scalable, and efficient web solutions that solve real problems, improve workflows, and provide meaningful digital experiences to users and businesses alike.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-2">🌟 My Vision</h2>
            <p className="text-gray-300 text-base md:text-lg">
              To grow into a trusted full-stack developer and lifelong learner who uses technology to innovate, empower, and inspire change.
            </p>
          </div>
        </div>

        {/* Education & Learning Path */}
        <div className="mt-8 bg-white/10 rounded-xl p-8 backdrop-blur-md shadow-lg max-w-4xl mx-auto text-left space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-blue-400 text-xl" />
            <h2 className="text-2xl font-bold text-white">🎓 Education & Learning Path</h2>
          </div>
          <p className="text-gray-300 text-base md:text-lg">
            My journey began with formal education in computer science and expanded through hands-on experience, online courses, and real-world projects. Platforms like freeCodeCamp, YouTube tutorials, and building personal projects helped me sharpen my skills in HTML, CSS, JavaScript, React, and back-end frameworks like Laravel and Django.
          </p>
        </div>

        {/* Motto */}
        <div className="mt-6">
          <div className="flex flex-col items-center">
            <FaBookOpen className="text-white text-3xl mb-3" />
            <p className="text-xl italic text-blue-200">“Life is a lifelong learning journey.”</p>
            <span className="text-sm text-gray-400 mt-1">— June Rey</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#contact"
            className="inline-flex justify-center items-center gap-2 py-3 px-6 text-base font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition focus:ring-4 focus:ring-blue-300"
          >
            Contact Me
            <FaArrowRight className="text-sm" />
          </a>
          <a
            href="https://drive.google.com/file/d/1pVT7glrJ6kUOVBFUDFuc_LsLOS0R4nid/view?usp=sharing"
            download
            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-lg border border-white hover:bg-white hover:text-gray-900 transition sm:ml-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
