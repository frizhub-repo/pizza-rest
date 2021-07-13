import React from "react";
import { Typography } from "@material-ui/core";
import classes from "../OfferCard.module.css";

const Index = ({ title, value }) => {
  return (
    <div className={classes.additionalInfo}>
      <div className={classes.additionInfoImgContainer}>
        <span className={classes.textFont}>{title}</span>
      </div>
      <div className={classes.aditionalTitle}>
        <span className={classes.textFont}>{value}</span>
      </div>
    </div>
  );
};

export default Index;
