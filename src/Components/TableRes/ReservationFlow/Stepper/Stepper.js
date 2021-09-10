import * as React from "react";
import UserIcon from "Assets/images/user.png";
import WhiteCalendarIcon from "Assets/images/calendar-white.png";
import GreenCalendarIcon from "Assets/images/calendar-green.png";
import WhiteClockIcon from "Assets/images/clock-white.png";
import GreenClockIcon from "Assets/images/clock-green.png";
import WhitePercentageIcon from "Assets/images/percentage-white.png";
import GreenPercentageIcon from "Assets/images/percentage-green.png";
import classes from "./Stepper.module.css";

function Arrow() {
  return (
    <div className={classes.arrow_container}>
      <span className={classes.arrow_text}>&gt;</span>
    </div>
  );
}

export default function Stepper({ active, setActive }) {
  return (
    <div className="d-flex shadow-md">
      <div
        className={`${classes.step} ${classes.active}`}
        onClick={() => setActive(0)}
      >
        <img src={UserIcon} width={35} height={35} />
        <Arrow />
      </div>
      <div
        className={`${classes.step} ${active >= 1 && classes.active}`}
        onClick={() => active > 1 && setActive(1)}
      >
        <img
          src={active >= 1 ? WhiteCalendarIcon : GreenCalendarIcon}
          width={35}
          height={35}
        />
        <Arrow />
      </div>
      <div
        className={`${classes.step} ${active >= 2 && classes.active}`}
        onClick={() => active > 2 && setActive(2)}
      >
        <img
          src={active >= 2 ? WhiteClockIcon : GreenClockIcon}
          width={35}
          height={35}
        />
        <Arrow />
      </div>
      <div className={`${classes.step} ${active === 3 && classes.active}`}>
        <img
          src={active === 3 ? WhitePercentageIcon : GreenPercentageIcon}
          width={35}
          height={35}
        />
      </div>
    </div>
  );
}
