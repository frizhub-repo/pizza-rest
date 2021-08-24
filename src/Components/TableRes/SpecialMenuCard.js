import React from "react";
import OfferCard from "../ProductCard";
import { useStyles } from "./TableResStyles";

export default function SpecialMenuCard({ products, title }) {
  const classes = useStyles();
  return (
    <div className={classes.specialMenuRoot}>
      <div className={classes.specialMenuTitleRoot}>
        <span className={classes.specialMenuTitle}>{title}</span>
      </div>
      <div>
        {products?.map((product) => (
          <OfferCard product={product} />
        ))}
      </div>
    </div>
  );
}
