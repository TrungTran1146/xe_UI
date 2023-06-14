import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProductList from "../components/Product/ProductList.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Service from "../components/Service/Service.jsx";

// import Product from "../components/Product/Product.jsx";

const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductList />
      {/* <Service /> */}
      <Footer />
    </>
  );
};

export default ProductListPage;
