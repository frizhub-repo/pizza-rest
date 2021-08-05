import React from "react";
import { Typography } from "@material-ui/core";

const FoodCard = ({ sizeObj, isSelected = true, classes, selectedSize }) => {
  return (
    <div
      className={
        isSelected
          ? classes.additionalInfo
          : `${classes.additionalInfo} ${classes.op}`
      }
    >
      <Typography className={classes.sizeTitle}>
        {sizeObj?.title || "Default"}
      </Typography>
    </div>
  );
};

export default FoodCard;
