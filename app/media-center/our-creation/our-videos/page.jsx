"use client";
import { useState } from "react";
import Image from "next/image";
import SEO from "../../../(Component)/Seo";

function getYouTubeVideoId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:.*v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

const videoData = {
  2025: [
    {
      title: "Why NRIs Are Calling This the Most Thoughtful Project in Vizag ",
      date: "08-July-2025",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/zSDVb5vGtcI?si=Rbo_WzhFeyd7YL9Q",
    },

    {
      title:
        "Missed Bengaluru? Don’t Miss Vizag! | SVS Belmond Near Bhogapuram Airport ",
      date: "07-July-2025",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/q1uaImkgnOk?si=0B2brYE5JWjksod3",
    },
    {
      title:
        "SVS Belmond Vizag: Best Plotted Investment in VMRDA Zone Before Prices Rise",
      date: "30-Jun-2025",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/MulYi9HXQkQ?si=XAdPsnYeQ0Ltapb-",
    },
    {
      title:
        "Bhogapuram Green Field International Airport June Month Work Progress GMR",
      date: "03-Jun-2025",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/Ww5KCvQgBoc?si=KoyZIvn5UPKnQUBo",
    },

    {
      title:
        "PM Modi's speech during International Day of Yoga celebrations in Visakhapatnam, Andhra Pradesh",
      date: "10-Jun-2025",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/llXysFlhThc?si=Ltwe4d6Mw8KmY2T2",
    },
    {
      title:
        "Bhogapuram International Airport marks a milestone in transforming the Indian aviation industry",
      date: "17-Jun-2025",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/-b6goU9bqII?si=ZkHmp3O3AOAzEZLY",
    },
  ],
  2024: [
    {
      title: "Hyderabad Housing Boom of 2024",
      date: "15-Apr-2024",
      thumbnail: "/Assets/youtube logo.avif",
      href: "",
    },
    {
      title: "Best Flats Under ₹1 Cr - Pune 2024",
      date: "02-Mar-2024",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/-b6goU9bqII?si=38zNtnMM3DVOKcIq",
    },
  ],
  2023: [
    {
      title: "The Ship Factory of World - Visakhapatnam",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/CSyihxr5DFs?si=H1aMk86ytCU8W7YK",
    },
  ],
  2022: [
    {
      title: "Is Real Estate Still a Good Investment in 2022?",
      date: "18-Dec-2022",
      thumbnail: "/Assets/youtube logo.avif",
      href: "https://youtu.be/-b6goU9bqII?si=38zNtnMM3DVOKcIq",
    },
  ],
};

const short = [
  {
    href: "https://youtube.com/shorts/4L0qDt1JqhE?si=3IwOxnG4QrjVdpER",
    label: "Vizag's HIDDEN GEM Revealed! SVS Belmond",
  },
  {
    href: "https://youtube.com/shorts/rTKUmzBHUBw?si=LkcLoMO1rflg-wVt",
    label: "INVEST in Vizag's BOOMING Economy with SVS Belmond!",
  },
  {
    href: "https://youtube.com/shorts/V9KMYsEHf6E?si=kdg3ps67T2PuRBn3",
    label: "SVS Belmond Vizag! Plots in India’s Fastest Growing Coastal City",
  },
  {
    href: "https://youtube.com/shorts/rTKUmzBHUBw?si=ynjFEC7hrc2FPwiD",
    label:
      "VIZAG IS BOOMING! Discover SVS Belmond Right on the Growth Corridor",
  },
  {
    href: "https://youtube.com/shorts/XCQ4rudI_64?si=AE6B7LKcMHk2sqSf",
    label: "Bhogapuram International Airport ✈️ 60% works completed",
  },
  {
    href: "https://youtube.com/shorts/bt5ur-9x4Rs?si=-VPwj-bkrD3Y8OxQ",
    label:
      "SVS Belmond: VMRDA Plots Just Minutes Away from Bhogapuram Airport!",
  },
];

