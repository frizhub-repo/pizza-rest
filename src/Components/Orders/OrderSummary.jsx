import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { removeOrderItems } from "actions";
import { createOrder } from "api/orders";
import { createDiscountStats } from "api/public";
import AddStripePaymentMethod from "Components/AddStripePaymentMethod/AddStripePaymentMethod";
import usePaypalScript from "Components/PaypalScript/PaypalScript";
import { PAYMENT_METHOD } from "../../constants";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { isEmpty } from "utils/common";
import usePayWithStripeHandler from "../../Hooks/usePayWithStripeHandler";
import Navbar from "../Navbar";
import Tables from "./Tables";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem",
  },
  detail: {
    display: "flex",
    justifyContent: "space-between",
  },
  detailText: {
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  total: {
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#fc853a",
  },
  btn: {
    height: "40px",
    background: "#F59E0B",
    borderRadius: "10px",
    marginTop: "20px",
    "&:hover": {
      background: "#F59E0B",
    },
    color: "#fff",
    textTransform: "capitalize",
    padding: "20px 50px 20px 50px",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
}));

const OrderSummary = () => {
  const paypal = useRef(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const products = useSelector((state) => state.orders).products;
  const total = useSelector((state) => state.orders).total;
  const time = useSelector((state) => state.orders).time;
  const note = useSelector((state) => state.orders).note;
  const address = useSelector((state) => state.orders).address;
  const [showPaypal, setShowPaypal] = React.useState(-1);

  const state = usePaypalScript();
  const handleSubmit = usePayWithStripeHandler();

  React.useEffect(() => {
    if (state === "ready" && window.paypal) setShowPaypal(1);
    else if (state === "not-connected") setShowPaypal(0);
  }, [state]);

  const createOrderHandler = async () => {
    try {
      setLoading(true);
      const res = await handleSubmit({
        apiFunction: createOrder,
        payload: {
          products,
          time,
          note,
          address,
        },
        queryParams: {
          paymentMethod: PAYMENT_METHOD.STRIPE,
        },
      });
      dispatch(removeOrderItems());
      let discount_stat_usage = [];
      products.forEach((product) => {
        if (!isEmpty(product.offer)) {
          discount_stat_usage.push({
            type: "usage",
            discountType: "DeliveryDiscount",
            discount: product?.offer?._id,
          });
        }
      });
      if (discount_stat_usage?.length)
        await createDiscountStats({
          offers: discount_stat_usage,
        });
      toast.success("Order has been created successfully");
      history.push(`/ordersreceived/${res?.data?.order?._id}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
      toast.error("Error creating Order");
    }
  };

  useEffect(() => {
    if (showPaypal > 0) {
      var FUNDING_SOURCES = [
        window.paypal.FUNDING.PAYPAL,
        window.paypal.FUNDING.PAYLATER,
        window.paypal.FUNDING.CREDIT,
        window.paypal.FUNDING.CARD,
      ];
      FUNDING_SOURCES.forEach(function (fundingSource) {
        // Initialize the buttons
        var button = window.paypal.Buttons({
          style: {
            shape: "pill",
            layout: "horizontal",
            margin: "20px",
          },
          fundingSource: fundingSource,
          createOrder: (data, actions, err) => {
            setLoading(true);
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Restaurant Club",
                  amount: {
                    value: total.toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            if (order?.status === "COMPLETED") {
              await createOrderHandler();
            } else {
              toast.error("Something went wrong");
              setLoading(false);
            }
          },
          onError: (err) => {
            toast.error("Error occured while sending money");
            console.log({ err });
            setLoading(false);
          },
          onCancel: (data) => {
            toast.error("Payment cancel by user");
            setLoading(false);
          },
        });
        // Check if the button is eligible
        if (button.isEligible()) {
          // Render the standalone button for that funding source
          button.render(paypal.current);
        }
      });
      // Add style on paypal buttons at run time
      let content = document.getElementsByClassName(
        "paypal-buttons-layout-horizontal"
      );
      for (let i = 0; i < content.length; i++) {
        content[i].style.margin = "5px";
        content[i].style.width = "100%";
      }
    }
  }, [showPaypal]);

  return (
    <>
      <Navbar />
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Box className={classes.detail}>
            <label className={classes.detailText}>Order Detail</label>
            <label className={classes.total}>Total: {total.toFixed(2)} €</label>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Tables products={products} total={total} />
          </Box>
        </Grid>

        {showPaypal > 0 && (
          <Grid
            item
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div ref={paypal} style={{ display: "flex", width: "55%" }}></div>
          </Grid>
        )}
        {showPaypal === 0 && (
          <Box display="flex" justifyContent="flex-end">
            <Button
              className={classes.btn}
              onClick={() => createOrderHandler()}
            >
              Order Now
            </Button>
          </Box>
        )}
      </Grid>
      <AddStripePaymentMethod />
      {(loading || showPaypal < 0) && (
        <Backdrop
          style={{
            zIndex: 100,
            color: "#fff",
          }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default OrderSummary;
