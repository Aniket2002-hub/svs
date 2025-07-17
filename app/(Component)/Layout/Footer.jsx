// components/Footer.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/svsconstructionsgroup",
      icon: FaFacebookF,
    },
    {
      href: "https://www.instagram.com/svsconstructionsgroup/",
      icon: FaInstagram,
    },
    { href: "https://x.com/svsconstuctions", icon: SlSocialTwitter },
    {
      href: "https://www.linkedin.com/company/svs-constructions/",
      icon: FaLinkedin,
    },
    { href: "https://www.youtube.com/@svsconstructionsgroup", icon: FaYoutube },
  ];

  const services = [
    // { href: "/about-us/about-company", label: "About Company" },
    { href: "/about-us/vision", label: "Vision & Mission" },
    { href: "/about-us/our-leadership", label: "Our Leadership" },
    { href: "/about-us/our-team", label: "Strategic Partner" },
    { href: "/project/completed", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/news-media", label: "Press Coverage" },
    { href: "/media-center/our-videos", label: "Our Videos" },
    { href: "/media-center/our-creation", label: "Our Creatives" },
    { href: "/career", label: "Career" },
    { href: "/channel-partner-registration", label: "Partner Registration" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-[#61796f] text-white pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold">Get Updates</h3>
              <p className="mt-1 text-sm sm:text-base">
                Subscribe to Stay Informed with the Latest News and Updates.
              </p>
              <form className="mt-4 flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-grow rounded-md bg-white px-5 py-3 text-black text-base sm:text-lg mb-2 sm:mb-0 sm:rounded-l-md sm:rounded-r-none"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#9cc6b5] py-3 px-6 text-base sm:text-lg font-semibold text-white hover:bg-[#90afa2] sm:rounded-l-none sm:rounded-r-md"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="mb-10">
              <h2 className="text-xl font-semibold uppercase mb-2">
                Our Project Categories
              </h2>
              <div className="w-40 h-[1px] bg-white mb-3"></div>
              <p className="text-base">
                <span className="font-semibold">Our Portfolio:</span>{" "}
                Apartments | Villas | Layouts | Commercial Spaces
              </p>
              <p className="text-base mt-2">
                <span className="font-semibold">Our Location:</span>{" "}
                {[
                  { location: "Hyderabad", href: "/gurgaon-projects" },
                  { location: "Vizag", href: "/ranchi-projects" },
                  { location: "Gurugram", href: "/gurgaon-projects" },
                  // { location: "Noida", href: "/noida-projects" },
                  // { location: "Ranchi", href: "/ranchi-projects" },
                ].map((item, index) => (
                  <span key={index}>
                    <Link
                      href={item.href}
                      target="_blank"
                      className="hover:underline"
                    >
                      {item.location}
                    </Link>
                    {index < 2 && " | "}
                  </span>
                ))}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold uppercase mb-2">
                Services Offered
              </h2>
              <div className="w-40 h-[1px] bg-white mb-3"></div>
              <p className="text-base mb-2">
                <span className="font-semibold">For Buyers:</span> List Your
                Property | Market Analysis | Pricing Advice
              </p>
              <p className="text-base">
                <span className="font-semibold">NRI Services: </span> Secured
                 & High Returns | Investment Advice | Upcoming Projects
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end ">
            <a
              href="/Assets/Brochure SVS .pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Assets/Belond Thumbanil.png"
                alt="Belmond"
                className="w-full max-w-md rounded-lg shadow-lg transition-transform hover:scale-[1.01] mt-5"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">
              Business Solutions
            </h3>
            <div className="w-24 h-[1px] bg-white mb-6"></div>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    target="_blank"
                    className="text-base hover:text-gray-200 hover:underline"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Contact Us</h3>
            <div className="w-28 h-[1px] bg-white mb-6"></div>
            <address className="not-italic space-y-4">
                <span className="text-lg font-semibold text-[]">
                  Hyderabad Office
                </span>
                <p className="text-base leading-relaxed">
                
                  Office Suite No. C&D, SVS Girish Residency,{" "}
                  <br />
                  Nizampet Road, Kukatpally {" "}
                  <br />
                  Hyderabad - 500 072, Telangana <br />
                </p>
                <address className="not-italic space-y-4">
              <span className="text-lg font-semibold text-[]">
                  Vizag Office
                </span>
              <p className="text-base leading-relaxed">
                Office Suite No. 50 - 102 - 4,  <br />
                 Near HDFC Bank, Seethammadhara,  <br />
                Vizag - 530 013, Andhra Pradesh
              </p>
                <div className="flex items-center space-x-2 ">
                  <MdEmail className="text-lg " />
                  <span className="text-base break-all">
                    svsconstructions.group@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-[-15px]">
                  <IoIosCall className="text-lg" />
                  <a
                    href="tel:+918978801173"
                    className="text-base text-white hover:underline "
                  >
                    +91 799 555 5559
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-[-15px]">
                  <GiRotaryPhone className="text-2xl" />
                  <a
                    href="tel:+918912524444"
                    className="text-base text-white hover:underline"
                  >
                    (0891) 2524444
                  </a>
                </div>
                <div className="flex gap-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="hover:text-gray-200"
                      target="_blank"
                    >
                      <social.icon size={20} />
                    </Link>
                  ))}
                </div>
              </address>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase">Location</h3>
            <div className="w-28 h-[1px] bg-white mb-6"></div>
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.3115300591785!2d83.4083594!3d17.964237500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be30025222929%3A0xf49d8562dab52cbf!2sSVS%20CONSTRUCTIONS%20SVS%20BELMOND!5e0!3m2!1sen!2sin!4v1752311473778!5m2!1sen!2sin"
                className="w-full h-[250px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SVS Construction Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#61796f] py-4 mt-10 text-center text-sm shadow-md">
        All Rights Reserved for{" "}
        <span className="font-bold">SVS Constructions Group</span> (Powered By{" "}
        <Link
          href="https://www.ireedindia.com"
          target="_blank"
          className="font-bold hover:underline"
        >
          IREED Media)
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
