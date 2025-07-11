"use client";
import React, { useState } from "react";
import Image from "next/image";
import SEO from "../../(Component)/Seo";

export default function PersonalStory() {
  const [showFull1, setShowFull1] = useState(false);
  const [showFull2, setShowFull2] = useState(false);

  

  return (
    <>
         <title>Meet Our Leadership – Driving Real Estate Innovation</title>
     <meta name="description" content={"SVS Constructions’ leadership is driven by strong knowledge of business strategies and hands-on experience in the real estate market. They come with a strong vision, values, and are extremely focused on quality construction and ensuring the delivery of each project on trust and long-term values."} key="desc" />

        <div className="overflow-hidden">

      <SEO pageTitle={"Driving Real Estate Innovation"}
      description={"SVS Constructions’ leadership is driven by strong knowledge of business strategies and hands-on experience in the real estate market. They come with a strong vision, values, and are extremely focused on quality construction and ensuring the delivery of each project on trust and long-term values. "}
 
      />
    
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/Assets/SVS_Vizag_Banner_Our Teams,.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"></h2>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 sm:px-6 md:px-20 py-10 bg-[#dff2ea] max-w-8xl mx-auto">
        <div className="pl-6 sm:pl-6 md:pl-24">
          {" "}
          {/* Shift content right */}
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Leadership
          </h2>
          <div className="w-20 h-1 bg-black mt-2 mb-4 border-3 border font-bold mt-4" />
          <p className="text-gray-700 text-base sm:text-lg">
            Our strong leadership at SVS Constructions is the bedrock for
            crafting legacy and building milestone projects for our valued
            customers. <br /> They provide direction, motivation, and foster a positive
            work environment.
            <br />
            <br />
            Our leaders set the vision for organizational growth, guide teams,
            and build trust, leading to increased productivity, better
            decision-making, <br /> & improved employee morale.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="bg-[#dff2ea] w-full py-5 px-4">
        {/* First White Card */}
        <div className="bg-white max-w-6xl mx-auto rounded-lg p-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          {/* Image FIRST on mobile */}
          <div className="rounded-md overflow-hidden order-1 md:order-2">
            <Image
              src="/Assets/SVSN_Leadership.png"
              alt="SVSN Varma"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text SECOND on mobile */}
          <div className="p-2 bg-white rounded order-2 md:order-1">
            <h1
              data-aos="fade-right"
              className="text-lg md:text-xl font-semibold mb-1"
            >
              SVSN Varma, Chairman
            </h1>
            <div
              data-aos="fade-right"
              className="w-16 border-b-2 border-gray-700  mt-2 mb-4 text-start"
            />
            {/* <h2 className="text-base font-medium text-gray-600 mb-4">
              Chairman
            </h2> */}
            <p
              data-aos="fade-right"
              className={`text-sm sm:text-base leading-relaxed text-gray-800 text-justify transition-all duration-300 ${
                showFull1
                  ? "max-h-full"
                  : "max-h-[150px] overflow-hidden md:max-h-full"
              }`}
            >
              Mr. SVSN Verma is a strong leader and the chairperson of SVS
              Constructions Pvt. Ltd. He is a key figure in the company; his
              great initiative and strategic thinking have given the strong
              boost. Over the past two decades, Mr. Verma's efforts have shaped
              the company's growth and built a strong foundation for future
              development. His steady commitment to innovation, quality, and
              customer trust elevates the company under his guidance and remains
              focused on the core objective of delivering excellence and quality
              construction. Mr. Verma encourages and inspires others to go
              beyond the norm in their construction projects.
              <br />
              He has led the company to new heights with his energetic
              leadership, experience, and decisiveness. And continues to stand
              as a strong pillar for the company’s growth. He is a strong
              decision-maker and a great motivator who inspires others to push
              themselves to achieve their goals.
            </p>
            {/* Show Read More on mobile only */}
            <div className="mt-2 block md:hidden">
              <button
                onClick={() => setShowFull1(!showFull1)}
                className="text-white rounded-full bg-[#90afa2] p-2 font-medium  hover:bg-white hover:text-black hover:border-black hover:border-2"
              >
                {showFull1 ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>

        {/* Second White Card */}
        <div className="bg-white max-w-6xl mx-auto rounded-lg p-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-6">
          {/* Image FIRST on mobile */}
          <div className="rounded-md overflow-hidden order-1 md:order-1">
            <Image
              src="/Assets/Girish SVS.png"
              alt="Girish Varma"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text SECOND on mobile */}
          <div className="bg-white p-4 rounded order-2 md:order-2">
            <h1 className="text-lg md:text-xl font-semibold mb-1">
              Girish Varma, Managing Director
            </h1>
            <div
              data-aos="fade-right"
              className="w-16 border-b-2 border-gray-700  mt-2 mb-4 text-start"
            />
            {/* <h2 className="text-base font-medium text-gray-600 mb-4">
              Managing Director
            </h2> */}
            <p
              className={`text-sm sm:text-base leading-relaxed text-gray-800 text-justify transition-all duration-300 ${
                showFull2
                  ? "max-h-full"
                  : "max-h-[150px] overflow-hidden md:max-h-full"
              }`}
            >
              Mr. Girish Varma holds a degree in Chemical Engineering from
              Chaitanya Bharathi Institute of Technology (CBIT), Gandipet,
              Hyderabad, Telangana. He holds an MBA from the prestigious Indian
              School of Business (ISB), Gachibowli, Hyderabad, Telangana. His
              unrelenting appetite for knowledge drove him to pursue
              Certifications in International Marketing, Business Management,
              and Crisis Management from the prestigious Harvard University,
              Cambridge, Massachusetts, United States. His entrepreneurial
              instincts inspired him to undertake a Degree in the Family
              Business Program from the Ivy League and the Kellogg School of
              Management at Northwestern University, Evanston, Illinois, (a
              suburb of Chicago), United States.
              <br />
              His leadership features a strategic vision that combines deep
              industry knowledge with innovative methods, enabling SVS
              Construction to thrive in a competitive real estate market. His
              ability to tackle various business challenges makes him stand out.
              He plays a crucial role as Managing Director, overseeing the
              company's operations, innovation, and commitment to excellence.
            </p>
            {/* Show Read More on mobile only */}
            <div className="mt-3 block md:hidden">
              <button
                onClick={() => setShowFull2(!showFull2)}
                className="text-white rounded-full bg-[#90afa2] p-2 font-medium  hover:bg-white hover:text-black hover:border-black hover:border-2"
              >
                {showFull2 ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </section>
       </div>
    </>
  );
}