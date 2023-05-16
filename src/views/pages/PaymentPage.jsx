import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartAndPayment from "../components/CartAndPayment";

import StripeButton from "../components/StripeButton";

const PaymentPage = () => {
  return (
    <div>
      <Navbar />
      <CartAndPayment />
      <StripeButton />
      <Footer />
    </div>
  );
};

export default PaymentPage;
