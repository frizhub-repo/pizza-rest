import * as React from "react";
import classes from "./ActionBox.module.css";
import FoodPackageIcon from "Assets/images/food-package.png";
import ShopIcon from "Assets/images/shop.png";

export default function OrderPickUp() {
  const [selected, setSelected] = React.useState(0);
  const modes = [
    {
      icon: FoodPackageIcon,
      name: "Delivery At Home",
      message: "You’re missing 15€ for the FREE SHIPPING",
    },
    {
      icon: ShopIcon,
      name: "Pickup your Order",
      message: "Come to our local to get your order!",
    },
  ];
  return (
    <div className={classes.pickUpContainer}>
      {modes.map((mode, index) => (
        <div
          className={`${classes.pickUpOption} ${
            selected === index && classes.pickUp_active
          }`}
          onClick={() => setSelected(index)}
        >
          <img
            style={{ filter: selected === index ? "" : "grayscale(100%)" }}
            src={mode.icon}
            width={50}
          />
          <div>
            <p className={classes.pickUpName}>{mode.name}</p>
            <small>{mode.message}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
