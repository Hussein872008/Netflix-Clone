import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../pages/Login-Page/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const { user } = useAuth();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black via-[#4b4a4a80] to-transparent py-4 px-4 sm:px-10 flex flex-wrap items-center justify-between"
    >
      {/* Logo */}
      <Link to="/" className="text-red-600 text-[36px] sm:text-[50px] font-bold">
        Netflix
      </Link>

      {/* Middle Nav Links */}
      <div className="hidden sm:flex gap-4 sm:gap-6 items-center">
        <button onClick={() => scrollToSection("trend")} className="text-gray-300 hover:text-white transition">
          Popular Now
        </button>
        <button onClick={() => scrollToSection("plans")} className="text-gray-300 hover:text-white transition">
          Plans
        </button>
        <button onClick={() => scrollToSection("join")} className="text-gray-300 hover:text-white transition">
          Reasons to Join
        </button>
        <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition">
          FAQ
        </button>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0">
        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg flex items-center gap-1 
                      hover:bg-gray-700 transition duration-300 border border-gray-600 shadow-md"
          >
            {language}
            <span className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-gray-900 text-white shadow-lg rounded-lg z-10 border border-gray-700">
              {["English", "Arabic"].map((lang) => (
                <li
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${
                    language === lang ? "bg-gray-700" : ""
                  }`}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Auth Buttons */}
        {user ? (
          <div className="flex items-center gap-2 sm:gap-4 max-w-[150px] sm:max-w-none">
            <span
              className="text-white text-sm sm:text-base truncate max-w-[100px] sm:max-w-none"
              title={user.email}
            >
              {user.email.split("@")[0].slice(0, 3) + "***@" + user.email.split("@")[1]}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
