import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const array = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
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
              src={item}
              alt="img"
              className="w-screen h-[90vh] object-cover transform transition-all duration-[400ms]"
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
