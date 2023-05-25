import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Service from "../components/Service/Service.jsx";
import ProductDetail from "../components/Product/ProductDetail.jsx";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Service />
      <Footer />
    </div>
  );
};

export default ProductPage;
