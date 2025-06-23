import React from 'react';

function Services() {
  return (
    <div
      className="scroll-mt-20 bg-gray-800 p-6 min-h-[60vh] flex flex-col justify-center items-center"
      id="services"
      data-animate
    >
      <h1 className="text-3xl font-bold text-center text-white mb-3">Offer Services</h1>
      <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-10">
        I specialize in crafting functional and visually engaging digital solutions—from responsive websites and clean code to branding, databases, and data insights. My goal is to turn ideas into efficient and impactful web experiences.
      </p>

      {/* Wrapper to center both rows */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6">

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full justify-items-center">
          {/* Web Development */}
          <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full h-60 object-cover" src="/OfferServices/WebDev.jpg" alt="Web Development" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Web Development</h5>
              <p className="mb-3 text-white">
                My goal is to build high-performing, reliable websites that are easy to manage using modern technologies.
              </p>
              <ul className="text-white space-y-2">
                <li>🚀 Optimized for speed</li>
                <li>🛠 Clean, maintainable code</li>
                <li>🌐 Built with the latest tech</li>
              </ul>
            </div>
          </div>

          {/* Web Design */}
          <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full h-60 object-cover" src="/OfferServices/webDesign.jpg" alt="Web Design" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Web Designer</h5>
              <p className="mb-3 text-white">
                I design websites that are sleek, user-friendly, and aligned with your brand identity.
              </p>
              <ul className="text-white space-y-2">
                <li>✔ Responsive design</li>
                <li>✔ Strong brand presence</li>
                <li>✔ User-focused approach</li>
                <li>✔ Modern and clean aesthetics</li>
              </ul>
            </div>
          </div>

          {/* Database Management */}
          <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full h-60 object-cover" src="/OfferServices/Database.jpg" alt="Database" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Database Management</h5>
              <p className="mb-3 text-white">
                I design secure, scalable, and efficient databases that keep your data organized and optimized for performance.
              </p>
              <ul className="text-white space-y-2">
                <li>🔹 Optimized for performance</li>
                <li>🔹 Secure and scalable architecture</li>
                <li>🔹 Efficient data management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full justify-items-center">
          {/* Graphic Design */}
          <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full h-60 object-cover" src="/OfferServices/GraphicDesgn.jpg" alt="Graphic Design" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Graphic Design & Branding</h5>
              <p className="mb-3 text-white">
                I create interactive and eye-catching visuals that define your brand and captivate your audience.
              </p>
              <ul className="text-white space-y-2">
                <li>🎨 Creative & Engaging Designs</li>
                <li>📢 Attention-Grabbing Ads</li>
                <li>🌟 Strong Brand Identity</li>
              </ul>
            </div>
          </div>

          {/* Office Productivity */}
          <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full h-60 object-cover" src="/OfferServices/Office.jpg" alt="Office Productivity" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Office Productivity</h5>
              <p className="mb-3 text-white">
                I organize and analyze data effectively to boost productivity, streamline operations, and enhance decision-making.
              </p>
              <ul className="text-white space-y-2">
                <li>📊 Structured Data Management</li>
                <li>📑 Clear & Insightful Reports</li>
                <li>⚡ Efficient Workflow Optimization</li>
              </ul>
            </div>
          </div>

          {/* Data Science Basics */}
          <div className="max-w-sm bg-gray-600 border border-gray-200 rounded-lg shadow-sm">
            <img className="rounded-t-lg w-full h-60 object-cover" src="/OfferServices/DataScience.jpg" alt="Data Science" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Data Science Basics</h5>
              <p className="mb-3 text-white">
                I help clean, prepare, and visualize raw data, laying the foundation for accurate, actionable insights.
              </p>
              <ul className="text-white space-y-2">
                <li>🧹 Data Cleaning & Preprocessing</li>
                <li>📊 Organizing & Structuring Data</li>
                <li>🔍 Handling Missing Values</li>
                <li>📈 Basic Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
