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
import { getGoogleMyBusinessLocations } from "../../api/public";
import { useRestaurantContext } from "../../Context/restaurantContext";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import MyCarousel from "react-multi-carousel";
import DiscountCarousel from "Components/DiscountCarousel";
import header1 from "Assets/images/header1.jpg";

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

const useStyles = makeStyles(styles);

function Home() {
  const classes = useStyles();
  const [socialImages, setSocialImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { restaurant } = useRestaurantContext();

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

  const [openingHours, setOpeningHours] = useState([
    { openDay: "Sunday" },
    { openDay: "Monday" },
    { openDay: "Tuesday" },
    { openDay: "Wednesday" },
    { openDay: "Thursday" },
    { openDay: "Friday" },
    { openDay: "Saturday" },
  ]);
  useEffect(() => {
    const fetchGMBLocation = async () => {
      const res = await getGoogleMyBusinessLocations();
      setOpeningHours(res?.data?.regularHours?.periods);
    };
    fetchGMBLocation();
  }, []);

  return (
    <div className={classes.mainDeev}>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo={restaurant?.restaurant?.slogan ?? " The real taste is here!"}
        url={header1}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
      />
      <div className={classes.container}>
        <Card className={classes.root2}>
          <CardContent>
            <div className={classes.img}>
              <img src={clock} className={classes.clockImg} />
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

      <DiscountCarousel />

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

      {socialImages.length > 0 && (
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
            <MyCarousel
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
            </MyCarousel>
          )}
        </section>
      )}

      {/* <SectionThree /> */}

      {openingHours.length ? (
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
              {openingHours.map((item) => (
                <>
                  <div>
                    <Card className={classes.timingCardStyles}>
                      <CardContent className={classes.timingCardContect}>
                        <Typography className={classes.typoStyles4}>
                          {item?.openDay}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card className={classes.timingCardStyles}>
                      <CardContent className={classes.timingCardContect}>
                        <Typography className={classes.typoStyles4}>
                          {item?.openTime} - {item?.closeTime}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={classes.googleMapRoot}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              className={classes.googleMap}
            ></iframe>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}

export default Home;
