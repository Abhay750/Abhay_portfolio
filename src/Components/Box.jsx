import React from "react";

const Box = ({ icon, tital, discription }) => {
  return (
    <div className="group relative w-[320px] h-[260px]">
      <div className="absolute rounded-xl  opacity-0 transition duration-300" />
      <div className="relative h-full w-full bg-gray-800/60 border border-white/10 rounded-xl p-10 flex flex-col items-center justify-center text-center gap-4 transition duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:bg-gray-800/80">
          <div className="text-4xl text-green-400 ">
            {icon}
          </div>
        <h1 className="text-xl font-semibold text-white">
          {tital}
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          {discription}
        </p>
      </div>
    </div>
  );
};

export default Box;
