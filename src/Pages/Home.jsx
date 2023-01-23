import React from "react";
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            sapiente molestias, modi, quibusdam aut ex et voluptas perferendis
            ad culpa reiciendis aliquam quasi? Nisi minus reiciendis alias eaque
            earum. Eos vitae nemo quos voluptatibus dolores eius iure esse
            consectetur accusamus similique, ratione omnis deleniti iste ea
            possimus magnam dolorum autem porro debitis reiciendis aliquid
            praesentium expedita fugit nobis! Dicta id ea adipisci consequatur
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
