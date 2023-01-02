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
      className={`w-full fixed z-[999] transform transition-all duration-[500ms] bg-opacity-5 backdrop-blur-[6px] ${
        scroll ? "bg-white text-gray-700" : "bg-transparent"
      }`}
    >
      <div className="py-[10px] px-[30px] flex justify-between items-center">
        {/* left */}
        <div className="flex gap-5 items-center w-1/3">
          <div>
            <MdKeyboardArrowDown />
          </div>
          <div>
            <MdKeyboardArrowDown />
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
        <div>
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
