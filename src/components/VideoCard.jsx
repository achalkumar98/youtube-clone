import React from "react";

const VideoCard = ({ info, isMenuOpen }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  // Thumbnail size control
  const thumbnail = isMenuOpen ? thumbnails.medium : thumbnails.high;

  return (
    <div className="w-[32%] min-w-[280px] p-2 cursor-pointer">
      <img
        src={thumbnail?.url}
        alt="thumbnail"
        className="rounded-xl w-full h-auto"
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-600">{channelTitle}</p>
        <p className="text-xs text-gray-500">
          {parseInt(statistics?.viewCount).toLocaleString()} views •{" "}
          {new Date(publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
