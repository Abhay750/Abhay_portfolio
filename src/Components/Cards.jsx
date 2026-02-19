import React from "react";

const Cards = ({ img, title, description, link }) => {
  return (
    <div className="w-full sm:w-[300px] h-[400px] bg-gray-800/50 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]">

      <div className="w-full h-1/2 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className=" w-full h-1/2 p-5 flex flex-col justify-around">
        <div>
          <h1 className="text-xl font-semibold text-white">
            {title}
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            {description}
          </p>
        </div>

        <a
          href={link}
          className="text-green-400 text-sm font-medium hover:text-green-300"
        >
          Live Preview →
        </a>
      </div>
    </div>
  );
};

export default Cards;
