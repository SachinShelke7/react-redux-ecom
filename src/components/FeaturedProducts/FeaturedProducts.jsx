import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="mx-5 lg:mx-32 py-10">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between">
        <h1 className="capitalize font-semibold">{type} Products</h1>
        <p className="md:w-1/2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
          distinctio quas numquam temporibus quibusdam aspernatur, corrupti.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {error
          ? "Something Went Wrong"
          : loading
          ? "loading"
          : data.map((item, index) => (
              <Card item={item.attributes} id={item.id} key={index} />
            ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
