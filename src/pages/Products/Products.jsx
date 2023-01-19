import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [value, setValue] = useState(1000);
  const catId = parseInt(useParams().id);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  // const { data, loading, error } = useFetch(
  console.log("🚀 ~ file: Products.jsx:17 ~ Products ~ data", data);
  //   `/categories?filters[id][$eq]=${catId}`
  // );
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategory = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategories(
      isChecked
        ? [...selectedCategories, value]
        : selectedCategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="flex">
      {/* first */}
      <div className="pb-5 px-10 sticky h-full top-10">
        <h1 className="text-xl font-bold py-5">Filters</h1>
        <div className="pt-5">
          <h2 className="font-bold">Product Categories</h2>
          {data.map((item, index) => {
            return (
              <div key={index} className="select-none">
                <input
                  type="checkbox"
                  name={item?.attributes?.title}
                  id={item.id}
                  value={item.id}
                  onChange={handleCategory}
                />
                <label htmlFor={item.id}> {item?.attributes?.title}</label>
              </div>
            );
          })}
        </div>
        <div className="pt-5">
          <h2 className="font-bold">Filter by price</h2>
          <div>
            <span>0</span>
            <input
              type="range"
              name=""
              id=""
              min={0}
              max={1000}
              onChange={(e) => setValue(e.target.value)}
            />
            <span>{value}</span>
          </div>
        </div>
        <div className="pt-5">
          <h2 className="font-bold">Sort by</h2>
          <div className="flex space-x-1 text-xs sm:text-sm md:text-base">
            <input type="radio" name="price" id="asc" value="asc" />
            <label htmlFor="asc" onChange={(e) => setSort("asc")}>
              Price (lowest First)
            </label>
          </div>
          <div className="flex space-x-1 text-xs sm:text-sm md:text-base">
            <input type="radio" name="price" id="desc" value="desc" />
            <label htmlFor="desc" onChange={(e) => setSort("desc")}>
              Price (highest First)
            </label>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1625662171891-9a3348f961f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80-"
          alt="banner"
          className="w-full h-60 object-cover mt-5"
        />
        <List catId={catId} sort={sort} maxPrice={value} />
      </div>
    </div>
  );
};

export default Products;
