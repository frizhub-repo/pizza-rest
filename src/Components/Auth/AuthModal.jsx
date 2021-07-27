import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Grid, Box, Divider } from "@material-ui/core";
import Person from "../../Assets/images/Person.png";
import Facebook from "../../Assets/images/facelog.png";
import Twitter from "../../Assets/images/twilog.png";
import Google from "../../Assets/images/googlelog.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const useStyles = makeStyles({
  containerImg: {
    width: "100%",
    height: "100%",
  },
  img: {
    height: 50,
    marginRight: "20px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  count: {
    width: "20px",
    height: "21px",
    borderRadius: "250px",
    fontSize: "12px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "2px",
    marginBottom: "5px",
  },
  titleText: {
    fontSize: "16px",
    marginLeft: "6px",
  },
  titleDivider: {
    marginLeft: "10px",
    marginRight: "10px",
    width: "50px",
    marginBottom: "5px",
  },
  socialContainer: {
    alignItems: "center",
    marginBottom: "20px",
  },
  socialImg: {
    height: 50,
    width: "100%",
  },
});

export default function AuthModal({ open, handleClose, isOrder = false }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { restaurant } = useRestaurantContext();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth="md"
    >
      <Grid container>
        <Grid item md={7}>
          <DialogTitle>
            <Box className={classes.titleContainer}>
              {/* <img
                src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
                className={classes.img}
              /> */}
              <Box
                onClick={() => setActiveStep(0)}
                style={{ cursor: "pointer" }}
              >
                <label
                  style={{ cursor: "pointer" }}
                  className={`${classes.count} bg-green-500`}
                >
                  1
                </label>
                <label
                  style={{
                    color: activeStep === 0 ? "#000" : "rgba(219, 214, 213)",
                    cursor: "pointer",
                  }}
                  className={classes.titleText}
                >
                  Sign In
                </label>
              </Box>

              <Divider className={classes.titleDivider} />
              <Box
                onClick={() => setActiveStep(1)}
                style={{ cursor: "pointer" }}
              >
                <label
                  style={{ cursor: "pointer" }}
                  className={`${classes.count} bg-green-500`}
                >
                  2
                </label>
                <label
                  style={{
                    color: activeStep === 1 ? "#000" : "rgba(219, 214, 213)",
                    cursor: "pointer",
                  }}
                  className={classes.titleText}
                >
                  Sign Up
                </label>
              </Box>
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            <Box
              display="flex"
              flexDirection="column"
              className={classes.socialContainer}
            >
              <label style={{ marginBottom: "10px", fontWeight: "600" }}>
                Continue with your social Network
              </label>
              <Box display="flex">
                <img
                  src={Google}
                  className={classes.socialImg}
                  style={{ paddingRight: "10px" }}
                />
                <img
                  className={classes.socialImg}
                  src={Facebook}
                  style={{ paddingRight: "10px" }}
                />
                <img className={classes.socialImg} src={Twitter} />
              </Box>
            </Box>

            {activeStep == 0 && (
              <SignIn
                handleClose={handleClose}
                setActiveStep={setActiveStep}
                isOrder={isOrder}
              />
            )}
            {activeStep == 1 && (
              <SignUp handleClose={handleClose} isOrder={isOrder} />
            )}
          </DialogContent>
        </Grid>
        <Grid
          item
          md={5}
          style={{ background: "rgba(237, 233, 232)", paddingTop: "20px" }}
        >
          <img src={Person} className={classes.containerImg} />
        </Grid>
      </Grid>
    </Dialog>
  );
}
