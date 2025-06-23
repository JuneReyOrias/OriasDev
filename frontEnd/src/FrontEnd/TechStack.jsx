import React, { useState } from 'react';

const techStackData = [
  // Web Dev
  { src: "/Webprojects/html-removebg-preview.png", alt: "HTML", category: "webDev" },
  { src: "/Webprojects/csss-removebg-preview.png", alt: "CSS", category: "webDev" },
  { src: "/Webprojects/js-removebg-preview.png", alt: "JavaScript", category: "webDev" },
  { src: "/Webprojects/tailwind-removebg-preview.png", alt: "Tailwind", category: "webDev" },
  { src: "/Webprojects/python-removebg-preview.png", alt: "Python", category: "webDev" },
  { src: "/Webprojects/django-removebg-preview.png", alt: "Django", category: "webDev" },
  { src: "/Webprojects/react-removebg-preview.png", alt: "React", category: "webDev" },
  { src: "/Webprojects/bootstrap-removebg-preview.png", alt: "Bootstrap", category: "webDev" },
  { src: "/Webprojects/php-removebg-preview.png", alt: "PHP", category: "webDev" },
  { src: "/Webprojects/laravel-removebg-preview.png", alt: "Laravel", category: "webDev" },
  { src: "/Webprojects/mysql-removebg-preview.png", alt: "MySQL", category: "webDev" },

  // Design
  { src: "/Webprojects/figma-removebg-preview.png", alt: "Figma", category: "design" },
  { src: "/Webprojects/xd-removebg-preview.png", alt: "Adobe XD", category: "design" },
  { src: "/Webprojects/Canvas-removebg-preview.png", alt: "Canvas", category: "design" },
  { src: "/Webprojects/Adobe-removebg-preview.png", alt: "Adobe", category: "design" },

  // API
  { src: "/Webprojects/GoogleAPI.jpg", alt: "Google API", category: "API" },
];

const TechStack = () => {
  const [filter, setFilter] = useState('all');

  const filteredData = filter === 'all'
    ? techStackData
    : techStackData.filter(item => item.category === filter);

  return (
    <div className="bg-gray-800 px-4 pb-0">
      <p className="mb-6 text-2xl tracking-tight text-center text-white opacity-90 pt-10">
        These are the technologies I've worked with and continue to refine on my learning journey
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center py-4 flex-wrap gap-3">
        {['all', 'webDev', 'design', 'API'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`filter-btn text-base font-medium px-5 py-2.5 rounded-full text-center transition ${
              filter === type
                ? 'bg-blue-700 text-white border border-blue-600'
                : 'text-white border border-white hover:border-gray-200'
            }`}
          >
            {type === 'all' ? 'All Categories' : type}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center px-4">
        {filteredData.map((item, index) => (
          <div key={index} className="p-2 flex justify-center items-center">
            <img className="w-28 h-28 object-contain" src={item.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
