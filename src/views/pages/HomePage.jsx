import React from "react";
import Footer from "../components/Footer/Footer.jsx";


import Service from "../components/Service/Service.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />

      <Service />
      <Footer />
    </div>
  );
};

export default HomePage;
