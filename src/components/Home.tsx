// import React from 'react'
import logo from "../assets/images/bottom-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="h-[500px] w-full mx-auto rounded-lg bg-cover bg-center bg-no-repeat bg-blend-darken ">
        <Navbar />
        <div className="flex items-center flex-col justify-center mt-14 text-5xl text-center leading-[1.5]">
          <p className="bold text-[60px] text-[#22166fee]">
            Friends Tours & Travel
          </p>
          <p className="text-[18px] text-[#9d97a7]">
            At Friends Tours and Travel, we customize reliable and trustworthy
          </p>
          <p className="text-[18px] text-[#9d97a7]">
            Educational Tours to destinations all over the world
          </p>
          <button className="text-[16px] px-14 py-4 bg-[#ff4d1c] text-[#ffe3dc] mt-12 rounded-[30px]">
            Learn More
          </button>
          <img src={logo} className="w-full h-[50%] mb-4" alt="" />
        </div>
      </div>
      <div className="">

      </div>
    </>
  );
};

export default Home;
