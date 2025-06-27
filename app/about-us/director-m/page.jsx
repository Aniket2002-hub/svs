'use client';
import React from 'react';

export default function DirectorsMessage() {
  return (
    <div className="w-full">
 {/* Hero Section */}
      <div data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Assets/vizag image.jpeg')" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto ">
          <h2 data-aos="slide-right" data-aos-duration="1500" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Director's Message</h2>
      </div>
      </div>

      {/* ==== Message Section ==== */}
      <div className="bg-[#f1f1ff] py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden">
            {/* Director Image */}
            <div className="w-full md:w-[260px] h-[340px] md:h-auto">
              <img
                src="/Assets/director.jpg"
                alt="Bhaswar Paul"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1">
              {/* Name Strip */}
              <div className="bg-[#092704] px-6 py-4">
                <h2 className="text-lg md:text-xl text-white font-semibold">Bhaswar Paul</h2>
                <p className="text-white text-sm font-bold mt-1">Director</p>
              </div>

              {/* Message */}
              <div className="px-6 py-6 text-gray-800 text-sm text-justify leading-relaxed">
                <p>
                  “At  Developers, we don’t just build properties—we build legacies. For over four decades, our family has been driven by a commitment to trust, innovation, and excellence, shaping every project with a vision that stands the test of time.
                </p>
                <br />
                <p>
                  From our beginnings in mining and infrastructure to pioneering landmark real estate developments, our journey has been guided by a simple belief: that great spaces inspire great lives. Today, as Gurugram evolves into a global hub, we remain dedicated to crafting sustainable, community-centric developments that redefine modern living.
                </p>
                <br />
                <p>
                  Carrying forward my family’s legacy, I am proud to lead Roots Developers into a future where tradition meets innovation. Together, let’s create not just homes, but thriving communities for generations to come.”
                </p>
                <br />
                <p className="font-semibold mt-4">
                  – Bhaswar Paul<br />
                    
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
