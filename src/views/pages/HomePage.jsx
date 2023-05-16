import React from "react";
import Footer from "../components/Footer";
import HotItem from "../components/HotItem";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <HotItem />
      <Service />
      <Footer />
    </div>
  );
};

export default HomePage;
