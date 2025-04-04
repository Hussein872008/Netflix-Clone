import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [language, setLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      alert("Please enter a valid email address!");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email format!");
    } else {
      alert("Email submitted successfully!");
    }
  };

  return (
    <footer className="w-full bg-black text-white pt-10">
      {/* Email Sign Up */}
      <div className="flex flex-col items-center w-full px-4 mb-10 text-center">
        <p className="text-lg sm:text-xl mb-6 max-w-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <div className="relative w-full sm:w-2/3">
            <input
              type="email"
              id="email2"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              className="peer p-3 w-full rounded-lg bg-[#ffffff2d] text-white outline-none border border-white focus:border-red-600 placeholder-transparent"
            />
            <label
              htmlFor="email2"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
            >
              Email address
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg w-full sm:w-auto transition"
          >
            Get Started &gt;
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-6 sm:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="#"
            className="block text-gray-400 text-base sm:text-lg mb-6 underline"
          >
            Questions? Contact us.
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm sm:text-base">
            {[
              ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
              ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
              ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
              ["Media Center", "Terms of Use", "Contact Us"]
            ].map((column, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                {column.map((item, i) => (
                  <Link
                    key={i}
                    to="#"
                    className="text-gray-400 hover:text-red-600 underline transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Language Selector */}
          <div className="mt-10 relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition border border-gray-600 shadow-md"
            >
              {language}
              <span className={`transform transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-gray-900 text-white shadow-lg rounded-lg z-10 border border-gray-700">
                {["English", "Arabic"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="px-5 py-3 hover:bg-gray-700 cursor-pointer transition"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="mt-6 text-gray-400 text-sm">Netflix Egypt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
