"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [ongoingSubmenuOpen, setOngoingSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setAboutDropdownOpen(false);
    setProjectsDropdownOpen(false);
    setMediaDropdownOpen(false);
    setOngoingSubmenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
    setProjectsDropdownOpen(false);
    setMediaDropdownOpen(false);
    setOngoingSubmenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#61796f] shadow text-white" : "bg-transparent text-white"}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/Assets/logooooo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li><Link href="/" className="text-[20px]">Home</Link></li>

          <li className="relative group">
            <span className="cursor-pointer text-[20px]">About&nbsp;Us</span>
            <ul className="absolute top-full left-0 mt-6 w-52 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <li><Link href="/about-us/vision" className="block px-4 py-2 hover:bg-[#61796f]">Vision & Mission</Link></li>
              <li><Link href="/about-us/our-leadership" className="block px-4 py-2 hover:bg-[#61796f]">Our Leadership</Link></li>
              
              <li><Link href="/about-us/our-team" className="block px-4 py-2 hover:bg-[#61796f]">Strategic Partner</Link></li>
            </ul>
          </li>

          <li className="relative group">
            <span className="cursor-pointer text-[20px]">Projects</span>
            <ul className="absolute top-full left-0 mt-6 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 min-w-[200px]">
              <li><Link href="/project/completed" className="block px-4 py-2 hover:bg-[#61796f]">Completed</Link></li>
              <li className="relative group/project">
                <span className="block px-4 py-2 hover:bg-[#61796f] cursor-pointer">Ongoing</span>
                <ul className="absolute top-0 left-full mt-0 ml-1 w-48 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover/project:opacity-100 group-hover/project:visible transition duration-200 z-50">
                  <li><Link href="/project/ongoing/belmond" className="block px-4 py-2 hover:bg-[#61796f]">Belmond</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <span className="cursor-pointer text-[20px]">Media&nbsp;Center</span>
            <ul className="absolute top-full left-0 mt-6 w-52 bg-[#9cc6b5] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <li><Link href="/news-media" className="block px-4 py-2 hover:bg-[#61796f]">Press Coverage</Link></li>
              <li><Link href="/media-center/our-creation/our-videos" className="block px-4 py-2 hover:bg-[#61796f]">Our Videos</Link></li>
              <li><Link href="/media-center/our-creation" className="block px-4 py-2 hover:bg-[#61796f]">Our Creatives</Link></li>
            </ul>
          </li>

          <li><Link href="/career" className="text-[20px]">Career</Link></li>
          <li><Link href="/channel-partner-registration" className="text-[20px]">Partner Registration</Link></li>
          <li><Link href="/contact" className="text-[20px]">Contact Us</Link></li>
        </ul>

        {/* ✅ Desktop Login Button (hidden on mobile) */}
        <div className="hidden md:block">
         {/*  <Link href="" target="_blank" rel="noopener noreferrer"> */}
            <button className="text-m font-bold px-8 py-2 rounded-full bg-[#90afa2] text-white border-2 border-white hover:bg-[#e4f0ea] hover:shadow-lg hover:text-black hover:border-[#90afa2] hover:bg-white transition duration-300">
              Log in
            </button>
          {/* </Link> */}
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-[#61796f] text-white transform transition-transform duration-300 ease-in-out md:hidden z-40 p-6 space-y-4 overflow-y-auto ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center mb-6">
          <Image src="/Assets/svs logo.jpg" alt="Logo" width={40} height={40} />
          <button onClick={closeMenu} className="text-xl"><FaTimes /></button>
        </div>

        <Link href="/" onClick={closeMenu} className="block py-2 border-b border-white">Home</Link>

        {/* About Us */}
        <div>
          <div className="flex items-center justify-between border-b border-white">
            <span className="py-2">About Us</span>
            <button onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)} className="py-2 font-semibold">▼</button>
          </div>
          {aboutDropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li><Link href="/about-us/vision" onClick={closeMenu}>Vision & Mission</Link></li>
              <li><Link href="/about-us/our-leadership" onClick={closeMenu}>Our Leadership</Link></li>
              <li><Link href="/about-us/our-team" onClick={closeMenu}>Strategic Partner</Link></li>
            </ul>
          )}
        </div>

        {/* Projects */}
        <div>
          <div className="flex items-center justify-between border-b border-white">
            <span className="py-2">Projects</span>
            <button onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)} className="py-2 font-semibold">▼</button>
          </div>
          {projectsDropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li><Link href="/project/completed" onClick={closeMenu}>Completed</Link></li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="py-2">Ongoing</span>
                  <button onClick={() => setOngoingSubmenuOpen(!ongoingSubmenuOpen)} className="font-semibold">▶</button>
                </div>
                {ongoingSubmenuOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="/project/ongoing/belmond" onClick={closeMenu}>Belmond</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>

        {/* Media Center */}
        <div>
          <div className="flex items-center justify-between border-b border-white">
            <span className="py-2">Media Center</span>
            <button onClick={() => setMediaDropdownOpen(!mediaDropdownOpen)} className="py-2 font-semibold">▼</button>
          </div>
          {mediaDropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li><Link href="/news-media" onClick={closeMenu}>Press Coverage</Link></li>
              <li><Link href="/media-center/our-creation/our-videos" onClick={closeMenu}>Our Videos</Link></li>
              <li><Link href="/media-center/our-creation" onClick={closeMenu}>Our Creatives</Link></li>
            </ul>
          )}
        </div>

        <Link href="/career" onClick={closeMenu} className="block py-2 border-b border-white">Career</Link>
        <Link href="/channel-partner-registration" onClick={closeMenu} className="block py-2 border-b border-white">Partner Registration</Link>
        <Link href="/contact" onClick={closeMenu} className="block py-2 border-b border-white">Contact Us</Link>

        {/* ✅ Mobile Login Button */}
        <div className="mt-4">
          <Link href="/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <button className="w-full py-2 px-4 text-center rounded-full font-semibold bg-white text-[#61796f] hover:bg-[#e4f0ea] hover:shadow-lg border-2 border-white transition duration-300">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

