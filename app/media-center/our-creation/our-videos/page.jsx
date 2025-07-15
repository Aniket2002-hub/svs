"use client";
import { useState } from "react";
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
      title: "SVS Belmond Unfold Vizag's Most Promising Lifestyle ",
      date: "12-July-2025",
      href: "https://youtu.be/fgwkcW3fFog?si=EzHkEKi74UeDW4eh",
    },
    {
      title: "Is SVS Belmond the SMART INVESTMENT Move for 2025 and Beyond? ",
      date: "09-July-2025",
      href: "https://youtu.be/zSDVb5vGtcI?si=Rbo_WzhFeyd7YL9Q",
    },
    {
      title: "Why NRIs Are Calling This the Most Thoughtful Project in Vizag ",
      date: "08-July-2025",
      href: "https://youtu.be/zSDVb5vGtcI?si=Rbo_WzhFeyd7YL9Q",
    },
    {
      title: "Missed Bengaluru? Don’t Miss Vizag! | SVS Belmond Near Bhogapuram Airport ",
      date: "07-July-2025",
      href: "https://youtu.be/q1uaImkgnOk?si=0B2brYE5JWjksod3",
    },
    {
      title: "SVS Belmond Vizag: Best Plotted Investment in VMRDA Zone Before Prices Rise",
      date: "30-Jun-2025",
      href: "https://youtu.be/MulYi9HXQkQ?si=XAdPsnYeQ0Ltapb-",
    },
    {
      title: "Bhogapuram Green Field International Airport June Month Work Progress GMR",
      date: "03-Jun-2025",
      href: "https://youtu.be/Ww5KCvQgBoc?si=KoyZIvn5UPKnQUBo",
    },
    {
      title: "PM Modi's speech during International Day of Yoga celebrations in Visakhapatnam, Andhra Pradesh",
      date: "10-Jun-2025",
      href: "https://youtu.be/llXysFlhThc?si=Ltwe4d6Mw8KmY2T2",
    },
    {
      title: "Bhogapuram International Airport marks a milestone in transforming the Indian aviation industry",
      date: "17-Jun-2025",
      href: "https://youtu.be/-b6goU9bqII?si=ZkHmp3O3AOAzEZLY",
    },
  ],
  2024: [
    {
      title: "2025 Hyderabad Property Predictions: Boom or Bust? ",
      date: "15-Apr-2024",
      href: "https://youtu.be/DsdBuktcjnI?si=5ZLI7FPO1fCgrGiY",
    },
    {
      title: "Best Flats Under ₹1 Cr - Pune 2024",
      date: "02-Mar-2024",
      href: "https://youtu.be/-b6goU9bqII?si=38zNtnMM3DVOKcIq",
    },
  ],
  2023: [
    {
      title: "The Ship Factory of World - Visakhapatnam",
      date: "15-Aug-2023",
      href: "https://youtu.be/CSyihxr5DFs?si=H1aMk86ytCU8W7YK",
    },
  ],
  2022: [
    {
      title: "Is Real Estate Still a Good Investment in 2022?",
      date: "18-Dec-2022",
      href: "https://youtu.be/-b6goU9bqII?si=38zNtnMM3DVOKcIq",
    },
  ],
};

const short = [
  {
     
    href: "https://youtube.com/shorts/HBWiKblo6mE?si=YC3eMif5H7lTsu-6",
    label: "Imagine Waking Up to Fresh Air and Greenery Every Day",
  },
  {
    href: "https://youtube.com/shorts/ucbyrkercpY?si=lhGvLtbOq8YBRkUO",
    label: "Genius Location Secrets REVEALED at Belmond!",
  },
   {
    href: "https://youtube.com/shorts/OU1CtSc3HDY?si=S1ZPvYrt8Qf-JqY5",
    label: "Discover SVS Belmond, The RESORT LIKE Living Experience In Vizag!",
  },
   {
    href: "https://youtube.com/shorts/vAWGT6bK860?si=P26fgBkJXSVehQrL",
    label: "Vizag Emerges as India's FUTURE TECH HUB!",
  },
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
    label: "VIZAG IS BOOMING! Discover SVS Belmond Right on the Growth Corridor",
  },
  // {
  //   href: "https://youtube.com/shorts/XCQ4rudI_64?si=AE6B7LKcMHk2sqSf",
  //   label: "Bhogapuram International Airport ✈️ 60% works completed",
  // },
  {
    href: "https://youtube.com/shorts/bt5ur-9x4Rs?si=-VPwj-bkrD3Y8OxQ",
    label: "SVS Belmond: VMRDA Plots Just Minutes Away from Bhogapuram Airport!",
  },
];

