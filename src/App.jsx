import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import LoginPage from "./views/pages/LoginPage";
import CartPage from "./views/pages/CartPage";
import ProductListPage from "./views/pages/ProductListPage";
import ProductPage from "./views/pages/ProductPage";
import RegisterPage from "./views/pages/RegisterPage";


import AdminPage from "./views/pages/Admin/AdminPage";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/detail" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
