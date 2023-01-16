import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Categories",
      slug: "products",
      id: 1,
      image:
        "https://images.unsplash.com/photo-1672907867893-1a6fbfe70bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      style: "overflow-hidden relative",
    },
    {
      name: "New Season",
      slug: "products",
      id: 2,
      image:
        "https://images.unsplash.com/photo-1601217813079-53cb0303bb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTY2MjIxMnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
      style: "md:row-span-2 overflow-hidden relative",
    },
    {
      name: "Men",
      slug: "products",
      id: 3,
      image:
        "https://images.unsplash.com/photo-1468546818829-25bb337b6646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NzY2OTU2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      style: "overflow-hidden relative",
    },
    {
      name: "Accessories",
      slug: "products",
      id: 4,
      image:
        "https://images.unsplash.com/photo-1610986356180-89a8c0f8fd03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NTYzMjkxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      style: "overflow-hidden relative",
    },
    {
      name: "Women",
      slug: "products",
      id: 5,
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjY5NTZ8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
      style: "overflow-hidden relative",
    },
    {
      name: "Shoes",
      slug: "products",
      id: 6,
      image:
        "https://images.unsplash.com/photo-1464278860589-b2ed64f87e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NzY2OTU2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      style: "md:col-span-2 overflow-hidden relative",
    },
  ];
  return (
    <div className="lg:mx-32 m-5 text-white">
      <h1 className="py-5 text-black font-medium">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-1 md:max-h-[450px]">
        {categories.map((item, index) => {
          return (
            <div className={`group ${item?.style}`} key={index}>
              <img
                src={item?.image}
                alt={item?.id}
                className="w-full h-full object-cover group-hover:opacity-90 transform transition-all duration-[200ms] group-hover:blur-[1px]"
              />
              <div className="flex justify-center items-center h-full">
                <button className="absolute top-[50%] z-10 btn">
                  <Link
                    to={`${item.slug}/${item.id}`}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    {item?.name}
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