export default function OurVideos() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [showShorts, setShowShorts] = useState(false);

  return (
    <div className="bg-white">
      <SEO
        pageTitle="SVS Constructions | Trusted Building Contractors & Developers in Visakhapatnam"
        description="Looking for top builders in Hyderabad? SVS Constructions specializes in residential and commercial projects, delivering quality, trust, and on-time completion."
      />

      {/* Hero Banner */}
      <div
        className="relative w-full h-[270px] md:h-[300px] lg:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Assets/SVS_Belmond_Rajapulova_Junction_Vizag_Banner_Our_Videos.png')",
        }}
      />

      {/* Intro Section */}
      <div className="px-4 sm:px-6 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Videos</h2>
            <div className="w-20 h-1 bg-black mt-2 mb-4" />
            <p className="text-gray-700 max-w-3xl">
              Here’s a glimpse of the changes happening at SVS Belmond. Each
              milestone shows our dedication to quality and speed. Check out the
              latest site development update and watch your investment come
              together, book your slot on time, and track.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@svsconstructionsgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded flex items-center"
          >
            Our YouTube Channel
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15l5.19-3L10 9v6z" />
              <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 5 12 5 12 5s-3.8 0-6.9.1c-.5 0-1.4.1-2.1.9C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.1 7.1.1 7.1.1s3.8 0 6.9-.1c.5 0 1.4-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4C22 9.6 21.8 8 21.8 8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 px-4 sm:px-6 lg:px-20 mb-6">
        {Object.keys(videoData)
          .sort((a, b) => b.localeCompare(a))
          .map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                setShowShorts(false);
              }}
              className={`px-4 py-2 border rounded font-semibold ${
                selectedYear === year && !showShorts
                  ? "bg-[#61796f] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {year}
            </button>
          ))}
        <button
          onClick={() => setShowShorts(true)}
          className={`ml-auto w-full sm:w-56 text-center px-4 py-2 border rounded font-bold ${
            showShorts
              ? "bg-red-600 text-white"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          Youtube Shorts
          
        </button>
      </div>

      {/* Video / Shorts Display */}
      <div className="px-4 sm:px-6 lg:px-20 pb-20">
        <div
          className={`grid gap-6 ${
            showShorts
              ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          } justify-items-center`}
        >
          {(showShorts ? short : videoData[selectedYear] || []).map(
            (video, index) => {
              const id = getYouTubeVideoId(video.href);
              const title = video.title || video.label;
              const date = video.date;

              return showShorts ? (
                <div key={index} className="w-full max-w-[260px]">
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
                  >
                    <div className="aspect-[9/16] bg-black">
                      <img
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="p-2 text-sm font-semibold text-gray-800">{title}</p>
                  </a>
                </div>
              ) : (
                <div key={index} className="w-full max-w-md">
                  <div className="w-full aspect-video">
                    <iframe
                      className="w-full h-full rounded"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="mt-3 font-semibold text-center text-gray-800">{title}</p>
                  {date && (
                    <p className="text-sm text-gray-500 text-center">{date}</p>
                  )}
                </div>
              );
            }
          )}

          {/* Custom image card in Shorts */}
          {/* {showShorts && (
            <div className="w-full max-w-[260px]">
              <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
                <div className="aspect-[9/16] bg-gray-200">
                  <img
                    src="/Assets/your-custom-image.png"
                    alt="Custom Short"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="p-2 text-sm font-semibold text-gray-800 text-center">
                  Your Custom Short
                </p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
