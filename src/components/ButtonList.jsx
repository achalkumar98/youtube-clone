import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Music",
  "Movies",
  "Trending",
  "Programming",
  "Podcasts",
  "Tools",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide px-4 py-2">
    {list.map((item, index) => (
      <Button key={index} name={item} />
    ))}
  </div>
  );
};

export default ButtonList;
