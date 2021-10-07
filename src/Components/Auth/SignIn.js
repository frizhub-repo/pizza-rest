import { IconButton } from "rsuite";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import classes from "./Auth.module.css";
import FieldError from "./FieldError";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SocialAuth from "./SocialAuth";
import { customerSignIn } from "api/customers";
import { useRestaurantContext } from "Context/restaurantContext";
import axiosIntance from "axios-configured";
import { toast } from "react-toastify";
import Navbar from "Components/Navbar";
import { CircularProgress } from "@material-ui/core";
import { EMAIL_REGEX } from "utils/types";

export default function SignIn({ handleClose, setActiveStep, isOrder }) {
  const { register, handleSubmit, errors } = useForm();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { setToken, refetchCustomerHandler } = useRestaurantContext();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function signInWithPayload(data) {
    try {
      setLoading(true);
      const res = await customerSignIn(data);
      if (res?.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] =
          res?.data?.token;
      }
      localStorage.setItem("token", res?.data?.token);
      setToken(res?.data?.token);
      refetchCustomerHandler();
      setLoading(false);
      history.push("/");
    } catch (e) {
      setLoading(false);
      console.log(e);
      toast.error("Sign In not successful");
    }
  }

  return (
    <>
      <Navbar />

      <div className={classes.root}>
        <div>
          <h1 className={classes.header}>Sign In</h1>
        </div>
        <div className={classes.inputContainer}>
          <form onSubmit={handleSubmit(signInWithPayload)}>
            <input
              name="email"
              className={classes.authInput}
              type="text"
              placeholder="Email"
              ref={register({
                required: "Email is required",
                pattern: EMAIL_REGEX,
              })}
            />
            {errors.email?.type === "pattern" && (
              <FieldError message={"Email is not valid"} />
            )}
            {errors?.email?.message && (
              <FieldError message={errors?.email?.message} />
            )}
            <div className={classes.passwordContainer}>
              <input
                name="password"
                className={classes.authInput}
                type={isPassVisible ? "text" : "password"}
                placeholder="Password"
                ref={register({ required: "Password is required" })}
              />
              <IconButton
                className={classes.iconContainer}
                onClick={() => setIsPassVisible((prev) => !prev)}
              >
                {isPassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </div>
            {errors?.password?.message && (
              <FieldError message={errors?.password?.message} />
            )}
            <div className={classes.forgotPassContainer}>
              <button
                type="button"
                className={classes.forgotPass}
                onClick={() => history.push("forgotPassword")}
              >
                Forgot your password?
              </button>
            </div>
            <button type="submit" className={classes.submitBtn}>
              {loading && (
                <CircularProgress
                  color="inherit"
                  size={20}
                  style={{ marginRight: "8px" }}
                />
              )}
              Login
            </button>
          </form>
          <div className={classes.secondaryText}>
            <h4>or</h4>
          </div>
          <section>
            <SocialAuth />
          </section>
        </div>
        <div>
          <h5>You didn't Sign Up?</h5>
          <button
            className={classes.redirectBtn}
            onClick={() => history.push("signUp")}
          >
            Register Here
          </button>
        </div>
      </div>
    </>
  );
}
