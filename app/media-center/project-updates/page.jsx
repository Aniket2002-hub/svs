"use client";
import React, { useState, useEffect, useCallback } from "react";
import SEO from "../../(Component)/Seo";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Page = () => {
  const newsCards = [
    { id: 1, date: "2025-01-09", image: "/Assets/projectimg11.jpg" },
    { id: 2, date: "2025-01-09", image: "/Assets/projectimg1.jpg" },
    { id: 3, date: "2025-01-09", image: "/Assets/projectimg2.jpg" },
    { id: 4, date: "2025-01-09", image: "/Assets/projectimg3.jpg" },
    { id: 5, date: "2025-01-09", image: "/Assets/projectimg4.jpg" },
    { id: 6, date: "2025-01-09", image: "/Assets/projectimg5.jpg" },
    { id: 7, date: "2025-01-09", image: "/Assets/projectimg10.jpg" },
    { id: 8, date: "2025-01-09", image: "/Assets/projectimg7.jpg" },
    { id: 10, date: "2025-01-09", image: "/Assets/projectimg9.jpg" },
  ];

  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const years = [...new Set(newsCards.map((n) => n.date.slice(0, 4)))].sort(
    (a, b) => b - a
  );
  const monthOptions = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const filteredNews = newsCards.filter((item) => {
    const date = new Date(item.date);
    const yearMatch = date.getFullYear().toString() === selectedYear;
    const monthMatch = selectedMonth
      ? date.getMonth() + 1 === parseInt(selectedMonth)
      : true;
    return yearMatch && monthMatch;
  });

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const showNext = () => setCurrentIndex((i) => (i + 1) % filteredNews.length);
  const showPrev = () =>
    setCurrentIndex((i) => (i - 1 + filteredNews.length) % filteredNews.length);

  const handleKeyDown = useCallback(
    (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    },
    [currentIndex, filteredNews]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <SEO
        pageTitle="Project Gallery"
        description="SVS Project image gallery filterable by year and month"
      />

      {/* Hero Section */}
      <div
        className="w-full h-[300px] lg:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/projectupdates bg img.png')",
        }}
      />

      {/* Content Section */}
      <div className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Project Updates</h2>
        <div className="w-20 h-1 bg-black mb-4" />
        <p className="text-gray-700 text-base leading-relaxed max-w-4xl ">
          The regular project update of SVS Belmond is a sincere attempt to keep
          our customers informed on the project progress. We truly wish to build
          a long-term relationship with our valued customers based on trust. Our
          determination to ensure transparency at all times reassures our
          customers. We constantly strive hard to improve our operational
          efficiency, reduce uncertainty and anxiety about the investment.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-6 mt-10 mb-10">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setSelectedYear(year);
                setSelectedMonth("");
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition shadow-sm ${
                selectedYear === year
                  ? "bg-[#61796f] text-white"
                  : "bg-[#dff2ea] text-gray-700 hover:bg-gray-100"
              }`}
            >
              {year}
            </button>
          ))}

          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border rounded-md px-4 py-2 text-sm"
          >
            <option value="">All Months</option>
            {monthOptions.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredNews.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openModal(index)}
              className="cursor-zoom-in overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={`project-${item.id}`}
                className="w-full h-[280px] object-cover object-center transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl z-50"
          >
            <FiX />
          </button>
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-4xl p-2 z-50"
          >
            <FiChevronLeft />
          </button>
          <img
            src={filteredNews[currentIndex].image}
            alt="Zoomed"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg transition-transform duration-300 scale-100"
          />
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-4xl p-2 z-50"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Page;
