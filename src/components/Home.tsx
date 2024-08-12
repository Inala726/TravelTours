// import React from 'react'

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="h-[500px] w-full mx-auto rounded-lg bg-cover bg-center bg-no-repeat bg-white  bg-blend-darken ">
        <Navbar/>
        <div className="flex items-center justify-center mt-32 text-5xl text-center leading-snug">
          <p className="medium">Book an affordable <br /> vacation with us</p>
        </div>
      </div>

    </>
  );
};

export default Home;
