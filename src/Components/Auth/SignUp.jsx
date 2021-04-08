import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { CircularProgress, Button } from "@material-ui/core";
import { customerSignUp } from "../../api/customers";
import { toast } from "react-toastify";
import { useRestaurantContext } from "../../Context/restaurantContext";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    background: "rgba(16, 185, 129,1)",
    marginTop: "20px",
    height: "40px",
    "&:hover": {
      background: "rgba(16, 185, 129,1)",
    },
    color: "#fff",
    marginBottom: "20px",
  },
  errField: {
    color: "#f44336",
    marginLeft: "14px",
    marginRight: "14px",
    fontSize: "0.75rem",
    fontWeight: "400",
  },
});

export default function SignUp({ handleClose }) {
  const classes = useStyles();
  const { setToken } = useRestaurantContext();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm();
  const signUp = async (data) => {
    try {
      setLoading(true);
      const res = await customerSignUp(data);
      window.localStorage.setItem("token", res?.data?.token);
      setToken(res?.data?.token);
      toast.success("Registeration Successfull!");
      setLoading(false);
      handleClose();
    } catch (error) {
      setLoading(false);
      console.log({ errors });
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(signUp)} className={classes.container}>
      <TextField
        id="outlined-basic"
        label="First Name"
        name="firstName"
        variant="outlined"
        inputRef={register({
          required: "First Name Required",
        })}
        error={errors.firstName ? true : false}
        helperText={errors?.firstName?.message}
        style={{ marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Last Name"
        name="lastName"
        variant="outlined"
        inputRef={register({
          required: "Last Name Required",
        })}
        error={errors.lastName ? true : false}
        helperText={errors?.lastName?.message}
        style={{ marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Phone Number"
        name="phoneNumber"
        variant="outlined"
        inputRef={register({
          required: "Phone Number Required",
        })}
        error={errors.phoneNumber ? true : false}
        helperText={errors?.phoneNumber?.message}
        style={{ marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        inputRef={register({
          required: "Email Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        error={errors.email ? true : false}
        helperText={errors?.email?.message}
        style={{ marginBottom: "20px" }}
      />

      <FormControl variant="outlined" style={{ marginBottom: "20px" }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          ref={register({
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must be 8 character",
            },
          })}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
          inputRef={register({
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must be 8 cha",
            },
          })}
          error={errors.password ? true : false}
          helperText={errors?.password?.message}
        />
        {errors.password && (
          <label className={classes.errField}>
            {errors?.password?.message}
          </label>
        )}
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="standard-adornment-password"
          type={showConfirmPassword ? "text" : "password"}
          ref={register({
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must be 8 character",
            },
          })}
          name="confirmPassword"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={130}
          inputRef={register({
            required: "Confirm Password required",
            minLength: {
              value: 8,
              message: "Password must be 8 cha",
            },
            validate: (value) =>
              value === watch("password") || "Passwords don't match.",
          })}
          error={errors.confirmPassword ? true : false}
          helperText={errors?.confirmPassword?.message}
        />
        {errors.confirmPassword && (
          <label className={classes.errField}>
            {errors?.confirmPassword?.message}
          </label>
        )}
      </FormControl>
      <Button type="submit" className={classes.btn}>
        {loading && (
          <CircularProgress
            color="inherit"
            size={20}
            style={{ marginRight: "8px" }}
          />
        )}
        Register
      </Button>
    </form>
  );
}
