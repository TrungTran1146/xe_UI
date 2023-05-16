import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Service from "../components/Service";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <Service />
      <Footer />
    </div>
  );
};

export default ProductPage;
