import { loadStripe } from "@stripe/stripe-js";
import { getOwnerStripeAccountId } from "api/public";
import * as React from "react";

export default function useStripe() {
  const [stripeAccount, setStripeAccount] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const res = await getOwnerStripeAccountId();
      setStripeAccount(res?.data ?? "");
    })();
  }, []);
  return (
    stripeAccount &&
    loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY, { stripeAccount })
  );
}
