import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import LoginPage from "./views/pages/LoginPage";
import PaymentPage from "./views/pages/PaymentPage";
import ProductListPage from "./views/pages/ProductListPage";
import ProductPage from "./views/pages/ProductPage";
import RegisterPage from "./views/pages/RegisterPage";
import ForgotPasswordPage from "./views/pages/ForgotPasswordPage";
import ResetPasswordPage from "./views/pages/ResetPasswordPage";
import AdminPage from "./views/pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route path="/detail" element={<ProductPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
