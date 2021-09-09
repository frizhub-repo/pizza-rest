import React from "react";
import clock from "images/clock.png";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useRestaurantContext } from "Context/restaurantContext";
import leftArrow from "Assets/images/leftArrow.png";
import downArrow from "Assets/images/downArrow.png";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  container4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
    color: "#fff",
  },
  img: {
    width: "75px",
    height: "75px",
  },
  root2: {
    backgroundColor: "#10B981",
    height: "100%",
    padding: "0 15px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  openStatus: {
    backgroundColor: "#10B981",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    borderTopRightRadius: "15px",
    padding: "5px 20px",
  },
  openingHrs: {
    backgroundColor: "#F59E0B",
    borderBottomRightRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
  },
  closeResStats: {
    backgroundColor: "#CB0E0E",
  },
}));

export default function RestaurantStatus({ isReservationPage = false }) {
  const history = useHistory();
  const {
    restaurant: {
      placeData: { opening_hours: { open_now = false } = {} } = {},
    } = {},
  } = useRestaurantContext();

  const classes = useStyles();

  const showOpeningHours = () => {
    if (isReservationPage) {
      history.push("/");
    } else {
      document
        .getElementById("opening_hour")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`${classes.container4}`}>
      <div className={`${classes.root2} ${!open_now && classes.closeResStats}`}>
        <div className={classes.img}>
          <img src={clock} />
        </div>
      </div>
      <div>
        <div
          className={`${classes.openStatus} ${
            !open_now && classes.closeResStats
          }`}
        >
          <Typography>Now Opened</Typography>
          <Typography>From 9:00am - To 2:00pm</Typography>
        </div>
        <div className={classes.openingHrs} onClick={showOpeningHours}>
          <Typography>Click for Opening Hours</Typography>
          {!isReservationPage && <img src={downArrow} />}
        </div>
      </div>
    </div>
  );
}
