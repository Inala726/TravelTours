// import React from 'react'
// import { useState } from "react";
import logo from "../assets/images/bottom-image.png";
import Navbar from "./Navbar";
import Package from "./Package";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-[500px] w-full mx-auto rounded-lg bg-cover bg-center bg-no-repeat bg-blend-darken ">
        <Navbar />
        <div className="flex items-center flex-col justify-center mt-14 text-5xl max-sm:text-3xl text-center leading-[1.5]">
          <p className="bold text-[60px] text-[#22166fee]">
            Friends Tours & Travel
          </p>
          <p className="text-[18px] text-[#9d97a7]">
            At CoTR Tours and Travel, we customize reliable and trustworthy
          </p>
          <p className="text-[18px] text-[#9d97a7]">
            Educational Tours to destinations all over the world
          </p>
          <button className="transition ease-in-out delay-150 text-[16px] px-14 py-4 bg-[#ff4d1c] text-[#ffe3dc] mt-12 rounded-[30px] hover:-translate-y-1 hover:scale-110 hover:bg-[#ffe3dc] hover:text-[#ff4d1c] duration-300">
            Learn More
          </button>
          <img
            src={logo}
            className="w-full h-[50%] mb-4"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[30%]">
        <Package/>
      </div>
    </>
  );
};

export default Home;
