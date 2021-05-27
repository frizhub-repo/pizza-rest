import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Card,
  CircularProgress,
  Input,
  InputAdornment,
} from "@material-ui/core";
import AddressCard from "../CustomComponents/AddressCard";
import { updateCustomerInfo } from "../../api/customers";
import { Skeleton } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
    padding: "20px",
    display: "flex",
    alignItems: "flex-start",
    fontSize: "19px",
    fontWeight: "500",
    color: "#9eaef5",
    flexDirection: "column",
    minHeight: "540px",
  },
  btnBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  progressbarSpacing: {
    marginRight: "8px",
  },
  skeletongSpacing: {
    marginBottom: "20px",
  },
  textField: {
    width: "100%",
    marginBottom: "10px",
  },
});

const MyAcount = ({ user, refetchCustomerHandler }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const updateProfile = async (data) => {
    setLoading(true);
    try {
      console.log({ data });
      const res = await updateCustomerInfo(data);
      refetchCustomerHandler();
      console.log(res?.data);
      toast.success("Profile has been updated");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
      console.log({ errors });
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      <Card>
        <Box className={classes.headingBox}>My Acount</Box>
        {Object.entries(user).length === 0 ? (
          <Skeleton
            variant="rect"
            height={500}
            width={"100%"}
            className={classes.skeletongSpacing}
          />
        ) : (
          <form onSubmit={handleSubmit(updateProfile)}>
            <Box className={classes.contentBox}>
              <label>First Name</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.textField}
                name="firstName"
                inputRef={register({
                  required: "Firstname Required",
                })}
                defaultValue={user?.firstName}
                error={errors?.firstName ? true : false}
                helperText={errors?.firstName?.message}
              />

              <label>Last Name</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.textField}
                defaultValue={user?.lastName}
                inputRef={register({
                  required: "Lastname Required",
                })}
                name="lastName"
                error={errors?.lastName ? true : false}
                helperText={errors?.lastName?.message}
              />

              <label>Email</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.textField}
                value={user?.email}
                disabled={true}
              />

              <label>Phone Number</label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className={classes.textField}
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
              <Box className={classes.btnBox}>
                <button>Change Password</button>
                <button
                  style={{
                    background: "#ceebdb",
                    height: "67px",
                    fontSize: "25px",
                    color: "#67bf8f",
                    fontWeight: "600",
                  }}
                  type="submit"
                  className="text-green-500 bg-opacity-50 border-2 border-green-500 font-weight-600 py-2 px-6 focus:outline-none   text-lg"
                >
                  {loading && (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      className={classes.progressbarSpacing}
                    />
                  )}
                  Save Changes
                </button>
              </Box>
            </Box>
          </form>
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
