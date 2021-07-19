import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsByCategory, customerMenu } from "../../api/public";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Hero from "../Home/Hero.js";
import ItemCard from "../itemCard/index";
import { makeStyles } from "@material-ui/core/styles";
import ButtonCard from "../Home/buttonCard";
import MenuCard from "../Home/MenuCard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const styles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    marginBottom: "80px",
  },
  hrStyles: {
    color: "black",
  },
});
const responsive = {
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

function Menu() {
  const classes = styles();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);
  const [menus, setMenus] = useState([]);

  const fetchProductsByCategory = async () => {
    try {
      setLoading(true);
      const res = await customerMenu();
      setMenus(res.data);
      // dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: res?.data });
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    fetchProductsByCategory();
  }, []);
  const url2 =
    "http://hobokenmaddhatter.com/wp-content/uploads/2019/02/NEW-LUNCH-MENU.revised-01.png";
  const url =
    "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80";
  return (
    <div>
      <Navbar />
      <Hero textOne="Uncle Sammy" textTwo="Menu Selection!" url={url} />
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
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
        <ItemCard
          key={1}
          title={"LUNCH"}
          image={url2}
          width="300px"
          margin="20px"
        />

        <ItemCard
          key={1}
          title={"DINNER"}
          image={url2}
          width="300px"
          margin="20px"
        />
        <ItemCard
          key={1}
          title={"DESSERTS"}
          image={url2}
          width="300px"
          margin="20px"
        />
        <ItemCard
          key={1}
          title={"DESSERTS"}
          image={url2}
          width="300px"
          margin="20px"
        />
        <ItemCard
          key={1}
          title={"DESSERTS"}
          image={url2}
          width="300px"
          margin="20px"
        />
        <ItemCard
          key={1}
          title={"DESSERTS"}
          image={url2}
          width="300px"
          margin="20px"
        />
        <ItemCard
          key={1}
          title={"DESSERTS"}
          image={url2}
          width="300px"
          margin="20px"
        />
      </Carousel>
      <div className={classes.container}>
        <ButtonCard text="RESERVE A TABLE" />
      </div>

      <div className={`${classes.container} ${classes.container2}`}>
        <MenuCard text="LUNCH MENU" />
      </div>

      <Footer />
    </div>
  );
}

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default Menu;
