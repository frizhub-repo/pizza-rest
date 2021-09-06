import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useRestaurantContext } from "../../Context/restaurantContext";
import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hero from "../Home/Hero";
import TimingsCard from "../Home/timingsCard";
import Menu from "../../images/menu.png";
import clock from "../../images/clock.png";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./TableResStyles";
import foodimage from "../../images/foodimage.jpg";
import reservationBook from "../../images/reservationBook.png";
import likeIcon from "../../images/likeIcon.png";
import comment from "../../images/comment.png";
import CardMedia from "@material-ui/core/CardMedia";
import euro from "../../images/euro.png";
import leftArrow from "Assets/images/leftArrow.png";
import passiveEuro from "Assets/images/passive-euro.png";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";
import Header from "Components/Home/Header";
import foodType1 from "Assets/images/foodType1.png";
import food2 from "Assets/images/food2.png";
import food3 from "Assets/images/food3.png";
import food4 from "Assets/images/food4.png";
import { getReservationOffers, getSpecialMenus } from "../../api/public";
import SpecialMenuCard from "./SpecialMenuCard";
import DiscountCarousel from "Components/DiscountCarousel";
import InfoCard from "./InfoCard";
import reservationHeaderImg from "Assets/images/reservationHeaderImg.png";
import RestaurantReviews from "./RestaurantReviews";
import GoogleMap from "Components/CustomComponents/GoogleMap";
import RestaurantStatus from "Components/CustomComponents/RestaurantStatus";

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
function TableRes() {
  const classes = useStyles();
  const history = useHistory();
  const { restaurant } = useRestaurantContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState(0);
  const [specialMenu, setSpecialMenus] = useState([]);

  const handleChangeActiceIndex = (index) => setActiveIndex(index);

  useEffect(() => {
    async function getSpecialMenuHandler() {
      try {
        const res = await getSpecialMenus();
        setSpecialMenus(res?.data);
      } catch (error) {
        console.log(error);
      }
    }
    getSpecialMenuHandler();
  }, []);

  var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);

  const [discounts, setDiscounts] = React.useState([]);
  const fetchDiscounts = async () => {
    try {
      const res = await getReservationOffers();
      setDiscounts(res?.data);
    } catch (error) {
      console.log({ error });
    }
  };

  React.useEffect(() => {
    fetchDiscounts();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo="Table Reservations"
        url={reservationHeaderImg}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
      />
      <div className={classes.tableReserve2}>
        <div className={classes.headerContainer}>
          <Header backgroundColor="#F59E0B" text="Reserve one of our Table" />
        </div>
        <div className={classes.reserveTableRoot}>
          <img src={foodType1} alt="foodtype1" />
          <div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
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
            >
              <CardMedia className={classes.media2} image={food2} />
              <CardMedia className={classes.media2} image={food3} />
              <CardMedia className={classes.media2} image={food4} />
              <CardMedia className={classes.media2} image={foodimage} />
              <CardMedia className={classes.media2} image={foodimage} />
              <CardMedia className={classes.media2} image={foodimage} />
            </Carousel>
          </div>
        </div>
      </div>
      <div className={`${classes.divClass} ${classes.cardContentPosition}`}>
        <div className={classes.courseCardDiv}>
          <div className={classes.headerStyles}>
            <TimingsCard
              id="3"
              open="true"
              textForOpen="DAILY MENU"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius2}`}
              textStyles={`${classes.textStyles} ${
                activeIndex === 0 && classes.activeTab
              } ${classes.hoverOnTab}`}
              onClickHandler={() => handleChangeActiceIndex(0)}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="PROMOTIONS"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStyleForRadius3}`}
              textStyles={`${classes.textStyles} ${
                activeIndex === 1 && classes.activeTab
              } ${classes.hoverOnTab}`}
              onClickHandler={() => handleChangeActiceIndex(1)}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="INFO"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius}`}
              textStyles={`${classes.textStyles} ${
                activeIndex === 2 && classes.activeTab
              } ${classes.hoverOnTab}`}
              onClickHandler={() => handleChangeActiceIndex(2)}
            />
          </div>
          <Card
            className={`${classes.root5} ${classes.extraStyle3} ${classes.rStyles} ${classes.cardHeight}`}
          >
            {activeIndex === 0 ? (
              <CardContent>
                <div className={`${classes.dealsRoot} ${classes.menuMargin}`}>
                  <div className="custom-scroll" style={{ maxHeight: "300px" }}>
                    {specialMenu.length ? (
                      specialMenu?.map((menu, index) => (
                        <p
                          key={menu?._id}
                          className={`${classes.dealsList} ${
                            activeMenu === index && classes.activeMenu
                          }`}
                          onClick={() => setActiveMenu(index)}
                        >
                          {menu?.title}
                        </p>
                      ))
                    ) : (
                      <div className={classes.notFoundMenus}>
                        These sections don't have any menus!
                      </div>
                    )}
                  </div>
                </div>
                <div className={classes.coursesStyles}>
                  {specialMenu[activeMenu]?.items?.length ? (
                    <div
                      className={`${classes.customScrollHeight} custom-scroll-product`}
                    >
                      {specialMenu[activeMenu]?.items?.map(
                        ({ products, category }) => (
                          <SpecialMenuCard
                            products={products}
                            title={category?.name}
                          />
                        )
                      )}
                    </div>
                  ) : (
                    <div className={classes.notFoundMenus}>
                      These section don't have any product!
                    </div>
                  )}
                  <div className={classes.containerTwo}>
                    <div className={classes.iconClass}>
                      <img
                        className="object-contain mt-2  w-full h-12 "
                        src={Menu}
                      />
                    </div>
                    <div>
                      <TimingsCard
                        id="3"
                        open="true"
                        textForOpen="CHECK ALSO OUR MENU"
                        styles={`${classes.root5} ${classes.screenStyles}`}
                        textStyles={classes.textStyles}
                        onClickHandler={() => history.push("/menu/1")}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            ) : activeIndex === 1 ? (
              <div className={classes.discountCarouseContainer}>
                <DiscountCarousel isTableResPage={true} discounts={discounts} />
                <div
                  className={`${classes.containerTwo} ${classes.discountCheckSpacing}`}
                >
                  <div className={classes.iconClass}>
                    <img
                      className="object-contain mt-2  w-full h-12 "
                      src={Menu}
                    />
                  </div>
                  <div>
                    <TimingsCard
                      id="3"
                      open="true"
                      textForOpen="CHECK ALSO OUR MENU"
                      styles={`${classes.root5} ${classes.screenStyles}`}
                      textStyles={classes.textStyles}
                      onClickHandler={() => history.push("/menu/1")}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <InfoCard />
            )}
          </Card>
        </div>

        <div className={classes.tableReserve}>
          <div>
            <Card className={`${classes.root5} ${classes.extraStyle}`}>
              <CardContent>
                <div className={classes.bookImgStyles}>
                  <img src={reservationBook} className={classes.bookStyles} />
                </div>
                <Typography className={classes.typoStyles}>
                  RESERVE A TABLE
                </Typography>
              </CardContent>
            </Card>
          </div>
          <Card className={`${classes.root5} ${classes.extraStyle2}`}>
            <CardContent>
              <div className={classes.iconsDiv}>
                <Card className={classes.resSmallCards}>
                  <div className={classes.likeIconDiv}>
                    <img src={likeIcon} className={classes.likeIcon} />
                    <div className={classes.resRating}>
                      {restaurant?.placeData?.rating}|5
                    </div>
                  </div>
                </Card>
                <Card className={classes.resSmallCards}>
                  <div className={classes.likeIconDiv}>
                    <img src={comment} className={classes.likeIcon} />
                    <div className={classes.resRating}>
                      {restaurant?.placeData?.user_ratings_total}
                    </div>
                  </div>
                </Card>
                <Card className={classes.euroIconRoot}>
                  {" "}
                  <img src={leftArrow} className={classes.euroIcon} />
                  <img src={passiveEuro} className={classes.euroIcon} />
                </Card>
              </div>
              <div className="d-flex justify-center">
                <RestaurantStatus isReservationPage={true} />
              </div>

              <div className={classes.textStyle}>
                <h3>{restaurant?.restaurant?.name ?? "Uncle Sammy"}</h3>
                <p className={classes.pStyles}>
                  {restaurant?.placeData?.formatted_address ||
                    restaurant?.restaurant?.address}
                </p>
              </div>
              <GoogleMap classname={classes.googleMapRadius} />
            </CardContent>
          </Card>

          <RestaurantReviews restaurant={restaurant} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default TableRes;
