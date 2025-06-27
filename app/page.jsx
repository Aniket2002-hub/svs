"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules"; // ✅ SINGLE correct import
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
const videos = [
  "/Assets/background-videos1.mov",
  
];

// Colored Info Blocks
const blocks = [
  {
    title: "BELMOND RESIDENTIAL",
    description:
      "Belmond launched its first residential project in Sector 48, Sohna Road, marking its entry into the real estate industry. This initiative set a high standard for future projects, showcasing the company's commitment to quality and innovation in residential development.",
    color: "bg-[#00ADEF]",
    buttonText: "View More",
    animation: "fade-right",
  },
  {
    title: "BELMOND COMMERCIAL",
    description:
      "Commercial development drives economic growth, enhances business opportunities, and boosts property value. With strategic locations, modern amenities, and adaptability, today’s commercial spaces foster investment, jobs, and long-term success.",
    color: "bg-[#3BC14A]",
    buttonText: "View More",
    animation: "fade-up",
  },
  {
    title: "BELMOND EDUCATION",
    description:
      "School development drives community growth by providing modern, inclusive, and tech-enabled learning spaces. With a focus on sustainability and holistic student development, today's schools are built to adapt and prepare future generations for a changing world.",
    color: "bg-[#F7941E]",
    buttonText: "View More",
    animation: "fade-left",
  },
];

const slides = [
  {
    src: "/Assets/CHLIDREN PARK.jpg",
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
    src: "/Assets/AVENUE PARK.jpg",
    label: "",
  },
];

const stats = [
  {
    value: 4500000,
    suffix: "+",
    label: "Residential Spaces",
    animation: "fade-right",
  },
  {
    value: 500000,
    suffix: "+",
    label: "Warehousing Solutions",
    animation: "fade-right",
  },
  {
    value: 100000,
    suffix: "+",
    label: "Educational Infrastructure",
    animation: "fade-left",
  },
  {
    value: 40000,
    suffix: "+",
    label: "Independent Floors",
    animation: "fade-left",
  },
];



const partners = [
  { name: "Vipul", logo: "/images/vipul.png" },
  { name: "Bestech", logo: "/images/bestech.png" },
  { name: "CHD", logo: "/images/chd.png" },
  { name: "Orchid", logo: "/images/orchid.png" },
  { name: "Unitech", logo: "/images/unitech.png" },
];

// export const metadata = {
//   title: "Experience | Demo",
//   description: "Hero section with headline and sub-tagline",
// };

