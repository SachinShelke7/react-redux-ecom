import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdSearch,
  MdPersonOutline,
  MdFavoriteBorder,
  MdShoppingCart,
  MdLightMode,
  MdDarkMode,
  MdMenuOpen,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { toggleMode } from "../../redux/themeSlice";

const Navbar = ({ title }) => {
  const [open, setOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`w-full text-xs sm:text-sm md:text-base 2xl:max-w-[1536px] 2xl:mx-auto select-none shadow-lg transform transition-all duration-[500ms] overflow-hidden ${
        menu ? "h-40 border-b border-gray-600" : "h-14"
      }`}
    >
      <button
        onClick={() => setMenu(!menu)}
        className="absolute top-3 right-5 md:hidden"
      >
        <MdMenuOpen size={25} />
      </button>

      <div className="py-[10px] md:px-[30px] flex flex-col md:flex-row  md:gap-0 justify-center md:justify-between items-center">
        {/* left */}
        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-center md:justify-between w-1/2 items-center">
          <div className="gap-5 items-center md:w-1/3 flex">
            <div className="flex items-center space-x-1 cursor-pointer">
              <img
                src="/img/in.png"
                alt="flag"
                className="saturate-200 w-5 h-5"
              />
              <MdKeyboardArrowDown />
            </div>

            <div>
              <select className="bg-transparent text-sm rounded-lg w-full p-2.5 outline-none">
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
        </div>
        {/* right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {/* <div className="hidden md:block"> */}
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
              <Link to="/stores" className="secondaryText secondaryBg">
                Stores
              </Link>
            </div>
          </div>
          <div className="flex gap-5">
            <MdSearch />
            <MdPersonOutline />
            <MdFavoriteBorder />
            <div
              className="relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <MdShoppingCart />
              <span className="bg-green-600 text-white text-xs rounded-full px-1 absolute top-[-10px] right-[-10px]">
                0
              </span>
            </div>
            <button onClick={() => dispatch(toggleMode())}>
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </div>
      {open ? <Cart /> : null}
    </div>
  );
};

export default Navbar;
