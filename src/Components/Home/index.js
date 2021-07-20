import React, { useEffect, useState, CSSProperties } from "react";
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
import Divider from "@material-ui/core/Divider";
import SectionThree from "./SectionThree";
import CardMedia from "@material-ui/core/CardMedia";
import map from "../../images/map.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { getGoogleMyBusinessLocations } from "../../api/public";
import { getDeliveryDiscounts } from "../../api/customers";
import { useRestaurantContext } from "../../Context/restaurantContext";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import MyCarousel from "react-multi-carousel";

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

  const [openingHours, setOpeningHours] = useState([]);
  useEffect(() => {
    const fetchGMBLocation = async () => {
      const res = await getGoogleMyBusinessLocations();
      setOpeningHours(res?.data?.regularHours?.periods);
    };
    fetchGMBLocation();
  }, []);

  const [discounts, setDiscounts] = React.useState([]);

  const fetchDiscounts = async () => {
    try {
      setLoading(true);
      const res = await getDeliveryDiscounts();
      setDiscounts(res?.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  const url =
    "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80";
  return (
    <div>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo={restaurant?.restaurant?.slogan ?? " The real taste is here!"}
        url={url}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
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
      <Carousel
        swipeable={true}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={classes.forwardArrow}
          >
            <ArrowBackIosIcon />
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={classes.backwordArrow}
          >
            <ArrowForwardIosIcon />
          </button>
        )}
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
        {discounts?.map((discount) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                maxWidth: "560px",
                width: "100%",
                justifyContent: "center",
                minHeight: "400px",
                border: "1px solid #000",
                borderRadius: "30px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(https://techwhize.com/${discount?.imageUrl})`,
                  width: "40%",
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "60%",
                  background: "#F59E0B",
                  color: "#fff",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                  padding: "20px",
                }}
              >
                <Typography variant="h4">{discount?.title}</Typography>
                <Typography variant="h4">{discount?.description}</Typography>

                {discount?.items?.length ? (
                  <>
                    <Divider />
                    {discount?.items?.map((item) => (
                      <Typography variant="h5">{item}</Typography>
                    ))}
                  </>
                ) : null}
                {discount?.discountPrice ? (
                  <>
                    <Divider />
                    <Typography variant="h4">
                      €{discount?.discountPrice}
                    </Typography>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ))}
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
              {/* <div>
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
            </div> */}
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
          <CardMedia
            className={classes.media3}
            image={map}
            style={{ marginBottom: "30px" }}
          />
        </div>
      ) : null}

      <Footer />
    </div>
  );
}

export default Home;
