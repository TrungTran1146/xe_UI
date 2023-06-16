import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ProductList from "../components/Product/ProductList.jsx";
import Slider from "../components/Slider/Slider.jsx";
import Service from "../components/Service/Service.jsx";
import UserOrder from "../components/Cart/UserOrder.jsx";

import { CartContext } from "../Contexts/CartContext.js";
import { useState, useEffect } from "react";

const OrderUserPage = () => {
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
                <UserOrder />
            </CartContext.Provider>
            {/* <Service /> */}
            <Footer />
        </>
    );
};

export default OrderUserPage;
