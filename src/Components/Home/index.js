import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import { getSocialImages } from "../../api/cms";
import Footer from "../Footer";
import TimingsCard from "../Home/timingsCard";
import { makeStyles } from "@material-ui/core/styles";
import clock from "../../images/clock.png";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SectionThree from "./SectionThree";
import CardMedia from "@material-ui/core/CardMedia";
import map from "../../images/map.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(styles);

function Home() {
  const classes = useStyles();
  const [socialImages, setSocialImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const items = [];
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
      <Carousel>
        <div>
          <Card className={classes.root3}>
            <CardContent className={classes.divFlexStyles}>
              <Typography className={classes.typoStyles4}>
                dsads HOURS
              </Typography>
              <Typography className={classes.typoStyles4}>
                OPENING dADSA
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className={classes.root3}>
            <CardContent className={classes.divFlexStyles}>
              <Typography className={classes.typoStyles4}>
                dsads HOURS
              </Typography>
              <Typography className={classes.typoStyles4}>
                OPENING dADSA
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className={classes.root3}>
            <CardContent className={classes.divFlexStyles}>
              <Typography className={classes.typoStyles4}>
                dsads HOURS
              </Typography>
              <Typography className={classes.typoStyles4}>
                OPENING dADSA
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Carousel>

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

      <div className={classes.flexDisplay}>
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

            <Card
              className={`${classes.timingCardStyles} ${classes.addStyles3}`}
            >
              <CardContent className={classes.timingCardContect}>
                <Typography className={classes.typoStyles4}>NAME</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <CardMedia className={classes.media3} image={map} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
