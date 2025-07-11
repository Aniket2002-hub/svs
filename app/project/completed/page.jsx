"use client";
import React, { useState } from "react";
import Image from "next/image";
import SEO from "../../(Component)/Seo";

export default function BelmondPage() {
  const VisakhapatnamProjects = [
    {
      title: "Central Park Phase I",
      type: "Vizag Layout",
      location: (
        <>
          4 Blocks &nbsp; | &nbsp; 175 Flats &nbsp; | &nbsp; 2 & 3 BHK <br />
          Nizampet / Hyderabad
        </>
      ),
      img: "/Assets/Central-Park-logo.png",
      pdf: "/Assets/Central-Park.pdf",
      animation: "fade-right",
    },
    {
      title: "Central Park Phase II",
      type: "Vizag Layout",
      location: (
        <>
          40 Flats | 2 & 3 BHK
          <br />
          Nizampet / Hyderabad
        </>
      ),
      img: "/Assets/Central-Park-logo-pro.png",
      pdf: "/Assets/SVS-Central-Park-Phase-II-Broucher.pdf",
      animation: "fade-right",
    },
    {
      title: "SVS Marvel Destiny",
      type: "Vizag Layout",
      location: (
        <>
          {/* 60 Flats | 2 & 3 BHK */}
          <br />
          {/* Nizampet / Hyderabad */}
        </>
      ),
      img: "/Assets/SVS-Marvel-Destiny-logo-pro.png",
      pdf: "/Assets/SVS-Marvel-Destiny.pdf",
      animation: "fade-right",
    },
  ];

  const LaunchedProjects = [
    {
      title: "Balaji Bliss",
      type: "Residential",
      location: (
        <>
          4 Blocks &nbsp; | &nbsp; 175 Flats &nbsp; | &nbsp; 2 & 3 BHK <br />
          Nizampet / Hyderabad
        </>
      ),
      img: "/Assets/Balaji-bliss.jpg",
      pdf: "/Assets/Balaji-bliss.pdf",
      animation: "fade-right",
    },
    {
      title: "Girish Residency",
      type: "Residential",
      location: (
        <>
          40 Flats | 2 & 3 BHK
          <br />
          Nizampet / Hyderabad
        </>
      ),
      img: "/Assets/Girish-Residency-2.jpg",
      pdf: "/Assets/Girish-Residencey.pdf",
      animation: "fade-right",
    },
    {
      title: "Kavya Greens",
      type: "Residential",
      location: (
        <>
          60 Flats | 2 & 3 BHK
          <br />
          Nizampet / Hyderabad
        </>
      ),
      img: "/Assets/Kavya-greens-2.jpg",
      pdf: "/Assets/Kavya-Greens.pdf",
      animation: "fade-right",
    },
  ];
  const logos = [
    {
      src: "/Assets/Balaji-bliss-logo-1.png",
      alt: "Balaji Bliss",
      pdf: "/Assets/Balaji-bliss.pdf",
    },
    // { src: "/Assets/Central-Park-logo.png", alt: "Unitech" },
    // { src: "/Assets/Central-Park-logo-phase-2.png", alt: "Bestech" },
    {
      src: "/Assets/Girish-Residencey-logo-1.png",
      alt: "Girish Residency",
      pdf: "/Assets/Girish-Residencey.pdf",
    },
    {
      src: "/Assets/kavya-greens-logo-1.png",
      alt: "Kavya Greens",
      pdf: "/Assets/Kavya-Greens.pdf",
    },
  ];
  const logo = [
    {
      src: "/Assets/Central-Park-logo.png",
      alt: "Unitech",
      pdf: "/Assets/Central-Park.pdf",
    },
    {
      src: "/Assets/Central-Park-logo-phase-2.png",
      alt: "Bestech",
      pdf: "/Assets/SVS-Central-Park-Phase-II-Broucher.pdf",
    },
    {
      src: "/Assets/SVS-Marvel-Destiny-logo.png",
      alt: "SVS Marvel Destiny",
      pdf: "/Assets/SVS-Marvel-Destiny.pdf",
    },
  ];
  return (

       <div className="overflow-hidden">
        <title>Delivered with Trust</title>
        <meta
          name="description"
          content={
            "SVS Constructions has successfully delivered our Hyderabad residential projects, and in the heart of every project, we embedded our unwavering commitment to Excellence and delivered premium spaces that reflect better quality."
          }
          key="desc"
        />
      <SEO pageTitle={"Delivered with Trust"}
      description={"SVS Constructions has successfully delivered our Hyderabad residential projects, and in the heart of every project, we embedded our unwavering commitment to Excellence and delivered premium spaces that reflect better quality. "}
 
      />

    <div className="w-full">
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Projects.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto ">
          <h2
            data-aos="slide-right"
            data-aos-duration="1500"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          ></h2>
        </div>
      </div>
      {/* Collaborations Section */}
      <section
        data-aos="fade-left"
        className="py-16 px-4 md:px-12 max-w-7xl mx-auto "
      >
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          {/* Collaborations */}
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Hyderabad Residential - Delivered Excellence with Every Build
        </h2>
       <div className="w-20 h-1 bg-black mt-2 mb-4 border-3 border font-bold mt-4" />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
          We had successfully delivered our Hyderabad residential projects, and
          in the heart of every project, we embedded our unwavering commitment
          to Excellence and delivered premium spaces that reflect better
          quality. Our creativity is the result of the collaboration of our
          passionate team, their thoughtful, innovative ideas, and design that
          aligns with customers' requirements. We believe home is not just a
          space to live, it’s a place to feel, grow, and experience living. Our
          project is located in a prime location with better connectivity and
          infrastructure that will not only elevate living but also increase the
          value appreciation.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center w-full h-24 
                 cursor-pointer transition-transform duration-300 hover:-translate-y-4
                 shadow-sm hover:shadow-[#61796f] border-1 border-[#61796f]"
            >
              <a href={logo.pdf} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Launched Projects Section */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"></h2>
        <div className="" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-12 ">
          {LaunchedProjects.map((item, index) => (
            <div
              key={index}
              data-aos={item.animation}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-[#61796f] transition-shadow bg-white cursor-pointer transition-transform duration-300 hover:-translate-y-4"
            >
              {/* Outer wrapper */}
              <div className="flex flex-col space-y-4 p-3 rounded-xl bg-[#dff2ea] border border-gray-200 hover:border-gray-300 transition-all duration-300">
                {/* Image section */}
                <div className="relative w-full h-48 rounded-md overflow-hidden bg-[#dff2ea] ">
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>

                {/* Caption section */}
                <div className="text-center px-2 pb-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1 mt-1">
                    {item.title}
                  </h3>
                  <h5 className="text-m text-gray-600 font-semibold mb-1 mt-2">
                    {item.type}
                  </h5>
                  <p className="text-sm text-gray-600 mt-2">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-aos="fade-left"
        className="py-16 px-4 md:px-12 max-w-7xl mx-auto "
      >
        <h3 className="text-sm font-semibold text-gray-600 mb-2">
          {/* Collaborations */}
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Vizag Layouts - Sustainable Living Amidst Nature's Bounty
        </h2>
        <div className="w-20 border-b-4 border-black mb-6 border font-bold" />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
          We came with a strong initiative of plotted development in the rapidly
          growing city of Vizag, which succeeded as we planned. We embedded our
          unwavering commitment to Excellence and delivered premium layouts that
          reflect better quality and spaces. Our every layout development is
          strategically designed for location advantages and is exactly located
          in a prime location with better connectivity and infrastructure that
          will not only elevate living but also increase the value appreciation.
        </p>
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center">
          {logo.map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center w-full h-24 
                 cursor-pointer transition-transform duration-300 hover:-translate-y-4
                 shadow-sm hover:shadow-[#61796f] border-1 border-[#61796f]"
            >
              <a href={logo.pdf} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* vizag Projects Section */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"></h2>
        <div className="" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-12 ">
          {VisakhapatnamProjects.map((item, index) => (
            <div
              key={index}
              data-aos={item.animation}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-[#61796f] transition-shadow bg-white cursor-pointer transition-transform duration-300 hover:-translate-y-4"
            >
              {/* Outer wrapper */}
              <div className="flex flex-col space-y-4 p-3 rounded-xl bg-[#dff2ea] border border-gray-200 hover:border-gray-300 transition-all duration-300">
                {/* Image section */}
                <div className="relative w-full h-48 rounded-md overflow-hidden bg-[#dff2ea] ">
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>

                {/* Caption section */}
                <div className="text-center px-2 pb-2">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1 mt-1">
                    {item.title}
                  </h3>
                  <h5 className="text-m text-gray-600 font-semibold mb-1 mt-2">
                    {item.type}
                  </h5>
                  {/* <p className="text-sm text-gray-600 mt-2">{item.location}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
