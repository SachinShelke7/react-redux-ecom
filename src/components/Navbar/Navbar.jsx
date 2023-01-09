import React, { useEffect, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdSearch,
  MdPersonOutline,
  MdFavoriteBorder,
  MdShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <div
      className={`w-full transform transition-all duration-[800ms]  text-xs sm:text-sm md:text-base 2xl:max-w-[1536px] 2xl:mx-auto ${
        scroll
          ? "bg-white text-black backdrop-blur-[6px] shadow-md bg-opacity-70 fixed z-[999]"
          : "bg-white"
      }`}
    >
      <div className="py-[10px] md:px-[30px] flex justify-center md:justify-between items-center">
        {/* left */}
        <div className="gap-5 items-center w-1/3 hidden lg:flex">
          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="/img/in.png"
              alt="flag"
              className="saturate-200 w-5 h-5"
            />
            <MdKeyboardArrowDown />
          </div>

          <div>
            <select
              className={`bg-transparent text-sm rounded-lg w-full p-2.5 outline-none  ${
                scroll ? "text-gray-900" : "text-gray-600"
              }`}
            >
              <option value="IN">INR</option>
            </select>
          </div>
          <div>
            <Link to="/products/1">Women</Link>
          </div>
          <div>
            <Link to="/products/2">Men</Link>
          </div>
          <div>
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        {/* center */}
        <div>
          <h2 className="text-2xl font-bold font-antonio">
            <Link to="/">{title ? title : "Error"}</Link>
          </h2>
        </div>

        {/* right */}
        <div className="hidden md:block">
          <div className="flex gap-5 items-center">
            <div>
              <Link to="/">Homepage</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/stores">Stores</Link>
            </div>
            <div className="flex gap-5">
              <MdSearch />
              <MdPersonOutline />
              <MdFavoriteBorder />
              <div className="relative">
                <MdShoppingCart />
                <span className="bg-green-600 text-white text-xs rounded-full px-1 absolute top-[-10px] right-[-10px]">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
