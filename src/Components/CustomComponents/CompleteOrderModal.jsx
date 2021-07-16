import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { Grid, Typography } from "@material-ui/core";
import axiosIntance from "../../axios-configured";
import { removeOrderItems } from "../../actions";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "rgba(245, 158, 11, 1)",
    width: "100px",
    height: "40px",
    borderRadius: "6px",
    color: "#fff",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "600",
    textAlign: "center",
  },
  body: {
    padding: "40px",
  },
  infoBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  textColor: {
    color: "rgba(245, 158, 11, 1)",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
});

const CompleteOrderModal = ({ show, handleClose, paypal }) => {
  const classes = useStyles();
  const disp = useDispatch();
  const history = useHistory();
  const [status, setStatus] = useState(null);
  const total = useSelector((state) => state.orders).total;
  const products = useSelector((state) => state.orders).products;

  const createOrder = () => {
    if (status === "ERROR") {
      toast.error("Payment cancel for some reason. Please provide payment");
    } else if (status === "COMPLETED") {
      setStatus(null);
      axiosIntance
        .post("/api/v1/orders/customers", { products })
        .then((res) => {
          toast.success("Order created successfully");
          disp(removeOrderItems());
          history.push("/");
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Payment not added. Please provide payment");
    }
  };

  // useEffect(() => {
  //   debugger;
  //   var FUNDING_SOURCES = [
  //     window.paypal.FUNDING.PAYPAL,
  //     window.paypal.FUNDING.PAYLATER,
  //     window.paypal.FUNDING.CREDIT,
  //     window.paypal.FUNDING.CARD,
  //   ];

  //   FUNDING_SOURCES.forEach(function (fundingSource) {
  //     // Initialize the buttons
  //     var button = window.paypal.Buttons({
  //       style: {
  //         shape: "pill",
  //         layout: "horizontal",
  //         margin: "20px",
  //       },
  //       fundingSource: fundingSource,
  //       createOrder: (data, actions, err) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "Restaurant Club",
  //               amount: {
  //                 value: total,
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         if (order?.status === "COMPLETED") {
  //           toast.success("Payment got successfull");
  //           setStatus("COMPLETED");
  //           handleClose();
  //         } else {
  //           setStatus("ERROR");
  //           toast.error("Something went wrong");
  //         }
  //         console.log({ order });
  //       },
  //       onError: (err) => {
  //         setStatus("ERROR");
  //         toast.error("Error occurred while sending money");
  //         console.log({ err });
  //       },
  //       onCancel: (data) => {
  //         setStatus("ERROR");
  //         toast.error("Payment cancel by user");
  //         console.log({ data });
  //       },
  //     });

  //     // Check if the button is eligible
  //     if (button.isEligible()) {
  //       console.log("jkdfnvdkjfnv");
  //       // Render the standalone button for that funding source
  //       button.render(paypal.current);
  //     }
  //   });
  //   // Add style on paypal buttons at run time
  //   let content = document.getElementsByClassName(
  //     "paypal-buttons-layout-horizontal"
  //   );
  //   for (let i = 0; i < content.length; i++) {
  //     content[i].style.margin = "5px";
  //     content[i].style.width = "100%";
  //   }
  // }, []);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Select your payment Method</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.body}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          //   style={{ marginTop: "50px" }}
        >
          <Grid item>
            <Typography variant="h6" gutterBottom>
              How do you want to pay?
            </Typography>
          </Grid>
          <Grid item justify="flex-end">
            Total amount: ${total}
          </Grid>
          <Grid item>
            <div
              ref={paypal}
              style={{ display: "flex", flexDirection: "column" }}
            ></div>
          </Grid>
          {/* <Grid item>
            <Button
              style={{
                borderRadius: "15px",
                backgroundColor: "black",
                color: "white",
                marginTop: "10px",
                padding: "4px 6px 4px 6px",
              }}
              onClick={createOrder}
            >
              Complte Purchase
            </Button>
          </Grid> */}
        </Grid>
        <div
          ref={paypal}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100px",
            alignItems: "center",
          }}
        ></div>
        <div
          ref={paypal}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100px",
            alignItems: "center",
          }}
        ></div>
        <div
          ref={paypal}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100px",
            alignItems: "center",
          }}
        ></div>
        <div
          ref={paypal}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100px",
            alignItems: "center",
          }}
        ></div>
      </Modal.Body>
      <Modal.Footer>
        <button className={classes.btn} onClick={handleClose}>
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompleteOrderModal;
