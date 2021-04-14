import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Grid, Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProfileIcon from "../../Assets/IconComponents/ProfileIcon";
import { useRestaurantContext } from "../../Context/restaurantContext.js";
import Orders from "./Orders";
import Reservations from "./Reservations";

const useStyles = makeStyles({
  leftGrid: {
    paddingRight: "16px",
  },
  profileBox: {
    marginBottom: "20px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainContainer: {
    paddingTop: "3rem",
  },
  textBox: {
    fontSize: "14px",
  },
  optionsBox: {
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    textAlign: "start",
  },
  activeOption: {
    cursor: "pointer",
    color: "rgba(16, 185, 129,1)",
  },
  option: {
    cursor: "pointer",
  },
});

const Profile = () => {
  const classes = useStyles();
  const [activeOption, setActiveOption] = useState(0);
  const { customerData: user } = useRestaurantContext();
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    if (window.location.search) {
      const option = window.location.search.split("=")[1];
      setActiveOption(parseInt(option));
    }
  }, []);

  return (
    <div>
      <Navbar showLinks={false} />
      <section className={`px-48 ${classes.mainContainer}`}>
        <Grid container>
          <Grid md={3} className={classes.leftGrid}>
            <Card className={classes.profileBox}>
              <ProfileIcon />
              <Box
                mt="10px"
                display="flex"
                flexDirection="column"
                className={classes.textBox}
              >
                <label>
                  {user?.firstName} {user?.lastName}
                </label>
                <label>{user?.phoneNumber}</label>
                <label>{user?.email}</label>
                <label>{user?.address}</label>
              </Box>
            </Card>
            <Card className={classes.optionsBox}>
              <label
                className={
                  activeOption === 0 ? classes.activeOption : classes.option
                }
                onClick={() => setActiveOption(0)}
              >
                My Account
              </label>
              <label
                onClick={() => setActiveOption(1)}
                className={
                  activeOption === 1 ? classes.activeOption : classes.option
                }
              >
                Delivery Address
              </label>
              <label
                onClick={() => setActiveOption(2)}
                className={
                  activeOption === 2 ? classes.activeOption : classes.option
                }
              >
                Orders
              </label>
              <label
                onClick={() => setActiveOption(3)}
                className={
                  activeOption === 3 ? classes.activeOption : classes.option
                }
              >
                Reservations
              </label>
              <label
                onClick={() => setActiveOption(4)}
                className={
                  activeOption === 4 ? classes.activeOption : classes.option
                }
              >
                Payment Method
              </label>
              <label
                onClick={() => setActiveOption(5)}
                className={
                  activeOption === 5 ? classes.activeOption : classes.option
                }
              >
                Contact Method
              </label>
              <label
                onClick={logout}
                className={
                  activeOption === 6 ? classes.activeOption : classes.option
                }
              >
                logout
              </label>
            </Card>
          </Grid>
          <Grid md={9}>
            {activeOption === 2 && <Orders />}
            {activeOption === 3 && <Reservations />}
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Profile;
