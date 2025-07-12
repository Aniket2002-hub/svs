"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./globals.css";

// Video Paths
const videos = ["/Assets/bg video.mp4"];

// Colored Info Blocks
const blocks = [
  {
    title: "SVS RESIDENTIAL",
    description:
      "SVS Residential has a strong foundation for building innovative and sustainable projects for a decade. From stylish apartments in Hyderabad to eco-friendly green spaces in Vizag, we have delivered multiple residential projects. With our vision of quality construction and customer trust, we are creating idyllic homes focused on comfort, community, and aesthetics.",
    color: "bg-[#90afa2]",
    buttonText: "View More",
    animation: "fade-right",
  },
  {
    title: "SVS COMMERCIAL",
    description:
      "Designed with great vision, SVS Commercial stands on a foundation of reliability, quality construction, and excellence, delivering vibrant working spaces that inspire productivity and innovation. From retail outlets and offices to standalone commercial hubs and parks, it reflects our creativity and precision that helps for a business environment, and its long-term growth. ",
    color: "bg-[#90afa2]",
    buttonText: "View More",
    animation: "fade-up",
  },
  {
    title: "SVS PLOTS",
    description:
      "SVS Plotted development is our premium projects focus on delivering thoughtfully designed layouts like “Belmond,” which includes a strategic location, nearby infrastructure, and value appreciation that empower growth, whether it's residential or commercial space.  Our plotted community offers internal wide roads, vastu-compliant, sustainable infrastructure, and freedom to build your vision. ",
    color: "bg-[#90afa2]",
    buttonText: "View More",
    animation: "fade-left",
  },
];

const slides = [
  {
    src: "/Assets/Avenue PARK.png",
    label: "",
  },
  {
    src: "/Assets/ELDERS PARK.jpg",
    label: "",
  },
  {
    src: "/Assets/STREET LIGHTS.jpg",
    label: "",
  },
  {
    src: "/Assets/CHILDREN PARK.png",
    label: "",
  },
];

const stats = [
  {
    value: 450000,
    suffix: "+",
    label: "Residential Spaces",
    animation: "fade-right",
  },
  {
    value: 60000,
    suffix: "+",
    label: "Premium Residences",
    animation: "fade-up",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Ultra Luxury Homes",
    animation: "fade-left",
  },
  {
    value: 970000,
    suffix: "+",
    label: "Layout Projects",
    animation: "fade-left",
  },
];

const partners = [
  {
    name: "Vipul",
    logo: "/Assets/Balaji-bliss-logo-1.png",
    pdf: "/Assets/Balaji-bliss.pdf",
  },
  {
    name: "Unitech",
    logo: "/Assets/kavya-greens-logo-1.png",
    pdf: "/Assets/Kavya-Greens.pdf",
  },
  {
    name: "Orchid",
    logo: "/Assets/Girish-Residencey-logo-1.png",
    pdf: "/Assets/Girish-Residencey.pdf",
  },
];

const part = [
  {
    name: "Bestech",
    logo: "/Assets/Central-Park-logo.png",
    pdf: "/Assets/Central-Park.pdf",
  },
  {
    name: "CHD",
    logo: "/Assets/Central-Park-logo-phase-2.png",
    pdf: "/Assets/SVS-Central-Park-Phase-II-Broucher.pdf",
  },
  {
    name: "Bestech",
    logo: "/Assets/SVS-Marvel-Destiny-logo-pro.png",
    pdf: "/Assets/SVS-Marvel-Destiny.pdf",
  },
];

// export const metadata = {
//   title: "Experience | Demo",


//   description: "Hero section with headline and sub-tagline",
// };
import SEO from "../app/(Component)/Seo";

