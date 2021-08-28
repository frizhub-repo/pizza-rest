import * as React from "react";
import classes from "./ReserveTable.module.css";
import "antd/dist/antd.css";
import { Steps } from "antd";
import {
  CalendarOutlined,
  FieldTimeOutlined,
  UserOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

const steps = [
  {
    title: "First",
  },
  {
    title: "Second",
  },
  {
    title: "Last",
  },
];

export const ReserveTable = () => {
  const [current, setCurrent] = React.useState(0);
  const onChange = (current) => {
    console.log("onChange:", current);
    setCurrent(current);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div>
      <div className={classes.bookingWidget}>
        <Steps>
          <Step
            className={classes.stepColor}
            status="finish"
            title="Date"
            icon={<CalendarOutlined className={classes.stepIcon} />}
          />
          <Step
            className={classes.stepColor}
            status="finish"
            title="Time"
            icon={<FieldTimeOutlined className={classes.stepIcon} />}
          />
          <Step
            className={classes.stepColor}
            status="process"
            title="Guests"
            icon={<UserOutlined className={classes.stepIcon} />}
          />
          <Step
            className={classes.stepColor}
            status="wait"
            title="Offer"
            icon={<StrikethroughOutlined className={classes.stepIcon} />}
          />
        </Steps>
      </div>
    </div>
  );
};
