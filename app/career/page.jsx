"use client";

import React, { useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import SEO from "../../app/(Component)/Seo";

const jobOpenings = [
  {
    title: "Senior Sales Manager",
    description: (scrollToForm) => (
      <>
        {/* Job Description */}
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
            Developing sales forecasts, performance reports, and pipeline
            analysis
          </li>
          <li>Leading contract negotiations and closure of high-value deals</li>
          <li>
            Ensuring client satisfaction and timely resolution of escalations
          </li>
          <li>Responsible for operational activities</li>
          <li>
            Conducting market research and competitor analysis to stay ahead of
            trends
          </li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Proven track record of meeting or exceeding sales targets</li>
          <li>Strong leadership and team management capabilities</li>
          <li>Excellent strategic thinking and business acumen</li>
          <li>Superior interpersonal and relationship-building skills</li>
          <li>Proficiency in CRM tools and sales analytics platforms</li>
          <li>Strong negotiation and presentation skills</li>
          <li>Excellent written and verbal communication </li>
        </ul>

        {/* ... */}
        <button
          onClick={scrollToForm}
          className="mt-4 inline-block bg-[#61796d] text-white px-4 py-2 font-bold rounded hover:bg-white hover:border-[#61796d] hover:border-2 hover:text-black rounded-full"
        >
          Apply Now
        </button>
      </>
    ),
  },
  {
    title: "Relationship Manager",
    description: (scrollToForm) => (
      <>
        <p>
          Role: <strong>Relationship Manager</strong>
        </p>
        <p>Place of Posting: Vizag</p>
        <p>Yrs of Exp: 5+ Years</p>
        <p>Position Opened: 2</p>
        <br />
        <p className="font-semibold">Job description:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Manage and grow relationships with key clients across portfolios
          </li>
          <li>Understand client needs and provide tailored solutions</li>
          <li>
            Serve as the primary point of contact for client communications
          </li>
          <li>
            Collaborate with internal teams to ensure seamless service delivery
          </li>
          <li>
            Upsell and cross-sell relevant products and services to existing
            clients
          </li>
          <li>
            Developing sales forecasts, performance reports, and pipeline
            analysis
          </li>
          <li>Ensure timely resolution of client issues and escalations</li>
          <li>
            Regularly monitor client satisfaction and take proactive steps to
            improve it
          </li>
          <li>
            Prepare and deliver performance reports to clients and internal
            stakeholders
          </li>
          <li>
            Ensure client retention through consistent engagement and value
            delivery
          </li>
          <li>
            Stay updated on market trends to offer strategic advice to clients
          </li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Strong interpersonal and relationship-building skills</li>
          <li>Customer-first mindset with problem-solving approach</li>
          <li>Excellent time management and organizational skills</li>
          <li>Proficiency in CRM tools and client tracking systems</li>
          <li>Strong communication and presentation skills</li>
          <li>High emotional intelligence and professional conduct</li>
          <li>Proactive, responsible, and results-oriented attitude</li>
        </ul>

        {/* ... */}
        <button
          onClick={scrollToForm}
          className="mt-4 inline-block bg-[#61796d] text-white px-4 py-2 font-bold rounded hover:bg-white hover:border-[#61796d] hover:border-2 hover:text-black rounded-full"
        >
          Apply Now
        </button>
      </>
    ),
  },
  {
    title: "Business Development Executive",
    description: (scrollToForm) => (
      <>
        <p>
          Role: <strong>Business Development</strong>
        </p>
        <p>Place of Posting: Vizag</p>
        <p>Yrs of Exp: Fresher</p>
        <p>Position Opened: 5</p>
        <br />
        <p className="font-semibold">Job description:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Identify new business opportunities and generate qualified leads
          </li>
          <li>
            Conduct market research and competitor analysis to find growth areas
          </li>
          <li>
            Build and maintain strong relationships with prospective clients
          </li>
          <li>
            Pitch company offerings to potential customers and close deals
          </li>
          <li>
            Collaborate with internal teams to ensure successful onboarding and
            execution
          </li>
          <li>Attend industry events, networking sessions, and conferences</li>
          <li>Maintain a healthy sales pipeline and update CRM regularly</li>
          <li>Prepare regular reports on business development activities</li>
          <li>Work closely with marketing to align outreach strategies</li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Strong negotiation and persuasive communication skills</li>
          <li>Ability to work independently with a go-getter attitude</li>
          <li>Excellent lead generation and cold-calling abilities</li>
          <li>Good understanding of sales metrics and CRM tools</li>
          <li>Time management and multitasking capabilities</li>
          <li>Target-driven with the ability to handle rejection positively</li>
          <li>Creative and analytical approach to problem-solving</li>
          <li>Excellent verbal and written communication skills</li>
        </ul>

        {/* ... */}
        <button
          onClick={scrollToForm}
          className="mt-4 inline-block bg-[#61796d] text-white px-4 py-2 font-bold rounded hover:bg-white hover:border-[#61796d] hover:border-2 hover:text-black rounded-full"
        >
          Apply Now
        </button>
      </>
    ),
  },
  {
    title: "Market Analyst",
    description: (scrollToForm) => (
      <>
        <p>
          Role: <strong>Market Analyst</strong>
        </p>
        <p>Place of Posting: Vizag</p>
        <p>Yrs of Exp: 2+ Years</p>
        <p>Position Opened: 2</p>
        <br />
        <p className="font-semibold">Job description:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Conduct detailed market research and analysis to identify trends and
            opportunities
          </li>
          <li>
            Monitor industry news, competitor activity, and market developments
          </li>
          <li>
            Prepare research-based insights and reports for internal
            decision-making
          </li>
          <li>
            Analyse consumer behaviour, pricing strategies, and demand-supply
            gaps
          </li>
          <li>Build and manage databases to track key market indicators</li>
          <li>
            Developing sales forecasts, performance reports, and pipeline
            analysis
          </li>
          <li>Leading contract negotiations and closure of high-value deals</li>
          <li>
            Ensuring client satisfaction and timely resolution of escalations
          </li>
          <li>Responsible for operational activities</li>
          <li>
            Conducting market research and competitor analysis to stay ahead of
            trends
          </li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Proven track record of meeting or exceeding sales targets</li>
          <li>Strong leadership and team management capabilities</li>
          <li>Excellent strategic thinking and business acumen</li>
          <li>Superior interpersonal and relationship-building skills</li>
          <li>Proficiency in CRM tools and sales analytics platforms</li>
          <li>Strong negotiation and presentation skills</li>
          <li>Excellent written and verbal communication </li>
        </ul>

        {/* ... */}
        <button
          onClick={scrollToForm}
          className="mt-4 inline-block bg-[#61796d] text-white px-4 py-2 font-bold rounded hover:bg-white hover:border-[#61796d] hover:border-2 hover:text-black rounded-full"
        >
          Apply Now
        </button>
      </>
    ),
  },
  {
    title: "Human Resources Executive",
    description: (scrollToForm) => (
      <>
        <p>
          Role: <strong>Human Resources</strong>
        </p>
        <p>Place of Posting: Vizag</p>
        <p>Yrs of Exp: Fresher</p>
        <p>Position Opened: 2</p>
        <br />
        <p className="font-semibold">Job description:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manage end-to-end recruitment and onboarding processes</li>
          <li>
            Maintain employee records and ensure compliance with HR policies
          </li>
          <li>
            Address employee queries, grievances, and conduct exit interviews
          </li>
          <li>Organize training sessions and development programs</li>
          <li>
            Drive employee engagement and internal communication initiatives
          </li>
          <li>Support payroll and performance appraisal processes</li>
          <li>Collaborate with departments to address manpower planning</li>
          <li>Ensure timely documentation and policy updates</li>
          <li>Participate in talent management and succession plannings</li>
          <li>Maintain a positive and inclusive workplace culture</li>
        </ul>
        <br />
        <p className="font-semibold">Required Skills:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Strong understanding of HR policies and labour laws</li>
          <li>Excellent interpersonal and conflict-resolution skills</li>
          <li>Hands-on experience with HR software and ATS platforms</li>
          <li>Good organizational and multitasking abilities</li>
          <li>Strong communication and presentation skills</li>
          <li>Empathy, discretion, and ethical conduct</li>
          <li>Proficiency in MS Office tools</li>
          <li>Strategic thinking with a people-first approach</li>
        </ul>

        {/* ... */}
        <button
          onClick={scrollToForm}
          className="mt-4 inline-block bg-[#61796d] text-white px-4 py-2 font-bold rounded hover:bg-white hover:border-[#61796d] hover:border-2 hover:text-black rounded-full"
        >
          Apply Now
        </button>
      </>
    ),
  },
];

export default function CareerPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const formRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    
    
    <div className="overflow-hidden">
       <title>Join Our Team & Shape the Future</title>
     <meta name="description" content={"Join SVS Constructions for a rewarding career in real estate, where innovation, growth, and professional development are part of every role."} key="desc" />
      <SEO pageTitle={"Join Our Team & Shape the Future"}
      description={"Join SVS Constructions for a rewarding career in real estate, where innovation, growth, and professional development are part of every role."}
 
      />
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
          <div className="w-20 h-[3px] bg-black mb-6" />

          <p className="text-gray-700 mb-8">
            As India's Gold standard company in real estate development, SVS
            Constructions offers not only job opportunities but a rewarding
            career. Working at SVS Constructions is more than just a job, it's
            the chance to build and advance a lifelong career. We encourage
            continuous learning through an enterprising work environment. If you
            are interested in joining our team please send your resume to the
            following e-mail: hr@svsconstructions.com. We thank you for your
            interest in our company. to:{" "}
            <a
              href="mailto:svsconstructions.group@gmail.com"
              className="text-blue-600 underline"
            >
              svsconstructions.group@gmail.com
            </a>
          </p>

          {/* Accordion */}
          <div className="border divide-y">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left px-4 py-3 flex justify-between items-center font-medium ${
                    openIndex === index ? "text-black" : "text-gray-800"
                  }`}
                >
                  {job.title}
                  <span className="text-sm">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {job.description(scrollToForm)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Form */}
      <div ref={formRef} className="bg-[#f1f0fd] py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            We Are Hiring
          </h2>
        </div>

        <div className="text-center mb-8">
          <p className="text-base font-medium text-gray-700 mt-10">
            Share your details and upload your CV; we’re always on the lookout{" "}
            <br />
            for passionate professionals. Once submitted, our team will connect
            with you at the earliest possible.
          </p>
          <div className="w-16 border-b-3 border-black mx-auto mt-4 border font-bold" />
        </div>

        {/* Form */}
        <form className="max-w-4xl mx-auto bg-[#f1f0fd] border border-black p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Upload CV and Submit */}
          <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="cvUpload"
                className="block w-full bg-[#61796f] border-2 border-[#61796f] text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
              >
                Upload Resume
              </label>
              <input id="cvUpload" type="file" className="hidden" />
            </div>

            <button
              type="submit"
              className="w-full bg-[#61796f] border-2 border-[#61796f] text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
            </div>
    </>
  );
}
