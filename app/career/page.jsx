"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const jobOpenings = [
  {
    title: "Client Engagement",
    description: (
      <>
        <p>
          Role: <strong>Client Engagement</strong>
        </p>
        <p>Place of Posting: Gurgaon</p>
        <p>Yrs of Exp: 0 - 2 Years</p>
        <p>Position Opened: 2</p>
        <br />
        <p className="font-semibold">Job description:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Conducting Analysis and sharing the reports with the clients</li>
          <li>Client Communication</li>
          <li>
            Working with clients focused on real estate investment and
            development
          </li>
          <li>
            Manage a set of dedicated clients including developers, private
            equity investors and financial institutions
          </li>
          <li>
            Build relationships and proactively identify opportunities to work
            closely with the client
          </li>
          <li>
            Coordinate internally with teams to get desired outputs for the
            client
          </li>
          <li>Ensure clients renew and see value in the subscription</li>
          <li>Engage with clients in other cities as needed</li>
          <li>Responsible for operational activities</li>
          <li>Conduct Primary and Secondary Research when required</li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A go-getter with the right attitude</li>
          <li>Works best under pressure</li>
          <li>
            Highly customer-focused with effective time management skills
          </li>
          <li>
            Flair for numbers and computer proficiency, especially in database
            tracking
          </li>
          <li>Strong negotiating skills and capacity</li>
          <li>Strong written and verbal communication skills</li>
        </ul>
        <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Apply Now
        </button>
      </>
    ),
  },
  { title: "Sr. Manager- Sales - Mumbai" },
  { title: ".NET Core Developer" },
  { title: "Business Development" },
  { title: "Market Research (Voice Process)" },
  { title: "Regional Technical Manager" },
];

export default function CareerPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[270px] sm:h-[320px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Career.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black drop-shadow"></h2>
        </div>
      </div>

      {/* Current Openings Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Current Openings
          </h2>
          <div className="w-20 h-[3px] bg-blue-700 mb-6" />

          <p className="text-gray-700 mb-4">
            As India's Gold standard company in real estate analytics, the job
            opportunities at P.E. Analytics are unlimited. Working at P.E.
            Analytics is more than just a job; it's the chance to build and
            advance a lifelong career.
          </p>
          <p className="text-gray-700 mb-4">
            We believe in hiring the best talent and then enabling it to grow.
            We provide the infrastructure that allows continuous learning and
            progress, a friendly work environment and bright colleagues.
          </p>
          <p className="text-gray-700 mb-4">
            Take a moment to explore the many different areas within our company
            where you can apply your skills to realize your goals.
          </p>
          <p className="text-gray-700 mb-8">
            If you are interested in joining our team, please send your resume
            to:{" "}
            <a
              href="mailto:svsconstructions.group@gmail.com"
              className="text-blue-600 underline"
            >
              svsconstructions.group@gmail.com
            </a>
          </p>

          {/* Accordion */}
          <div className="border rounded-md divide-y">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left px-4 py-3 flex justify-between items-center font-medium ${
                    openIndex === index ? "text-blue-700" : "text-gray-800"
                  }`}
                >
                  {job.title}
                  <span className="text-sm">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {job.description ? (
                      job.description
                    ) : (
                      <p>
                        Detailed description for the{" "}
                        <strong>{job.title}</strong> position will go here. You
                        can add responsibilities, qualifications, and a link to
                        apply.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Form */}
      <div className="bg-[#f1f0fd] py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            We Are Hiring
          </h2>
        </div>

        <div className="text-center mb-8">
          <p className="text-base font-medium text-gray-700">
            Fill your details and share with us. We will connect with you soon.
          </p>
          <div className="w-16 border-b-2 border-black mx-auto mt-2" />
        </div>

        <form className="max-w-5xl mx-auto bg-[#f1f0fd] border-2 border-black rounded-md p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                className="border rounded-md px-4 py-2 focus:outline-none w-full bg-white text-gray-500"
              />
            )
          )}

          <input
            type="file"
            className="col-span-1 sm:col-span-2 rounded-md border border-[#61796f] px-2 py-2 bg-white 
            file:mr-4 file:rounded-md file:border-0 file:bg-[#61796f] file:px-4 file:py-1 
            file:text-[white] file:hover:bg-[#61796f] file:hover:text-white 
            file:font-bold transition-colors duration-300 text-gray-500"
          />

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 mt-2 bg-[#61796f] border-2 border-[#61796f] text-white font-semibold px-6 py-2 rounded hover:bg-[white] hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
