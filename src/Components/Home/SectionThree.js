import React from "react";
import { Card, CardContent } from "@material-ui/core";
import Carousel from "react-multi-carousel";
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
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={true}
          >
            <div>
              <CardMedia className={classes.media5} image={foodimage} />
            </div>
          </Carousel>
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
