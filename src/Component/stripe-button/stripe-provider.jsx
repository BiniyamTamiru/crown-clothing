import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeCheckoutButton from "../stripe-button/stripe-button";

const stripePromise = loadStripe(
  "pk_test_51UMKjtBt0Wi0hb99k4VBHXJubJ0xPFgwN3m0iVMgqCUYrI1pjqGWP5hwnA2cW5QNoFdF0WNAd8Le9er01U2En9Ol00vrRGCGtJ"
);

const StripeProvider = ({ price }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeCheckoutButton price={price} />
    </Elements>
  );
};

export default StripeProvider;