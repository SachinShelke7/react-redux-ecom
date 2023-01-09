import React, { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="lg:mx-32 m-5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-1 md:max-h-[350px]">
        <div className="overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1672907867893-1a6fbfe70bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="img"
            className="w-full h-full object-cover hover:scale-[1.01] transform transition-all duration-[200ms]"
          />
          <div className="flex justify-center items-center h-full">
            <button className="absolute top-[50%] z-10 btn">
              <Link to="/product/1">Sale</Link>
            </button>
          </div>
        </div>

        <div className="md:row-span-2 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1601217813079-53cb0303bb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTY2MjIxMnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            alt="img"
            className="w-full h-full object-cover hover:scale-[1.01] transform transition-all duration-[200ms]"
          />
          <div className="flex justify-center items-center h-full">
            <button className="absolute top-[50%] z-10 btn">
              <Link to="/product/1">New Season</Link>
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1468546818829-25bb337b6646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NzY2OTU2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="img"
            className="w-full h-full object-cover hover:scale-[1.01] transform transition-all duration-[200ms] "
          />
          <div className="flex justify-center items-center h-full">
            <button className="absolute top-[50%] z-10 btn">
              <Link to="/product/1">Men</Link>
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1610986356180-89a8c0f8fd03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NTYzMjkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="img"
            className="w-full h-full object-cover hover:scale-[1.01] transform transition-all duration-[200ms] "
          />
          <div className="flex justify-center items-center h-full">
            <button className="absolute top-[50%] z-10 btn">
              <Link to="/product/1">Accessories</Link>
            </button>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjY5NTZ8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
            alt="img"
            className="w-full h-full object-cover hover:scale-[1.01] transform transition-all duration-[200ms] "
          />
          <div className="flex justify-center items-center h-full">
            <button className="absolute top-[50%] z-10 btn">
              <Link to="/product/1">Women</Link>
            </button>
          </div>
        </div>
        <div className="md:col-span-2 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1464278860589-b2ed64f87e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NzY2OTU2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="img"
            className="w-full h-full object-cover hover:scale-[1.01] transform transition-all duration-[200ms] "
          />
          <div className="flex justify-center items-center h-full">
            <button className="absolute top-[50%] z-10 btn">
              <Link to="/product/1">Shoes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
