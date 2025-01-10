'use client'

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-red-600">
      <div className="ourContainer bg-cyan-600 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <h1>LOGO</h1>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>

        {/* Desktop Links */}
        <div className="links hidden md:flex items-center justify-between md:gap-8 lg:gap-16 font-semibold text-xl">
          <Link href="">About</Link>
          <Link href="">Contact Us</Link>
          <Link href="">Blog</Link>
          <Link href="">Tracking</Link>
        </div>
      </div>

      {/* Mobile Sidebar (Visible on Mobile Only) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-red-500 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-2xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <ul className="mt-16 flex flex-col gap-4 px-6 font-semibold text-xl">
          <li>
            <Link href="" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link href="" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="" onClick={toggleSidebar}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="" onClick={toggleSidebar}>
              Tracking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
