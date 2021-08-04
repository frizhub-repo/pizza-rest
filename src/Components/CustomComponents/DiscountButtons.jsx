import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    color: "#000",
    padding: "20px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "500px",
  },
  discountText: {
    cursor: "pointer",
    fontSize: "36px",
    fontWeight: "normal",
    lineHeight: "42px",
    paddingBottom: "5px",
    color: "rgba(245, 158, 11, 0.5)",
  },
  selectedText: {
    color: "#10B981",
    borderBottom: "7px solid #10B981",
    zIndex: 1,
  },
  dividerRoot: {
    position: "absolute",
    bottom: 0,
  },
  divider: {
    width: "500px",
    height: "6px",
    backgroundColor: "rgba(245, 158, 11, 0.5)",
  },
});

const DiscountButtons = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.dividerRoot}>
          <Divider className={classes.divider} />
        </div>
        <span
          className={`${classes.discountText} ${
            activeStep === 0 && classes.selectedText
          }`}
          onClick={() => setActiveStep(0)}
        >
          Bundle
        </span>
        <span
          className={`${classes.discountText} ${
            activeStep === 1 && classes.selectedText
          }`}
          onClick={() => setActiveStep(1)}
        >
          Flat
        </span>
        <span
          className={`${classes.discountText} ${
            activeStep === 2 && classes.selectedText
          }`}
          onClick={() => setActiveStep(2)}
        >
          %
        </span>
      </div>
    </div>
  );
};

export default DiscountButtons;
