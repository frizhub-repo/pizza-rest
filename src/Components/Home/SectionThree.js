import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import roundImage from "../../images/roundImage.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";
import CardMedia from "@material-ui/core/CardMedia";
import foodimage from "../../images/foodimage.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const useStyles = makeStyles(styles);
export default function SectionThree() {
  const classes = useStyles();
  return (
    <div className={classes.s3MainDiv}>
      <div className={classes.flexRowStyle}>
        <div className={classes.s3InnerDiv}>
          <Carousel
            className={classes.flexCoursel}
            width="40%"
            showStatus={false}
            swipeable={true}
            showArrows={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    className={classes.indiExtra}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  className={classes.indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            <div>
              <CardMedia className={classes.media5} image={foodimage} />
            </div>
            <div>
              <CardMedia className={classes.media5} image={foodimage} />
            </div>
            <div>
              <CardMedia className={classes.media5} image={foodimage} />
            </div>
          </Carousel>

          <Card className={classes.s3FirstCard}>
            <CardContent></CardContent>
          </Card>
        </div>

        <div className={classes.carouselDiv}>
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
