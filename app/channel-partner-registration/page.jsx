"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="overflow-hidden">
        <div
          data-aos="fade-right"
          className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Channel_Registration.png')",
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-black/10">
            <h2 className="text-center text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow">
              {/* Optional: Add heading text here */}
            </h2>
          </div>
        </div>

        {/* About Section */}
        <section className="bg-[#dff2ea] py-10 px-4">
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
              At SVS Construction, we value our relationships and are committed
              to fostering our partnership for the long term. We believe in
              working in collaboration because work becomes more precious and
              elegant when touched with different hands. As a valuable partner,
              you’ll receive updates and access to our new project launches and
              special offers, tailored marketing support, exclusive invitations
              to events, competitive commission structures, timely payouts, and
              a wide range of additional benefits.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="text-center mt-12 px-4">
          <h1
            data-aos="fade-left"
            className="text-md md:text-xl font-bold text-black"
          >
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
                className="w-[90%] sm:w-[270px] h-[120px] bg-[#61796f] text-white rounded-xl p-6 shadow-md border transition hover:bg-white hover:text-black hover:border-black"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="bg-[#dff2ea] mt-12 p-6 rounded-none">
          <div className="max-w-6xl mx-auto border-2 border-black p-4 sm:p-6">
            <h1 className="text-center text-2xl font-bold">
              Terms & Conditions
            </h1>
            <div className="w-16 border-b-2 border-gray-700 mx-auto mt-2 mb-4" />

            <div className="space-y-4 text-gray-700 text-sm sm:text-base">
              {[
                "Channel Partner should be registered as ‘Agent’ under provisions of the Real Estate (Regulation and Development) Act, 2016 and the Rules framed thereunder with the Real Estate Regulatory Authority (RERA).",
                "Channel Partner Form must be submitted for registration with SVS Constructions before any marketing and promotional activity undertaken by a Channel Partner.",
                "Appointment of Channel Partner shall be sole discretion of SVS Constructions (which may change from project to project). Channel Partner registered with SVS Constructions will not have authority to market projects unless approved on RERA website. Registration with SVS Constructions does not classify someone as an authorized Channel Partner.",
                "Channel Partner Sales will be considered subject to the following terms:",
              ].map((text, i) => (
                <div key={i} className="flex items-start">
                  <span className="font-bold mr-2 w-6">{i + 1}.</span>
                  <p>{text}</p>
                </div>
              ))}

              {[
                "Every registered Channel Partner is required to offer professional conduct towards each client.",
                "Every client visit to the project site or sales office should be accompanied by a registered Channel Partner.",
                "Client registered towards a Channel Partner will remain mapped with the said Channel Partner for a period of 90 days.",
                "Brokerage will be equally divided between the two Channel Partners for an overlapping client, if sale is closed within 90 days of registration.",
              ].map((text, i) => (
                <div key={i} className="flex items-start">
                  <ChevronRight className="mt-1" />
                  <p className="ml-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="bg-[#dff2ea] py-12 px-4 mt-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              data-aos="fade-left"
              className="text-lg md:text-xl font-semibold text-gray-800"
            >
              Fill your details and share with us. We will connect with you soon.
            </h2>
            <div
              data-aos="fade-right"
              className="w-16 border-b-2 border-gray-700 mx-auto my-2"
            />
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
              <button className="inline-flex items-center justify-center rounded-full border-2 border-[#61796f] bg-[#61796f] text-white px-6 py-2 text-sm sm:text-base font-bold transition hover:bg-white hover:text-black">
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
