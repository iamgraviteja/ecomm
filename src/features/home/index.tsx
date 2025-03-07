import React from "react";
import SideNav from "../../components/sidenav";
import Carousel from "../../components/carousel";
import Sales from "./sales";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <SideNav />
        </div>
        <div className="w-3/4">
          <Carousel />
        </div>
      </div>
      <div>
        <Sales />
      </div>
    </>
  );
};

export default Home;
