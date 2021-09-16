import { IconButton } from "rsuite";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import SocialAuth from "./SocialAuth";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import FieldError from "./FieldError";
import classes from "./Auth.module.css";
import axiosIntance from "axios-configured";
import { useRestaurantContext } from "Context/restaurantContext";
import { toast } from "react-toastify";
import { customerSignUp } from "api/customers";

export default function SignUp({ handleClose, isOrder }) {
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isRePassVisible, setIsRePassVisible] = useState(false);
  const { setToken, refetchCustomerHandler } = useRestaurantContext();

  async function signUpWithPayload(data) {
    try {
      const res = await customerSignUp(data);
      if (res.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] =
          res?.data?.token;
      }
      localStorage.setItem("token", res?.data?.token);
      setToken(res?.data?.token);
      refetchCustomerHandler();
      toast.success("Your account has been created successfully");
      history.push("/");
    } catch (e) {
      console.log(e);
      toast.error("Sign Up not successful");
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Sign Up</h1>
      </div>
      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit(signUpWithPayload)}>
          <input
            name="firstName"
            className={classes.authInput}
            type="text"
            placeholder="First Name"
            ref={register({ required: "First Name is required" })}
          />
          {errors?.firstName?.message && (
            <FieldError message={errors?.firstName?.message} />
          )}
          <input
            name="lastName"
            className={classes.authInput}
            type="text"
            placeholder="Last Name"
            ref={register({ required: "Last Name is required" })}
          />
          {errors?.lastName?.message && (
            <FieldError message={errors?.lastName?.message} />
          )}
          <input
            name="phoneNumber"
            className={classes.authInput}
            type="text"
            placeholder="Phone Number"
            ref={register({ required: "Phone number is required" })}
          />
          {errors?.phoneNumber?.message && (
            <FieldError message={errors?.phone?.message} />
          )}
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({
              required: "Email is required",
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <FieldError message={"Email is not valid."} />
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
              ref={register({ required: "Password is required", minLength: 8 })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.password?.type === "minLength" && (
            <FieldError message={"Password must be 8 characters long"} />
          )}
          {errors?.password?.message && (
            <FieldError message={errors?.password?.message} />
          )}
          <div className={classes.passwordContainer}>
            <input
              name="rePassword"
              className={classes.authInput}
              type={isRePassVisible ? "text" : "password"}
              placeholder="Confirm Password"
              ref={register({
                required: "Please re-type your password",
                validate: (value) =>
                  value === watch("password") || "Password does not match",
              })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsRePassVisible((prev) => !prev)}
            >
              {isRePassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.rePassword?.message && (
            <FieldError message={errors?.rePassword?.message} />
          )}
          <div style={{ marginBottom: "20px" }}></div>
          <button type="submit" className={classes.submitBtn}>
            Sign Up
          </button>
        </form>
        <div className={classes.secondaryText}>
          <h4>or</h4>
        </div>
        <section>
          <SocialAuth />
        </section>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h5>If you're already Signed Up</h5>
        <button
          className={classes.redirectBtn}
          onClick={() => history.push("signIn")}
        >
          Click Here
        </button>
      </div>
    </div>
  );
}
