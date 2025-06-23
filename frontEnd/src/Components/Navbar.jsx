import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id.substring(1)); // remove "#" for state
      setIsOpen(false); // close mobile menu
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'ProjectWeb' },
     { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white/70 backdrop-blur-md dark:bg-gray-900/80 fixed w-full z-30 top-0 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo & Title */}
        <a href="#" className="flex items-center space-x-2 text-xl font-bold text-gray-800 dark:text-white">
          <img src="/images/ORJ.png" alt="Bank Logo" className="h-10 w-10 rounded-full" />
          <span>OriasDev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium dark:text-white">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(`#${item.id}`)}
              className={`hover:text-blue-600 transition ${
                activeSection === item.id ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Let's Talk Button (Desktop) */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection('#contact')}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Let's Talk
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-white hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 text-sm font-medium dark:text-white border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(`#${item.id}`)}
              className={`block w-full text-left hover:text-blue-600 transition ${
                activeSection === item.id ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="block w-full text-center text-white bg-blue-600 px-4 py-2 rounded-md mt-2 hover:bg-blue-700 transition"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
