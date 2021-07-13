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
        <MenuCard text="RESERVE A TABLE" />
      </div>
      <div className="w-full ">
        <Carousel
          additionalTransfrom={0}
          arrows
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
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
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
        >
          {menus?.map((menu, index) => (
            <Card
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
                "pulvinar facilisis justo mollis"
              }
              title={menu?.title}
              image={
                "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
              }
              index={index}
              setKey={setKey}
              icon={food}
            />
          ))}
        </Carousel>
      </div>

      <div
        className="w-full mt-8 flex px-44"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[...Array(3).keys()].map((i) => (
                <Skeleton
                  variant="rect"
                  height={200}
                  width={200}
                  style={{ marginBottom: "20px" }}
                />
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[...Array(3).keys()].map((i) => (
                <Skeleton
                  variant="rect"
                  height={200}
                  width={200}
                  style={{ marginBottom: "20px" }}
                />
              ))}
            </div>
          </div>
        ) : menus?.length ? (
          menus[key]?.items?.map((product) => (
            <div
              style={{
                width: "50%",
                height: "-webkit-fill-available",
              }}
            >
              <h1 className="text-4xl font-weight-bold font-italic text-yellow-400 text-left mb-4">
                {product?.category?.name}
              </h1>
              {product?.products?.length
                ? product?.products?.map((item) => (
                    <p className="text-lg text-left mb-8 font-italic">
                      {item.title}{" "}
                      <label
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        {item?.sizes?.[0]?.price} {item.currency}
                      </label>
                    </p>
                  ))
                : null}
            </div>
          ))
        ) : null}
      </div>

      {/* </Container> */}

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
