import React from "react";

const Intro = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl font -bold"> Who I am </h1>
      <div className="h-[390px] w-[390px] mt-7 border-cyan-400 bg-black rounded-full text-white flex flex-col justify-center  items-center border-4 ">
        <div>
          <h1>Name:Ayush Adhikari</h1>
          <h1>Email: adhikariayush19@gmail.com</h1>
          <h1>Location: Balkumati Lalitpur</h1>
          <h1>Contact: 9867754739</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
