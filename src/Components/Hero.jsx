import React from "react";
import bgimage from "../images/bgimage.jpeg";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      />
      <div className="absolute inset-0 bg-black/91" />
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen pt-20 md:pt-0 px-4 md:px-0 text-white gap-8 md:gap-0">
        <div className="w-full md:w-1/2 h-full flex items-center">
          <LeftHero />
        </div>
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <RightHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;
