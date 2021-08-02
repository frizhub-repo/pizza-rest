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
import ChangePasswordDialog from "./ChangePasswordDialog";
import { updateCustomerInfo } from "../../api/customers";
import { Skeleton } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const useStyles = makeStyles({
  formContainer: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "0 0 30px 30px",
  },
  headingBox: {
    padding: "10px 0",
    backgroundColor: "#F59E0B",
    fontSize: "30px",
    fontWeight: "500",
    color: "#fff",
    borderRadius: "30px 30px 0 0",
  },
  contentBox: {
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
    borderRadius: "0 0 30px 30px",
  },
  textField: {
    width: "100%",
    marginBottom: "10px",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#10B981",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#10B981",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "rgba(0, 0, 0, 0.38)",
      },
    },
  },
  label: {
    color: "#10B981",
  },
  changePasswordBtn: {
    color: "#F59E0B",
  },
  saveChangesBtn: {
    background: "#F59E0B",
    fontSize: "24px",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "30px",
    padding: "15px 30px !important",
  },
});

const MyAcount = ({ user, refetchCustomerHandler }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const res = await updateCustomerInfo(data);
      refetchCustomerHandler();
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
      <div>
        <Box className={classes.headingBox}>My Acount</Box>
        {Object.entries(user).length === 0 ? (
          <Skeleton
            variant="rect"
            height={500}
            width={"100%"}
            className={classes.skeletongSpacing}
          />
        ) : (
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit(updateProfile)}>
              <Box className={classes.contentBox}>
                <label className={classes.label}>First Name</label>
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

                <label className={classes.label}>Last Name</label>
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

                <label className={classes.label}>Email</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  className={classes.textField}
                  value={user?.email}
                  disabled={true}
                />

                <label className={classes.label}>Phone Number</label>
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
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      setOpen((open) => !open);
                    }}
                    className={classes.changePasswordBtn}
                  >
                    Change Password
                  </button>
                  <button
                    type="submit"
                    className={`text-green-500 bg-opacity-50 border-2 border-green-500 font-weight-600 py-2 px-6 focus:outline-none text-lg ${classes.saveChangesBtn}`}
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
          </div>
        )}
      </div>
      {open && <ChangePasswordDialog open={open} setOpen={setOpen} />}
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
