import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const StripeCheckoutButton = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

    setLoading(false);

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    console.log("Payment Method:", paymentMethod);

    alert("Card information submitted successfully!");

    // IMPORTANT:
    // Send paymentMethod.id and the price to your backend
    // to create/confirm the actual Stripe payment.
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : `Pay $${price}`}
      </button>
    </form>
  );
};

export default StripeCheckoutButton;