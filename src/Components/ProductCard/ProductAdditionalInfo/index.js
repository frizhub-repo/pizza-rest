import { Typography } from "@material-ui/core";
import React from "react";
import classes from "../ProductCard.module.css";

const ProductAdditionalInfo = ({ title, src, isSelected = false }) => {
  return (
    <div
      className={
        isSelected
          ? classes.additionalInfo
          : `${classes.additionalInfo} ${classes.op}`
      }
    >
      <div className={classes.additionInfoImgContainer}>
        <img src={src} className={classes.additionInfoImg} />
      </div>
      <Typography variant="h6">{title}</Typography>
    </div>
  );
};

export default ProductAdditionalInfo;
