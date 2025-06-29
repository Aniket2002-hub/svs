"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PersonalStory() {
  const [showFull1, setShowFull1] = useState(false);
  const [showFull2, setShowFull2] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Vizag_Banner_Our Teams,.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"></h2>
        </div>
      </div>

      {/* Story Section */}
      <section className="bg-[#dff2ea] w-full py-18 px-4">
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
              Mr. SVSN Varma stands as a true luminary, his leadership is
              defined by an unflinching commitment to excellence at every sphere
              of life. His farsighted acumen charts a course of business
              innovation, inspiring everyone around to dream beyond the
              boundaries of convention, work hard to realize those dreams,
              remain focused to the core objective and never deviate from the
              commitment to excellence.
              <br /> Mr. Varma is a thought leader with the highest level of
              integrity, self-awareness, courage, respect, compassion, and
              resilience. He constantly inspires, motivates, empowers and guides
              others towards a shared vision. As both a mentor and a motivator,
              his dynamic leadership, wisdom, and decisiveness have steered the
              company toward new heights. He remains an enduring pillar of
              inspiration, encouraging all to explore uncharted territories and
              achieve extraordinary results.
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
              src="/Assets/Leadership_Girish_Varma.png"
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
              instincts inspired him to undertake Degree in Family Business
              Program from the ivy league and The Kellogg School of Management
              at Northwestern University, Evanston, Illinois, United States.{" "}
              <br />
              He seamlessly and effortlessly blends technical prowess with
              strategic acumen. His qualifications extend far beyond college
              premises. His ability to pierce through the challenges in business
              separates him from the rest. In his role as a Managing Director he
              navigates the organization’s operations, leveraging his wealth of
              knowledge and experience to drive innovation, efficiency, and
              sustainable growth. His leadership style along with technical
              acumen and a global perspective is the bedrock of the
              organization’s success.
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
    </>
  );
}
