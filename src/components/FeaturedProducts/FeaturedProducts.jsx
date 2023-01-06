import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const FeaturedProducts = ({ type }) => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="mx-32 py-10">
      <div className="flex justify-between">
        <h1 className="capitalize font-semibold">{type} Products</h1>
        <p className="w-1/2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
          distinctio quas numquam temporibus quibusdam aspernatur, corrupti.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
