"use client";

import React from "react";

export default function CareerPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[270px] sm:h-[320px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Career.png')" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2
            data-aos="slide-right"
            data-aos-duration="1500"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black drop-shadow"
          >
           
          </h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-[#f1f0fd] py-16 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            data-aos="fade-right"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700"
          >
            We Are Hiring
          </h2>
        </div>

        {/* Job Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Sales",
              color: "#FAA831",
              animation: "fade-right",
              duration: 2000,
            },
            {
              title: "CRM",
              color: "#68C556",
              animation: "fade-right",
              duration: 1000,
            },
            {
              title: "Marketing",
              color: "#0098DA",
              animation: "fade-left",
              duration: 1000,
            },
            {
              title: "Admin",
              color: "#947960",
              animation: "fade-left",
              duration: 2000,
            },
          ].map((role, idx) => (
            <div
              key={idx}
              data-aos={role.animation}
              data-aos-duration={role.duration}
              className={`flex items-center justify-center h-24 w-full rounded-md shadow-md`}
              style={{ backgroundColor: role.color }}
            >
              <div className="text-white font-bold text-lg sm:text-xl">
                {role.title}
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8">
          <p
            data-aos="fade-right"
            className="text-base font-medium text-gray-700"
          >
            Fill your details and share with us. We will connect with you soon.
          </p>
          <div
            data-aos="fade-left"
            className="w-16 border-b-2 border-black mx-auto mt-2"
          />
        </div>

        {/* Form */}
        <form
          data-aos="flip-right"
          className="max-w-5xl mx-auto bg-[#f1f0fd] border-2 border-black rounded-md p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {["Name", "Email", "Phone", "Position Applied For"].map(
            (placeholder, i) => (
              <input
                key={i}
                type={
                  placeholder === "Email"
                    ? "email"
                    : placeholder === "Phone"
                    ? "tel"
                    : "text"
                }
                placeholder={placeholder}
                data-aos="flip-left"
                data-aos-duration="3000"
                className="border rounded-md px-4 py-2 focus:outline-none w-full bg-white text-gray-500"
              />
            )
          )}

          <input
            type="file"
            data-aos="flip-left"
            data-aos-duration="3000"
            className="col-span-1 sm:col-span-2 rounded-md border border-[#092704] px-2 py-2 bg-white 
             file:mr-4 file:rounded-md file:border-0 file:bg-white file:px-4 file:py-1 
             file:text-[#092704] file:hover:bg-[#092704] file:hover:text-white 
             file:font-bold transition-colors duration-300 text-gray-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            data-aos="flip-left"
            data-aos-duration="3000"
            className="col-span-1 sm:col-span-2 mt-2 bg-white border-2 border-[#092704] text-[#092704] font-semibold px-6 py-2 rounded hover:bg-[#092704] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
