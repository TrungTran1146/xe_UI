import React from "react";
import Footer from "../components/Footer/Footer.jsx";


import Service from "../components/Service/Service.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Home from "../components/Home/Home.jsx";



const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Home />

      <Service />
      <Footer />
    </>
  );
};

export default HomePage;
