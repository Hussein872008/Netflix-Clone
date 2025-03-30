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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      className="py-4 pt-6 flex items-center fixed top-0 left-0 w-full z-50"
      style={{
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(75, 74, 74, 0.5), rgba(0, 0, 0, 0))",
      }}
    >
      <Link to="/" className="text-red-600 pl-[60px] text-[50px] font-bold sm:hidden ml-[10px] pr-[30px]">
        N
      </Link>

      <Link to="/" className="text-red-600 pl-[60px] text-[50px] font-bold hidden sm:block">
        Netflix
      </Link>

      <div className="hidden sm:flex-grow sm:flex pt-[70px] justify-center">
        <div className="inline-flex items-center py-2 bg-black bg-opacity-80 rounded-2xl border border-black w-fit">
          <button onClick={() => scrollToSection("trend")} className="text-gray-300 hover:text-white transition px-4 cursor-pointer">
            Popular Now
          </button>
          <button onClick={() => scrollToSection("plans")} className="text-gray-300 hover:text-white transition px-4 cursor-pointer">
            Plans
          </button>
          <button onClick={() => scrollToSection("join")} className="text-gray-300 hover:text-white transition px-4 cursor-pointer">
            Reasons to Join
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition px-4 cursor-pointer">
            FAQ
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 pr-[60px]">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-800 text-white px-3 py-2 rounded-lg flex items-center gap-1 
                      hover:bg-gray-700 transition duration-300 border border-gray-600 shadow-md cursor-pointer"
          >
            {language}
            <span className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"} pointer-events-none`}>
              ▼
            </span>
          </button>

          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-44 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden z-10 border border-gray-700">
              {["English", "Arabic"].map((lang) => (
                <li
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-5 py-3 hover:bg-gray-700 cursor-pointer transition duration-200 ${
                    language === lang ? "bg-gray-700" : ""
                  }`}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-white">{user.email}</span>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