export default function OurVideos() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [showShorts, setShowShorts] = useState(false);

  return (
    <div>
      <div className="overflow-hidden">
        <title>SVS Constructions | Trusted Building Contractors & Developers in visakhapatnam</title>
        <meta
          name="description"
          content={
            "Looking for top builders in Hyderabad? SVS Constructions specializes in residential and commercial projects, delivering quality, trust, and on-time completion."
          }
          key="desc"
        />
        <SEO
          pageTitle={
            "SVS Constructions | Trusted Building Contractors & Developers in visakhapatnam"
          }
          description={
            "Looking for top builders in Hyderabad? SVS Constructions specializes in residential and commercial projects, delivering quality, trust, and on-time completion."
          }
        />

        {/* Hero Section */}
        <div
          className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Our_Videos.png')",
          }}
        >
          <div className="relative z-10 max-w-5xl mx-auto text-center" />
        </div>

        {/* Description and CTA */}
        <div className="px-6 md:px-20 py-10 bg-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Videos
              </h2>
              <div className="w-20 h-1 bg-black mt-2 mb-4" />
              <p className="text-gray-700 max-w-3xl">
                Here’s a glimpse of the changes happening at SVS Belmond. Each
                milestone shows our dedication to quality and speed. Check out
                the latest site development update and watch your investment
                come together, book your slot on time, and track.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@svsconstructionsgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded flex items-center"
            >
              Our YouTube Channel
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 15l5.19-3L10 9v6z" />
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 5 12 5 12 5s-3.8 0-6.9.1c-.5 0-1.4.1-2.1.9C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.1 7.1.1 7.1.1s3.8 0 6.9-.1c.5 0 1.4-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Year Buttons + Shorts Button */}
        <div className="px-6 md:px-20 pb-4 flex flex-wrap items-center justify-between font-bold ">
          <div className="flex gap-2 flex-wrap">
            {Object.keys(videoData)
              .sort((a, b) => b.localeCompare(a))
              .map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    setShowShorts(false);
                  }}
                  className={`px-4 py-2 border rounded ${
                    selectedYear === year && !showShorts
                      ? "bg-[#61796f] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {year}
                </button>
              ))}
          </div>
          <button
            onClick={() => setShowShorts(true)}
            className="mt-4 md:mt-0 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded"
          >
            Our YouTube Shorts&nbsp;
            <svg
              className="inline-block w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 15l5.19-3L10 9v6zm11-3c0-5.52-4.48-10-10-10S1 6.48 1 12s4.48 10 10 10 10-4.48 10-10z" />
            </svg>
          </button>
        </div>

        {/* Video Grid */}
        {!showShorts && (
          <div className="px-6 md:px-20 py-8 bg-blue-50 ">
            {videoData[selectedYear]?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoData[selectedYear].map((video, i) => {
                  const id = getYouTubeVideoId(video.href); // ✅ fixed here
                  const thumb = id
                    ? `/Assets/youtube logo.jpg`
                    : "/Assets/youtube logo.jpg";

                  return (
                    <a
                      href={video.href}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white shadow rounded overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <Image
                        src={thumb}
                        alt={video.title}
                        width={500}
                        height={300}
                        className="w-full h-72 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg text-gray-800">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {video.date}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                No videos found for {selectedYear}.
              </p>
            )}
          </div>
        )}

        {/* Shorts View */}
        {showShorts && (
          <div className="px-6 md:px-20 py-8 bg-blue-50">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              YouTube Shorts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {short.map((short, index) => {
                const id = getYouTubeVideoId(short.href);
                const thumb = id
                  ? `/Assets/youtube logo.jpg`
                  : "/Assets/youtube logo.jpg";
                return (
                  <a
                    href={short.href}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded shadow hover:shadow-lg overflow-hidden"
                  >
                    <Image
                      src={thumb}
                      alt={short.label}
                      width={300}
                      height={180}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-2 text-sm text-gray-800 font-medium">
                      ▶️ {short.label}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
