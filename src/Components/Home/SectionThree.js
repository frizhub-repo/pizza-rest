import React from "react";
import { Card, CardContent } from "@material-ui/core";
import dish from "../../images/dish.png";
import carousel from "../../images/carousel.png";
import roundImage from "../../images/roundImage.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";
import CardMedia from "@material-ui/core/CardMedia";
import foodimage from "../../images/foodimage.jpg";

const useStyles = makeStyles(styles);
export default function SectionThree() {
  const classes = useStyles();
  return (
    <div className={classes.s3MainDiv}>
      <div className={classes.flexRowStyle}>
        <div className={classes.s3InnerDiv}>
          <CardMedia className={classes.media5} image={foodimage} />
          <Card className={classes.s3FirstCard}>
            <CardContent></CardContent>
          </Card>
        </div>

        <div className={classes.carouselDiv}>
          <Card className={classes.carouselLeftCard}>
            <ArrowBackIosIcon />
            <ArrowBackIosIcon />
          </Card>

          <Card className={classes.carouselRightCard}>
            <ArrowForwardIosIcon />
            <ArrowForwardIosIcon />
          </Card>
          <Card className={classes.carouselInnerCard}>
            <CardContent>
              <div className={classes.carouselCardImageDiv}>
                <img src={roundImage} className={classes.carouselCardImage} />
              </div>
              <div className={classes.whiteBar}></div>
              <div>
                <p className={classes.text}>
                  ''E’ il mio ristorante preferito a Pisa. Andateci e non ve ne
                  pentirete!!! I piatti sono buonissimi ed in più il personale è
                  gentile. Super consigliato, noi appena possiamo (data la
                  pandemia) ci torniamo con piacere'’
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
