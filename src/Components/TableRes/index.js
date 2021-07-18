import React, { useState } from "react";
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

function TableRes() {
  const classes = useStyles();

  const { token } = useRestaurantContext();
  const [number, setNumber] = useState(3);
  const [services, setServices] = useState("lunch");
  const [time, setTime] = useState("19:30:00");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleShow = () => setShow(true);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClosee = () => {
    setOpen(false);
  };

  var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
  dayjs.extend(isSameOrBefore);

  const dispatch = useDispatch();

  const url =
    "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80";
  return (
    <div>
      <Navbar />
      <Hero textOne="Uncle Sammy" textTwo="Table Reservations" url={url} />
      <div className={classes.tableReserve2}>
        <div>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="Reserve one of our Table"
            styles={`${classes.root5} ${classes.extraStyle7}`}
            textStyles={classes.textStyles}
          />
        </div>
        <Card className={`${classes.root5} ${classes.extraStyle8}`}>
          <CardContent>
            <CardMedia className={classes.media} image={foodimage} />

            <div className={classes.carosalStyles}>
              <Card className={classes.carouselLeftCard}></Card>
              <Card className={classes.carouselRightCard}></Card>
              <div className={classes.innerCarosalStyles}>
                <CardMedia className={classes.media2} image={foodimage} />
                <CardMedia className={classes.media2} image={foodimage} />
                <CardMedia className={classes.media2} image={foodimage} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className={classes.divClass}>
        <div className={classes.courseCardDiv}>
          <div className={classes.headerStyles}>
            <TimingsCard
              id="3"
              open="true"
              textForOpen="DAILY MENU"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius2}`}
              textStyles={classes.textStyles}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="PROMOTIONS"
              styles={`${classes.root5} ${classes.extraStyle4}`}
              textStyles={classes.textStyles}
            />
            <TimingsCard
              id="3"
              open="true"
              textForOpen="INFO"
              styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius}`}
              textStyles={classes.textStyles}
            />
          </div>
          <Card className={`${classes.root5} ${classes.extraStyle3}`}>
            <CardContent>
              <div className={classes.coursesStyles}>
                <div className={classes.container}>
                  <MenuCard text="FIRST COURSE" />
                </div>
                <div className={classes.container}>
                  <MenuCard text="SECOND COURSE" />
                </div>
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
                      styles={classes.root5}
                      textStyles={classes.textStyles}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
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
            Uncle Sammy
          </Typography>
          <img className={classes.img2} src={Logo} />
          <Typography
            variant="h5"
            component="h2"
            className={`${classes.title} ${classes.title2}`}
          >
            The real taste is here!
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
