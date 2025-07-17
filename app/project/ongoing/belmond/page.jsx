"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import SEO from "../../../(Component)/Seo";

export default function BelmondPage() {
  const logos = [
    { src: "/Assets/Balaji-bliss-logo-1.png", alt: "Orchid" },
    { src: "/Assets/Central-Park-logo.png", alt: "Unitech" },
    { src: "/Assets/Central-Park-logo-phase-2.png", alt: "Bestech" },
    { src: "/Assets/Girish-Residencey-logo-1.png" },
    { src: "/Assets/kavya-greens-logo-1.png", alt: "CHD" },
  ];
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (

   <div className="overflow-hidden">
     <title>Premium Plotted Project in Vizag</title>
        <meta
          name="description"
          content={
            "Belmond is one of the ongoing development projects by SVS Constructions. It is located at Rajapulova Junction in Vizag. Covering about 12.35 acres, this well-designed community includes 175 high-quality residential plots. Each plot aims to offer a mix of nature, comfort, and modern infrastructure."
          }
          key="desc"
        />
      <SEO pageTitle={"Premium Plotted Project in Vizag "}
      description={"Belmond is one of the ongoing development projects by SVS Constructions. It is located at Rajapulova Junction in Vizag. Covering about 12.35 acres, this well-designed community includes 175 high-quality residential plots. Each plot aims to offer a mix of nature, comfort, and modern infrastructure."}
 
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

      <div className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 ">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Belmond
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
              Crafting Futures, Building Lifestyles
            </h2>
            <p className="text-gray-700">
              Belmond is one of the ongoing development projects by SVS
              Constructions. It is located at Rajapulova Junction in Vizag.
              Positioned at the meeting point of three important districts,
              Visakhapatnam, Vizianagaram, and Srikakulam, Belmond has excellent
              connectivity and regional importance. This makes it a top choice
              for both investment and living. Covering about 12.35 acres, this
              well-designed community includes 175 high-quality residential
              plots. Each plot aims to offer a mix of nature, comfort, and
              modern infrastructure. Every part of Belmond reflects our
              commitment to quality, sustainability, and long-term value.
            </p>
            <p className="text-gray-700">
              Bhogapuram international airport is coming up just 10 minutes away
              from Belmond and minutes away from the upcoming Vizag metro
              station. These infrastructure projects are a major reason for its
              steady value appreciation. Belmond is a beautifully crafted
              plotted development; it’s a gateway to living in an eco-friendly
              lifestyle, with limitless opportunities. The project offers
              sprawling green spaces and well-planned amenities with perfect
              setting for families looking to build their dream homes.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/Assets/Belmond-Ongoing Project img.png" // Replace this with your image path in public folder
              alt="Project View"
              width={800}
              height={500}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* === Belmond Intro Section === */}
      <section className="bg-[#dff2ea] py-16 sm:py-20 relative overflow-hidden text-gray-900">
        {/* Background Leaf Pattern */}
        <div className="absolute inset-0 bg-[url('/Assets/leaf-pattern.png')] bg-no-repeat bg-left opacity-10 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10 gap-12">
          {/* === Left Image Stack === */}
          <div className="relative w-full sm:w-[380px] h-[380px] sm:h-[380px] mx-auto">
            <Image
              src="/Assets/green-buildings-7591-1.webp"
              alt="Belmond Main"
              fill
              className="object-cover rounded-md shadow-lg"
            />

            <div className="absolute left-[85%] sm:left-[90%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-20 w-[140px] sm:w-[180px] h-[180px] sm:h-[220px] border-[8px] sm:border-[10px] border-white shadow-xl bg-white">
              <Image
                src="/Assets/belmond image1.jpg"
                alt="Poster"
                fill
                className="object-cover rounded-sm"
              />
            </div>

            <div className="absolute bottom-[-10px] left-[-10px] z-30 w-[80px] sm:w-[120px]">
              <Image
                src="/Assets/belmond image3.png"
                alt="Green Badge"
                width={120}
                height={120}
              />
            </div>
          </div>

          {/* === Right Text Section === */}
          <div className="text-gray-800 bg-white max-w-xl ml-0 lg:ml-4 text-center lg:text-left  p-6 rounded-lg shadow-lg">
            <p className="text-sm text-[#686454] font-semibold tracking-wide uppercase mb-2">
              Belmond at Rajapulova,Vizag
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Elevate Lifestyle at Belmond
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Belmond is one of our upcoming plotted developments at Rajapulova
              junction, Vizag. The city is a gateway to living an eco-friendly
              lifestyle, which has potential, beauty, and limitless
              opportunities.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center justify-center lg:justify-start">
              <a
                href="/Assets/Brochure SVS .pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border bg-[#61796f] rounded-full border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black hover:border-black transition">
                  DOWNLOAD BROCHURE
                </button>
              </a>

              {/* <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#8B2D24]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500">CALL ANYTIME</p>
                  <a
                    href="tel:+91 799 555 5559"
                    className="text-sm font-semibold text-gray-800"
                  >
                    +91 8978801173
                  </a>
                </div>
              </div> */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center justify-center lg:justify-start">
              <a
                href="/Assets/Belmond RERA.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border bg-[#61796f] rounded-full border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black hover:border-black transition">
                 DOWNLOAD AP RERA
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Stats === */}
      <section className="bg-white py-16 text-center">
        {/* === Area Info Section with Divider === */}
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 text-lg font-medium text-gray-800">
            <div className="md:w-1/3 text-center">
              <span>Project Size: </span>12.35 Acres
            </div>

            <div className="hidden md:block w-px h-6 bg-gray-400 mx-4"></div>

            <div className="md:w-1/3 text-center">
              <span>Total: </span>175 Units
            </div>

            <div className="hidden md:block w-px h-6 bg-gray-400 mx-4"></div>

            <div className="md:w-1/3 text-center">
              <span className="text-bold">Plot Range: </span>129 to 655 Sq. Yds
            </div>
          </div>
        </div>

        {/* === Swiper Carousel === */}
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            className="w-full h-[300px] md:h-[400px] rounded overflow-hidden"
          >
            {[
              {
                src: "/Assets/Avenue PARK.png",
                label: "Avenue Plantation",
                icon: "🌴",
              },
              {
                src: "/Assets/STREET LIGHTS.jpg",
                label: "Street Lights",
                icon: "💡",
              },
              // {
              //   src: "/Assets/Elders Park.jpg", // Corrected
              //   label: "Elders Park",
              //   icon: "🧓",
              // },
              {
                src: "/Assets/CHILDREN PARK.png", // Corrected
                label: "Children Park",
                icon: "🧒",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded">
                    <span className="inline-block mr-2">{item.icon}</span>
                    {item.label}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* === Amenity Icons Grid === */}
      <h2 className="text-3xl font-semibold mt-5 mb-4 text-gray-800 text-center">
        Amenities
      </h2>
      <p className="max-w-5xl mx-auto px-4  text-center">
        Belmond isn’t just offering amenities; it’s a feature of a luxury living
        experience. Every amenity is designed to enhance the quality of living
        and for comfort. The project offers well-laid internal roads, vastu
        complaints, water supply, an elders’ park, kids' play areas, and more.
        Whether you seek for serene, eco-friendly environment or a luxury living
        experience, we offer one step ahead of that.
      </p>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 px-4">
        {[
          { icon: "/Assets/vastu-1.png", label: "100% Vaastu Compliant" },
          { icon: "/Assets/icon.png", label: "Majestic Entrance Gate" },
          { icon: "/Assets/icon.3.png", label: "All-Round Compound Wall" },
          { icon: "/Assets/icon4.png", label: "50 & 40 Internal Road" },
          { icon: "/Assets/icon5.png", label: "Footpath with Kerb Stones" },
          { icon: "/Assets/icon6.png", label: "Water Harvesting" },
          { icon: "/Assets/icon7.png", label: "Drainage" },
          { icon: "/Assets/icon8.png", label: "Water Supply" },
          { icon: "/Assets/icon9.png", label: "Electrical" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-sm font-semibold text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {/* Bounce Effect on Hover */}
            <motion.div
              className="w-16 h-16 mb-3 border border-black rounded-lg flex items-center justify-center"
              whileHover={{
                y: [-4, 4, -2, 2, 0], // bounce steps
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.div>

            <p className="text-center">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* === Location Section with Modal Image Preview === */}
      <div className="max-w-7xl mx-auto  mt-10 px-4">
        <div className="flex flex-col lg:flex-row w-full px-6 md:px-20 py-10 bg-white gap-18">
          {/* Left: Slider */}
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                  src="/Assets/layout4.jpg"
                  alt="Slide 1"
                  className="w-full rounded shadow"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/Assets/location-3.jpg"
                  alt="Slide 2"
                  className="w-full rounded shadow"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start  space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perks of Location
            </h1>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>5 minutes away from Praveenya Engineering College</li>

              <li>10 minutes from the upcoming new Vizag Metro Station</li>
              <li>
                15 minutes away from the International Airport, Bhogapuram
              </li>
              <li>15 minutes away from a Multi-speciality Hospital </li>
              <li>20 minutes away from Vizianagaram</li>

              <li>30 minutes away from Vishakapatnam </li>
              <li>40 minutes away from Srikakulam</li>
              {/* <li>
                15 /minutes away from the International Airport, Bhogapuram
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 px-4 mt-0">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            Layout
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div
              onClick={() => openModal("/Assets/layout1.jpg")}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-95"
            >
              <Image
                src="/Assets/layout1.jpg"
                alt="Location Map"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              onClick={() => openModal("/Assets/layout2.jpg")}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-95"
            >
              <Image
                src="/Assets/layout2.jpg"
                alt="Location Satellite"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Modal for Image Zoom */}
          {modalImage && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
              onClick={closeModal}
            >
              <div className="relative max-w-4xl w-full px-4">
                <Image
                  src={modalImage}
                  alt="Enlarged Image"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white text-3xl font-bold"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
     </div>
  );
}
