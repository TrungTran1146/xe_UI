import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Cart from "../components/Cart/Cart.jsx";
import { CartContext } from "../Contexts/CartContext.js";
import { useState, useEffect } from "react";


const CartPage = () => {
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
        <Cart />
      </CartContext.Provider>
      <Footer />
    </>






  );
};

export default CartPage;
