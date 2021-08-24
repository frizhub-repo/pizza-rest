import React from "react";
import { Typography } from "@material-ui/core";
import classes from "../ProductCard.module.css";

const Allergies = ({ title, arr }) => {
  return (
    <div className={`${classes.tb} ${classes.th} ${classes.offerItemsHeight}`}>
      <div>
        <Typography className={`${classes.ml} ${classes.wrapIntoLine}`}>
          <span>{title}:</span>{" "}
          {arr?.length > 0 && (
            <span className={classes.allergyContainer}>
              {arr?.map((desc, index) =>
                index === arr?.length - 1 ? desc : desc + ", "
              )}
            </span>
          )}
        </Typography>
      </div>
    </div>
  );
};

export default Allergies;
