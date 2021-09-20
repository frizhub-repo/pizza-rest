import { CircularProgress } from "@material-ui/core";
import { verifyResetPassCode } from "api/customers";
import * as React from "react";
import OtpInput from "react-otp-input";
import { useHistory, useParams } from "react-router";
import classes from "./Auth.module.css";

const styles = {
  inputStyle: {
    border: "1px solid #10B981",
    padding: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    width: "100%",
    margin: "10px",
    color: "black",
  },
  containerStyle: {
    justifyContent: "space-between",
  },
  cancelBtn: {
    border: "1px solid #10B981",
    fontSize: "18px",
    color: "#10B981",
    padding: "8px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  searchBtn: {
    background: "#10B981",
    color: "white",
    fontSize: "18px",
    padding: "8px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function ResetPassword() {
  const history = useHistory();
  const [code, setCode] = React.useState("");
  const [isWaiting, setIsWaiting] = React.useState(null);

  const { id } = useParams();

  async function handleSubmit() {
    try {
      setIsWaiting(true);
      const data = { code: parseInt(code) };
      const res = await verifyResetPassCode({ id, data });
      if (res?.status === 200)
        history.push(`/newPassword/${id}/${code}`, { from: "resetPassword" });
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
          <h3 style={{ fontSize: "24px" }}>Enter the code</h3>
          <hr className={classes.divider} />
          <h5>Check your email, and enter the code sent to you</h5>
        </div>
        <OtpInput
          value={code}
          onChange={setCode}
          isInputNum={true}
          numInputs={4}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
        />
        <hr className={classes.divider} />
        <div className="d-flex justify-content-end">
          <button style={styles.cancelBtn} onClick={() => history.push("/")}>
            Cancel
          </button>
          <button
            style={styles.searchBtn}
            onClick={handleSubmit}
            disabled={code.length < 4}
          >
            Confirm
            {isWaiting && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginLeft: "8px" }}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
