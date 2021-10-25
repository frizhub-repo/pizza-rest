import { useStripe } from "@stripe/react-stripe-js";

export default function usePayWithStripeHandler() {
  const stripe = useStripe();
  return async function handleSubmit({ apiFunction, payload, queryParams }) {
    try {
      const res = await apiFunction({ payload, queryParams });
      if (res.status === 402) {
        // Pass the failed PaymentIntent to your client from your server
        const result = await stripe.confirmCardPayment(res.data.client_secret, {
          payment_method: res.data.last_payment_error.payment_method.id,
        });
        if (result.error) {
          // Show error to your customer
          console.error(result.error.message);
          return;
        } else {
          if (result.paymentIntent.status === "succeeded") {
            // The payment is complete!
          }
        }
      }
      console.log(`Payment made successfully`);
      return res;
    } catch (err) {
      throw err;
    }
  };
}
