import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 items-center p-[2%]">
        <div className="h-[550px]">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Hi My Name is Ayush</h1>
          <h2 className="py-2 text-black font-bold text-2xl">
            Freelancer , Developer{" "}
          </h2>
          <p>
            I'm a front-end developer located in Nepal. I love to create simple
            yet beautiful websites with great user experience.
            <br /> <br />
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger. I love to write blogs and read books.
            <br /> <br />I believe everything is an Art when you put your
            consciousness in it. You can connect with me via social links.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
