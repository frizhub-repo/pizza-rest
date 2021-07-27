import React from "react";
import { Typography } from "@material-ui/core";

const index = ({ title, arr, classes, isAllergy = false }) => {
  return (
    <div className={`${classes.tb} ${classes.th}`}>
      <Typography>{title}:</Typography>
      {isAllergy
        ? arr.map((desc, index) => (
            <div className={classes.allergyContainer}>
              <Typography key={index}>{desc}</Typography>
            </div>
          ))
        : arr.map((desc, index) => (
            <Typography key={index} className={classes.ml}>
              {desc}
              {index === arr.length - 1 ? "" : ","}
            </Typography>
          ))}
    </div>
  );
};

export default index;
