"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
    setMediaDropdownOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMediaDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMediaDropdown = () => setMediaDropdownOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#61796f] shadow text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <Image src="/Assets/Group 82.png" alt="Logo" width={50} height={50} />
        </Link>

        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px]"
            >
              Home
            </Link>
          </li>

          <li className="relative group">
            <span className="cursor-pointer text-[20px]">About&nbsp;Us</span>
            <ul className="absolute top-full left-0 mt-2 w-52 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <li>
                <Link
                  href="/about-us/vision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#61796f]"
                >
                  Vision&nbsp;&amp;&nbsp;Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/Our-Leadership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#61796f]"
                >
                  Our Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/our-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#61796f]"
                >
                  Strategic Partner
                </Link>
              </li>
            </ul>
          </li>

          {/* Projects Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer text-[20px]">Projects</span>
            <ul className="absolute top-full left-0 mt-2 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 min-w-[200px]">
              <li>
                <Link
                  href="/project/completed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#61796f]"
                >
                  Completed
                </Link>
              </li>
              <li className="relative group/project">
                <span className="block px-4 py-2 hover:bg-[#61796f] cursor-pointer">
                  Ongoing
                </span>
                <ul className="absolute top-0 left-full mt-0 ml-1 w-48 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover/project:opacity-100 group-hover/project:visible transition duration-200 z-50">
                  <li>
                    <Link
                      href="/project/ongoing/Belmond"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-[#61796f]"
                    >
                      Belmond
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/career"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px]"
            >
              Career
            </Link>
          </li>

          <li className="relative group">
            <span className="cursor-pointer text-[20px]">
              Media&nbsp;Center
            </span>
            <ul className="absolute top-full left-0 mt-2 w-52 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <li>
                <Link
                  href="/media-center/our-creation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#61796f]"
                >
                  Our&nbsp;Creatives
                </Link>
              </li>
              <li>
                <Link
                  href="/media-center/our-videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#61796f]"
                >
                  Our&nbsp;Videos
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/news-media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px]"
            >
              Press Coverage
            </Link>
          </li>
          <li>
            <Link
              href="/channel-partner-registration"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px]"
            >
              Partner&nbsp;Registration
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px]"
            >
              Contact&nbsp;Us
            </Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-2xl text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu unchanged */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#61796f] text-white transform transition-transform duration-300 ease-in-out md:hidden z-40 p-6 space-y-4 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src="/Assets/svs logo.jpg" alt="Logo" width={40} height={40} />
          <button onClick={closeMenu} className="text-xl">
            <FaTimes />
          </button>
        </div>

        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block py-2 border-b border-white"
        >
          Home
        </Link>

        <div>
          <div className="flex items-center justify-between border-b border-white">
            <Link
              href="/about-us"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="py-2"
            >
              About&nbsp;Us
            </Link>
            <button onClick={toggleDropdown} className="py-2 font-semibold">
              ▼
            </button>
          </div>
          {dropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li>
                <Link
                  href="/about-us/our-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/vision"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Vision&nbsp;&amp;&nbsp;Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/Our-Leadership"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Our Leadership
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          href="/project"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block py-2 border-b border-white"
        >
          Project
        </Link>
        <Link
          href="/career"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block py-2 border-b border-white"
        >
          Career
        </Link>

        <div>
          <div className="flex items-center justify-between border-b border-white">
            <Link
              href="/media-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="py-2"
            >
              Media&nbsp;Center
            </Link>
            <button
              onClick={toggleMediaDropdown}
              className="py-2 font-semibold"
            >
              ▼
            </button>
          </div>
          {mediaDropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li>
                <Link
                  href="/media-center/our-creation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Our&nbsp;Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/media-center/our-videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Our&nbsp;Videos
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          href="/news-media"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block py-2 border-b border-white"
        >
          Press Coverage
        </Link>
        <Link
          href="/channel-partner-registration"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block py-2 border-b border-white"
        >
          Partner&nbsp;Registration
        </Link>
        <Link
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="block py-2 border-b border-white"
        >
          Contact&nbsp;Us
        </Link>
      </div>
    </nav>
  );
}
