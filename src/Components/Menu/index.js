import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { customerMenu } from "../../api/public";
import Hero from "../Home/Hero.js";
import ItemCard from "../itemCard/index";
import { makeStyles } from "@material-ui/core/styles";
import ButtonCard from "../Home/buttonCard";
import MenuCard from "../Home/MenuCard";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { Backdrop, CircularProgress } from "@material-ui/core";
import menuHeaderImg from "Assets/images/menuHeader.png";

const styles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 150px",
  },
  hrStyles: {
    color: "black",
  },
  spacing: {
    marginTop: "30px",
    width: "100%",
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

  return (
    <div>
      <Navbar />
      <Hero
        textOne={restaurant?.restaurant?.name ?? "Uncle Sammy"}
        textTwo="Menu Selection!"
        url={menuHeaderImg}
        restaurantLogo={restaurant?.restaurant?.logoUrl}
      />
      <div style={{ margin: "50px 0px" }}>
        <Carousel
          style={{ overflow: "" }}
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

      <div className={classes.container}>
        <ButtonCard text="RESERVE A TABLE" />
        <div className={classes.spacing}>
          <MenuCard selectedMenu={selectedMenu} />
        </div>
      </div>

      <Footer />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Menu;
