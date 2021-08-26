import React from "react";
import clock from "images/clock.png";
import { Card, CardContent } from "@material-ui/core";
import TimingsCard from "Components/Home/timingsCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
    width: "400px",
  },
  extra: {
    width: "100%",
  },
  img: {
    width: "55px",
    height: "55px",
    marginTop: "13px",
  },
  root2: {
    backgroundColor: "#10B981",
    width: "80px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  root4: {
    backgroundColor: "#10B981",
    width: "250px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  root6: {
    backgroundColor: "#F59E0B",
    width: "250px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

export default function RestaurantStatus() {
  const classes = useStyles();
  return (
    <div className={`${classes.container4} ${classes.extra}`}>
      <Card className={classes.root2}>
        <CardContent>
          <div className={classes.img}>
            <img src={clock} />
          </div>
        </CardContent>
      </Card>
      <div>
        <div>
          <TimingsCard
            id="2"
            startTime="9:00am"
            endTime="2:00pm"
            open="true"
            styles={classes.root4}
          />
        </div>
        <div>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="Click for Opening Hours"
            styles={classes.root6}
          />
        </div>
      </div>
    </div>
  );
}
