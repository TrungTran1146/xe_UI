import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";


import AdminPage from "./Admin/AdminPage";
import { CartContext } from "./Contexts/CartContext";
import ADProductPage from "./Admin/AdminPage/ADProductPage";
import BrandPage from "./Admin/AdminPage/BrandPage";
import TypeCarPage from "./Admin/AdminPage/TypeCarPage";
import OrderPage from "./Admin/AdminPage/OrderPage";
import ImportProductPage from "./Admin/AdminPage/ImportProductPage";
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";

function App() {


  return (
    <>


      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<ProductListPage />} />
          <Route path="/Product/GetProductByID/:id" element={<ProductPage />} />
          {/* Admin */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/product" element={<ADProductPage />} />
          <Route path="/admin/order" element={<OrderPage />} />
          <Route path="/admin/brand" element={<BrandPage />} />
          <Route path="/admin/typecar" element={<TypeCarPage />} />
          <Route path="/admin/nhapxe" element={<ImportProductPage />} />



        </Routes>
      </Router>



      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>




  );
}

export default App;
