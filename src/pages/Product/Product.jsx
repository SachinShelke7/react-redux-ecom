import React, { useEffect, useState } from "react";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const image = [
    "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  return (
    <>
      <div>
        {/* first */}
        <div className="flex gap-5">
          <div className="w-32 h-32 object-cover space-y-5">
            <img
              src={image[0]}
              alt=""
              className={`transform transition-all duration-[1000ms] cursor-pointer ${
                selectedImage === 0 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setSelectedImage(0)}
            />
            <img
              src={image[1]}
              alt=""
              className={`transform transition-all duration-[1000ms] cursor-pointer ${
                selectedImage === 1 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setSelectedImage(1)}
            />
          </div>
          <div>
            <img
              src={image[selectedImage]}
              alt=""
              className="w-[35rem] object-cover"
            />
          </div>
        </div>
        {/* second */}
      </div>
    </>
  );
};

export default Product;
