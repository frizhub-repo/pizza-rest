import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Input, InputAdornment } from "@material-ui/core";
import AddressCard from "../CustomComponents/AddressCard";
import { getDeliveryAddressList } from "../../api/customers";
import { useDispatch } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import { getAddressList } from "../../actions/customers";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";

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
    fontSize: "19px",
    fontWeight: "500",
    color: "#9eaef5",
    flexDirection: "column",
    minHeight: "600px",
  },
});

const MyAcount = ({ user }) => {
  const [loading, setLoading] = useState(false);
  // const { customerData: user } = useRestaurantContext();
  const classes = useStyles();

  return (
    <>
      <Card>
        <Box className={classes.headingBox}>My Acount</Box>
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
            <label>Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
              value={user?.firstName}
              disabled={true}
            />

            <label>Surname</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
              value={user?.lastName}
              disabled={true}
            />

            <label>Email</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
              value={user?.email}
              disabled={true}
            />

            <label>Phone Number</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
              value={user?.phoneNumber}
              disabled={true}
            />

            {/* <label>Password</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ width: "100%", marginBottom: "10px" }}
              value="********"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <EditIcon />
                  </InputAdornment>
                ),
              }}
            /> */}

            {/* <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <label style={{ cursor: "pointer" }}>Change Password</label>
            </div> */}
          </Box>
        )}
      </Card>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "45px",
        }}
      >
        <button
          style={{
            background: "#ceebdb",
            height: "67px",
            fontSize: "25px",
            color: "#67bf8f",
            fontWeight: "600",
          }}
          className=" mb-4  text-green-500 bg-opacity-50 border-2 border-green-500 font-weight-600 w-1/4   py-2 px-6 focus:outline-none   text-lg"
        >
          Save Changes
        </button>
      </div> */}
    </>
  );
};

export default MyAcount;
