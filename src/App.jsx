import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import LoginPage from "./views/pages/LoginPage";
import CartPage from "./views/pages/CartPage";
import ProductListPage from "./views/pages/ProductListPage";
import ProductPage from "./views/pages/ProductPage";
import RegisterPage from "./views/pages/RegisterPage";


import AdminPage from "./views/Admin/AdminPage";
import { CartContext } from "./views/Contexts/CartContext";
import ADProductPage from "./views/Admin/AdminPage/ADProductPage";
import BrandPage from "./views/Admin/AdminPage/BrandPage";
import OrderPage from "./views/Admin/AdminPage/OrderPage";


function App() {


  return (
    <CartContext.Provider value={{}}>
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
          <Route path="/admin/nhapxe" element={<BrandPage />} />
        </Routes>
      </Router>
    </CartContext.Provider>

  );
}

export default App;
