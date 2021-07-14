import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { reserveTable } from "../../api/reservations";
import { Spinner } from "react-bootstrap";
import EventButton from "./EventButton";
import dayjs from "dayjs";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { RESERVE_TABLE } from "../../utils/types";
import "react-datepicker/dist/react-datepicker.css";
import SuccessModal from "./SuccessModal";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import AuthModal from "../Auth/AuthModal";
import Hero from "../Home/Hero";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  banner: {
    border: "1px solid #8080804f",
    padding: "20px",
    borderRadius: "10px",
    opacity: "0.8",
  },
  bannerHeading: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  menuHeading: {
    fontWeight: "700",
    marginRight: "5px",
    fontSize: "17px",
  },
  menuContent: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    fontWeight: "700",
    fontSize: "17px",
    textAlign: "start",
    margin: "20px 0px ",
  },
  menuPara: {
    fontWeight: "600",
    color: "grey",
    fontSize: "17px",
  },
  cardContent: {
    border: "1px solid text-lg",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  },
  mobile1: {
    padding: "6rem 13rem 6rem 13rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      flexDirection: "column",
    },
  },
  mobile2: {
    width: "66.66%",
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

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

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

function TableRes() {
  const classes = useStyles();

  const { token } = useRestaurantContext();
  const [number, setNumber] = useState(3);
  const [services, setServices] = useState("lunch");
  const [time, setTime] = useState("19:30:00");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [showDate, setShowDate] = useState(false);
  const [startDate, setStartDate] = useState(Date.now());
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const handleCloseAuthModal = () => setAuthModalVisible(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { handleSubmit } = useForm();

  const [activeStep, setActivestep] = useState(0);

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

  const tableReserve = async () => {
    try {
      if (!dayjs(dayjs().format("YYYY-MM-DD")).isSameOrBefore(dayjs(date))) {
        toast.error("Please provide correct date");
      } else {
        setLoading(true);
        const res = await reserveTable({
          startTime: date + " " + time,
          numberOfPeople: number,
          services: services,
        });
        dispatch({ type: RESERVE_TABLE, payload: res.data });
        setLoading(false);
        handleClosee();
        handleShow();
      }
    } catch (error) {
      toast.error("   vation is not available at the moment!");
      setLoading(false);
      console.log({ error });
    }
  };

  const openTableReservModal = () => {
    token ? handleOpen() : setAuthModalVisible(true);
  };

  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  );

  console.log({ date });
  console.log(
    "is before",
    dayjs(dayjs().format("YYYY-MM-DD")).isSameOrBefore(dayjs(date))
  );
  const url =
    "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80";
  return (
    <div>
      <Navbar />
      <Hero textOne="Uncle Sammy" textTwo="Table Reservations" url={url} />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClosee}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Card style={{ overflow: "auto", maxHeight: "90vh" }}>
          <Container
            style={{
              padding: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <strong style={{ fontSize: "26px", fontWeight: "600" }}>
              Table Reservation
            </strong>
            <form
              onSubmit={handleSubmit(tableReserve)}
              style={{ width: "100%", marginTop: "20px" }}
            >
              <div
                className="  text-left flew-wrap w-full "
                style={{ marginBottom: "20px" }}
              >
                <label
                  htmlFor="grid-state"
                  className="text-sm text-left text-gray-500 font-weight-bolder"
                >
                  Number of people
                </label>

                <div
                  className="text-left mr-2 flex flex-wrap "
                  style={{ justifyContent: "space-between", width: "500px" }}
                >
                  {[...Array(5).keys()].map((i) => (
                    <button
                      className={`text-gray-500 font-weight-light text-xs mr-1  py-3 w-1/6  border border-gray-500 rounded-pill `}
                      onClick={(e) => {
                        e.preventDefault();
                        setNumber(i);
                      }}
                      style={{
                        backgroundColor: number === i && "rgba(16, 185, 129,1)",
                        color: number === i ? "#fff" : "#000",
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="  text-left flew-wrap w-full "
                style={{ marginBottom: "20px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <label
                    htmlFor="grid-state"
                    className="text-sm text-left text-gray-500 font-weight-bolder"
                  >
                    Date
                  </label>
                  <div>
                    <label
                      htmlFor="grid-state"
                      className="text-sm text-left text-gray-500 font-weight-bolder"
                      style={{ marginRight: "10px" }}
                    >
                      Other Date
                    </label>
                    {/* <input
                                    type="datetime-local"
                                    defaultValue={Date.now()}
                                    onChange={(e) => setTime(e.target.value)}
                                /> */}
                    {showDate ? (
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          setDate(dayjs(date).format("YYYY-MM-DD"));
                          setStartDate(date);
                        }}
                      />
                    ) : (
                      <CalendarTodayIcon onClick={() => setShowDate(true)} />
                    )}
                  </div>
                </div>

                <div className="text-left mr-2 flex flex-wrap justify-content-between ">
                  <EventButton
                    data={date}
                    setData={setDate}
                    localState={dayjs().format("YYYY-MM-DD")}
                    text="Today"
                    style={{ width: "160px" }}
                  />
                  <EventButton
                    data={date}
                    setData={setDate}
                    localState={dayjs().add(1, "day").format("YYYY-MM-DD")}
                    text="Tomorrow"
                    style={{ width: "160px" }}
                  />
                  <EventButton
                    data={date}
                    setData={setDate}
                    localState={dayjs().add(2, "day").format("YYYY-MM-DD")}
                    text={dayjs().add(2, "day").format("MMMM D, YYYY")}
                    style={{ width: "160px" }}
                  />
                </div>
              </div>
              <div
                className="  text-left flew-wrap w-full "
                style={{ marginBottom: "20px" }}
              >
                <label
                  htmlFor="grid-state"
                  className="text-sm text-left text-gray-500 font-weight-bolder"
                >
                  Services
                </label>

                <div className="text-left mr-2 flex flex-wrap justify-content-between ">
                  <EventButton
                    data={services}
                    setData={setServices}
                    localState="breakfast"
                    text="Breakfast"
                    style={{ width: "160px" }}
                  />
                  <EventButton
                    data={services}
                    setData={setServices}
                    localState="lunch"
                    text="Lunch"
                    style={{ width: "160px" }}
                  />

                  <EventButton
                    data={services}
                    setData={setServices}
                    localState="dinner"
                    text="Dinner"
                    style={{ width: "160px" }}
                  />
                </div>
              </div>

              <div className="  text-left flew-wrap w-full ">
                <label
                  htmlFor="grid-state"
                  className="text-sm text-left text-gray-500 font-weight-bolder"
                >
                  Schedule
                </label>

                <div className="text-left mr-2 flex flex-wrap justify-content-between ">
                  <EventButton
                    data={time}
                    setData={setTime}
                    localState="19:30:00"
                    text="19:30"
                    style={{ width: "85px" }}
                  />
                  <EventButton
                    data={time}
                    setData={setTime}
                    localState="08:00:00"
                    text="08:00"
                    style={{ width: "85px" }}
                  />
                  <EventButton
                    data={time}
                    setData={setTime}
                    localState="08:30:00"
                    text="08:30"
                    style={{ width: "85px" }}
                  />
                  <EventButton
                    data={time}
                    setData={setTime}
                    localState="09:00:00"
                    text="09:00"
                    style={{ width: "85px" }}
                  />
                  <EventButton
                    data={time}
                    setData={setTime}
                    localState="09:30:00"
                    text="09:30"
                    style={{ width: "85px" }}
                  />
                </div>
              </div>

              <label
                style={{
                  fontWeight: "400",
                  marginTop: "20px",
                  opacity: "0.8",
                  fontSize: "20px",
                  color: "rgb(16, 185, 129)",
                }}
              >
                Offer - 2 promotions available at the moment
              </label>

              <Box className={classes.banner} style={{ marginTop: "10px" }}>
                <label className={classes.bannerHeading}>
                  50% at the checkout - Return to the restaurant
                </label>
                <p>
                  Discount applicable for the slected booking time. Discount
                </p>
                <p>
                  applicable without restrictions. Eat whatever you want and
                </p>
                <p>enjoy your meal. Valud for the selected booking time and</p>
                <p>subject to availability of seats</p>
              </Box>

              <Box className={classes.banner} style={{ marginTop: "50px" }}>
                <label className={classes.bannerHeading}>Spend the yums</label>
                <p>
                  cannot be combined with other promotions. The exclusive
                  loyalty
                </p>
                <p>discount applies to the total bill</p>
              </Box>

              <Box className={classes.banner} style={{ marginTop: "50px" }}>
                <label className={classes.bannerHeading}>
                  Book without special promotion
                </label>

                <p>standard booking without promotion</p>
              </Box>

              <div className="mt-4 px-2 w-full">
                {token && (
                  <button
                    className=" b   g-white px-12 py-3 text-black text-center text-sm mb-12"
                    style={{
                      backgroundColor: "#F5873A",
                      color: "#fff",
                      width: "100%",
                      borderRadius: "6px",
                      marginTop: "20px",
                    }}
                    type="submit"
                  >
                    {loading && (
                      <Spinner
                        animation="border"
                        size="sm"
                        style={{ marginRight: "10px" }}
                      />
                    )}
                    Book Now
                  </button>
                )}
              </div>
            </form>
          </Container>
        </Card>
        {/* </Fade> */}
      </Modal>

      <SuccessModal
        show={show}
        handleClose={handleClose}
        date={date}
        time={time}
        peopleCount={number}
      />

      <div className={classes.mobile1}>
        <div className={classes.mobile2}>
          <div className="text-gray-900   w-full mb-2 	 px-0 py-0 border border-gray-300 shadow-sm">
            <div
              style={{
                background: "#f59342",
                padding: "10px",
                display: "flex",
              }}
            >
              <label
                style={{
                  color: "white",
                  marginLeft: "21px",
                  fontWeight: "500",
                }}
              >
                Table Reservation
              </label>
            </div>

            <div className=" ml-0  w-full  py-0 px-0 md:flex-row p-4  ">
              <div className=" px-0 w-full  ml-0   md:mb-0">
                <img
                  className="object-cover px-0 object-center ml-0 max-h-80 w-full "
                  alt="hero"
                  src={image}
                />
              </div>
              <div className="w-full mt-4 border border-gray-300 shadow-sm">
                <Carousel
                  ssr
                  partialVisbile
                  itemClass="image-item"
                  responsive={responsive}
                >
                  {images.slice(0, 5).map((image) => {
                    return (
                      <Image
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={image}
                        onClick={() => setImage(image)}
                      />
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="w-full my-4 border border-gray-300 shadow-sm">
            <div className="w-full py-2 px-4 bg-green-500 flex justify-content-around">
              <p
                className="text-white mx-2  text-center text-md cursor-pointer"
                onClick={() => setActivestep(0)}
              >
                Menu
              </p>
              <p
                className="text-white mx-2  text-center text-md cursor-pointer"
                onClick={() => setActivestep(1)}
              >
                Promotions
              </p>
              <p
                className="text-white mx-2   text-center text-md cursor-pointer"
                onClick={() => setActivestep(2)}
              >
                User photos
              </p>
              <p
                className="text-white mx-2  text-center text-md cursor-pointer"
                onClick={() => setActivestep(3)}
              >
                Info
              </p>
            </div>
            {activeStep === 0 && (
              <div className="p-4">
                <Box style={{ display: "flex", justifyContent: "flex-start" }}>
                  <p className={classes.menuHeading}>Chef:</p>
                  <p className={classes.menuPara}>Misha Sukays</p>
                </Box>
                <Box style={{ display: "flex", justifyContent: "flex-start" }}>
                  <p className={classes.menuHeading}>Average price:</p>
                  <p className={classes.menuPara}>38 ‎€ Special Request</p>
                </Box>
                <Box className={classes.menuContent}>
                  <label>
                    Pyramids stuffed with potatoes, sheep's milk ricotta and
                    mint,
                  </label>
                  <label>artichoke and scapece aubergine sauce</label>
                </Box>
                <Box className={classes.menuContent}>
                  <label>
                    Tagliolini with yellow Piennolo tomato, grilled lemon cream
                    and
                  </label>
                  <label>flakes of valsabbia</label>
                </Box>
                <Box className={classes.menuContent}>
                  <label>
                    Candies filled with carbonara, pancetta, toasted almonds and
                  </label>
                  <label>asparagus sauce</label>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "start",
                  }}
                >
                  <p className={classes.menuHeading}>
                    First + Second + Dessert ‎€ 15.00
                  </p>
                  <p className={classes.menuPara}>
                    The fix menu includes: entree + main course + dessert
                  </p>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "start",
                    margin: "20px 0px",
                  }}
                >
                  <p className={classes.menuHeading}>Food options</p>
                  <p className={classes.menuPara}>
                    Vegan dishes, Vegetarian dishes
                  </p>
                </Box>

                <div className="mr-0  w-full min-w-2/3  ">
                  <div className=" text-center w-full mt-0 border-b border-dashed border-gray-300">
                    <button
                      style={{
                        background: "#ceebdb",
                        height: "67px",
                        fontSize: "25px",
                        color: "#67bf8f",
                        fontWeight: "600",
                      }}
                      className=" mb-4  text-green-500 bg-opacity-50 border-2 border-green-500 font-weight-600 w-1/2   py-2 px-6 focus:outline-none   text-lg"
                    >
                      See Set Menu and A La Carte
                    </button>
                  </div>

                  <div className="w-furters Cafell mt-8 ">
                    <label
                      style={{
                        color: "#67bf8f",
                        display: "flex",
                        fontSize: "24px",
                        marginBottom: "35px",
                        fontWeight: "600",
                      }}
                    >
                      Offers From Starters Cafe
                    </label>

                    <Carousel
                      additionalTransfrom={0}
                      arrows={true}
                      autoPlaySpeed={3000}
                      centerMode={false}
                      className=""
                      containerClass="carousel-container"
                      dotListClass=""
                      draggable
                      focusOnSelect={false}
                      infinite
                      itemClass="carousel-item-padding-30-px"
                      keyBoardControl
                      minimumTouchDrag={80}
                      renderButtonGroupOutside={true}
                      renderDotsOutside={false}
                      responsive={{
                        desktop: {
                          breakpoint: {
                            max: 3000,
                            min: 1024,
                          },
                          items: 2,
                          partialVisibilityGutter: 40,
                        },
                        mobile: {
                          breakpoint: {
                            max: 464,
                            min: 0,
                          },
                          items: 1,
                          partialVisibilityGutter: 30,
                        },
                        tablet: {
                          breakpoint: {
                            max: 1024,
                            min: 464,
                          },
                          items: 1,
                          partialVisibilityGutter: 30,
                        },
                      }}
                      showDots={false}
                      sliderClass=""
                      slidesToSlide={1}
                      swipeable
                      partialVisbile
                    >
                      <Card className={classes.cardContent}>
                        <label>Menu First + Second + Dessert</label>
                        <label>‎€ 15.00</label>

                        <label>The fixed menu includes: entree</label>
                        <label>+ main course + dessert</label>
                        <label
                          style={{
                            color: "#e8a166",
                            fontWeight: "500",
                            marginBottom: "20px",
                          }}
                        >
                          See the details of the menu
                        </label>
                        <button
                          style={{
                            background: "#eddaca",
                            height: "67px",
                            fontSize: "21px",
                            color: "#e8a166",
                            fontWeight: "600",
                            border: "1px solid #e8a166",
                          }}
                          className=" mb-4 bg-opacity-50 font-weight-600 w-3/4  focus:outline-none   text-lg"
                        >
                          Book with This Promotion
                        </button>
                      </Card>
                      <Card className={classes.cardContent}>
                        <label>Menu First + Second + Dessert</label>
                        <label>‎€ 15.00</label>

                        <label>The fixed menu includes: entree</label>
                        <label>+ main course + dessert</label>
                        <label
                          style={{
                            color: "#e8a166",
                            fontWeight: "500",
                            marginBottom: "20px",
                          }}
                        >
                          see the details of the menu
                        </label>
                        <button
                          style={{
                            background: "#eddaca",
                            height: "67px",
                            fontSize: "21px",
                            color: "#e8a166",
                            fontWeight: "600",
                            border: "1px solid #e8a166",
                          }}
                          className=" mb-4 bg-opacity-50  font-weight-600 w-3/4  focus:outline-none   text-lg"
                        >
                          Book with This Promotion
                        </button>
                      </Card>

                      {/* <Card style={{ border: "1px solid black" }}>
                      <label>ssdsdd</label>
                    </Card> */}
                    </Carousel>
                  </div>
                </div>
              </div>
            )}
          </div>

          {activeStep === 1 && (
            <Card>
              <label>dummy data 1</label>
            </Card>
          )}
          {activeStep === 2 && (
            <Card>
              <label>dummy data 2</label>
            </Card>
          )}

          {activeStep === 3 && (
            <Card>
              <label>dummy data 3</label>
            </Card>
          )}

          <section id="info" className="text-gray-700 body-font w-full">
            <div className="container  py-4 mx-auto w-full">
              <div className="flex flex-col text-left w-full mb-4">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">
                  Other information
                </h1>
                <div className=" w-full p-3 ">
                  <div className="mb-3">
                    <h6 className=" font-weight-bold text-lg">Opening Time</h6>
                    <p className={classes.menuPara}>
                      Lunch: Monday to Sunday from 12.00 to 15.00
                    </p>
                    <p className={classes.menuPara}>
                      Dinner: Monday to Sunday from 7.00pm to midnight
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className=" font-weight-bold text-lg">
                      How to get to the restaurant
                    </h6>
                    <p className={classes.menuPara}>
                      Viale S. Michele del Carso, 7, 20144, Milan, Italy,
                      Restaurant Address
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className=" font-weight-bold text-lg">Directions</h6>
                    <p className={classes.menuPara}>
                      Lombardy, Metropolitan City of Milan
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className=" font-weight-bold text-lg">Features</h6>
                    <p className={classes.menuPara}>
                      Faishonable, Return to The Restaurant, Return to the
                      Restaurant -50%
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-gray-900 font-weight-bold text-lg">
                      Services
                    </h6>
                    <p className={classes.menuPara}>
                      ATM, MasterCard, TheFork PAY, Visa
                    </p>
                    <p className={classes.menuPara}>
                      Disabled Access, Pets Allowed, Dinner With Show, Karaoke,
                      Ballroom, Wifi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          style={{ maxHeight: "24rem" }}
          className=" leading-relaxed   w-2/3  ml-4 shadow-xl lg:min-h-80 max-h-80 border border-gray-300	px-8 py-4 flex flex-col md:items-start md:text-left  "
        >
          <div className=" d-flex justify-content-around w-100 px-0 ml-0  ">
            <h2
              className=" sm:text-3xl text-green-500  text-2xl mb-2 flex-grow -1 mr-2"
              style={{ fontWeight: "500", fontSize: "24px" }}
            >
              Arcane
            </h2>
            <h2
              className="sm:text-3xl  text-3xl mb-2"
              style={{ color: "grey", fontSize: "23px", fontWeight: "600" }}
            >
              8.3 / 10
            </h2>
          </div>
          <div className=" d-flex justify-content-around w-full  py-1">
            <p
              className="w-50 text-xs flex-grow-1 leading-relaxed"
              style={{ fontSize: "16px", color: "grey", fontWeight: "700" }}
            >
              Viale S. Michele del
            </p>
            <span
              className=" text-xs text-inigo-500"
              style={{ color: "blue", display: "flex", alignItems: "center" }}
            >
              See Map
            </span>
          </div>
          <div className="w-full mb-4">
            <p
              className="leading-relaxed text-xs py-1"
              style={{ fontSize: "16px", color: "grey", fontWeight: "700" }}
            >
              Carso, 7, 20144 Milan
            </p>
            <div className="d-flex justify-content-between leading-relaxed text-xs w-full py-1">
              <p
                className=" leading-relaxed text-xs py-1"
                style={{ fontSize: "16px", color: "grey", fontWeight: "700" }}
              >
                Average price 38 €
              </p>
              <span
                className=" text-xs text-inigo-500"
                style={{ color: "blue", display: "flex", alignItems: "center" }}
              >
                Accept the yums
              </span>
            </div>
            <p className=" leading-relaxed text-s w-full text-yellow-500 py-1 px-1 mt-3  font-weight-bold">
              -50% at the checkout - Return to the restaurant
            </p>

            <div className="flex justify-center mb-4 py-4">
              <button
                className="text-center  text-white bg-green-500 font-weight-bold  py-3 px-2 mb-4 w-full    text-sm"
                onClick={openTableReservModal}
              >
                Book up to 50%
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {authModalVisible && (
        <AuthModal open={authModalVisible} handleClose={handleCloseAuthModal} />
      )}
    </div>
  );
}
export default TableRes;
