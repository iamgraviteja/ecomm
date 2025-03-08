import React from "react";
import SideNav from "../../components/sidenav";
import Carousel from "../../components/carousel";
import Sales from "./sales";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const { isDarkMode } = useSelector((state: any) => state.theme);

  return (
    <>
      <div
        className={`flex ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-1/4">
          <SideNav />
        </div>
        <div className="w-3/4">
          <Carousel />
        </div>
      </div>
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <Sales />
      </div>
    </>
  );
};

export default Home;
