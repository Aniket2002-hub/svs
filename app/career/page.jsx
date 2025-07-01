"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const jobOpenings = [
  {
    title: "Senior Sales Manager",
    description: (
      <>
        <p>
          Role: <strong>Senior Sales Manager</strong>
        </p>
        <p>Place of Posting: Vizag</p>
        <p>Yrs of Exp: 5+ Years</p>
        <p>Position Opened: 2</p>
        <br />
        <p className="font-semibold">Job description:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Driving sales strategy and execution across assigned regions or
            verticals
          </li>
          <li>
            Building and managing high-performing sales teams to achieve revenue
            targets
          </li>
          <li>
            Identifying growth opportunities and formulating client acquisition
            strategies
          </li>
          <li>
            Managing key client relationships and ensuring long-term
            partnerships
          </li>
          <li>
            Coordinating with marketing, product, and operations teams to align
            business goals
          </li>
          <li>
           Developing sales forecasts, performance reports, and pipeline analysis
          </li>
          <li>Leading contract negotiations and closure of high-value deals</li>
          <li>Ensuring client satisfaction and timely resolution of escalations</li>
          <li>Responsible for operational activities</li>
          <li>Conducting market research and competitor analysis to stay ahead of trends</li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Proven track record of meeting or exceeding sales targets</li>
          <li>Strong leadership and team management capabilities</li>
          <li>Excellent strategic thinking and business acumen</li>
          <li>
            Superior interpersonal and relationship-building skills
          </li>
          <li>Proficiency in CRM tools and sales analytics platforms</li>
          <li>Strong negotiation and presentation skills</li>
          <li>Excellent written and verbal communication </li>
        </ul>
        <button className="mt-4 inline-block bg-[#90afa2] text-white px-4 py-2 font-semibold rounded hover:bg-white hover:border-[#90afa2] hover:border-2 hover:text-black rounded-full">
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
