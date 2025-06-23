import React from 'react';
import { FaReact, FaJsSquare, FaHtml5 } from 'react-icons/fa';

function Roles() {
  return (
    <section id='skills' className="scroll-mt-30 mt-20 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-300 dark:text-white">
          Key Roles & Services
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          What I do best as a developer
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
          <FaReact size={36} className="mx-auto text-blue-500" />
          <h3 className="mt-4 text-lg font-semibold">Front-End Development</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Building modern, responsive UIs using React, Tailwind, and more.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
          <FaJsSquare size={36} className="mx-auto text-yellow-400" />
          <h3 className="mt-4 text-lg font-semibold">Full-Stack Integration</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            REST APIs, Node.js, Laravel, Django — the works.
          </p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
          <FaHtml5 size={36} className="mx-auto text-orange-500" />
          <h3 className="mt-4 text-lg font-semibold">UI/UX Design</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Clean, accessible, and pixel-perfect design using Figma & Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Roles;
