// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaPhoneAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function BelmondPage() {
  

//   const logos = [
//     { src: "/Assets/Balaji-bliss-logo-1.png", alt: "Orchid" },
//     { src: "/Assets/Central-Park-logo.png", alt: "Unitech" },
//     { src: "/Assets/Central-Park-logo-phase-2.png", alt: "Bestech" },
//     { src: "/Assets/Girish-Residencey-logo-1.png" },
//     { src: "/Assets/kavya-greens-logo-1.png", alt: "CHD" },
//   ];
//   const [modalImage, setModalImage] = useState(null);

//   const openModal = (src) => setModalImage(src);
//   const closeModal = () => setModalImage(null);

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div
//         data-aos="fade-right"
//         className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Projects.png')" }}
//       >
//         <div className="relative z-10 max-w-5xl mx-auto ">
//           <h2
//             data-aos="slide-right"
//             data-aos-duration="1500"
//             className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
//           >
            
//           </h2>
//         </div>
//       </div>

//       {/* Collaborations Section */}
//       <section
//         data-aos="fade-left"
//         className="py-16 px-4 md:px-12 max-w-7xl mx-auto "
//       >
//         <h3 className="text-sm font-semibold text-gray-600 mb-2">
//           {/* Collaborations */}
//         </h3>
//         <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
//           Delivering Excellence with Every Build
//         </h2>
//         <div className="w-20 border-b-2 border-black mb-6" />

//         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10">
//           In the heart of every project, we embed our unwavering commitment to
//           Excellence and deliver premium spaces that reflect better quality. Our
//           creativity is the result of the collaboration of our passionate team,
//           their thoughtful, innovative ideas, and design that aligns with
//           customers' requirements. We believe home is not just a space to live,
//           it’s a place to feel, grow, and experience living. Our project is
//           located in a prime location with better connectivity and
//           infrastructure that will not only elevate living but also increase the
//           value appreciation.
//         </p>

//         {/* Logos */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center">
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center w-full h-24"
//             >
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={100}
//                 height={60}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

      

//       {/* === Belmond Intro Section === */}
//       <section className="bg-[#dff2ea] py-16 sm:py-20 relative overflow-hidden text-gray-900">
//         {/* Background Leaf Pattern */}
//         <div className="absolute inset-0 bg-[url('/Assets/leaf-pattern.png')] bg-no-repeat bg-left opacity-10 pointer-events-none z-0" />

//         <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10 gap-12">
//           {/* === Left Image Stack === */}
//           <div className="relative w-full sm:w-[380px] h-[380px] sm:h-[380px] mx-auto">
//             <Image
//               src="/Assets/green-buildings-7591-1.webp"
//               alt="Belmond Main"
//               fill
//               className="object-cover rounded-md shadow-lg"
//             />

//             <div className="absolute left-[85%] sm:left-[90%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-20 w-[140px] sm:w-[180px] h-[180px] sm:h-[220px] border-[8px] sm:border-[10px] border-white shadow-xl bg-white">
//               <Image
//                 src="/Assets/belmond image1.jpg"
//                 alt="Poster"
//                 fill
//                 className="object-cover rounded-sm"
//               />
//             </div>

//             <div className="absolute bottom-[-10px] left-[-10px] z-30 w-[80px] sm:w-[120px]">
//               <Image
//                 src="/Assets/belmond image3.png"
//                 alt="Green Badge"
//                 width={120}
//                 height={120}
//               />
//             </div>
//           </div>

//           {/* === Right Text Section === */}
//           <div className="text-gray-800 bg-white max-w-xl ml-0 lg:ml-4 text-center lg:text-left  p-6 rounded-lg shadow-lg">
//             <p className="text-sm text-[#686454] font-semibold tracking-wide uppercase mb-2">
//               Belmond at Rajapulova,Vizag
//             </p>
//             <h2 className="text-3xl md:text-4xl font-semibold mb-4">
//               Elevate Lifestyle at Belmod
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Belmond is one of our upcoming plotted developments at Rajapulova
//               junction, Vizag. The city is a gateway to living an eco-friendly
//               lifestyle, which has potential, beauty, and limitless
//               opportunities.
//             </p>

//             <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center justify-center lg:justify-start">
//               <a
//                 href="/Assets/SVS_Belmond_Brochure.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="border bg-[#61796f] rounded-full border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black hover:border-black transition">
//                   DOWNLOAD BROCHURE
//                 </button>
//               </a>

//               <div className="flex items-center space-x-2">
//                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#8B2D24]">
//                   <FaPhoneAlt />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500">CALL ANYTIME</p>
//                   <a
//                     href="tel:+918978801173"
//                     className="text-sm font-semibold text-gray-800"
//                   >
//                     +91 8978801173
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === Stats === */}
//       <section className="bg-white py-16 text-center">
//         {/* === Area Info Section with Divider === */}
//         <div className="max-w-5xl mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 text-lg font-medium text-gray-800">
//             <div className="md:w-1/3 text-center">
//               <span>Project Size: </span>12.35 Acres
//             </div>

//             <div className="hidden md:block w-px h-6 bg-gray-400 mx-4"></div>

