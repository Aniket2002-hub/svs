"use client";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Assets/vizag image.jpeg')" }}
      >
        <div className="relative z-10 text-center px-4">
          <h2
            data-aos="slide-right"
            data-aos-duration="1500"
            className="text-xl sm:text-2xl md:text-4xl font-bold text-white drop-shadow"
          >
            Channel Partner Registration
          </h2>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#f1f0fd] py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            data-aos="fade-left"
            className="text-xl md:text-3xl font-semibold text-gray-700"
          >
            About the Associate Program
          </h1>
          <div
            data-aos="fade-right"
            className="w-16 border-b-2 border-gray-700 mx-auto mt-2 mb-4"
          />
          <p
            data-aos="fade-left"
            className="text-sm sm:text-base md:text-lg text-gray-700"
          >
            At Roots Developers, we deeply value the strong relationships we
            share with our Channel Partners and are dedicated to building
            long-term, mutually beneficial collaborations. As a valued partner,
            you’ll receive priority access to new project launches and special
            offers, tailored marketing support, exclusive invitations to events,
            competitive commission structures, timely payouts, and a wide range
            of additional benefits.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="text-center mt-12 px-4">
        <h1 data-aos="fade-left" className="text-md md:text-xl font-bold text-gray-700">
          How It Works
        </h1>
        <div
          data-aos="fade-right"
          className="w-16 border-b-2 border-black mx-auto mt-4 mb-8"
        />
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Fill Application Form",
            "Document Verification Process",
            "ERP Registration",
            "Release Authorization Letter",
          ].map((item, index) => (
            <div
              key={item}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration={1000 + index * 500}
              className="bg-[#947960] h-[120px] w-[90%] sm:w-[270px] flex items-center justify-center rounded-md text-white text-center font-bold text-sm sm:text-base px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section className="bg-[#f0efff] py-12 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 data-aos="fade-left" className="text-lg md:text-xl font-semibold text-gray-800">
            Fill your details and share with us. We will connect with you soon.
          </h2>
          <div data-aos="fade-right" className="w-16 border-b-2 border-gray-700 mx-auto my-2" />
        </div>

        <div
          data-aos="flip-right"
          className="max-w-6xl bg-white shadow-md rounded-md border mt-8 mx-auto p-4 sm:p-6 md:p-8"
        >
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "First Name",
              "Last Name",
              "Company Name",
              "Pan Number",
              "Phone",
              "Email",
              "Address",
              "Aadhaar Number",
              "Year of Experience",
              "City",
              "State",
              "Relationship Manager (if any)",
              "Master Business Development Associate",
            ].map((placeholder, i) => (
              <input
                key={i}
                type="text"
                placeholder={placeholder}
                className={`border border-gray-300 py-2 px-3 rounded-md text-sm text-gray-600 ${
                  placeholder.includes("Address") ||
                  placeholder.includes("Relationship") ||
                  placeholder.includes("Master")
                    ? "col-span-full"
                    : ""
                }`}
              />
            ))}
          </form>

          <div className="mt-6 flex justify-center">
            <button className="inline-flex items-center justify-center rounded-full border-2 border-[#092704] bg-white px-6 py-2 text-sm sm:text-base font-semibold text-black transition duration-300 hover:bg-[#092704] hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
