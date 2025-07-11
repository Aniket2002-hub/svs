"use client";
import React from "react";
import SEO from "../(Component)/Seo";

const page = () => {
  const newsCards = [
    {
      id: 1,
      date: "2025-01-09",
      animation: "fade-left",
      image: "/Assets/IT company.png",
      caption:
        "IT employees in Visakhapatnam seek healthy ecosystems like exclusive beach with basic amenities",
      imageLink:
        "https://www.thehindu.com/news/cities/Visakhapatnam/it-employees-in-visakhapatnam-seek-healthy-ecosystems-like-exclusive-beach-with-basic-amenities/article69076078.ece",
    },
    {
      id: 2,
      date: "2025-06-24",
      animation: "fade-left",
      image: "/Assets/metro.png",
      caption:
        "Vizag Metro Rail to have two metro depots, near VIMS and Vizag Port",
      imageLink:
        "https://www.thehindu.com/news/cities/Visakhapatnam/vizag-metro-rail-to-have-two-metro-depots-near-vims-and-vizag-port/article69728254.ece",
    },
    {
      id: 3,
      date: "2024-12-28",
      animation: "fade-left",
      image: "/Assets/Screenshot 2025-06-24 113238.png",
      caption:
        "Flying High: Visakhapatnam International Airport registers an increase of over 11% in passenger traffic in 2024",
      imageLink:
        "https://www.thehindu.com/news/cities/Visakhapatnam/flying-high-visakhapatnam-international-airport-registers-an-increase-of-over-11-in-passenger-traffic-in-2024/article69033071.ece",
    },
    {
      id: 4,
      date: "2021-11-22",
      animation: "fade-left",
      image: "/Assets/PM.png",
      caption: `Proud Day For India's Quest To Become Aatmanirbhar": PM On Commissioning Of INS Visakhapatnam`,
      imageLink:
        "https://www.ndtv.com/india-news/proud-day-for-indias-quest-to-become-aatmanirbhar-in-defence-sector-pm-modi-on-commissioning-of-ins-visakhapatnam-2619692",
    },
    {
      id: 5,
      date: "2025-06-21",
      animation: "fade-left",
      image: "/Assets/yoga news (1).png",
      caption:
        "Yoga A Pause Button Humanity Needs To Become Whole Again: PM Modi On 11th International Yoga Day",
      imageLink:
        "https://www.timesnownews.com/india/pm-narendra-modi-on-11th-international-yoga-day-visakhapatnam-andhra-pradesh-world-yoga-day-article-152120208",
    },
    {
      id: 6,
      date: "2024-11-14",
      animation: "fade-left",
      image: "/Assets/hospitality.png",
      caption:
        "Varun Hospitality announces eco-friendly mixed-use project to replace The Gateway Hotel in Visakhapatnam",
      imageLink:
        "https://www.thehindu.com/news/national/andhra-pradesh/varun-hospitality-announces-eco-friendly-mixed-use-project-to-replace-the-gateway-hotel-in-visakhapatnam/article68864368.ece",
    },
    {
      id: 7,
      date: "2025-01-18",
      animation: "fade-left",
      image: "/Assets/steel plant.jpg",
      caption: "Min: ₹11K-cr package to revive Vizag steel plant",
      imageLink:
        "https://www.hindustantimes.com/india-news/min-11k-cr-package-to-revive-vizag-steel-plant-101737140708515.html",
    },
    {
      id: 8,
      date: "2023-01-25",
      animation: "fade-left",
      image: "/Assets/railway station.jpg",
      caption:
        "Visakhapatnam Railway Station gets platinum green station rating of IGBC",
      imageLink:
        "https://www.hindustantimes.com/india-news/visakhapatnam-railway-station-gets-platinum-green-station-rating-of-igbc-101674637318624.html",
    },
    {
      id: 9,
      date: "2025-06-18",
      animation: "fade-left",
      image: "/Assets/naval dockyard.png",
      caption:
        "Indian Navy To Commission Its First Anti-Submarine 'Arnala' Warship Today",
      imageLink:
        "https://www.ndtv.com/india-news/indian-navy-to-commission-its-first-anti-submarine-arnala-warship-today-8696109",
    },
    {
      id: 10,
      date: "2024-06-05",
      animation: "fade-left",
      image: "/Assets/IT company.png",
      caption:
        "IT employees in Visakhapatnam seek healthy ecosystems like exclusive beach with basic amenities",
      imageLink:
        "https://www.thehindu.com/news/cities/Visakhapatnam/it-employees-in-visakhapatnam-seek-healthy-ecosystems-like-exclusive-beach-with-basic-amenities/article69076078.ece",
    },
  ];

  // Sort by date descending
  const sortedNews = [...newsCards].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
     <title>News, Press Features & Media Coverage</title>
        <meta
          name="description"
          content={
            "Explore our latest news, media mentions, and expert insights covering real estate trends across Vizag, Hyderabad, and other key cities. Also, explore how SVS Constructions is shaping the future of urban living."
          }
          key="desc"
        />
     <div className="overflow-hidden">
      <SEO pageTitle={"News, Press Features & Media Coverage"}
      description={"Explore our latest news, media mentions, and expert insights covering real estate trends across Vizag, Hyderabad, and other key cities. Also, explore how SVS Constructions is shaping the future of urban living."}
 
      />
      {/* Hero Section */}
      <div
        data-aos="fade-left"
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_News.png')",
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
        <h2 className="text-3xl font-semibold text-gray-800">Press Coverage</h2>
        <div className="w-20 h-1 bg-black mt-2 mb-4" />
        <p className="text-gray-700 max-w-8xl">
          Stay updated with the latest news, media mentions, and expert insights
          covering real estate trends across Vizag, Hyderabad, and other key
          cities. From market growth and infrastructure updates to project
          highlights and industry developments, explore how SVS Constructions is
          shaping the future of urban living.
        </p>
      </div>

      {/* News Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          {sortedNews.map((item) => (
            <div
              key={item.id}
              data-aos={item.animation}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white"
            >
              <div className="p-4">
                {/* 🗓️ Date */}
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                {/* 🖼️ Image */}
                <a
                  href={item.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-md overflow-hidden mb-4 cursor-pointer">
                    <img
                      src={item.image}
                      alt="News Screenshot"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </a>

                {/* 📄 Caption */}
                <div className="bg-[#61796f] text-white font-semibold text-center px-4 py-3 text-sm sm:text-base rounded-md cursor-pointer hover:bg-white hover:text-black border-2 border-[#61796f]">
                  <a
                    href={item.imageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.caption}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
        </div>
    </>
  );
};

export default page;