const Page = () => {
  return (
    <div className="w-full">
      {/* ================= Video Section ================= */}
      <section className="relative w-full h-screen overflow-hidden">
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
        <div className="fixed right-4 bottom-10 flex flex-col items-center space-y-4 z-30 text-white text-xl">
          <a
            href=" https://www.instagram.com/svsconstructionsgroup/"
            className="hover:scale-110 transition text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/svsconstuctions"
            className="hover:scale-110 transition text-sky-500"
          >
            <SlSocialTwitter />
          </a>
          <a
            href=" https://www.facebook.com/svsconstructionsgroup "
            className="hover:scale-110 transition text-blue-900"
          >
            <FaFacebookF />
          </a>
          <a href="#" className="hover:scale-110 transition text-blue-500">
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@svsconstructionsgroup "
            className="hover:scale-110 transition text-red-600"
          >
            <FaYoutube />
          </a>
        </div>

        {/* WhatsApp Icon */}

        <div className="fixed left-4 bottom-4 z-30">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
        </div>
      </section>

      <section className="grid w-full bg-white py-2 md:grid-cols-2">
        {/* ─── Left: Image ───────────────────────────────────────── */}
        <div
          data-aos="fade-right"
          className="relative h-[450px] w-full md:h-auto"
        >
          <Image
            src="/Assets/jewar_airport.avif"
            alt="Belmond"
            fill
            className="object-cover"
          />
        </div>

        {/* ─── Right: Content ────────────────────────────────────── */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center rounded-md bg-[#f8b334] p-8 text-white shadow-md md:p-12"
        >
          <div className="max-w-xl">
            <p className="mb-1 text-sm font-semibold text-black">
              Phase 1 Sold Out in Just 12 Days!
            </p>
            <h4 className="text-lg font-semibold text-red-700">
              Phase 2 Launched
            </h4>
            <h2 className="my-2 text-3xl font-bold text-white">Belmond</h2>

            <p className="mb-6 text-md">
              Residential Plots in Sector 95A Gurgaon
              <br />
              Ranging from 147 sq. yds to 179 sq. yds (122.91 Sq.m. – 149.66
              Sq.m.)
            </p>

            {/* ─── Book Now button (white → green flip) ─────────── */}
            <Link
              href="#"
              className="
              inline-flex w-fit items-center justify-center rounded-full
              border-2 border-[#092704] bg-white px-6 py-3 font-semibold
              text-[#092704] transition-colors duration-300
              hover:bg-[#092704] hover:text-white
            "
            >
              Book&nbsp;Now&nbsp;→
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
            className={`text-white p-25 flex flex-col justify-between ${block.color}`}
          >
            <h2 className="text-2xl font-bold mb-4">{block.title}</h2>
            <p className="text-sm mb-6">{block.description}</p>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="flex items-center border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
              >
                <span>{block.buttonText}</span>
              </a>
              {index === 0 && (
                <FaWhatsapp className="text-white text-2xl animate-bounce" />
              )}
            </div>
          </div>
        ))}
      </section>

      <section
        className="
    relative flex items-center justify-center w-full bg-white mt-10
    min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] xl:min-h-[65vh]
    px-4 sm:px-6
  "
      >
        <div className="relative z-10 w-full max-w-7xl text-center">
          {/* ---------- HEADLINE ---------- */}
          <h1
            className="
        animate-fadeInOut font-extrabold text-[#3e9934] tracking-tight
        leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] xl:text-[10rem] 2xl:text-[12rem]
        break-words
      "
          >
            EXPERIENCE
          </h1>

          {/* ---------- MARQUEE TAGLINE ---------- */}
          <div className="relative mt-4 mx-auto max-w-max overflow-hidden whitespace-nowrap">
            {/* First Copy */}
            <span
              className="
        animate-marquee text-[#3e9934] font-medium uppercase tracking-[0.28em]
        inline-block pr-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
      "
            >
              INDIA’S&nbsp;FINEST&nbsp;GATED&nbsp;COMMUNITIES
            </span>

            {/* Second Copy for seamless loop */}
            <span
              aria-hidden="true"
              className="
        animate-marquee text-[#3e9934] font-medium uppercase tracking-[0.28em]
        inline-block pr-8 absolute left-full top-0
        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
      "
            >
              INDIA’S&nbsp;FINEST&nbsp;GATED&nbsp;COMMUNITIES
            </span>
          </div>
        </div>
      </section>

      <section data-aos="fade-left" className="bg-white py-12 px-4 sm:px-8">
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
          spaceBetween={20}
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

      <section className="bg-[#f4f6ff] py-10 px-4 sm:px-6 md:px-12 lg:px-16">
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
              Belmond: A Journey Through Time
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
              Belmond is not just a name; it’s a legacy built on decades of hard
              work, innovation, and trust. Our journey began in 1981 with the
              establishment of Stone Crushers and Mining, a humble yet ambitious
              venture that laid the foundation for what would become one of the
              most trusted names in real estate and infrastructure.
              <br />
              <br />
              Over the years, we have diversified our portfolio, expanded our
              horizons, and collaborated with some of the biggest names in the
              industry to deliver landmark projects that stand as a testament to
              our expertise and vision.
            </p>
            <Link
              href="#"
              data-aos="fade-right"
              data-aos-duration="1500"
              className="
                       inline-flex w-fit items-center justify-center rounded
    border-2 border-[#092704] bg-white px-6 py-2 font-semibold text-[#092704]
    transition-colors duration-300
    hover:bg-[#092704] hover:text-white
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
        style={{ backgroundImage: 'url("/Assets/background-img11.jpg")' }} // 🔁 Replace with your actual background image path
      >
        <div className="text-center text-white max-w-4xl mx-auto mb-12">
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Journey
          </h2>
          <p data-aos="fade-left" className="text-md md:text-lg">
            Roots Developers beholds a legacy that holds the key to unlocking
            success in the professional and personal realm. This comes with the
            delivery of iconic and essential infrastructure that leads to a
            successful life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos={stat.animation}
              className="bg-white text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-black mb-1">
                <CountUp end={stat.value} duration={3} separator="," />
                {stat.suffix}
                <div className="text-sm font-semibold text-gray-700">
                  Sq. Ft.
                </div>
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
              src="/Assets/handshake.jpg" // Replace with actual image
              alt="Collaboration"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div>
            <h4
              data-aos="fade-left"
              className="text-xl font-semibold text-gray-700 mb-1"
            >
              Collaborations
            </h4>
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
            <p data-aos="fade-left" className="text-gray-700 mb-6">
              Belmond has always believed in the power of collaboration. Over
              the years, we have partnered with some of the biggest names in the
              real estate industry to deliver landmark projects on our land.
              These collaborations have not only strengthened our reputation but
              also allowed us to bring our vision to life through world-class
              developments. Some of our notable collaborations include:
            </p>

            {/* Partner Logos */}
            <div
              data-aos="fade-left"
              className="grid grid-cols-3 sm:grid-cols-5 gap-4"
            >
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={50}
                    className="object-contain h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-26 px-6 text-white text-center"
        style={{ backgroundImage: "url('/Assets/background-img13.jpg')" }} // Replace with your image path
      >
        <h4
          data-aos="fade-right"
          className="text-lg md:text-xl font-semibold text-white mb-2"
        >
          Our Vision
        </h4>
        <h2
          data-aos="fade-left"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Building Tomorrow, Today
        </h2>
        <div
          data-aos="fade-right"
          className="w-16 h-1 bg-white mx-auto mb-6"
        ></div>
        <p
          data-aos="fade-left"
          className="text-white text-md md:text-lg leading-relaxed"
        >
          At Roots Developers, we believe in building not just structures but
          communities. Our vision is to create sustainable, futuristic, and
          community-centric spaces that cater to the needs of modern families
          and businesses. Whether it’s a luxurious apartment, a serene
          farmhouse, or a state-of-the-art commercial space, we are committed to
          delivering excellence in every project we undertake.
        </p>
      </section>
    </div>
  );
};

export default Page;
