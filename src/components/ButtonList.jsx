import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const list = [
  "All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News",
  "Music", "Movies", "Trending", "Programming", "Podcasts", "Tools", "AI",
  "React", "Node.js", "Fashion", "Comedy", "Drama"
];

const ButtonList = () => {
  const scrollRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      setShowPrev(el.scrollLeft > 0);
      setShowNext(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    const amount = 300;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center px-4 py-2">
      {showPrev && (
        <button onClick={() => scroll("left")} className="absolute left-0 z-10 hover:bg-slate-300 rounded-full">
          <FaChevronLeft size={16} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-2 mx-6 overflow-x-auto overflow-y-hidden no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>

      {showNext && (
        <button onClick={() => scroll("right")} className="absolute right-0 z-10 hover:bg-slate-300 rounded-full">
          <FaChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
