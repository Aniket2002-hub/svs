"use client";
import React from "react";
import { motion } from "framer-motion";

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

import SEO from "../../(Component)/Seo";

const Page = () => {
  return (
    <>
     <div className="overflow-hidden">
       <title>Building a Better Tomorrow</title>
     <meta name="description" content={"We value our relationships and are committed to fostering our partnership for the long term. Our partnership with IREED Academy brings expertise and innovation together that will help SVS deliver smart real estate solutions."} key="desc" />
        
      <SEO pageTitle={"Building a Better Tomorrow"}
      description={"SVS Constructions is not only building projects but is also committed to building quality construction and sustainability. Their vision starts from a strong customer base to give state-of-the-art infrastructure that aligns with customer requirements."}
 
      />
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Mission_Vision.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto ">
          <h2
            data-aos="slide-right"
            data-aos-duration="1500"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          ></h2>
        </div>
      </div>

      {/* Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white text-center py-6 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-700">
            Our Vision
          </h2>
          <div className="w-16 h-1 mx-auto bg-gray-800 mb-6" />
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ">
            At SVS Construction, we are not only building projects but are also
            committed to building quality construction and sustainability. Our
            vision starts from a strong customer base to give state-of-the-art
            infrastructure that aligns with customer requirements.
          </p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white text-center py-6 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-700">
            Our Mission
          </h2>
          <div className="w-16 h-1 mx-auto bg-gray-800 mb-6" />
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto ">
            To build premium spaces that enhance the quality of life and create
            a strong customer base with long-lasting values. We’re strongly
            committed to delivering innovative and quality construction with
            timely execution.
          </p>
        </div>
      </motion.section>

      {/* Values Section */}
    
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white py-6 px-6"
        >
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-700 sm:text-3xl md:text-4xl">
              Our Values
            </h2>
            <div className="mx-auto mb-5 h-1 w-16 bg-gray-800 " />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "Integrity",
                  desc: "Ethical business practices and honesty in all dealings.",
                },
                {
                  title: "Quality",
                  desc: "Commitment to superior construction and design standards.",
                },
                {
                  title: "Innovation",
                  desc: "Adopting modern technologies for smarter living.",
                },
                {
                  title: "Customer-Centric",
                  desc: "Prioritizing buyer needs and long-term satisfaction.",
                },
                {
                  title: "Sustainability",
                  desc: "Environmentally responsible development practices.",
                },
                {
                  title: "Transparency",
                  desc: "Openness and honesty in communication.",
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="
            rounded-xl border-1 border-white bg-[#61796f] p-6 shadow-md
            text-white transition-colors duration-300
            hover:bg-white hover:text-black hover:border-black
          "
                >
                  <h4 className="mb-2 font-bold">{v.title}</h4>
                  <p className="text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
   </div>
    </>
  );
};

export default Page;
