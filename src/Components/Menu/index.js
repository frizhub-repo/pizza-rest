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
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Backdrop, CircularProgress } from "@material-ui/core";

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
  backdrop: {
    zIndex: 1,
    color: "#fff",
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
  let { restaurant } = useRestaurantContext();

  const classes = styles();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = React.useState({});

  const getCount = (items) => {
    let count = 0;
    items.forEach((item) => {
      count = count + item?.products?.length;
    });
    return count;
  };

  const fetchProductsByCategory = async () => {
    try {
      setLoading(true);
      const res = await customerMenu();
      setMenus(res.data);
      if (res?.data?.length) {
        setSelectedMenu(res?.data?.[0]);
      }
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
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo="Menu Selection!"
        url={url}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
      />
      <div style={{ margin: "50px 0px" }}>
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
          {menus?.map((menu) => (
            <ItemCard
              key={menu?._id}
              title={menu?.title}
              image={menu?.imageUrl}
              count={getCount(menu?.items)}
              showCount={true}
              height="300px"
              onClickHandler={() => setSelectedMenu(menu)}
              isSelectedMenu={menu?._id === selectedMenu?._id}
            />
          ))}
        </Carousel>
      </div>

      <div className={classes.container}>
        <ButtonCard text="RESERVE A TABLE" />
      </div>

      <div className={`${classes.container} ${classes.container2}`}>
        <MenuCard selectedMenu={selectedMenu} />
      </div>

      <Footer />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
