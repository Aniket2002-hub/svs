"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

// === TEAM DATA ===
const TEAM = [
  {
    name: "Bhaswar Paul",
    title: "Director Sales",
    photo: "/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Our Teams_BP.png",
    linkedin:
      "https://www.linkedin.com/in/bhaswarpaul?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: `Mr. Bhaswar Paul is a skilled real estate professional with 25+ years of experience in business development, real estate sales, and market planning, and is also the founder & CEO of IREED Academy. He has worked with some of India’s top developers, including M3M, Central Park, and IREO. He is known for his strong sales leadership, global client network, and ability to manage high-net-worth individual portfolios. Mr. Paul offers valuable industry insights and a team-oriented approach. His outstanding interpersonal skills and international experience make him a trusted advisor in real estate.
`,
  },
  {
    name: "Harsha Jasoratia",
    title: "Director Projects",
    photo: "/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Our Teams_HJ.png",
    linkedin:
      "https://www.linkedin.com/in/harshjasrotia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: `Mr. Harsh Jasrotia brings over 18 years of extensive experience in business development and strategic leadership, having held prominent roles at renowned organizations such as Lodha Developers, M3M India, InfoEdge, Phoenix Mills, and Career Launcher.
     He holds a strong academic foundation with education from IIT Patna and Panjab University.
`,
  },
  {
    name: "Kamaldeep Singh",
    title: "Director Finance",
    photo: "/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Our Teams_KP.png",
    linkedin:
      "https://www.linkedin.com/in/kamaldeep01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    bio: `Mr. Kamaldeep Prajapati is a results-driven professional with solid experience in business development, corporate events, B2B sales, sales management, and operations management. With a positive mindset and hands-on experience, he excels at promoting business growth and building strong corporate relationships. His strong leadership and execution skills make him an important part of our team, consistently adding value through new strategies and operational effectiveness. Kamaldeep’s commitment to success shows in every project he leads, helping us reach our organizational goals.`,
  },
];

const HEADER_OFFSET = 120;

export default function DirectorsMessage() {
  const [idx, setIdx] = useState(null);
  const [dir, setDir] = useState(0);
  const panelRef = useRef(null);

  const prev = useCallback(() => {
    setDir(-1);
    setIdx((i) => (i === 0 ? TEAM.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setDir(1);
    setIdx((i) => (i === TEAM.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (idx === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);

    if (panelRef.current) {
      const top =
        panelRef.current.getBoundingClientRect().top +
        window.scrollY -
        HEADER_OFFSET;
      const distance = Math.abs(window.scrollY - top);
      if (distance > 10)
        window.scrollTo({
          top,
          behavior: "smooth",
        });
    }

    return () => window.removeEventListener("keydown", onKey);
  }, [idx, prev, next]);

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 150 : -150, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35 } },
    exit: (d) => ({
      x: d > 0 ? -150 : 150,
      opacity: 0,
      transition: { duration: 0.35 },
    }),
  };

  const LinkedInBadge = ({ url }) =>
    url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 left-2 z-10   p-[6px] backdrop-blur hover:bg-white shadow"
      >
        <FaLinkedin className="text-[#0A66C2] text-lg" />
      </a>
    ) : null;

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/SVS_Vizag_Banner_Our Teams,.png')",
        }}
      />

      {/* Team Grid + Bio Section */}
      <section className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Grid */}
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((p, i) => (
              <article
                key={p.name}
                onClick={() => {
                  setIdx(i);
                  setDir(0);
                }}
                className="cursor-pointer group flex flex-col items-center"
              >
                <div className="relative w-full max-w-[350px] aspect-[3/4] overflow-hidden rounded-md border-[1.5px] border-white/70">
                  <LinkedInBadge url={p.linkedin} />
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-80"
                    priority={i === 0}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-emerald-700">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600">{p.title}</p>
              </article>
            ))}
          </div>

          {/* BIO PANEL */}
          {idx !== null && (
            <div
              ref={panelRef}
              className="relative mt-12 overflow-hidden rounded-md flex flex-col lg:flex-row scroll-mt-40"
              style={{ backgroundColor: "#9cc6b5" }}
            >
              {/* Close + Nav Buttons */}
              <button
                onClick={() => setIdx(null)}
                className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900"
              >
                <FiX />
              </button>
              <button
                aria-label="Prev"
                onClick={prev}
                className="hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-r-md"
              >
                <FiChevronLeft />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-l-md"
              >
                <FiChevronRight />
              </button>

              {/* Animated Bio Panel */}
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col lg:flex-row w-full"
                >
                  {/* Photo */}
                  <div className="relative basis-[35%] max-w-[390px] h-64 sm:h-80 lg:h-[340px] border-[1.5px] border-white/70">
                    <LinkedInBadge url={TEAM[idx].linkedin} />
                    <Image
                      src={TEAM[idx].photo}
                      alt={TEAM[idx].name}
                      fill
                      sizes="(max-width:1024px)100vw,50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="basis-1/2 p-8 flex flex-col justify-center">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-gray-900"
                      style={{ fontFamily: "raleway,sans-serif" }}
                    >
                      {TEAM[idx].name}
                    </h3>
                    <p
                      className="mt-1 text-lg font-bold text-gray-800"
                      style={{ fontFamily: "raleway,sans-serif" }}
                    >
                      {TEAM[idx].title}
                    </p>
                    <p
                      className="mt-8 leading-relaxed text-gray-800 whitespace-pre-line"
                      style={{ fontFamily: "raleway,sans-serif" }}
                    >
                      {TEAM[idx].bio}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
