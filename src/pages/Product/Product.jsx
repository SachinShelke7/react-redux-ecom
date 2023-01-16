import React, { useEffect, useState } from "react";
import { MdAddShoppingCart, MdCompare, MdFavoriteBorder } from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Product = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="mx-5 md:mx-14 py-5 flex gap-2">
      <div className="flex flex-col md:flex-row gap-5">
        {/* first */}
        <div className="flex gap-5 flex-1">
          <div className="w-36 h-36 object-cover space-y-5">
            <img
              src={`http://localhost:1337${data?.attributes?.img?.data?.attributes?.url}`}
              alt=""
              className={`transform transition-all duration-[1000ms] cursor-pointer  h-1/2 object-contain`}
              onClick={() => setSelectedImage("img")}
            />
            <img
              src={`http://localhost:1337${data?.attributes?.img2?.data?.attributes?.url}`}
              alt=""
              className={`transform transition-all duration-[1000ms] cursor-pointer  h-1/2 object-contain`}
              onClick={() => setSelectedImage("img2")}
            />
          </div>
          <div>
            <img
              src={`http://localhost:1337${data?.attributes?.[selectedImage]?.data?.attributes?.url}`}
              alt=""
              className="w-[35rem] h-96 object-contain"
            />
          </div>
        </div>

        {/* second */}
        <div className="flex-1">
          <h1 className="font-bold text-xl">{data?.attributes?.title}</h1>
          <span className="font-bold">{data?.attributes?.price}</span>
          <p className="text-sm md:max-w-[80%]">{data?.attributes?.desc}</p>
          <div className="mt-3">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              className="p-2 m-2 bg-gray-400 border w-8 h-10"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-2 m-2 bg-gray-400 border w-8 h-10"
            >
              +
            </button>
          </div>

          {/* Add to cart */}
          <button className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-gray-200 hover:text-white transform transition-all duration-[300ms] mt-3 flex items-center gap-1">
            <MdAddShoppingCart /> Add to cart
          </button>

          {/* buttons */}
          <div className="flex gap-5 mt-3 text-gray-600 text-sm">
            <div className="flex gap-1 items-center hover:text-black cursor-pointer">
              <MdFavoriteBorder />
              ADD TO WISH LIST
            </div>
            <div className="flex gap-1 items-center hover:text-black cursor-pointer">
              <MdCompare />
              ADD TO COMPARE
            </div>
          </div>

          <div className="flex flex-col gap-1 py-5">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="pt-5 flex flex-col gap-1">
            <span>DESCRIPTION</span>
            <hr className="w-[200px]" />
            <span>ADDITIONAL INFORMATION</span>
            <hr className="w-[200px]" />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
