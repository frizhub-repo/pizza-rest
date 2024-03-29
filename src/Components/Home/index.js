import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Section2 from "./Section2";
import { getSocialImages } from "../../api/cms";
import Footer from "../Footer";
import { makeStyles } from "@material-ui/core/styles";
import clock from "../../images/clock.png";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SectionThree from "./SectionThree";
import { useRestaurantContext } from "../../Context/restaurantContext";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import MyCarousel from "react-multi-carousel";
import DiscountCarousel from "Components/DiscountCarousel";
import header1 from "Assets/images/header1.jpg";
import { isEmpty } from "utils/common";
import GoogleMap from "Components/CustomComponents/GoogleMap";
import { getDeliveryDiscounts } from "api/customers";
import Reviews from "Components/CustomComponents/Reviews";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCard from "Components/itemCard";
import { customerMenu } from "api/public";
import MenuCard from "./MenuCard";
import { useLocation } from "react-router";

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

const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

function Home() {
  const classes = useStyles();
  const location = useLocation();
  const [socialImages, setSocialImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { restaurant: { restaurant, placeData } = {} } = useRestaurantContext();

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
    if (location.state?.showOpengHr) {
      document
        .getElementById("opening_hour")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    fetchSocialImages();
  }, []);

  const [openingHours, setOpeningHours] = useState([
    { id: 1, openDay: "Monday" },
    { id: 2, openDay: "Tuesday" },
    { id: 3, openDay: "Wednesday" },
    { id: 4, openDay: "Thursday" },
    { id: 5, openDay: "Friday" },
    { id: 6, openDay: "Saturday" },
    { id: 0, openDay: "Sunday" },
  ]);

  useEffect(() => {
    formatOpeningHours();
  }, [placeData]);

  const splitTime = (time) => time.slice(0, 2) + ":" + time.slice(2);

  function formatOpeningHours() {
    if (!isEmpty(placeData)) {
      const {
        opening_hours: { periods },
      } = placeData;
      for (const { open, close } of periods) {
        setOpeningHours((prevOpeningHours) =>
          prevOpeningHours.map((openingHour) =>
            openingHour?.id === open?.day
              ? {
                  ...openingHour,
                  openTime: splitTime(open?.time),
                  closeTime: splitTime(close?.time),
                }
              : openingHour
          )
        );
      }
    }
  }

  const [discounts, setDiscounts] = React.useState([]);
  const [discountLoading, setDiscountLoading] = React.useState(false);
  const fetchDiscounts = async () => {
    try {
      setDiscountLoading(true);
      const res = await getDeliveryDiscounts();
      setDiscounts(res?.data);
      setDiscountLoading(false);
    } catch (error) {
      setDiscountLoading(false);

      console.log({ error });
    }
  };

  React.useEffect(() => {
    fetchDiscounts();
  }, []);

  const [menus, setMenus] = React.useState([]);
  const [selectedMenu, setSelectedMenu] = React.useState({});

  const getCount = (items) => {
    let count = 0;
    items.forEach((item) => {
      count = count + item?.products?.length;
    });
    return count;
  };
  const [menuLoading, setMenusLoading] = React.useState(false);
  const fetchProductsByCategory = async () => {
    try {
      setMenusLoading(true);
      const res = await customerMenu();
      setMenus(res.data);
      if (res?.data?.length) {
        setSelectedMenu(res?.data?.[0]);
      }
      setMenusLoading(false);
    } catch (error) {
      setMenusLoading(false);
      console.log({ error });
    }
  };
  useEffect(() => {
    fetchProductsByCategory();
  }, []);

  return (
    <div className={classes.mainDeev}>
      <Navbar />
      <Hero
        textOne={restaurant?.name ?? "Uncle Sammy"}
        textTwo={restaurant?.slogan ?? " The real taste is here!"}
        url={header1}
        restaurantLogo={restaurant?.logoUrl}
        showRestaurantStatus={true}
      />

      <Section2 restaurant={restaurant} placeData={placeData} />

      <DiscountCarousel
        discounts={discounts}
        discountLoading={discountLoading}
      />

      {menuLoading ? (
        <div className={classes.skeletonRoot}>
          <Skeleton
            variant="rect"
            style={{ borderRadius: "30px" }}
            height={300}
          />
        </div>
      ) : (
        menus?.length > 0 && (
          <>
            <div className={classes.carouselRot}>
              <Carousel
                style={{ overflow: "" }}
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive1}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {menus?.map((menu) => (
                  <ItemCard
                    key={menu?._id}
                    title={menu?.title}
                    image={menu?.imageUrl}
                    count={getCount(menu?.items)}
                    showCount={true}
                    height="300px"
                    boxShadow="0 4px 4px rgb(0 0 0 / 20%)"
                    onClickHandler={() => setSelectedMenu(menu)}
                    isSelectedMenu={menu?._id === selectedMenu?._id}
                  />
                ))}
              </Carousel>
            </div>

            <div className={classes.menuContainer}>
              <div className={classes.menuSpacing}>
                <MenuCard selectedMenu={selectedMenu} />
              </div>
            </div>
          </>
        )
      )}

      <div className={classes.someThingRoot}>
        <div className={classes.aboutUsText}>
          <h3 className={classes.headingStyle}>SOMETHING ABOUT US</h3>
          <p className={classes.paraStyles}>
            Meals are generally served annd eaten on the premises, but many
            restaurants also offer take-out and food delivery services.
            Restaurants vary greatly in appearance and offerings, including with
            a wide variety of cuisines and service models ranging from
            inexpensive fast food restaurants and cafeterias, to mid-priced
            family restaurants, to high-priced luxury establishments.
          </p>
        </div>

        <Reviews placeData={placeData} />
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
        <div className={classes.flexDisplay} id="opening_hour">
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
                    <Card
                      className={`${classes.timingCardStyles} ${
                        !(item?.openTime || item?.closeTime) &&
                        classes.closeRestaurant
                      }`}
                    >
                      <CardContent className={classes.timingCardContect}>
                        <Typography className={classes.typoStyles4}>
                          {item?.openDay}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <Card
                      className={`${classes.timingCardStyles} ${
                        !(item?.openTime || item?.closeTime) &&
                        classes.closeRestaurant
                      }`}
                    >
                      <CardContent className={classes.timingCardContect}>
                        <Typography className={classes.typoStyles4}>
                          {item?.openTime || item?.closeTime
                            ? item?.openTime + " - " + item?.closeTime
                            : "Closed"}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className={classes.googleMapRoot}>
            <GoogleMap classname={classes.googleMap} />
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}

export default Home;
