// import React from 'react'

import { FaSquarespace } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa6"

const Navbar = () => {
  return (
    <>
        <nav className="flex items-center justify-between px-20 py-8">
            <a href="">
            <div className="flex items-center gap-2">
              <FaSquarespace size={25} className="text-[#f98939]"/>
              <p className="text-xl font-bold text-blue-950">CoTR</p>
            </div>
            </a>
            <div className="">
              <ul className="flex gap-[60px] text-[16px] text-[#9d97a7]">
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-1 text-[#f96f39]">
              Book 
              <FaArrowRight />
            </div>
        </nav>
    </>
  )
}

export default Navbar