import * as React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import FieldError from "Components/Auth/FieldError";
import { forgotPassword } from "api/customers";
import { CircularProgress } from "@material-ui/core";
import classes from "./Auth.module.css";

const styles = {
  cancelBtn: {
    border: "1px solid #10b981",
    fontSize: "18px",
    color: "#10b981",
    padding: "8px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  searchBtn: {
    background: "#10b981",
    color: "white",
    fontSize: "18px",
    padding: "8px",
    borderRadius: "5px",
  },
};

export default function ForgotPassword() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const [isWaiting, setIsWaiting] = React.useState(null);

  async function sendRequest(data) {
    try {
      setIsWaiting(true);
      const res = await forgotPassword(data);
      if (res?.status === 200)
        history.push(`resetPassword/${res?.data?.userId}`);
      setIsWaiting(false);
    } catch (e) {
      console.log(e);
      setIsWaiting(false);
    }
  }

  return (
    <div className={classes.root}>
      <div className={`${classes.emailContainer} shadow-lg`}>
        <div style={{ textAlign: "start", marginBottom: "5px" }}>
          <h3 style={{ fontSize: "24px" }}>Find Your Account</h3>
          <hr className={classes.divider} />
          <h5>Please enter your email to find your account</h5>
        </div>
        <form onSubmit={handleSubmit(sendRequest)}>
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({ required: "Email is required" })}
          />
          {errors?.email?.message && (
            <FieldError message={errors?.email?.message} />
          )}
          <hr className={classes.divider} />
          <div className="d-flex justify-content-end">
            <button style={styles.cancelBtn} onClick={() => history.goBack()}>
              Cancel
            </button>
            <button style={styles.searchBtn} type="submit" disabled={isWaiting}>
              Search
              {isWaiting && (
                <CircularProgress
                  color="inherit"
                  size={20}
                  style={{ marginLeft: "8px" }}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
