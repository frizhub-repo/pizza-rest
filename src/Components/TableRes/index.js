import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useDispatch, useSelector } from "react-redux";

import dayjs from "dayjs";
import "react-datepicker/dist/react-datepicker.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hero from "../Home/Hero";
import MenuCard from "../Home/MenuCard";
import TimingsCard from "../Home/timingsCard";
import Menu from "../../images/menu.png";
import clock from "../../images/clock.png";
import Typography from "@material-ui/core/Typography";
import Logo from "../../images/logo.png";
import { useStyles } from "./TableResStyles";
import like from "../../images/like.png";
import chat from "../../images/chat.png";
import ImageAvatars from "../Avatar/Avatar";
import user from "../../images/user.png";
import foodimage from "../../images/foodimage.jpg";
import reservationBook from "../../images/reservationBook.png";
import likeIcon from "../../images/likeIcon.png";
import FourFiveIcon from "../../images/FourFiveIcon.png";
import comment from "../../images/comment.png";
import FourTwoSeven from "../../images/427.png";
import CardMedia from "@material-ui/core/CardMedia";
import map from "../../images/map.jpg";
import euro from "../../images/euro.png";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from "react-router-dom";
import Header from "Components/Home/Header";
import foodType1 from "Assets/images/foodType1.png";
import food2 from "Assets/images/food2.png";
import food3 from "Assets/images/food3.png";
import food4 from "Assets/images/food4.png";
import { getSpecialMenus } from "../../api/public";
import SpecialMenuCard from "./SpecialMenuCard";
import DiscountCarousel from "Components/DiscountCarousel";
import InfoCard from "./InfoCard";

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
  const [number, setNumber] = useState(3);
  const [services, setServices] = useState("lunch");
  const [time, setTime] = useState("19:30:00");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState(0);
  const [specialMenu, setSpecialMenus] = useState([]);

  const handleChangeActiceIndex = (index) => setActiveIndex(index);

  const handleShow = () => setShow(true);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClosee = () => {
    setOpen(false);
  };

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

  const dispatch = useDispatch();

  const url =
    "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80";
  return (
    <div>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo="Table Reservations"
        url={url}
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
              textStyles={classes.textStyles}
              onClickHandler={() => handleChangeActiceIndex(0)}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="PROMOTIONS"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStyleForRadius3}`}
              textStyles={classes.textStyles}
              onClickHandler={() => handleChangeActiceIndex(1)}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="INFO"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius}`}
              textStyles={classes.textStyles}
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
                <DiscountCarousel isTableResPage={true} />
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
                    <img src={FourFiveIcon} className={classes.fourFiveIcon} />
                  </div>
                </Card>
                <Card className={classes.resSmallCards}>
                  <div className={classes.likeIconDiv}>
                    <img src={comment} className={classes.likeIcon} />
                    <img src={FourTwoSeven} className={classes.numberIcon} />
                  </div>
                </Card>
                <Card className={classes.resSmallCards}>
                  {" "}
                  <img src={euro} className={classes.euroIcon} />
                </Card>
              </div>
              <div className={`${classes.container4} ${classes.extra}`}>
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
                      styles={classes.root6}
                    />
                  </div>
                </div>
              </div>

              <div className={classes.textStyle}>
                <h3>Uncle Sammy</h3>
                <p className={classes.pStyles}>
                  Piazza Mentana 2,50122 Firenze Fi
                </p>
              </div>
              <CardMedia className={classes.media4} image={map} />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.textDivStyles}>
        <div className={classes.avatarStyles}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {restaurant?.restaurant?.name ?? "Uncle Sammy"}
          </Typography>
          <img className={classes.img2} src={Logo} />
          <Typography
            variant="h5"
            component="h2"
            className={`${classes.title} ${classes.title2}`}
          >
            {restaurant?.restaurant?.slogan ?? "The real taste is here!"}
          </Typography>
        </div>

        <div className={classes.h1Styles}>
          <h1>THIS RESTAURANT GAINED A REPUTATION OF</h1>
          <div className={classes.imgDivContainer}>
            <img src={like} className={classes.imgStyles} />
            <p className={classes.getStars}>4</p>
            <p className={classes.getStarsSlash}>|</p>5
          </div>

          <div className={classes.imgDivContainer}>
            WITH
            <img src={chat} className={classes.imgStyles} />
            781 REVIEWS
          </div>
          <div className={classes.cardContainer}>
            <Card className={classes.root7}>
              <CardContent className={classes.cardContentStyles}>
                <div className={classes.avatarDivStyles}>
                  <ImageAvatars img={user} />
                  <div className={classes.forflex}>
                    <div
                      className={`${classes.h1Styles} ${classes.divNewStyles}`}
                    >
                      <h1>VOTED</h1>
                    </div>
                    <div className={`${classes.imgDivContainer} `}>
                      <img src={like} className={classes.imgStyles} />
                      <p className={classes.getStars}>4</p>
                      <p className={classes.getStarsSlash}>|</p>5
                    </div>
                  </div>
                </div>

                <div className={classes.lineStyles}></div>

                <p>
                  ‘’E’ il mio ristorante preferito a Pisa. Andateci e non ve ne
                  pentirete!!! I piatti sono buonissimi ed in più il personale è
                  gentile. Super consigliato, noi appena possiamo (data la
                  pandemia) ci torniamo con piacere’’
                </p>
              </CardContent>
            </Card>
            <br />
            <Card className={classes.root7}>
              <CardContent className={classes.cardContentStyles}>
                <div className={classes.avatarDivStyles}>
                  <ImageAvatars img={user} />
                  <div className={classes.forflex}>
                    <div
                      className={`${classes.h1Styles} ${classes.divNewStyles}`}
                    >
                      <h1>VOTED</h1>
                    </div>
                    <div className={`${classes.imgDivContainer} `}>
                      <img src={like} className={classes.imgStyles} />
                      <p className={classes.getStars}>4</p>
                      <p className={classes.getStarsSlash}>|</p>5
                    </div>
                  </div>
                </div>

                <div className={classes.lineStyles}></div>

                <p>
                  ‘’E’ il mio ristorante preferito a Pisa. Andateci e non ve ne
                  pentirete!!! I piatti sono buonissimi ed in più il personale è
                  gentile. Super consigliato, noi appena possiamo (data la
                  pandemia) ci torniamo con piacere’’
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default TableRes;
