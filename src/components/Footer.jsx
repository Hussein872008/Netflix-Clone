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
    <div>
      <div className="flex flex-col items-center w-full mb-8">
        <p className="text-white text-center mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto">
  <div className="relative w-full sm:w-2/3">
    <input
      type="email"
      id="email2"
      placeholder="Email address"
      value={email}
      onChange={handleEmailChange}
      className="peer p-3 sm:p-4 w-full rounded-lg sm:rounded-xl text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent"
    />
    <label
      htmlFor="email2"
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-500"
    >
      Email address
    </label>
  </div>

  <button
    onClick={handleSubmit}
    className="bg-red-600 py-[10px] hover:bg-red-700 text-white font-semibold px-6 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl w-full sm:w-auto transition duration-300"
  >
    Get Started &gt;
  </button>
</div>

      </div>

      <div className="bg-black text-white py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="#"
            className="block text-gray-400 active:text-red-500 text-lg mb-6 underline"
          >
            Questions? Contact us.
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-lg">
            <div className="flex flex-col space-y-3">
              <Link to="#" className="text-gray-400 active:text-red-700 underline">FAQ</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Investor Relations</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Privacy</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Speed Test</Link>
            </div>

            <div className="flex flex-col space-y-3">
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Help Center</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Jobs</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Cookie Preferences</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Legal Notices</Link>
            </div>

            <div className="flex flex-col space-y-3">
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Account</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Ways to Watch</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Corporate Information</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Only on Netflix</Link>
            </div>

            <div className="flex flex-col space-y-3">
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Media Center</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Terms of Use</Link>
              <Link to="#" className="text-gray-400 active:text-red-700 underline">Contact Us</Link>
            </div>
          </div>

          <div className="mt-8 relative inline-block">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 
                        hover:bg-gray-700 transition duration-300 border border-gray-600 shadow-md"
            >
              {language} <span className={`transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
            </button>

            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-44 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden z-10 border border-gray-700">
                <li
                  onClick={() => handleLanguageChange("English")}
                  className="px-5 py-3 hover:bg-gray-700 cursor-pointer transition duration-200"
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("Arabic")}
                  className="px-5 py-3 hover:bg-gray-700 cursor-pointer transition duration-200"
                >
                  Arabic
                </li>
              </ul>
            )}
          </div>
          <h1 className="py-[50px]">Netflix Egypt</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
