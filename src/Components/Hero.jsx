import React from "react";
import bgimage from "../images/bgimage.jpeg";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      />
      <div className="absolute inset-0 bg-black/91" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div className="LeftHero w-1/2 h-full">
                <LeftHero />
            </div>
            <div className="RightHero w-1/2 h-full">
                <RightHero />
            </div>

        </div>


    </div>
  );
};

export default Hero;
