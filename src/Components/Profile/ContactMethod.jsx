import { Box, Card, InputAdornment } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  headingBox: {
    textAlign: "start",
    border: "1px solid rgba(218, 235, 240)",
    padding: "18px 40px",
    background: "rgba(169 226 241 / 10%)",
    fontSize: "22px",
    fontWeight: "500",
    color: "#6badd4",
  },
  contentBox: {
    border: "1px solid rgba(218, 235, 240)",
    padding: "20px 20px 55px",
    display: "flex",
    alignItems: "flex-start",

    flexDirection: "column",
  },
});

const ContactMethod = () => {
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Card>
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
                style={{ paddingLeft: "0", color: "darkgrey" }}
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

                  color: "darkgrey",
                }}
                defaultChecked
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
              <label>Email (Order Details are send by email)</label>
            </div>
          </Box>
        )}
      </Card>
    </>
  );
};

export default ContactMethod;
