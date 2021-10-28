import * as React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { setupIntent } from "../../api/stripe";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function AddStripePaymentMethod() {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    try {
      var setupIntentRes = await setupIntent();
    } catch (err) {
      console.log(err.errMsg);
    }
    if (!setupIntentRes) {
      return;
    }
    const result = await stripe.confirmCardSetup(
      setupIntentRes.data.client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Michael Jordan",
          },
        },
      }
    );

    if (result.error) {
      // Show error to your customer
      console.log(result.error.message);
    } else {
      console.log("Your payment method has been set up successfully");
    }
  };

  return (
    <div>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}
