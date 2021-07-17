import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import delivery from "../../images/delivery.png";
import Footer from "../Footer";

import { productsByCategory } from "../../api/public";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS_BY_CATEGORY } from "../../utils/types";
import Hero from "../Home/Hero";
import SectionThree from "../Home/SectionThree";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import { useStyles } from "../TableRes/TableResStyles";
import OfferCard from "../OfferCard/index";
import exicon from "../../images/exicon.png";
import shop from "../../images/shop.png";

const product = {
  foodType: {
    vegan: false,
    glutenFree: true,
    spicy: false,
  },
  bundle: {
    quantity: 1,
  },
  title: "Offer Title",
  description: "helow worl",
  type: "default",
  images: ["images/uEW4DQ0AmItiLogo.jpg"],
  currency: "€",
  availability: true,
  isDeleted: false,
  allergies: ["Magna cupiditate ali", "invent"],
  _id: "60d1ed21d615ed15b9fcef1a",
  sizes: [
    {
      discountAvailability: false,
      discountType: "",
      discountedPrice: 0,
      discount: -1,
      title: "",
      price: 523,
    },
  ],
  multipleSizes: false,
  restaurant: "605b18408fc02bb4c1377081",
  addOns: [],
  createdAt: "2021-06-22T14:01:05.815Z",
  updatedAt: "2021-06-22T15:59:45.328Z",
};

function Delivery() {
  const classes = useStyles();
  var scrollTo = function (ele) {
    let offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();
  const { productsByCategory: products } = useSelector(
    (state) => state.products
  );
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchProductsByCategory = async () => {
    try {
      setLoading(true);
      const res = await productsByCategory();
      dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: res?.data });
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchProductsByCategory();
  }, []);
  const url =
    "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80";
  return (
    <div>
      <Navbar />
      <Hero textOne="Uncle Sammy" textTwo="Delivery" url={url} />
      <SectionThree />
      <div className={classes.orderStyles2}>
        <div className={classes.itemsStyles}>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="DAILY MENU"
            styles={`${classes.root5} ${classes.extraStyle4} ${classes.extraStylesForRadius2} ${classes.extraStylesForD}`}
            textStyles={classes.textStyles}
          />
          <Card
            className={`${classes.root5} ${classes.extraStyle3} ${classes.extraStyle11}`}
          >
            <CardContent>
              <div className={classes.dCStyles}>
                <OfferCard product={product} />
                <OfferCard product={product} />
                <OfferCard product={product} />
                <OfferCard product={product} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={classes.tableReserve}>
          <div className={classes.container4}>
            <Card className={classes.dCStyles1}>
              <CardContent>
                <div className={classes.img}>
                  <img src={delivery} />
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
                  styles={classes.dCStyles2}
                />
              </div>
              <div>
                <TimingsCard
                  id="3"
                  open="true"
                  textForOpen="Click for Opening Hours"
                  styles={classes.dCStyles3}
                />
              </div>
            </div>
          </div>
          <Card className={`${classes.root5} ${classes.extraStyle2}`}>
            <CardContent>
              <Card className={classes.infoCard}>
                <CardContent>
                  <div className={classes.infoCardText}>
                    <img src={exicon} className={classes.infoImageStyles} />
                    <p>
                      If you’ve got any allergies or intollerances (for you or
                      any one of your friends)
                    </p>
                    <h1 className={classes.clickStyles}>CLICK HERE</h1>
                  </div>
                </CardContent>
              </Card>
              <Card className={classes.pickCard}>
                <CardContent>
                  <Card className={classes.pickCard2}>
                    <CardContent></CardContent>
                  </Card>
                  <div>
                    <img src={shop} />
                  </div>
                  <p>hello how are you</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Delivery;
