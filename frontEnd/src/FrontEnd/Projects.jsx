import React from 'react';

function Projects() {
  return (
    <div className="scroll-mt-20 bg-gray-800 p-6" id="ProjectWeb" data-animate>
      <h1 className="text-4xl font-extrabold text-center text-white mb-2">Projects & Products</h1>
      <p className="text-center text-gray-300 text-lg mb-8">
        Explore the platforms, tools, and systems I've designed and developed—crafted with purpose, precision, and passion.
      </p>

      {/* Row 1: Foundational Projects */}
      <h2 className="text-2xl font-semibold text-white mb-4">🧱 Foundation Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">

        {/* Agri-Map */}
        <div className="relative rounded-lg shadow-lg overflow-hidden group">
          <img className="w-full h-60 object-cover" src="/Webprojects/ZamboAgrimap.png" alt="Agri-Map" />
          <a href="https://agri-map-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-center p-5">
              <h5 className="text-2xl font-bold text-white">Agri-Map</h5>
              <p className="text-gray-300 text-sm mt-2">
                A GIS-powered agricultural platform to manage and visualize rice farming data across Zamboanga City.
              </p>
              <div className="mt-3">
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Role:</span> Full-stack Developer</p>
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Tech:</span> Laravel, JS, Bootstrap, CSS, Google Maps API</p>
              </div>
            </div>
          </a>
        </div>

        {/* Upress */}
        <div className="relative rounded-lg shadow-lg overflow-hidden group">
          <img className="w-full h-60 object-cover" src="/Webprojects/wmsu-upress-project.png" alt="Upress" />
          <a href="https://upress-wmsu-system.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-center p-5">
              <h5 className="text-2xl font-bold text-white">Upress Management</h5>
              <p className="text-gray-300 text-sm mt-2">Academic publishing CMS designed for WMSU.</p>
              <div className="mt-3">
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Role:</span> Full-stack Developer</p>
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Tech:</span> Laravel, JS, Bootstrap, CSS, Bootstrap</p>
              </div>
            </div>
          </a>
        </div>

        {/* Simple Banking System */}
        <div className="relative rounded-lg shadow-lg overflow-hidden group">
          <img className="w-full h-60 object-cover" src="/Webprojects/simpleBanking.png" alt="Banking System" />
          <a href="https://simple-banking-sytem.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-center p-5">
              <h5 className="text-2xl font-bold text-white">Simple Banking System</h5>
              <p className="text-gray-300 text-sm mt-2">A basic transaction app developed during OJT experience.</p>
              <div className="mt-3">
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Role:</span> Full-stack Developer</p>
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Tech:</span> React, Tailwind, PHP</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Row 2: New Projects */}
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Latest Launches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Portfolio */}
        <div className="relative rounded-lg shadow-lg overflow-hidden group">
          <img className="w-full h-60 object-cover" src="/Webprojects/Mi_Porfolios.png" alt="Portfolio" />
          <a href="https://mi-porfolios.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-center p-5">
              <h5 className="text-2xl font-bold text-white">Mi Porfolios</h5>
              <p className="text-gray-300 text-sm mt-2">A personal portfolio built with Tailwind CSS showcasing modern web development.</p>
              <div className="mt-3">
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Role:</span> Front-end Developer</p>
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Tech:</span> Tailwind , Django</p>
              </div>
            </div>
          </a>
        </div>

        {/* Placeholder 1 */}
               <div className="relative rounded-lg shadow-lg overflow-hidden group">
          <img className="w-full h-60 object-cover" src="/Webprojects/FashionGyrl.png" alt="Portfolio" />
          <a href="https://fashion-gyrl.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-opacity flex flex-col justify-center p-5">
              <h5 className="text-2xl font-bold text-white">Mi Porfolios</h5>
              <p className="text-gray-300 text-sm mt-2">A personal portfolio built with Tailwind CSS showcasing modern web development.</p>
              <div className="mt-3">
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Role:</span> Front-end Developer</p>
                <p className="text-sm text-gray-300"><span className="font-semibold text-white">Tech:</span> Tailwind , Django</p>
              </div>
            </div>
          </a>
        </div>

        {/* Placeholder 2 */}
        <div className="rounded-lg shadow-lg bg-zinc-700 text-white flex flex-col justify-center items-center h-60 text-center">
          <p className="text-lg font-semibold">Coming Soon</p>
          <p className="text-sm text-gray-300">Stay tuned for updates</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
