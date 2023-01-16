import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      {/* <Slider /> */}
      <FeaturedProducts type="featured" />
      {/* <Categories /> */}
      <FeaturedProducts type="trending" />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
