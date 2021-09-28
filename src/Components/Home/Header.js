import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "white",
    borderRadius: "30px 30px 0 0",
    textTransform: "uppercase",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  },
  txt: {
    fontSize: "52px",
    fontWeight: "normal",
    lineHeight: "82px",
  },
}));

const Header = ({ backgroundColor = "#10B981", text = "Delivery Course" }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ backgroundColor }}>
      <span className={classes.txt}>{text}</span>
    </div>
  );
};

export default Header;
