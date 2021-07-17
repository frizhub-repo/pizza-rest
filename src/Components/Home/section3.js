import React from "react";
import { Card, CardContent } from "@material-ui/core";
import dish from "../../images/dish.png";
import carousel from "../../images/carousel.png";
import roundImage from "../../images/roundImage.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);
export default function Section3() {
  const classes = useStyles();
  return (
    <div className={classes.s3MainDiv}>
      <div className={classes.s3InnerDiv}>
        <Card className={classes.s3FirstCard}>
          <CardContent>
            <div>
              <img src={dish} className={classes.s3FirstCardImage} />
            </div>
          </CardContent>
          <CardContent>
            <img src={carousel} />
          </CardContent>
        </Card>

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
