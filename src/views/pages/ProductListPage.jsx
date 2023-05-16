import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import Service from "../components/Service";

const ProductListPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductList />
      <Service />
      <Footer />
    </div>
  );
};

export default ProductListPage;
