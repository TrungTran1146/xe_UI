import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/stripe/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  }, [stripeToken]);

  return (
    <div style={{ height: `400px` }}>
      <center>
        <StripeCheckout
          name="DucManh Store"
          image="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/312895727_2005503079660652_5342999113921858861_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I8uN54b4XX8AX8k-uPv&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfA2gHZAN3i1ZUcc4eGoBZwEWQQ2578R0mQj7q4QSRNbvg&oe=643BC468"
          billingAddress
          shippingAddress
          description="Your total 100$"
          amount={2000}
          token={onToken}
          stripeKey="pk_test_51Ml4ztBjVaX7dGogenlqXtZdtaZUxZ5CQdV9pEUoQoF0PSnmnwC0vJ5hfFUdcdKszAnnooWGKScX9AcBA7EGFvtL00fieWZtYK"
        >
          <button className="btn btn-primary my-5 d-flex align-items-center">
            Buy
          </button>
        </StripeCheckout>
      </center>
    </div>
  );
};

export default StripeButton;
