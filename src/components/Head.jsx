import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const Head = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
      {/* Left - Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition">
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <img
          src="https://www.youtube.com/img/desktop/yt_1200.png"
          alt="YouTube Logo"
          className="w-24 h-auto"
        />
      </div>

      {/* Middle - Search Bar */}
      <div className="flex items-center w-[40%] max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 border border-gray-300 rounded-l-full pl-4 text-sm focus:outline-none"
        />
        {/* Search Button with Tooltip */}
        <div className="relative group">
          <button className="h-10 w-14 bg-gray-100 border border-gray-300 rounded-r-full flex items-center justify-center hover:bg-gray-200">
            <IoSearchOutline className="text-xl" />
          </button>
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Search
          </span>
        </div>

        {/* Mic Button */}
        <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <FaMicrophone className="text-md" />
        </button>
      </div>

      {/* Right - Notifications + Profile */}
      <div className="flex items-center gap-4">
        {/* Notification with Tooltip */}
        <div className="relative group">
          <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <IoIosNotificationsOutline className="text-2xl" />
          </div>
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
            Notifications
          </span>
        </div>

        {/* Profile Placeholder */}
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Head;

