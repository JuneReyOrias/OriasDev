import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* DevPorfolio Brand */}
          <div>
            <a href="/" className="flex items-center mb-4">
               <img src="/images/ORJ.png" alt="Bank Logo" className="h-10 w-10 rounded-full" />
              <span className="ml-2 text-xl font-bold text-white">OriasDev</span>
            </a>
            <p className="text-sm text-gray-400">
              Crafting elegant solutions through code and creativity.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="mailto:you@example.com" className="hover:text-white">Email</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm text-gray-500">
          © 2025 <a href="/" className="text-white font-semibold hover:underline">OriasDev</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
