import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const array = [
  "https://image.dummyjson.com/300x200/?text=1",
  "https://image.dummyjson.com/300x200/?text=2",
  "https://image.dummyjson.com/300x200/?text=3",
];

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const handlePrev = () => {
    setCurrSlide(currSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrSlide(currSlide === 2 ? 0 : (prev) => prev + 1);
  };
  console.log(currSlide);
  return (
    <div className=" h-[95vh] overflow-hidden scrollbar-hide">
      <div
        className="w-[300vw] flex transform transition-all duration-[1000ms] ease-in-out"
        style={{ transform: `translateX(-${currSlide * 100}vw)` }}
      >
        <img
          src={array[0]}
          alt="img"
          className="w-screen h-[90vh] object-cover"
        />
        <img
          src={array[1]}
          alt="img"
          className="w-screen h-[90vh] object-cover"
        />
        <img
          src={array[2]}
          alt="img"
          className="w-screen h-[90vh] object-cover"
        />
      </div>

      {/* icon */}
      <div className="absolute bottom-20 left-0 right-0 mx-auto w-full flex justify-center space-x-2">
        <div
          className="border border-gray-200 hover:border-white p-3 rounded-md cursor-pointer"
          onClick={handlePrev}
        >
          <BsArrowLeft />
        </div>
        <div
          className="border border-gray-200 hover:border-white p-3 rounded-md cursor-pointer"
          onClick={handleNext}
        >
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
