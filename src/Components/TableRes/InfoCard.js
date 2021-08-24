import React from "react";
import { useStyles } from "./TableResStyles";

export default function InfoCard() {
  const classes = useStyles();
  return (
    <div className={classes.infoCardContainer}>
      {infoList.map(({ title, description }) => (
        <div className={classes.infoCardRoot}>
          <span className={classes.infoTitle}>{title}:</span>
          <span className={classes.infoDescription}>{description}</span>
        </div>
      ))}
    </div>
  );
}

const infoList = [
  { title: "Chef", description: "Misha Sukays" },
  {
    title: "How to get to the restaurant",
    description:
      "Viale S. Michele del Carso, 7, 20144, Milan, Italy, Restaurant Address",
  },
  { title: "Directions", description: "Lombardy, Metropolitan City of Milan" },
  {
    title: "Features",
    description:
      "Faishonable, Return to the Restaurant, Return to the Restaurant -50%",
  },
];
