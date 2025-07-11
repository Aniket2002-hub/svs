'use client';
import React from 'react';
import SEO from "../../(Component)/Seo";

const timelineData = [
  {
    year: '',
    title: 'The Beginning',
    image: '/Assets/Visakhapatnam_images.avif',
    description:
      'Belmond started with Mining & Boulder Crushing, marking the beginning of their legacy in the infrastructure sector.',
  },
  {
    year: '',
    title: 'Venturing into Road Construction',
    image: '/Assets/visakhapatanam roads.jpg',
    description:
      'Recognizing the need for modern road networks, we ventured into road construction. This marked our entry into large-scale infrastructure development.',
  },
  {
    year: '',
    title: 'Expanding into Fuel Station',
    image: '/Assets/visakhapatanam petropump.avif',
    description:
      'In , we expanded our portfolio by entering the Fuel Station business, further diversifying our operations.',
  },
];

export default function AboutUsPage() {
  
  return (
       <div className="overflow-hidden">
      <SEO pageTitle={"SVS Constructions | Trusted Building Contractors & Developers in visakhapatnam"}
      description={"Looking for top builders in Hyderabad? SVS Constructions specializes in residential and commercial projects, delivering quality, trust, and on-time completion."}
 
      />

    <div className="w-full">
       {/* Hero Section */}
      <div data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_About_Us.png')" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto ">
          <h2 data-aos="slide-right" data-aos-duration="1500" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"></h2>
      </div>
      </div>

      {/* ===== Timeline Section ===== */}
      <div className="relative bg-[#f1f1ff] py-16">
        <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full -translate-x-1/2" />

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Year */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                {/* <div className="w-20 h-20 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center text-lg font-bold shadow-md z-10">
                  {item.year}
                </div> */}
              </div>

              {/* Timeline Card */}
              <div className="w-full md:w-1/2 px-6 mt-2 md:mt-0">
                <div className="bg-white shadow-md rounded-lg overflow-hidden border">
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
