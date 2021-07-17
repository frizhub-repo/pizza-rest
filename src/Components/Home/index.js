import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import Carousel from "react-multi-carousel";
import { getSocialImages } from "../../api/cms";

import Footer from "../Footer";
import OpeningHours from "./openingHours";
import About from "./About";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import TimingsCard from "../Home/timingsCard";
import { makeStyles } from "@material-ui/core/styles";
import clock from "../../images/clock.png";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SectionThree from "./SectionThree";

const useStyles = makeStyles(styles);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

function Home() {
  const classes = useStyles();
  const [socialImages, setSocialImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSocialImages = async () => {
    try {
      setLoading(true);
      const res = await getSocialImages();
      setSocialImages(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchSocialImages();
  }, []);
  const url =
    "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80";
  return (
    <div>
      <Navbar />
      <Hero
        textOne="Uncle Sammy"
        textTwo=" The real taste is here!"
        url={url}
      />
      <div className={classes.container}>
        <Card className={classes.root2}>
          <CardContent>
            <div className={classes.img}>
              <img src={clock} />
            </div>
          </CardContent>
        </Card>

        <div>
          <div>
            <TimingsCard
              id="2"
              startTime="9:00am"
              endTime="2:00pm"
              open="true"
              styles={classes.root4}
            />
          </div>
          <div>
            <TimingsCard
              id="3"
              open="true"
              textForOpen="Click for Opening Hours"
              styles={classes.root5}
            />
          </div>
        </div>
      </div>
      <Section2 />
      <div className={classes.divFlexStyles2}>
        <Card className={classes.roundedCardStyles}>
          <CardContent></CardContent>
        </Card>
        <Card className={classes.root3}>
          <CardContent className={classes.divFlexStyles}>
            <Typography className={classes.typoStyles4}>
              OPENING HOURS
            </Typography>
            <Typography className={classes.typoStyles4}>
              OPENING HOURS
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.roundedCardStyles}>
          <CardContent></CardContent>
        </Card>
      </div>

      <div className={classes.aboutUsText}>
        <h3 className={classes.headingStyle}>SOMETHING ABOUT US</h3>
        <p className={classes.paraStyles}>
          Meals are generally served annd eaten on the premises, but many
          restaurants also offer take-out and food delivery services.
          Restaurants vary greatly in appearance and offerings, including with a
          wide variety of cuisines and service models ranging from inexpensive
          fast food restaurants and cafeterias, to mid-priced family
          restaurants, to high-priced luxury establishments.
        </p>
      </div>
      <SectionThree />

      <div className={classes.mainDiv}>
        <Card className={`${classes.timingCardStyles2} `}>
          <CardContent className={classes.timingCardContect2}>
            <div className={classes.img2}>
              <img src={clock} />
            </div>
            <Typography className={classes.typoStyles4}>
              OPENING HOURS
            </Typography>
          </CardContent>
        </Card>
        <div className={classes.container2}>
          <div>
            <Card
              className={`${classes.timingCardStyles} ${classes.addStyles}`}
            >
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card
              className={`${classes.timingCardStyles} ${classes.addStyles}`}
            >
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.timingCardStyles}>
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card
              className={`${classes.timingCardStyles} ${classes.addStyles2}`}
            >
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card
              className={`${classes.timingCardStyles} ${classes.addStyles3}`}
            >
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
