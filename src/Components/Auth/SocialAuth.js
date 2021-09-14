import * as React from "react";
import classes from "./Auth.module.css";
import facebook from "Assets/images/facebook-auth.png"
import google from "Assets/images/google-symbol.png"
import mobile from "Assets/images/mobile-app.png"

export default function SocialAuth() {
  return (
    <div className={classes.socialAuthBtnsContainer}>
      <button className={classes.socialAuthBtn}>
        <img
          src={facebook}
          width={25}
          style={{ marginRight: "10px" }}
        />
        Login with Facebook
      </button>
      <button className={classes.socialAuthBtn}>
        <img
          src={google}
          width={25}
          style={{ marginRight: "10px" }}
        />
        Login with Google
      </button>
      <button className={classes.socialAuthBtn}>
        <img
          src={mobile}
          width={25}
          style={{ marginRight: "10px" }}
        />
        Login with your Food Discovery App
      </button>
    </div>
  );
}
