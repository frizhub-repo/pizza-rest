import React from "react";
import { Typography } from "@material-ui/core";
import classes from "../OfferCard.module.css";

const Index = ({ title, value }) => {
  return (
    <div className={classes.additionInfoImgContainer}>
      <span className={classes.textFont}>{title}</span>
    </div>
  );
};

export default Index;
