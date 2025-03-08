import React from "react";
import SideNav from "../../components/sidenav";
import Carousel from "../../components/carousel";
import Sales from "./sales";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } min-h-screen`}
      >
        <div className="flex">
          <div className="w-1/4">
            <SideNav />
          </div>
          <div className="w-3/4">
            <Carousel />
          </div>
        </div>

        <Sales />
      </div>
    </>
  );
};

export default Home;
