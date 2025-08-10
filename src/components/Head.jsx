import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { ImMic } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [searchQuerey, setSearchQuerey] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
    clearTimeout(timer);
    };
  }, [searchQuerey]);

  const getSearchSuggestions = async () => {
    console.log("API CAll - " + searchQuerey);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerey);
    const json = await data.json();
    // console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center p-4 px-6 shadow-md">
      <div className="flex items-center gap-4 col-span-1">
        <RxHamburgerMenu
          className="h-6 w-6 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="flex justify-center col-span-10">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search"
            value={searchQuerey}
            onChange={(e) => setSearchQuerey(e.target.value)}
            className="w-full border border-gray-300 rounded-l-full px-4 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-gray-100 px-4 rounded-r-full border border-gray-300 hover:bg-gray-200">
            <IoSearchOutline className="text-xl" />
          </button>
        </div>
        <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ImMic className="text-lg" />
        </button>
      </div>
      <div className="flex items-center justify-end gap-6 col-span-1">
        <IoIosNotificationsOutline className="text-2xl cursor-pointer" />
        <FaUserCircle className="h-8 w-8 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
