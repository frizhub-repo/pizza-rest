import React from "react";
import { Typography } from "@material-ui/core";

const index = ({ title, arr, isAllergy = false }) => {
  return (
    <div className="tb th">
      <Typography>{title}:</Typography>
      {isAllergy
        ? arr.map((desc, index) => (
            <div className="allergyContainer">
              <Typography key={index}>{desc}</Typography>
            </div>
          ))
        : arr.map((desc, index) => (
            <Typography key={index} className="ml">
              {desc}
              {index === arr.length - 1 ? "" : ","}
            </Typography>
          ))}
    </div>
  );
};

export default index;
