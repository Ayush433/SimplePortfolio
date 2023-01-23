import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00000"
          fill-opacity="1"
          d="M0,256L80,229.3C160,203,320,149,480,122.7C640,96,800,96,960,122.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute bottom-0 text-white flex justify-center flex-col items-center inset-x-0 top-[50%] ">
        <h1>Develop By</h1>
        <h1>Ayush Adhikari</h1>
      </div>
    </div>
  );
};

export default Footer;
