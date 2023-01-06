import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const array = [
  "https://image.dummyjson.com/800x600/?text=1",
  "https://image.dummyjson.com/800x600/?text=2",
  "https://image.dummyjson.com/800x600/?text=3",
  "https://image.dummyjson.com/800x600/?text=4",
];

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const handlePrev = () => {
    setCurrSlide(currSlide === 0 ? array.length - 1 : (prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrSlide(currSlide === array.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className=" h-[95vh] overflow-hidden scrollbar-hide select-none">
      <div
        className="flex transform transition-all duration-[1000ms] ease-in-out"
        style={{
          transform: `translateX(-${currSlide * 100}vw)`,
          width: `${array.length * 100}vw`,
        }}
      >
        {array.map((item, index) => {
          return (
            <img
              key={index}
              // src={item}
              src="/img/in.png"
              alt="img"
              className="w-screen h-[90vh] object-cover transform transition-all duration-[400ms] opacity-20"
            />
          );
        })}
      </div>

      {/* icon */}
      <div className="absolute bottom-20 left-0 right-0 mx-auto w-full flex justify-center space-x-2">
        <div
          className="border border-gray-200 hover:border-white p-3 rounded-md cursor-pointer"
          onClick={handlePrev}
        >
          <BsArrowLeft color="white" />
        </div>
        <div
          className="border border-gray-200 hover:border-white p-3 rounded-md cursor-pointer"
          onClick={handleNext}
        >
          <BsArrowRight color="white" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
