import React, { useState } from "react";
import Address from "./Address";
import DeliveryTime from "./DeliveryTime";
import Navbar from "../Navbar";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
        {activeStep === 0 && <Address setActiveStep={setActiveStep} />}
        {activeStep === 1 && <DeliveryTime />}
      </Box>
    </div>
  );
};

export default DeliveryAddress;
