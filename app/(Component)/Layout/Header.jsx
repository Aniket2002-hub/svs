'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMediaDropdown = () => {
    setMediaDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#092704] shadow text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/Assets/svs logo.jpg" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li><Link href="/">Home</Link></li>

          <li className="relative group">
            <span className="cursor-pointer">About Us</span>
            <ul className="absolute top-full left-0 mt-2 w-52 bg-[#3e9934] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <li><Link href="/about-us/about-company" className="block px-4 py-2 hover:bg-[#092704]">About Company</Link></li>
              <li><Link href="/about-us/vision" className="block px-4 py-2 hover:bg-[#092704]">Vision & Mission</Link></li>
              <li><Link href="/about-us/director-m" className="block px-4 py-2 hover:bg-[#092704]">Director's Message</Link></li>
            </ul>
          </li>

          <li><Link href="/project">Project</Link></li>
          <li><Link href="/career">Career</Link></li>

          {/* Media Center Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer">Media Center</span>
            <ul className="absolute top-full left-0 mt-2 w-52 bg-[#3e9934] text-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <li><Link href="/media-center/our-creation" className="block px-4 py-2 hover:bg-[#092704]">Our Creatives</Link></li>
              <li><Link href="/media-center/our-videos" className="block px-4 py-2 hover:bg-[#092704]">Our Videos</Link></li>
            </ul>
          </li>

          <li><Link href="/news-media">Press Coverage</Link></li>
          <li><Link href="/channel-partner-registration">Partner Registration</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#092704] text-white transform transition-transform duration-300 ease-in-out md:hidden z-40 p-6 space-y-4 overflow-y-auto ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Image src="/Assets/svs logo.jpg" alt="Logo" width={40} height={40} />
          <button onClick={closeMenu} className="text-xl">
            <FaTimes />
          </button>
        </div>

        <Link href="/" onClick={closeMenu} className="block py-2 border-b border-white">Home</Link>

        {/* About Us Dropdown - Mobile */}
        <div>
          <button
            onClick={toggleDropdown}
            className="w-full text-left py-2 font-semibold border-b border-white"
          >
            About Us
          </button>
          {dropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li><Link href="/about-us/about-company" onClick={closeMenu}>About Company</Link></li>
              <li><Link href="/about-us/vision" onClick={closeMenu}>Vision & Mission</Link></li>
              <li><Link href="/about-us/director-m" onClick={closeMenu}>Director's Message</Link></li>
            </ul>
          )}
        </div>

        <Link href="/project" onClick={closeMenu} className="block py-2 border-b border-white">Project</Link>
        <Link href="/career" onClick={closeMenu} className="block py-2 border-b border-white">Career</Link>

        {/* Media Center Dropdown - Mobile */}
        <div>
          <button
            onClick={toggleMediaDropdown}
            className="w-full text-left py-2 font-semibold border-b border-white"
          >
            Media Center
          </button>
          {mediaDropdownOpen && (
            <ul className="pl-4 mt-2 space-y-2">
              <li><Link href="/media-center/our-creation" onClick={closeMenu}>Our Creation</Link></li>
              <li><Link href="/media-center/our-videos" onClick={closeMenu}>Our Videos</Link></li>
            </ul>
          )}
        </div>

        <Link href="/news-media" onClick={closeMenu} className="block py-2 border-b border-white">Press Coverage</Link>
        <Link href="/channel-partner-registration" onClick={closeMenu} className="block py-2 border-b border-white">Partner Registration</Link>
        <Link href="/contact" onClick={closeMenu} className="block py-2 border-b border-white">Contact Us</Link>
      </div>
    </nav>
  );
}