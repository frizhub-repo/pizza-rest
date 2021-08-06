import React from "react";
import { Typography } from "@material-ui/core";
import { isEmpty } from "utils/common";

const FoodCard = ({
  sizeObj,
  classes,
  selectedSize,
  setSelectedSize,
  offer,
  setPrice,
}) => {
  const handleChangeSize = () => {
    setPrice(0);
    if (isEmpty(offer)) {
      setSelectedSize(sizeObj);
      setPrice(sizeObj?.price);
    }
  };

  return (
    <div
      className={
        sizeObj?.title === selectedSize?.title
          ? classes.additionalInfo
          : `${classes.additionalInfo} ${classes.op}`
      }
      onClick={handleChangeSize}
    >
      <Typography className={classes.sizeTitle}>
        {sizeObj?.title || "Default"}
      </Typography>
    </div>
  );
};

export default FoodCard;
