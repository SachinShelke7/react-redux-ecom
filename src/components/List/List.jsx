import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const List = ({ catId, maxPrice, sort }) => {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
