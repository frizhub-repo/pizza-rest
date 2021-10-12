import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { removeOrderItems } from "actions";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axiosIntance from "../../axios-configured";
import Navbar from "../Navbar";
import Tables from "./Tables";
import usePaypalScript from "Components/PaypalScript/PaypalScript";

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

  React.useEffect(() => {
    if (state === "ready" && window.paypal) setShowPaypal(1);
    else if (state === "not-connected") setShowPaypal(0);
  }, [state]);

  const createOrderHandler = async () => {
    try {
      setLoading(true);
      const res = await axiosIntance.post("/api/v1/orders/customers", {
        products: products,
        time,
        note,
        address,
      });
      dispatch(removeOrderItems());
      toast.success("Order has been created successfully");
      history.push(`/ordersreceived/${res?.data?._id}`);
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
            console.log({ order });
          },
          onError: (err) => {
            toast.error("Error occured while sending money");
            console.log({ err });
            setLoading(false);
          },
          onCancel: (data) => {
            toast.error("Payment cancel by user");
            console.log({ data });
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

  console.log({ showPaypal });

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
      {(loading || showPaypal < 0) && (
        <Backdrop
          style={{
            zIndex: 100,
            color: "#fff",
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default OrderSummary;
