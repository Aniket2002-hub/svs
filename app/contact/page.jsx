"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import SEO from "../(Component)/Seo";

const page = () => {
  return (
    <>

     <title>We’re Here to Help</title>
     <meta name="description" content={"Reach out to SVS Constructions for inquiries, site visits, or partnership opportunities."} key="desc" />
        
      <SEO
        pageTitle={
          "We’re Here to Help"
        }
        description={
          "Reach out to SVS Constructions for inquiries, site visits, or partnership opportunities."
        }
      />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <div
          data-aos="fade-right"
          className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Contact_Us.jpg')",
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

        {/* Contact Section */}
        <div className="flex flex-wrap justify-between gap-0 px-[132px] py-[95px] bg-[#dff2ea] box-border max-[992px]:flex-col max-[992px]:px-[30px] max-[576px]:px-[15px]">
          {/* Left Section */}
          <div
            data-aos="slide-right"
            className="flex-1 min-w-[300px] max-[992px]:w-full"
          >
            <h1 className="text-[32px] text-[61796f] mb-[20px] font-spartan">
              We're Always Eager to <br /> Hear From You!
            </h1>

            {/* Contact Info Blocks */}
            <div className="mb-[20px]">
              <h2 className="text-[18px] font-semibold text-[61796f] font-spartan">
                Hyderabad Office
              </h2>
              <p className="text-[15px] text-black font-poppins">
                Office Suite No. C&D, SVS Girish Residency, Nizampet Road,
                <br />
                Kukatpally, Hyderabad - 500 072, Telangana
              </p>
            </div>

            <div className="mb-[20px]">
              <h2 className="text-[18px] font-semibold text-[61796f] font-spartan">
                Vizag Office
              </h2>
              <p className="text-[15px] text-black font-poppins">
                Office Suite No. 50 - 102 - 4, Near HDFC Bank,
                <br />
                Seethammadhara, Vizag - 530 013, Andhra Pradesh
              </p>
            </div>

            <div className="mb-[20px]">
              <h2 className="text-[18px] font-semibold text-[61796f] font-spartan">
                Gurugram Office
              </h2>
              <p className="text-[15px] text-black font-poppins">
                Office Suite 8 & 9, 3rd Floor, Ninex City Mart,
                <br />
                Sohna Road, Sector 49, Gurugram - 122 018, Haryana
                <br />
              </p>
            </div>

            <div className="mb-[20px]">
              <h2 className="text-[18px] font-semibold text-black font-spartan">
                Email
              </h2>
              <p className="text-[15px] text-black font-poppins">
                svsconstructions.group@gmail.com
              </p>
            </div>

            <div className="mb-[20px]">
              <h2 className="text-[18px] font-semibold text-[61796f] font-spartan">
                Phone
              </h2>
              <div className="flex items-center space-x-2">
                <IoIosCall className="text-lg text-[#61796f]" />
                <a
                  href="tel:+918978801173"
                  className="text-base text-black hover:underline"
                >
                  +91 7995555559
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <GiRotaryPhone className="text-2xl text-[#61796f]" />
                <a
                  href="tel:+918912524444"
                  className="text-base text-black hover:underline"
                >
                  (0891) 2524444
                </a>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div
            data-aos="flip-left"
            className="flex-1 min-w-[300px] mt-0 max-[992px]:mt-[155px] max-[992px]:w-full"
          >
            <div className="bg-[#f9f9f9] p-8 rounded-[10px] shadow-md hover:shadow-[#114707]">
              <h2 className="mb-2 text-black font-spartan text-bold">
                Get in touch
              </h2>
              <p className="mb-5 font-poppins text-black">
                Fill out this form for booking a consultant advising session.
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Your name*"
                  required
                  className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Enter your email*"
                  required
                  className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Phone number*"
                  required
                  className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins text-gray-800"
                />
                <textarea
                  placeholder="Your Query"
                  rows="4"
                  className="w-full p-3 mb-4 text-sm border border-gray-300 rounded-md font-poppins text-gray-800"
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex w-fit items-center justify-center rounded
    border-2 border-[#61796f] bg-[#61796f] px-6 py-2 font-bold text-white
    transition-colors duration-300
    hover:bg-white hover:text-black w-full cursor-pointer"
                >
                  Submit query
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full h-[500px]">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.181779101285!2d77.04958537522444!3d28.65142757564882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23974e4f2743%3A0x218b50c9b159ae20!2sNinex%20City%20Mart!5e0!3m2!1sen!2sin!4v1719149959310!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default page;
