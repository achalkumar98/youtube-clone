import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { GoVideo } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdOutlinePlaylistPlay, MdOutlineNewspaper, MdOutlinePodcasts } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { SlClock } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import { LuCircleUserRound } from "react-icons/lu";
import { FaFire } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import { PiGraduationCap } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { FiYoutube } from "react-icons/fi";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { TbHelp } from "react-icons/tb";
import { RiFeedbackLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null; // Don't show if the menu is closed

  return (
    <div className="w-64 p-4 text-sm text-gray-800 overflow-y-auto h-screen border-r border-gray-200 bg-white">
      {/* Main Navigation */}
      <ul className="space-y-2 mb-4">
        <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-base font-medium">
          <IoMdHome className="text-xl text-gray-700" /><Link to="/">Home</Link>
        </li>
        <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-base font-medium">
          <SiYoutubeshorts className="text-xl text-gray-700" /> Shorts
        </li>
        <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer text-base font-medium">
          <GoVideo className="text-xl text-gray-700" /> Subscriptions
        </li>
      </ul>

      <hr className="border-t my-3" />

      {/* Your Section */}
      <h1 className="text-base font-bold px-3 mb-2 flex items-center gap-1 text-gray-700">
        You <MdKeyboardArrowRight className="text-xl" />
      </h1>
      <ul className="space-y-2 mb-4">
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base">
          <GoHistory className="text-2xl text-gray-700" /> History
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base">
          <MdOutlinePlaylistPlay className="text-2xl text-gray-700" /> Playlists
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base">
          <GoVideo className="text-2xl text-gray-700" /> Your videos
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base">
          <SlClock className="text-2xl text-gray-700" /> Watch later
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-base">
          <BiLike className="text-2xl text-gray-700" /> Liked videos
        </li>
      </ul>

      <hr className="border-t my-3" />

      {/* Subscriptions Section */}
      <h1 className="text-base font-bold px-3 mb-2 text-gray-700">Subscriptions</h1>
      <ul className="space-y-2 mb-4">
        {[
          "Namaste Dev",
          "Akshya Saini",
          "Code with Harry",
          "Namaste Javascript",
          "Code-Help",
          "Love babbar",
          "T-Series",
        ].map((name, i) => (
          <li
            key={i}
            className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <LuCircleUserRound className="text-2xl text-gray-700" /> {name}
          </li>
        ))}
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <MdKeyboardArrowDown className="text-2xl text-gray-700" /> Show more
        </li>
      </ul>

      <hr className="border-t my-3" />

      {/* Explore Section */}
      <h1 className="text-base font-bold px-3 mb-2 text-gray-700">Explore</h1>
      <ul className="space-y-2 mb-4">
        {[
          [<FaFire className="text-2xl text-gray-700" />, "Trending"],
          [<RiShoppingBag4Line className="text-2xl text-gray-700" />, "Shopping"],
          [<IoMusicalNotesOutline className="text-2xl text-gray-700" />, "Music"],
          [<BiMoviePlay className="text-2xl text-gray-700" />, "Movies"],
          [<CiStreamOn className="text-2xl text-gray-700" />, "Live"],
          [<SiYoutubegaming className="text-2xl text-gray-700" />, "Gaming"],
          [<MdOutlineNewspaper className="text-2xl text-gray-700" />, "News"],
          [<GoTrophy className="text-2xl text-gray-700" />, "Sports"],
          [<PiGraduationCap className="text-2xl text-gray-700" />, "Courses"],
          [<GiHanger className="text-2xl text-gray-700" />, "Fashion & Beauty"],
          [<MdOutlinePodcasts className="text-2xl text-gray-700" />, "Podcasts"],
        ].map(([icon, label], i) => (
          <li
            key={i}
            className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            {icon} {label}
          </li>
        ))}
      </ul>

      <hr className="border-t my-3" />

      {/* More from YouTube Section */}
      <h1 className="text-base font-bold px-3 mb-2 text-gray-700">More from YouTube</h1>
      <ul className="space-y-2 mb-4">
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <FiYoutube className="text-2xl text-red-500" /> YouTube Premium
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <SiYoutubestudio className="text-2xl text-red-500" /> YouTube Studio
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <SiYoutubemusic className="text-2xl text-red-500" /> YouTube Music
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <SiYoutubekids className="text-2xl text-red-500" /> YouTube Kids
        </li>
      </ul>

      <hr className="border-t my-3" />

      {/* Settings & More */}
      <ul className="space-y-2 text-gray-600 mb-4">
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <IoSettingsOutline className="text-2xl text-gray-700" /> Settings
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <RiFlagLine className="text-2xl text-gray-700" /> Report history
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <TbHelp className="text-2xl text-gray-700" /> Help
        </li>
        <li className="flex items-center gap-4 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <RiFeedbackLine className="text-2xl text-gray-700" /> Send feedback
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
