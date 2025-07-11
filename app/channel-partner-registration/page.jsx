"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../(Component)/Seo"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Page = () => {
  return (
    <>

    <title>Channel Partner Registration | Grow With Us</title>
     <meta name="description" content={"Register as a channel partner with SVS Constructions to access new launches, marketing support, and exclusive benefits. We believe in growing together through strong, long-term collaborations built on trust."} key="desc" />
        <div className="overflow-hidden">
      <SEO pageTitle={"Channel Partner Registration | Grow With Us"}
      description={"Register as a channel partner with SVS Constructions to access new launches, marketing support, and exclusive benefits. We believe in growing together through strong, long-term collaborations built on trust."}
 
      />
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
              className="text-xl md:text-2xl font-bold text-black"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              About the Associate Program
            </h1>
            <div
              data-aos="fade-right"
              className="w-16 border-b-3 border-black border font-bold mx-auto mt-2 mb-4"
            />
            <p
              data-aos="fade-left"
              className="text-sm sm:text-base md:text-lg text-gray-700"
              style={{ fontFamily: "Raleway,sans-serif" }}
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

        {/* Values Section */}

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white py-6 px-6"
        >
          <div className="mx-auto max-w-6xl text-center">
            <h1
              data-aos="fade-left"
              className="text-2xl font-bold md:text-2xl text-black"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              How It Works
            </h1>
            <div
              data-aos="fade-right"
              className="w-16 border-b-3 border font-bold border-black mx-auto mt-4 mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  title: "Fill Application Form",
                  desc: "Contact us Today",
                },
                {
                  title: "Document Verification Process",
                  desc: "Goverment issued IDS",
                },
                {
                  title: "ERP Registration",
                  desc: "Join our Bussiness for growth",
                },
                {
                  title: "Release Authorization Letter",
                  desc: "Earn the perks of Bussiness",
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="
            rounded-xl border-1 border-white bg-[#61796f] p-5 shadow-md
            text-white transition-colors duration-300
            hover:bg-white hover:text-black hover:border-black
          "
                >
                  <p
                    className="mb-2 font-bold"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {v.title}
                  </p>
                  <p
                    className="text-m mt-2 mb-2"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Terms & Conditions */}
        <section className="bg-[#dff2ea] mt-12 p-6 rounded-none ">
          <div className="max-w-6xl mx-auto border-1 rounded-md border-[#61796f] p-4 sm:p-6">
            <h1
              data-aos="fade-left"
              className="text-center text-2xl font-bold"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Terms & Conditions
            </h1>
            <div
              data-aos="fade-right"
              className="w-16 border-b-2 border-gray-700 mx-auto mt-2 mb-4"
            />

            <div
              data-aos="fade-right"
              className="space-y-4 text-gray-700 text-sm sm:text-base"
            >
              {[
                "Channel Partner should be registered as ‘Agent’ under provisions of the Real Estate (Regulation and Development) Act, 2016 and the Rules framed thereunder with the Real Estate Regulatory Authority (RERA).",
                "Channel Partner Form must be submitted for registration with SVS Constructions before any marketing and promotional activity undertaken by a Channel Partner.",
                "Appointment of Channel Partner shall be sole discretion of SVS Constructions (which may change from project to project). Channel Partner registered with SVS Constructions will not have authority to market projects unless approved on RERA website. Registration with SVS Constructions does not classify someone as an authorized Channel Partner.",
                "Channel Partner Sales will be considered subject to the following terms:",
              ].map((text, i) => (
                <div key={i} className="flex items-start">
                  <span
                    className="font-bold mr-2 w-6"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {i + 1}.
                  </span>
                  <p>{text}</p>
                </div>
              ))}

              {[
                "Every registered Channel Partner is required to offer professional conduct towards each client.",
                "Every client visit to the project site or sales office should be accompanied by a registered Channel Partner.",
                "Client registered towards a Channel Partner will remain mapped with the said Channel Partner for a period of 90 days.",
                "Brokerage will be equally divided between the two Channel Partners for an overlapping client, if sale is closed within 90 days of registration.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start "
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
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
              className="text-lg md:text-2xl font-bold text-black"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Fill your details and share with us. We will connect with you
              soon.
            </h2>
            <div
              data-aos="fade-right"
              className="w-16 border-b-2 border-gray-700 mx-auto my-2"
            />
          </div>

          <div
            data-aos="flip-right"
            className="max-w-6xl bg-white shadow-md rounded-md border-1 border-[#61796f] mt-8 mx-auto p-4 sm:p-6 md:p-8"
          >
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "First Name",
                "Last Name",
                "Company Name",
                "Phone",
                "Email",
                "Aadhaar Number",
                "Pan Number",
                "Address 1",
                "Designation",
                "Address 2",
                "Your Comments",
                "City",
                "State",
              ].map((placeholder, i) => {
                // Render a textarea for 'Your Comments'
                if (placeholder === "Your Comments") {
                  return (
                    <textarea
                      key={i}
                      placeholder={placeholder}
                      className="border border-gray-300 py-2 px-3 rounded-md text-sm text-gray-600 col-span-2 row-span-2 resize-none"
                      rows={4}
                    />
                  );
                }

                // Input styling logic
                const colSpan2Fields = [
                  "Company Name",
                  "Address 1",
                  "Address 2",
                  "Designation",
                ];

                return (
                  <input
                    key={i}
                    type="text"
                    placeholder={placeholder}
                    className={`border border-gray-300 py-2 px-3 rounded-md text-sm text-gray-600 ${
                      colSpan2Fields.includes(placeholder) ? "col-span-2" : ""
                    }`}
                  />
                );
              })}
            </form>

            <div className="mt-6 flex justify-center">
              <button
                className="inline-flex items-center justify-center rounded-full border-2 border-white  bg-[#61796f] text-white px-6 py-2 text-sm sm:text-base font-bold transition hover:bg-white hover:text-black hover:border-[#61796f]"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
           </div>
    </>
  );
};

export default Page;

