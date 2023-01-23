import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

const Tech = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Technology I Use</h1>
      <div className="grid grid-cols-4 my-7 gap-y-7 technology">
        <FaReact
          className="text-center w-full hover:text-rose-500 hover:scale-105 transition-all animate-bounce"
          size={150}
        />
        <FaJava
          className="text-center w-full   hover:text-blue-500 hover:scale-105 transition-all"
          size={150}
        />
        <FaHtml5
          className="text-center w-full  hover:text-green-500 hover:scale-105 transition-all"
          size={150}
        />
        <FaCss3
          className="text-center w-full  hover:text-blue-500 hover:scale-105 transition-all"
          size={150}
        />
        <FaPython
          className="text-center w-full  hover:text-blue-900 hover:scale-105 transition-all"
          size={150}
        />
        <FaVuejs
          className="text-center w-full  hover:text-rose-500 hover:scale-105 transition-all"
          size={150}
        />
      </div>
    </div>
  );
};

export default Tech;
