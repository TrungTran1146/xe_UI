import React from "react";
import Footer from "../components/Footer/Footer.jsx";


import Service from "../components/Service/Service.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Home from "../components/Home/Home.jsx";

import { CartContext } from "../Contexts/CartContext.js";
import { useState, useEffect } from "react";

const HomePage = () => {

  const [checkID, setCheckIdUser] = useState();
  const [checkName, setCheckNameUser] = useState();
  useEffect(() => {
    // allCart();
    checkIdNameUsers();


  }, [])



  const checkIdNameUsers = async () => {
    var idUser = await localStorage.getItem('id');
    var nameUser = await localStorage.getItem('name');
    setCheckIdUser(idUser);
    setCheckNameUser(nameUser);
  }

  return (
    <>
      <CartContext.Provider value={{ checkID, checkName }}>
        <Navbar />
        <Slider />
        <Home />

        <Service />
      </CartContext.Provider>

      <Footer />
    </>
  );
};

export default HomePage;
