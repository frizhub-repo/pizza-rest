import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import clock from "../../images/clock.png";
import address from "../../images/address.png";
import rating from "../../images/rating.png";
import delivery from "../../images/delivery.png";
import Footer from "../Footer";

import Product from "./Product";

import Control from "./Control";
import { productsByCategory } from "../../api/public";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS_BY_CATEGORY } from "../../utils/types";
import Skeleton from "@material-ui/lab/Skeleton";
import Hero from "../Home/Hero";
import { useStyles } from "./DeliveryStyles";

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

      <section className={`${classes.sectionStyles} px-48 `}>
        <div className=" w-full h-full ml-12 mt-8">
          <div className="h-24 flex ">
            <div className="w-1/4  ">
              <img className="object-contain  w-full h-16 " src={clock} />
              <h2 className="text-lg font-weight-bold mt-2 text-gray-800">
                Opening hours
              </h2>
              <p className="font-weight-bold text-gray-500 text-center text-sm">
                Lun-Ven: 9:00-20:00
              </p>
            </div>
            <div className="w-1/4">
              <img className="object-contain  w-full h-16 " src={address} />
              <h2 className="text-lg font-weight-bold mt-2 text-gray-800">
                Address
              </h2>
              <p className="font-weight-bold text-gray-500 text-center text-sm">
                Via Mario Rossi 13
              </p>
            </div>
            <div className="w-1/4">
              <img className="object-contain  w-full h-16" src={rating} />
              <h2 className="text-lg font-weight-bold text-gray-800 mt-2">
                Reviews
              </h2>
              <p className="font-weight-bold text-gray-500 text-center text-sm">
                Satisfid
              </p>
            </div>
            <div className="w-1/4   ">
              <img className="h-16 object-contain  w-full" src={delivery} />
              <h2 className="text-lg d-block  w-full mt-2 text-center font-weight-bold text-gray-800">
                Delivery
              </h2>
              <p className="font-weight-bold text-gray-500 text-center text-sm">
                Min order-35
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-weight-bolder  text-black w-full mt-16 mb-4 text-xl text-left">
          Categories
        </h1>

        <div className="d-flex w-full">
          <div
            className={`${classes.divStyles} w-1/6 bg-white border border-gray-300 p-2 h-72 shadow-sm`}
          >
            {loading
              ? [...Array(5).keys()].map((i) => (
                  <Skeleton
                    variant="rect"
                    height={20}
                    width={"100%"}
                    className={classes.skeletonStyles}
                  />
                ))
              : products?.length
              ? products?.map((product, index) => {
                  return (
                    <p
                      className="text-black text-left text-xs font-weight-bold mb-4 cursor-pointer"
                      onClick={() => setActiveIndex(index)}
                      style={{
                        padding: "10px",
                        backgroundColor:
                          index === activeIndex && "rgba(253, 126, 20,0.5)",
                      }}
                    >
                      {product?.name}
                    </p>
                  );
                })
              : null}
          </div>
          <div className="w-5/6 p-2 ml-4 flex ">
            <div className="w-2/3 mr-2 ml-2 mb-8">
              <div className="shadow-sm">
                {loading
                  ? [...Array(5).keys()].map((i) => (
                      <div
                        className={`${classes.skeletonStyles} border border-gray-300 mb-0 mt-0`}
                      >
                        <Skeleton variant="rect" height={200} width={"100%"} />
                      </div>
                    ))
                  : products[activeIndex]?.products?.length
                  ? products[activeIndex]?.products.map((product, index) => (
                      <div className="border border-gray-300 mb-0 mt-0">
                        <Product
                          desc={product.description}
                          name={product.title}
                          price={product?.sizes?.[0]?.price}
                          currency={product.currency}
                          key={product._id}
                          id={product._id}
                        />
                      </div>
                    ))
                  : null}

                {/* <Accordion>
                                    {images.map((item) => {
                                        return (
                                            <Card>
                                                <div id={item.cat}>
                                                    <Accordion.Toggle
                                                        as={Card.Header}
                                                        eventKey={item.key}
                                                    >
                                                        {item.cat}
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse
                                                        eventKey={item.key}
                                                    >
                                                        <div>
                                                            {foods.map(
                                                                (food) => {
                                                                    if (
                                                                        food.cat.includes(
                                                                            item.cat
                                                                        )
                                                                    ) {
                                                                        return (
                                                                            <div className="border border-gray-300 mb-0 mt-0">
                                                                                <Product
                                                                                    desc={
                                                                                        food.desc
                                                                                    }
                                                                                    name={
                                                                                        food.name
                                                                                    }
                                                                                    price={
                                                                                        food.price
                                                                                    }
                                                                                    key={
                                                                                        1
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }
                                                                }
                                                            )}
                                                        </div>
                                                    </Accordion.Collapse>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </Accordion> */}
              </div>
            </div>

            <div className="w-1/3">
              <Control />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Delivery;
