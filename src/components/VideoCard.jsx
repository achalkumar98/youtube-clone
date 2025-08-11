
const VideoCard = ({ info, isMenuOpen }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  // Use high-res thumbnail when menu is closed
  const thumbnail = isMenuOpen ? thumbnails.medium : thumbnails.high;

  return (
    <div className="flex flex-col">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnail?.url}
          alt="thumbnail"
          className="w-full h-auto rounded-lg hover:rounded-none transition-all duration-200"
        />
      </div>

      {/* Video details */}
      <div className="flex mt-3">
        {/* Channel Avatar */}
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            channelTitle
          )}&background=random&size=40`}
          alt={channelTitle}
          className="w-10 h-10 rounded-full flex-shrink-0"
        />

        {/* Text info */}
        <div className="ml-3 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>
          <p className="text-xs text-gray-500">
            {parseInt(statistics?.viewCount || 0).toLocaleString()} views •{" "}
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
