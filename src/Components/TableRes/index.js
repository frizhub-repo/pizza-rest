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
import MenuCard from "../Home/MenuCard";
import TimingsCard from "../Home/timingsCard";
import Menu from "../../images/menu.png";

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
  container: {
    marginLeft: "20px",
  },
  hrStyles: {
    color: "black",
  },
  root5: {
    backgroundColor: "#EA9C0D",
    width: "362px",
    height: "70px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  textStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "x-large",
    marginTop: "10px",
  },
  containerTwo: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "30px",
    marginLeft: "150px",
  },
  iconClass: {
    width: "80px",
    height: "70px",
    border: "4px solid #EA9C0D",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  divClass: {
    display: "flex",
    justifyContent: "space-around",
  },
  extraStyle: {
    backgroundColor: "#10B981",
    borderRadius: "0px",
    height: "100px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
  },
  extraStyle2: {
    backgroundColor: "white",
    borderRadius: "0px",
    height: "500px",
    border: "1px solid grey",
  },
  coursesStyles: {
    display: "flex",
    flexDirection: "column",
  },
  tableReserve: {
    marginTop: "15px",
    width: "400px",
  },
  container4: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "70px",
    fontFamily: "Roboto",
  },

  root2: {
    backgroundColor: "#62BA81",
    width: "110px",
    height: "120px",
    color: "white",
    borderRadius: "0px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },

  root4: {
    backgroundColor: "#62BA81",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderTopRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  root6: {
    backgroundColor: "#EA9C0D",
    width: "362px",
    height: "60px",
    color: "white",
    borderRadius: "0px",
    borderBottomRightRadius: "15px",
    boxShadow:
      " 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}));

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
      <div className={classes.divClass}>
        <div className={classes.coursesStyles}>
          <div className={classes.container}>
            <MenuCard text="FIRST COURSE" />
          </div>
          <div className={classes.container}>
            <MenuCard text="SECOND COURSE" />
          </div>
          <div className={classes.containerTwo}>
            <div className={classes.iconClass}>
              <img className="object-contain mt-2  w-full h-12 " src={Menu} />
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
        <div className={classes.tableReserve}>
          <div>
            <TimingsCard
              id="3"
              open="true"
              textForOpen="RESERVE A TABLE"
              styles={`${classes.root5} ${classes.extraStyle}`}
              textStyles={classes.textStyles}
            />
          </div>
          <div>
            <TimingsCard
              styles={`${classes.root5} ${classes.extraStyle2}`}
              textStyles={classes.textStyles}
            />
            <div className={classes.container4}>
              <div>
                <TimingsCard id="1" open="false" styles={classes.root2} />
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
                  <TimingsCard
                    id="3"
                    open="true"
                    textForOpen="Click for Opening Hours"
                    styles={classes.root6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableRes;
