import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
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
}));

const OrderSummary = () => {
    const paypal = useRef();
  const classes = useStyles();
  const [status, setStatus] = useState(null);
  const history = useHistory();
  const products = useSelector((state) => state.orders).products;
  const total = useSelector((state) => state.orders).total;

  useEffect(() => {
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
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Restaurant Club",
                amount: {
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order?.status === "COMPLETED") {
            toast.success("Payment got successfull");
            history.push("/ordersreceived");
            setStatus("COMPLETED");
          } else {
            setStatus("ERROR");
            toast.error("Something went wrong");
          }
          console.log({ order });
        },
        onError: (err) => {
          setStatus("ERROR");
          toast.error("Error occured while sending money");
          console.log({ err });
        },
        onCancel: (data) => {
          setStatus("ERROR");
          toast.error("Payment cancel by user");
          console.log({ data });
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
  }, []);

  return (
    <>
      <Navbar />
      <Grid container direction="column" className={classes.root}>
        <Grid item>
          <Box className={classes.detail}>
            <label className={classes.detailText}>Order Detail</label>
            <label className={classes.total}>Total: {total} €</label>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Tables products={products} total={total} />
          </Box>
        </Grid>
        <Grid item style={{marginTop: "40px", display: "flex", justifyContent: "center"}}>
          <div ref={paypal} style={{ display: "flex", width: "55%" }}></div>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderSummary;
