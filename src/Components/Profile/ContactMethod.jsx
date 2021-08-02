import { Box, Card } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  headingBox: {
    padding: "10px 0",
    backgroundColor: "#F59E0B",
    fontSize: "30px",
    fontWeight: "500",
    color: "#fff",
    borderRadius: "30px 30px 0 0",
  },
  contentBox: {
    border: "1px solid rgba(218, 235, 240)",
    padding: "20px 20px 55px",
    display: "flex",
    alignItems: "flex-start",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "0 0 30px 30px",
    flexDirection: "column",
  },
});

const ContactMethod = () => {
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  return (
    <>
      <div>
        <Box className={classes.headingBox}>Contact Methods</Box>
        {loading ? (
          <Skeleton
            variant="rect"
            height={500}
            width={"100%"}
            style={{
              marginBottom: "20px",
            }}
          />
        ) : (
          <Box className={classes.contentBox}>
            <label style={{ fontSize: "19px", fontWeight: "500" }}>
              I would like to receive updates via
            </label>
            <div style={{ color: "darkgrey", fontWeight: "600" }}>
              <Checkbox
                style={{ paddingLeft: "0", color: "#F59E0B" }}
                defaultChecked
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
              <label>SMS (Important update only)</label>
            </div>
            <div style={{ color: "darkgrey", fontWeight: "600" }}>
              <Checkbox
                style={{
                  paddingLeft: "0",
                  color: "#F59E0B",
                }}
                defaultChecked
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
              <label>Email (Order Details are send by email)</label>
            </div>
          </Box>
        )}
      </div>
    </>
  );
};

export default ContactMethod;
