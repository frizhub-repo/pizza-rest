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
    if (isEmpty(offer)) {
      setPrice(0);
      setSelectedSize(sizeObj);
      setPrice(sizeObj?.price);
    }
  };

  return (
    <div
      key={sizeObj?._id}
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
