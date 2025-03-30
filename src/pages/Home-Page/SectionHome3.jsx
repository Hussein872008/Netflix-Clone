import React from "react";
import { RiComputerFill } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdOutlineDevices } from "react-icons/md";
import { FaChild } from "react-icons/fa";

const HomeSection3 = () => {
  return (
    <div className="container max-w-screen-lg mx-auto px-6 md:px-12 py-16" id="join">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
        More Reasons to Join
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {[
          {
            title: "Enjoy on your TV",
            text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            icon: <RiComputerFill className="text-blue-500 text-6xl" />,
          },
          {
            title: "Download your shows to watch offline",
            text: "Save your favorites easily and always have something to watch.",
            icon: <LiaDownloadSolid className="text-green-500 text-6xl" />,
          },
          {
            title: "Watch everywhere",
            text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            icon: <MdOutlineDevices className="text-yellow-500 text-6xl" />,
          },
          {
            title: "Create profiles for kids",
            text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            icon: <FaChild className="text-red-500 text-6xl" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[260px] flex flex-col justify-between h-[300px] "
          >
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">{item.title}</h2>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
            <div className="flex justify-end">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection3;
