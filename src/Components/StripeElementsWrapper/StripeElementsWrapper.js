import { Elements } from "@stripe/react-stripe-js";
import useStripe from "Hooks/useStripe";

export default function StripeElementsWrapper({ children }) {
  const stripePromise = useStripe();
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
