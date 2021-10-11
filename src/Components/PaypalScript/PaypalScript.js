import React from "react";
import { getPaypalStatus } from "api/public";
const { REACT_APP_PAYPAL_CLIENT_ID } = process.env;

const PaypalScript = () => {
  const [paypalData, setPaypalData] = React.useState({});

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getPaypalStatus();
        setPaypalData(res.data);
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  console.log({ paypal: window.paypal });

  React.useEffect(() => {
    if (!paypalData?.merchant_id) {
      return;
    }

    const { merchant_id } = paypalData;
    const url = `https://www.paypal.com/sdk/js?client-id=${REACT_APP_PAYPAL_CLIENT_ID}&merchant-id=${merchant_id}&components=buttons,funding-eligibility`;
    let script = document.querySelector(`script[src="${url}"]`);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/javascript";
      script.src = url;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [paypalData]);

  return <></>;
};

export default PaypalScript;