//             <div className="md:w-1/3 text-center">
//               <span>Total: </span>175 Units
//             </div>

//             <div className="hidden md:block w-px h-6 bg-gray-400 mx-4"></div>

//             <div className="md:w-1/3 text-center">
//               <span className="text-bold">Plot Range: </span>129 to 655 Sq. Yds
//             </div>
//           </div>
//         </div>

//         {/* === Swiper Carousel === */}
//         <div className="max-w-5xl mx-auto px-4 mt-10">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={30}
//             slidesPerView={1}
//             navigation
//             loop
//             className="w-full h-[300px] md:h-[400px] rounded overflow-hidden"
//           >
//             {[
//               {
//                 src: "/Assets/AVENUE PARK.jpg",
//                 label: "Avenue Plantation",
//                 icon: "🌴",
//               },
//               {
//                 src: "/Assets/STREET LIGHTS.jpg",
//                 label: "Street Lights",
//                 icon: "💡",
//               },
//               {
//                 src: "/Assets/ELDERS PARK.jpg",
//                 label: "Elders Park",
//                 icon: "🧓",
//               },
//               {
//                 src: "/Assets/CHLIDREN PARK.jpg",
//                 label: "Children Park",
//                 icon: "🧒",
//               },
//             ].map((item, index) => (
//               <SwiperSlide key={index}>
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={item.src}
//                     alt={item.label}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded">
//                     <span className="inline-block mr-2">{item.icon}</span>{" "}
//                     {item.label}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* === Amenity Icons Grid === */}
//       <h2 className="text-3xl font-semibold mt-5 mb-4 text-gray-800 text-center">
//         Amenities
//       </h2>

//       <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 px-4">
//         {[
//           { icon: "/Assets/vastu-1.png", label: "100% Vaastu Compliant" },
//           { icon: "/Assets/icon.png", label: "Majestic Entrance Gate" },
//           { icon: "/Assets/icon.3.png", label: "All-Round Compound Wall" },
//           { icon: "/Assets/icon4.png", label: "50 & 40 Internal Road" },
//           { icon: "/Assets/icon5.png", label: "Footpath with Kerb Stones" },
//           { icon: "/Assets/icon6.png", label: "Water Harvesting" },
//           { icon: "/Assets/icon7.png", label: "Drainage" },
//           { icon: "/Assets/icon8.png", label: "Water Supply" },
//           { icon: "/Assets/icon9.png", label: "Electrical" },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-sm font-semibold text-gray-700"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.05 }}
//             viewport={{ once: true }}
//           >
//             {/* Bounce Effect on Hover */}
//             <motion.div
//               className="w-16 h-16 mb-3 border border-black rounded-lg flex items-center justify-center"
//               whileHover={{
//                 y: [-4, 4, -2, 2, 0], // bounce steps
//               }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeInOut",
//               }}
//             >
//               <Image
//                 src={item.icon}
//                 alt={item.label}
//                 width={36}
//                 height={36}
//                 className="object-contain"
//               />
//             </motion.div>

//             <p className="text-center">{item.label}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* === Location Section with Modal Image Preview === */}
//       <section className="bg-[#dff2ea] py-12 px-4 mt-20">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
//             Location
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
//             <div
//               onClick={() => openModal("/Assets/layout4.jpg")}
//               className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-95"
//             >
//               <Image
//                 src="/Assets/layout4.jpg"
//                 alt="Location Map"
//                 width={400}
//                 height={300}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div
//               onClick={() => openModal("/Assets/layout img.jpg")}
//               className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-95"
//             >
//               <Image
//                 src="/Assets/location-3.jpg"
//                 alt="Location Satellite"
//                 width={400}
//                 height={300}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Modal for Image Zoom */}
//           {modalImage && (
//             <div
//               className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
//               onClick={closeModal}
//             >
//               <div className="relative max-w-4xl w-full px-4">
//                 <Image
//                   src={modalImage}
//                   alt="Enlarged Image"
//                   width={1200}
//                   height={800}
//                   className="w-full h-auto rounded-lg shadow-2xl"
//                 />
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 text-white text-3xl font-bold"
//                 >
//                   &times;
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//       <section className="bg-white py-12 px-4 mt-0">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
//             Layout
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
//             <div
//               onClick={() => openModal("/Assets/layout1.jpg")}
//               className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-95"
//             >
//               <Image
//                 src="/Assets/layout1.jpg"
//                 alt="Location Map"
//                 width={400}
//                 height={300}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div
//               onClick={() => openModal("/Assets/layout2.jpg")}
//               className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-95"
//             >
//               <Image
//                 src="/Assets/layout2.jpg"
//                 alt="Location Satellite"
//                 width={400}
//                 height={300}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Modal for Image Zoom */}
//           {modalImage && (
//             <div
//               className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
//               onClick={closeModal}
//             >
//               <div className="relative max-w-4xl w-full px-4">
//                 <Image
//                   src={modalImage}
//                   alt="Enlarged Image"
//                   width={1200}
//                   height={800}
//                   className="w-full h-auto rounded-lg shadow-2xl"
//                 />
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-4 right-4 text-white text-3xl font-bold"
//                 >
//                   &times;
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
