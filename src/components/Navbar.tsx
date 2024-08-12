// import React from 'react'

import { FaSquarespace } from "react-icons/fa"

const Navbar = () => {
  return (
    <>
        <nav className="flex items-center justify-between p-4">
            <a href="">
            <div className="flex items-center gap-2">
              <FaSquarespace size={25}/>
              <p className="text-xl font-bold text-blue-950">CoTR</p>
            </div>
            </a>
            <div className="">
              <ul className="flex gap-10 text-xl">
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
              </ul>
            </div>
            <div className=""></div>
        </nav>
    </>
  )
}

export default Navbar