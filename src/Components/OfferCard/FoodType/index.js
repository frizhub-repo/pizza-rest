import React from "react";
import { Typography } from "@material-ui/core";

const FoodCard = ({ src, title, isSelected, classes }) => {
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
      <Typography
        style={{ marginLeft: "8px", fontWeight: "500", fontSize: "16px" }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default FoodCard;
