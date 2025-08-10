import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;

