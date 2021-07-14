import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import food from "../../images/foodMain.png";
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
import TimeTableCard from "../Home/timeTableCard";
import styles from "./styles";

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
        <div>
          <TimingsCard id="1" open="false" styles={classes.root2}>
            <div className={classes.img}>
              <img src={clock} />
            </div>
          </TimingsCard>
        </div>
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
            <TimingsCard id="3" open="true" styles={classes.root5} />
          </div>
        </div>
      </div>

      <Section2 />
      <TimingsCard
        open="true"
        styles={classes.root3}
        textStyles={classes.textStyles}
      />
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
      <div className="bg-white   flex justify-content-center"></div>
      <div className="flex  bg-menu-3">
        <div className="w-1/2 bg-black-food">
          <About />
        </div>
      </div>

      <OpeningHours />

      <section className="text-gray-700 body-font bg-white  text-center mb-2	z-index-0  py-24 w-full mb-0">
        {loading ? (
          <Box display="flex" flexWrap="wrap">
            {[...Array(5).keys()].map((i) => (
              <Box width="20%" pr="20px">
                <Skeleton variant="rect" height={200} />
              </Box>
            ))}
          </Box>
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {socialImages?.map((image) => {
              return (
                <img
                  draggable={false}
                  style={{ width: "100%", height: "100%", marginLeft: "4px" }}
                  src={image}
                />
              );
            })}
          </Carousel>
        )}
      </section>
      <div className={classes.container2}>
        <div>
          <TimeTableCard
            day="SUNDAY"
            startTime="none"
            endTime="none"
            open="true"
            styles={classes.closedStyles}
          />
        </div>

        <div>
          <TimeTableCard
            day="MONDAY"
            startTime="2:00am"
            endTime="5:00pm"
            styles={classes.root6}
          />
        </div>
        <div>
          <TimeTableCard
            day="TUESDAY"
            startTime="2:00am"
            endTime="5:00pm"
            styles={classes.root6}
          />
        </div>
        <div>
          <TimeTableCard
            day="WEDNESDAY"
            startTime="2:00am"
            endTime="5:00pm"
            styles={classes.root6}
          />
        </div>
        <div>
          <TimeTableCard
            day="THURSDAY"
            startTime="2:00am"
            endTime="5:00pm"
            styles={classes.root6}
          />
        </div>
        <div>
          <TimeTableCard
            day="FRIDAY"
            startTime="2:00am"
            endTime="5:00pm"
            styles={classes.root6}
          />
        </div>
        <div>
          <TimeTableCard
            day="SATURDAY"
            startTime="2:00am"
            endTime="5:00pm"
            styles={classes.root6}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
