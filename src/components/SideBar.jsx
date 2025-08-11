import {
  IoMdHome,
} from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { GoVideo, GoHistory, GoTrophy } from "react-icons/go";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdOutlinePlaylistPlay,
  MdOutlineNewspaper,
  MdOutlinePodcasts,
} from "react-icons/md";
import { SlClock } from "react-icons/sl";
import { BiLike, BiMoviePlay } from "react-icons/bi";
import { LuCircleUserRound } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { RiShoppingBag4Line, RiFlagLine, RiFeedbackLine } from "react-icons/ri";
import { IoMusicalNotesOutline, IoSettingsOutline } from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming, SiYoutubestudio, SiYoutubemusic, SiYoutubekids } from "react-icons/si";
import { PiGraduationCap } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { FiYoutube } from "react-icons/fi";
import { TbHelp } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const navItem = (icon, label, link = "#") => (
    <li
      key={label}
      className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-150 ease-in-out cursor-pointer text-base"
    >
      {icon} {link === "#" ? label : <Link to={link}>{label}</Link>}
    </li>
  );

  return (
    <aside
      className="w-64 p-4 text-sm text-gray-800 overflow-y-auto h-screen border-r border-gray-200 bg-white
                 transition-transform duration-300 ease-in-out
                 md:translate-x-0 fixed md:relative z-20"
    >
      {/* Main Navigation */}
      <ul className="space-y-1 mb-4">
        {navItem(<IoMdHome className="text-xl text-gray-700" />, "Home", "/")}
        {navItem(<SiYoutubeshorts className="text-xl text-gray-700" />, "Shorts")}
        {navItem(<GoVideo className="text-xl text-gray-700" />, "Subscriptions")}
      </ul>

      <hr className="border-t my-3" />

      {/* Your Section */}
      <h2 className="text-sm font-semibold px-3 mb-2 flex items-center gap-1 text-gray-500 uppercase tracking-wider">
        You <MdKeyboardArrowRight className="text-xl" />
      </h2>
      <ul className="space-y-1 mb-4">
        {navItem(<GoHistory className="text-xl text-gray-700" />, "History")}
        {navItem(<MdOutlinePlaylistPlay className="text-xl text-gray-700" />, "Playlists")}
        {navItem(<GoVideo className="text-xl text-gray-700" />, "Your videos")}
        {navItem(<SlClock className="text-xl text-gray-700" />, "Watch later")}
        {navItem(<BiLike className="text-xl text-gray-700" />, "Liked videos")}
      </ul>

      <hr className="border-t my-3" />

      {/* Subscriptions */}
      <h2 className="text-sm font-semibold px-3 mb-2 text-gray-500 uppercase tracking-wider">
        Subscriptions
      </h2>
      <ul className="space-y-1 mb-4">
        {[
          "Namaste Dev",
          "Akshya Saini",
          "Code with Harry",
          "Namaste Javascript",
          "Code-Help",
          "Love Babbar",
          "T-Series",
        ].map((name) =>
          navItem(<LuCircleUserRound className="text-xl text-gray-700" />, name)
        )}
        {navItem(<MdKeyboardArrowDown className="text-xl text-gray-700" />, "Show more")}
      </ul>

      <hr className="border-t my-3" />

      {/* Explore */}
      <h2 className="text-sm font-semibold px-3 mb-2 text-gray-500 uppercase tracking-wider">
        Explore
      </h2>
      <ul className="space-y-1 mb-4">
        {[
          [<FaFire className="text-xl text-gray-700" />, "Trending"],
          [<RiShoppingBag4Line className="text-xl text-gray-700" />, "Shopping"],
          [<IoMusicalNotesOutline className="text-xl text-gray-700" />, "Music"],
          [<BiMoviePlay className="text-xl text-gray-700" />, "Movies"],
          [<CiStreamOn className="text-xl text-gray-700" />, "Live"],
          [<SiYoutubegaming className="text-xl text-gray-700" />, "Gaming"],
          [<MdOutlineNewspaper className="text-xl text-gray-700" />, "News"],
          [<GoTrophy className="text-xl text-gray-700" />, "Sports"],
          [<PiGraduationCap className="text-xl text-gray-700" />, "Courses"],
          [<GiHanger className="text-xl text-gray-700" />, "Fashion & Beauty"],
          [<MdOutlinePodcasts className="text-xl text-gray-700" />, "Podcasts"],
        ].map(([icon, label]) => navItem(icon, label))}
      </ul>

      <hr className="border-t my-3" />

      {/* More from YouTube */}
      <h2 className="text-sm font-semibold px-3 mb-2 text-gray-500 uppercase tracking-wider">
        More from YouTube
      </h2>
      <ul className="space-y-1 mb-4">
        {navItem(<FiYoutube className="text-xl text-red-500" />, "YouTube Premium")}
        {navItem(<SiYoutubestudio className="text-xl text-red-500" />, "YouTube Studio")}
        {navItem(<SiYoutubemusic className="text-xl text-red-500" />, "YouTube Music")}
        {navItem(<SiYoutubekids className="text-xl text-red-500" />, "YouTube Kids")}
      </ul>

      <hr className="border-t my-3" />

      {/* Settings */}
      <ul className="space-y-1 text-gray-600 mb-4">
        {navItem(<IoSettingsOutline className="text-xl text-gray-700" />, "Settings")}
        {navItem(<RiFlagLine className="text-xl text-gray-700" />, "Report history")}
        {navItem(<TbHelp className="text-xl text-gray-700" />, "Help")}
        {navItem(<RiFeedbackLine className="text-xl text-gray-700" />, "Send feedback")}
      </ul>
    </aside>
  );
};

export default SideBar;
