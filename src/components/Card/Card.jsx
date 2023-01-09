import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`product/${item.id}`}>
      <div className="pt-10">
        <div className="w-full h-[200px] relative">
          <img
            src={item.img}
            alt="img1"
            className="absolute z-10 hover:z-0 object-cover w-full h-44"
          />
          <img
            src={item.img2}
            alt="img2"
            className="absolute z-10 object-cover w-full h-44 opacity-0 hover:opacity-100 transform transition-all duration-[1000ms]"
          />
          {item.isNew ? (
            <div className="z-20 absolute top-1 left-1 bg-white border border-green-600 text-green-600 px-1 rounded-md text-xs">
              New
            </div>
          ) : null}
        </div>
        <h2 className="text-sm font-semibold">{item.title}</h2>
        <div>
          <h3 className="font-semibold">
            <span className="text-gray-500 line-through text-xs pr-1">
              ₹{item.oldPrice}
            </span>
            ₹{item.price}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
