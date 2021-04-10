import React, { useState } from "react";
import Navbar from "../Navbar";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Payment from "./Payment";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "50px",
  },
});

const DeliveryAddress = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div>
      <Navbar />
      <Box className={classes.container}>
        <Payment setActiveStep={setActiveStep} />
      </Box>
    </div>
  );
};

export default DeliveryAddress;
