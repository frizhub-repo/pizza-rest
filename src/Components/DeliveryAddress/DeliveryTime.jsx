import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Button, CircularProgress } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import { addAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { addDeliveryAddress } from "../../api/customers";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  container: {},
  title: {
    fontWeight: "600",
    fontSize: "20px",
  },
  formContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    height: "40px",
    background: "rgba(16, 185, 129,0.3)",
    border: "1px solid rgba(16, 185, 129)",
    marginTop: "20px",
    "&:hover": {
      background: "rgba(16, 185, 129,0.3)",
    },
    color: "rgba(16, 185, 129)",
    textTransform: "capitalize",
    padding: "20px 50px 20px 50px",
  },
});

const DeliveryTime = ({ setActiveStep }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <label className={classes.title}>Confirm Delivery Time</label>
      <form>
        <Card className={classes.formContainer}>
          <label
            style={{ display: "flex", color: "#6969fd", fontWeight: "500" }}
          >
            Delivery Time
          </label>

          <TextField
            id="outlined-basic"
            label="As soon as Possible"
            name="name"
            variant="outlined"
            style={{ margin: "15px 0px" }}
          />

          <Box
            mb="15px"
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "7px",
            }}
          >
            <label style={{ fontSize: "10px", display: "flex", color: "grey" }}>
              Leave a note for the restaurant with information they need to be
              aware of (eg"The intercom doesn't work). Do not
            </label>
            <label style={{ fontSize: "10px", display: "flex", color: "grey" }}>
              include here any requests or warnings about any food allergies or
              intollerances.
            </label>
          </Box>

          <TextField
            id="outlined-multiline-static"
            label=""
            name="message"
            multiline
            rows={8}
            variant="outlined"
          />

          <Box mt="15px">
            <label
              style={{
                fontSize: "10px",
                display: "flex",
                color: "#6969fd",
                fontWeight: "500",
              }}
            >
              If you have food allergy or intolerance (or if someone you are
              ordering for has one). Click here
            </label>
          </Box>
        </Card>
        <Box display="flex" justifyContent="flex-end">
          <Button
            type="submit"
            className={classes.btn}
            onClick={() => setActiveStep(2)}
          >
            Continue
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DeliveryTime;
