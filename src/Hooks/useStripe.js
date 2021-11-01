import { loadStripe } from "@stripe/stripe-js";
import { getOwnerStripeAccountId } from "api/public";
import * as React from "react";

export default function useStripe() {
  const [stripeAccount, setStripeAccount] = React.useState(null);
  const [connected, setConnected] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const res = await getOwnerStripeAccountId();
      setConnected(true);
      setStripeAccount(res?.data ?? "");
    })();
  }, []);
  return connected
    ? loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY, {
        stripeAccount,
      })
    : null;
}
