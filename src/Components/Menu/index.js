import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import food from "../../images/food.svg";

import { productsByCategory, customerMenu } from "../../api/public";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Skeleton from "@material-ui/lab/Skeleton";
import Hero from "../Home/Hero.js";
import ItemCard from "../itemCard/index";
import { makeStyles } from "@material-ui/core/styles";
import ButtonCard from "../Home/buttonCard";
import MenuCard from "../Home/MenuCard";

const styles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  hrStyles: {
    color: "black",
  },
});

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
      <div className={classes.container}>
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
          title={"BRUNCH"}
          image={url2}
          width="300px"
          margin="20px"
        />
      </div>
      <div className={classes.container}>
        <ButtonCard text="RESERVE A TABLE" />
      </div>

      <div className={classes.container}>
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
