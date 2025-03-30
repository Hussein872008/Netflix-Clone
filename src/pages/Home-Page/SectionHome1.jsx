import React from "react";

const SectionHome1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6">
      <div
        className="relative flex flex-col justify-center items-center w-full max-w-7xl bg-cover bg-center bg-no-repeat p-6 sm:p-10 rounded-[20px] sm:rounded-[40px] min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]"
        style={{ backgroundImage: `url('/images/background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-[20px] sm:rounded-[40px]"></div>

        <div className="relative z-10 w-full max-w-[750px] px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Unlimited movies, TV shows, and more
          </h1>

          <p className="text-lg sm:text-2xl text-white mb-4 sm:mb-6">
            Starts at EGP 100. Cancel anytime.
          </p>

          <p className="text-sm sm:text-lg text-white mb-4 sm:mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full">
            <div className="relative w-full sm:w-2/3">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="peer p-3 sm:p-4 w-full rounded-lg sm:rounded-xl text-white bg-[#ffffff2d] outline-none border border-white focus:border-red-600 transition duration-300 placeholder-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-3 peer-focus:text-xs peer-focus:text-red-500"
              >
                Email address
              </label>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl w-full sm:w-auto transition duration-300">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHome1;
