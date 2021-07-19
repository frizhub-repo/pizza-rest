import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import vegan from "../../../images/vegan.png";
import gluten from "../../../images/gluten.png";
import hot from "../../../images/hot.png";
import { useStyles } from "../../TableRes/TableResStyles";
const Index = ({ title, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.additionInfoImgContainer}>
      <Card className={classes.mCardStyles}>
        <CardContent>
          <CardMedia
            image={title === "VEGAN" ? vegan : title === "SPICY" ? hot : gluten}
            className={classes.mImgStyles}
          />
        </CardContent>
      </Card>
      <span
        className={
          title === "VEGAN" || title === "SPICY"
            ? classes.textFont2
            : classes.textFont
        }
      >
        {title}
      </span>
    </div>
  );
};

export default Index;
