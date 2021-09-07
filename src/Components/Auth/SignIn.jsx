import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { customerSignIn } from "../../api/customers";
import { toast } from "react-toastify";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress, Button, Checkbox, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
  },
  errField: {
    color: "#f44336",
    marginLeft: "14px",
    marginRight: "14px",
    fontSize: "0.75rem",
    fontWeight: "400",
  },
});

export default function SignIn({ handleClose, setActiveStep, isOrder }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const { setToken } = useRestaurantContext();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const signIn = async (data) => {
    try {
      setLoading(true);
      const res = await customerSignIn(data);
      window.localStorage.setItem("token", res?.data?.token);
      setToken(res?.data?.token);
      handleClose();
      setLoading(false);
      isOrder && history.push("/deliveryAddress");
    } catch (error) {
      setLoading(false);
      toast.error("Invalid email or password");
      console.log({ errors });
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(signIn)} className={classes.container}>
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
          inputRef={register({
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
              message: "Password must be 8 character",
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
      <Box display="flex" mb="20px" alignItems="center">
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <label style={{ marginTop: "5px" }}>Keep me signed in</label>
      </Box>
      <Button type="submit" className={classes.btn}>
        {loading && (
          <CircularProgress
            color="inherit"
            size={20}
            style={{ marginRight: "8px" }}
          />
        )}
        Login
      </Button>
      <Box display="flex" justifyContent="space-between" mt="6px">
        <label style={{ cursor: "pointer" }}>Forgot Password?</label>
        <label style={{ cursor: "pointer" }} onClick={() => setActiveStep(1)}>
          Not a Member? SignUp
        </label>
      </Box>
    </form>
  );
}
