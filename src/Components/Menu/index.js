import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import food from "../../images/food.svg";
import coffee from "../../images/coffee.svg";
import cupcake from "../../images/cupcake.svg";
import dish from "../../images/serving-dish.svg";
import { useDispatch, useSelector } from "react-redux";
import { productsByCategory } from "../../actions/productActions";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Delivery/Product";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { GET_PRODUCTS_BY_CATEGORY } from "../../utils/types";
import Skeleton from "@material-ui/lab/Skeleton";

function Menu() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { productsByCategory: products } = useSelector(
        (state) => state.products
    );
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
    return (
        <div>
            <Navbar />
            <section>
                <img
                    className="object-cover w-full h-72"
                    src={
                        "https://images.unsplash.com/photo-1562059390-a761a084768e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1906&q=80"
                    }
                />
            </section>
            <div className="w-full ">
                <h1 className="text-3xl mt-4  font-weight-bold mb-4">
                    Our Menu
                </h1>
                <p className="text-center text-lg px-44">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                    consequat urna. Morbi a bibendum metus.
                </p>
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
                    <Card
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
                            "pulvinar facilisis justo mollis"
                        }
                        title={"Lunch"}
                        image={
                            "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                        }
                        icon={food}
                    />
                    <Card
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
                            "pulvinar facilisis justo mollis"
                        }
                        title={"Dinner"}
                        image={
                            "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                        }
                        icon={dish}
                    />
                    <Card
                        text={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, \n" +
                            "pulvinar facilisis justo mollis"
                        }
                        title={"Desserts"}
                        image={
                            "https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                        }
                        icon={cupcake}
                    />
                </Carousel>
            </div>

            {/* <div className="w-full mt-8 flex px-44">
                <div className="w-1/2 px-24">
                    {products?.length
                        ? products?.map((product) => (
                              <div className="w-full">
                                  <h1 className="text-4xl font-weight-bold font-italic text-yellow-400 text-left mb-4">
                                      {product?.name}
                                  </h1>
                                  {product?.products?.length
                                      ? product?.products?.map((item) => (
                                            <p className="text-lg text-left mb-8 font-italic">
                                                {item.title}
                                            </p>
                                        ))
                                      : null}
                              </div>
                          ))
                        : null}
                </div>
            </div> */}
            {/* <Container>
                <Row className="w-full mt-8 flex px-44">
                    {products?.length
                        ? products?.map((product) => (
                              <Col md={6}>
                                  <div className="w-full">
                                      <h1 className="text-4xl font-weight-bold font-italic text-yellow-400 text-left mb-4">
                                          {product?.name}
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
                                                        {item.price}{" "}
                                                        {item.currency}
                                                    </label>
                                                </p>
                                            ))
                                          : null}
                                  </div>
                              </Col>
                          ))
                        : null}
                </Row>
            </Container> */}

            {/* <Container> */}
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
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
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
                    </div>
                ) : products?.length ? (
                    products?.map((product) => (
                        <div
                            style={{
                                width: "50%",
                                height: "-webkit-fill-available",
                            }}
                        >
                            <h1 className="text-4xl font-weight-bold font-italic text-yellow-400 text-left mb-4">
                                {product?.name}
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
                                              {item.price} {item.currency}
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
