"use client";
import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Infographics");

  const videoData = {
    Infographics: [
      {
        title: "Built for Life in Motion",
        date: "29-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
      },
      {
        title: "Reclaim Balance in Every Step",
        date: "12-June-2025",
        thumbnail: "/Assets/Frame 111.jpg",
      },
      {
        title:" A Destination of Peace,Purpose, and Premium Living",
        date: "22-May-2025",
        thumbnail: "/Assets/Frame 95.jpg",
      },
    ],
    Instagram: [
      {
        title: "SVS Belmond Vizag – Plots Built for Life in Motion",
        date: "30-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
        href: "https://www.instagram.com/p/DLhpLcizbf3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
    Facebook: [
      {
        title: "SVS Belmond Vizag – Plots Built for Life in Motion",
        date: "30-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
        href: "https://www.facebook.com/share/p/16NmeZRUCD/",
      },
    ],
    Linkedin: [
      {
        title: "SVS Belmond Vizag – Plots Built for Life in Motion",
        date: "30-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7345414172119076864",
      },
    ],
    Twitter: [
      {
        title: "SVS Belmond Vizag – Plots Built for Life in Motion",
        date: "30-June-2025",
        thumbnail: "/Assets/Frame 110 (1).jpg",
        href: "https://x.com/svsconstuctions/status/1939668942706155607",
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Our_Creatives2.png')",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2
            data-aos="slide-right"
            data-aos-duration="1500"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black"
          ></h2>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 md:px-20 py-10 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800">Our Creatives</h2>
        <div className="w-20 h-1 bg-[#61796f] mt-2 mb-4" />
        <p className="text-gray-700 max-w-8xl">
          Explore a visual journey of our work, showcasing project highlights,
          construction progress, milestones, events, and more. Each creative
          reflects our commitment to quality, innovation, and the vision behind
          every SVS development.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="px-6 md:px-20 pb-6 flex flex-wrap gap-2">
        {Object.keys(videoData).map((platform) => (
          <button
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
            className={`px-4 py-2 border rounded ${
              selectedPlatform === platform
                ? "bg-[#61796f] text-white"
                : "bg-[#dff2ea] text-gray-700 hover:bg-gray-100"
            }`}
          >
            {platform}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="px-6 md:px-20 py-8 bg-[#dff2ea]">
        {videoData[selectedPlatform]?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData[selectedPlatform].map((video, i) => {
              if (selectedPlatform === "Infographics") {
                return (
                  <div
                    key={i}
                    className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-500">{video.date}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <a
                    key={i}
                    href={video.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded shadow hover:shadow-md transition"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={500}
                      height={300}
                      className="w-full h-72 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-500">{video.date}</p>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No posts found for {selectedPlatform}.
          </p>
        )}
      </div>
    </>
  );
};

export default Page;