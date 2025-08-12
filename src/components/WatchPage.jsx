import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-gray-50 overflow-hidden">
      {/* Main Video Section */}
      <div className="flex-1 px-4 lg:px-8 py-4 overflow-y-auto">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video title, views, actions */}
        <div className="mt-4">
          <h1 className="text-lg font-semibold text-gray-900">
            Your video title here
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            1,234,567 views • Jan 1, 2025
          </p>
        </div>

        {/* Comments */}
        <div className="mt-6">
          <CommentsContainer />
        </div>
      </div>

      {/* Live Chat */}
      <aside className="w-full lg:w-96 p-4 border-t lg:border-t-0 lg:border-l border-gray-200 overflow-y-auto">
        <div>
          <LiveChat />
        </div>
      </aside>
    </div>
  );
};

export default WatchPage;