const Page = () => {
  return (
    <div className="overflow-hidden">
      <title>SVS Construction: Quality Building & Infrastructure Solution</title>
     <meta name="description" content={"SVS Construction provides dependable, high-quality residential and layout projects. We focus on innovation, quality construction, and customer trust, all tailored to your vision."} key="desc" />

      <SEO pageTitle={"SVS Constructions | Trusted Building Contractors & Developers in visakhapatnam"}
      description={"Looking for top builders in Hyderabad? SVS Constructions specializes in residential and commercial projects, delivering quality, trust, and on-time completion."}
 
      />
      {/* ================= Video Section ================= */}
      <section className="relative w-full h-screen ">
        {/* Video Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          className="absolute inset-0 -z-10 w-full h-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Social Icons */}
        {/* Social Media Icons */}
        <div className="fixed right-0 bottom-8 flex flex-col items-center space-y-4 z-30 text-white text-xl bg-[#67916f]/50 p-4 rounded-md">
          <a
            href=" https://www.instagram.com/svsconstructionsgroup/"
            className="hover:scale-110 transition text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/svsconstuctions"
            className="hover:scale-110 transition text-white"
          >
            <SlSocialTwitter />
          </a>
          <a
            href=" https://www.facebook.com/svsconstructionsgroup "
            className="hover:scale-110 transition text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/svs-constructions/"
            className="hover:scale-110 transition text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@svsconstructionsgroup "
            className="hover:scale-110 transition text-white"
          >
            <FaYoutube />
          </a>
        </div>

        {/* WhatsApp Icon */}

        <div className="fixed left-4 bottom-4 z-30">
          <a
            href="https://wa.me/+917995555559"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
        </div>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-white mt-2 mb-2 gap-2 ">
        {/* Left: Image */}
        <div
          data-aos="fade-right"
          className="relative h-[160px] sm:h-[220px] md:h-[280px] lg:h-[320px] w-full"
        >
          <Image
            src="/Assets/Bhogapuram_Airport_Vizag.jpg"
            alt="Belmond"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center bg-[#90afa2] text-white p-4 sm:p-6 md:p-4 "
        >
          <div className="max-w-xl">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              SVS Belmond, Rajapulova, Vizag
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg text-black mb-4 leading-relaxed"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Successful real estate developments are distinguished by their
              premium locations. At SVS Constructions, we are committed to
              crafting projects with strategic benefits near major
              infrastructure developments. Our buyers will enjoy enhanced
              connectivity, convenience, and long-term value. Every purchase at
              SVS Constructions delivers unparalleled value.
            </p>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full
        border-2 border-white bg-[#61796f] px-5 py-2 font-semibold
        text-white transition duration-300 hover:bg-white hover:text-black w-fit"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Book&nbsp;Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Colored Blocks Section ================= */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 bg-white">
        {blocks.map((block, index) => (
          <div
            key={index}
            data-aos={block.animation}
            className={`text-white px-10 py-12 flex flex-col justify-between ${block.color}`}
          >
            <h2
              className="text-2xl font-bold mb-4 text-black "
              style={{ fontFamily: "raleway,sans-serif" }}
            >
              {block.title}
            </h2>
            <p
              className="text-base leading-relaxed mb-6 max-w-[90%] text-black md:text-lg"
              style={{ fontFamily: "raleway,sans-serif" }}
            >
              {block.description}
            </p>
            <div className="flex items-center bg-[#90afa2]">
              <a
                href="#"
                className="flex items-center bg-[#61796f] border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition  font-semibold"
                style={{ fontFamily: "raleway,sans-serif" }}
              >
                <span>{block.buttonText}</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      <section
        className="
    relative flex items-center justify-center w-full bg-white
    px-4 sm:px-6 overflow-x-hidden
    min-h-[25vh] md:min-h-[35vh] lg:min-h-[40vh] mt-4
  "
      >
        <div className="relative z-10 w-full max-w-7xl text-center">
          {/* HEADLINE */}
          <h1
            className="
        font-extrabold text-[#61796f] tracking-wide leading-none uppercase
        text-[clamp(2.5rem,10vw,10rem)]
        sm:text-[clamp(4rem,12vw,12rem)]
      "
          >
            DISCOVER
          </h1>

          {/* SUBHEADING */}
          <p
            className="
        mt-2 uppercase font-medium tracking-[0.5em] text-[#61796f]
        text-[clamp(1.2rem,3vw,2.2rem)]
        px-2 sm:px-0 text-center
      "
          >
            ELEVATED LIVING WITH SVS
          </p>
        </div>
      </section>

      <section data-aos="fade-left" className="bg-white  py-12 px-4 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800"></h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          spaceBetween={8}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] md:h-[400px] rounded overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black/60 text-white text-sm px-4 py-2">
                  {slide.label}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section
        className="bg-[#dff2ea] p-0 px-4 sm:px-6 md:px-12 lg:px-16"
        style={{ fontFamily: "raleway,sans-serif" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div>
            <h4
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              About Company
            </h4>
            <h2
              data-aos="fade-right"
              data-aos-duration="1200"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              SVS Constructions: Who We Are
            </h2>
            <div
              data-aos="fade-right"
              data-aos-duration="1300"
              className="w-12 h-1 bg-gray-800 mb-4"
            ></div>
            <p
              data-aos="fade-right"
              data-aos-duration="1400"
              className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed"
            >
              SVS Construction is a name synonymous with trust, quality, and
              innovation in real estate. We come from a legacy of decades in
              real estate development. Our journey started in the year 2002 to
              redefine urban living with premium infrastructure and design.
              <br />
              <br />
              Our community is more focused on creativity and comfort, which
              meets with customers’ expectations. SVS continues to build premium
              residential and plotted development in top cities, including
              Hyderabad and Vizag.
            </p>
            <Link
              href="#"
              data-aos="fade-right"
              data-aos-duration="1500"
              className="inline-flex w-fit items-center justify-center rounded-full
              border-2 border-white bg-[#61796f] px-6 py-3 font-semibold
              text-white transition-colors duration-300
              hover:bg-white hover:text-black hover:border-[#61796f]  border-2
                       
  "
            >
              View&nbsp;More
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div
              data-aos="fade-left"
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-full overflow-hidden md:-ml-10"
            >
              <Image
                src="/Assets/roots-developers.png"
                alt="About Company"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-fixed bg-center bg-cover py-16 px-6 md:px-20"
        style={{
          backgroundImage:
            'url("/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Layered.jpg")',
          fontFamily: "raleway,sans-serif",
        }} // 🔁 Replace with your actual background image path
      >
        <div className="text-center text-white max-w-4xl mx-auto mb-12">
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-4xl font-bold mb-4 text"
            style={{ fontFamily: "raleway,sans-serif" }}
          >
            Our Journey
          </h2>
          <p
            data-aos="fade-left"
            className="text-md md:text-lg text"
            style={{ fontFamily: "raleway,sans-serif" }}
          >
            From the beginning of building residential projects in Hyderabad a
            decade ago to now delivering innovative and sustainable projects
            with modern features across top locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto  hover:text-white">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos={stat.animation}
              className="bg-white text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition   hover:text-white"
            >
              <h3 className="text-2xl font-bold text-black mb-1">
                <CountUp end={stat.value} duration={3} separator="," />
                {stat.suffix}
                <div className="text-sm font-semibold ">Sq. Ft.</div>
              </h3>
              <p className="mt-3 text-gray-800">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div
            data-aos="fade-right"
            className="w-full h-auto rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src="/Assets/SVS_Constructions_Delivering_Excellence_Belmond_Vizag.jpg" // Replace with actual image
              alt="Collaboration"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div style={{ fontFamily: "raleway,sans-serif" }}>
            <h2
              data-aos="fade-left"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Delivering Excellence Together
            </h2>
            <div
              data-aos="fade-left"
              className="w-14 h-1 bg-gray-800 mb-4"
            ></div>
            <p data-aos="fade-left" className="text-gray-700  mb-2">
              Over the years, SVS has partnered with some of the biggest names
              in the real estate industry to deliver landmark projects.
            </p>

            {/* Partner Logos */}
            <h2 className="font-semibold mt-2">Hyderabad</h2>
            <div
              data-aos="fade-left"
              className="grid grid-cols-3 sm:grid-cols-5 gap-4"
            >
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="p-3 bg-white  rounded-lg shadow-sm flex items-center justify-center hover:shadow-md  cursor-pointer transition- duration-300 hover:-translate-x-2 mt-2 shadow-sm hover:shadow-[#61796f] border-1 border-[#61796f] hover:-translate-y-2"
                >
                  <a
                    href={partner.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={50}
                      className="object-contain h-12"
                    />
                  </a>
                </div>
              ))}
            </div>

            <h2 className="font-semibold mt-2">Vizag</h2>
            <div
              data-aos="fade-left"
              className="grid grid-cols-3 sm:grid-cols-5 gap-4"
            >
              {part.map((partner, i) => (
                <div
                  key={i}
                  className="p-3 bg-white  rounded-lg shadow-sm flex items-center justify-center hover:shadow-md  cursor-pointer transition- duration-300 hover:-translate-x-2 mt-2 shadow-sm hover:shadow-[#61796f] border-1 border-[#61796f] hover:-translate-y-2"
                >
                  <a
                    href={partner.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={50}
                      className="object-contain h-12"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-26 px-6 text-white text-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Home_Page.png')",
          fontFamily: "raleway,sans-serif",
        }} // Replace with your image path
      >
        <h4
          data-aos="fade-right"
          className="text-lg md:text-xl font-semibold  mb-2 text-black"
        >
          Our Vision
        </h4>
        <h2
          data-aos="fade-left"
          className="text-3xl md:text-4xl font-bold mb-4  text-black"
        >
          Building Legacies Crafting Milestones
        </h2>
        <div
          data-aos="fade-right"
          className="w-16 h-1 bg-black mx-auto mb-6  "
        ></div>
        <p
          data-aos="fade-left"
          className=" text-md md:text-lg leading-relaxed  text-black max-w-6xl text-center mx-auto"
        >
          At SVS Constructions, we are committed to deliver qualitative projects
          to last a lifetime.We are dedicated to deliver high-quality projects
          built to stand the test of time. Our developments are crafted with
          care and precision, creating enduring spaces.
        </p>
      </section>
    </div>
  );
};

export default Page;
