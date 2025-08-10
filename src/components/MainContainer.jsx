import React from "react";
import ButtonList from "./ButtonList";
import VideoContaioner from "./VideoContaioner";

const MainContainer = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
      <ButtonList />
      <VideoContaioner />
    </div>
  );
};

export default MainContainer;
