import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { ImMic } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuerey, setSearchQuerey] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuerey]) {
        setSuggestions(searchCache[searchQuerey]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuerey]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuerey);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuerey]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center p-4 px-6 shadow-md">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4 col-span-1">
        <RxHamburgerMenu
          className="h-6 w-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>

      {/* Center: Search + Mic */}
      <div className="flex justify-center col-span-10">
        <div className="flex w-full max-w-xl items-center">
          {/* Input (with suggestions) */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search"
              value={searchQuerey}
              onChange={(e) => setSearchQuerey(e.target.value)}
              className="w-full h-10 border border-gray-300 rounded-l-full px-4 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchQuerey(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search button (YouTube style) */}
          <button className="h-10 w-12 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors">
            <IoSearchOutline className="text-gray-600 text-lg sm:text-xl" />
          </button>
        </div>

        {/* Mic button */}
        <button className="ml-3 h-10 w-10 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
          <ImMic className="text-gray-700 text-base sm:text-lg" />
        </button>
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center justify-end gap-6 col-span-1">
        <IoIosNotificationsOutline className="text-2xl cursor-pointer" />
        <FaUserCircle className="h-8 w-8 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
