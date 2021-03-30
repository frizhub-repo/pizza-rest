import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import clock from "../../images/clock.png";
import address from "../../images/address.png";
import rating from "../../images/rating.png";
import delivery from "../../images/delivery.png";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import Product from "./Product";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Control from "./Control";
import { productsByCategory } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS_BY_CATEGORY } from "../../utils/types";
import Skeleton from "@material-ui/lab/Skeleton";

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
    {
        image:
            "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        cat: "Appetizers",
        key: "0",
    },
    {
        image:
            "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        cat: "Ravioli",
    },
    {
        image:
            "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        cat: "Soups",
        key: "1",
    },
    {
        image:
            "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        cat: "Rice",
        key: "2",
    },
    {
        image:
            "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        cat: "pasta",
        key: "3",
    },
    {
        image:
            "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        cat: "Boats",
        key: "4",
    },
];

const foods = [
    {
        name: "Shrimp Roll",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers"],
        price: 25,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Sake dom poke",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Salads", "Pinned"],
        price: 4,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Ebi shu mai",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Nigiri 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Nigiri", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Shrimp Roll",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers"],
        price: 25,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Sake dom poke",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Salads"],
        price: 4,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Ebi shu mai",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Soups", "Pinned"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Nigiri 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Nigiri", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Shrimp Roll",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers"],
        price: 25,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Sake dom poke",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Salads"],
        price: 4,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Ebi shu mai",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Nigiri 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Nigiri", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Shrimp Roll",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers"],
        price: 25,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Sake dom poke",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Salads", "Pinned"],
        price: 4,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Ebi shu mai",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Nigiri 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Nigiri", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Shrimp Roll",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Pinned"],
        price: 25,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Sake dom poke",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Salads"],
        price: 4,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Ebi shu mai",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Nigiri 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Nigiri", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Shrimp Roll",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Pinned"],
        price: 25,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Sake dom poke",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Salads"],
        price: 4,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Ebi shu mai",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Rice", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
        name: "Nigiri 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        cat: ["Apperitizers", "Nigiri", "Soups"],
        price: 30,
        image:
            "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
];

function Delivery() {
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
            <section className="px-48" style={{ marginBottom: "20px" }}>
                <div className=" w-full h-full ml-12 mt-8">
                    <div className="h-24 flex ">
                        <div className="w-1/4  ">
                            <img
                                className="object-contain  w-full h-16 "
                                src={clock}
                            />
                            <h2 className="text-lg font-weight-bold mt-2 text-gray-800">
                                Opening hours
                            </h2>
                            <p className="font-weight-bold text-gray-500 text-center text-sm">
                                Lun-Ven: 9:00-20:00
                            </p>
                        </div>
                        <div className="w-1/4">
                            <img
                                className="object-contain  w-full h-16 "
                                src={address}
                            />
                            <h2 className="text-lg font-weight-bold mt-2 text-gray-800">
                                Address
                            </h2>
                            <p className="font-weight-bold text-gray-500 text-center text-sm">
                                Via Mario Rossi 13
                            </p>
                        </div>
                        <div className="w-1/4">
                            <img
                                className="object-contain  w-full h-16"
                                src={rating}
                            />
                            <h2 className="text-lg font-weight-bold text-gray-800 mt-2">
                                Reviews
                            </h2>
                            <p className="font-weight-bold text-gray-500 text-center text-sm">
                                Satisfid
                            </p>
                        </div>
                        <div className="w-1/4   ">
                            <img
                                className="h-16 object-contain  w-full"
                                src={delivery}
                            />
                            <h2 className="text-lg d-block  w-full mt-2 text-center font-weight-bold text-gray-800">
                                Delivery
                            </h2>
                            <p className="font-weight-bold text-gray-500 text-center text-sm">
                                Min order-35
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full  mt-12">
                    <Carousel
                        ssr
                        partialVisbile
                        itemClass="image-item"
                        responsive={responsive}
                    >
                        {images.slice(0, 5).map((image) => {
                            return (
                                <div>
                                    <Image
                                        draggable={false}
                                        style={{ width: "70%", height: "70%" }}
                                        src={image.image}
                                    />
                                    <h1 className="text-gray-500 mt-4 font-weight-bold">
                                        {image.cat}
                                    </h1>
                                </div>
                            );
                        })}
                    </Carousel>
                </div> */}

                <h1 className="font-weight-bolder  text-black w-full mt-16 mb-4 text-xl text-left">
                    Categories
                </h1>

                <div className="d-flex w-full">
                    <div
                        className="w-1/6 bg-white border border-gray-300 p-2 h-72 shadow-sm"
                        style={{ height: "100%" }}
                    >
                        {loading
                            ? [...Array(5).keys()].map((i) => (
                                  <Skeleton
                                      variant="rect"
                                      height={20}
                                      width={"100%"}
                                      style={{
                                          marginBottom: "20px",
                                      }}
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
                                                  index === activeIndex &&
                                                  "rgba(253, 126, 20,0.5)",
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
                            {/* <input
                                className="w-full p-2 font-weight-light text-gray-300 border border-gray-300 shadow-sm "
                                placeholder="Search"
                            />
                            <h1 className="font-weight-bold text-black w-full p-2 text-2xl text-left">
                                Free Delivery
                            </h1>
                            <div className="bg-white text-left p-4 border border-gray-300 shadow-sm mb-8">
                                <h1 className="text-left text-lg-left text-yellow-500 font-weight-bold mb-2">
                                    Attention before ordering
                                </h1>
                                <p className="text-gray-500 text-left font-weight-normal text-sm ">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Quisque nisl eros, pulvinar
                                    facilisis justo mollis, auctor consequat
                                    urna. Morbi a bibendum metus. Donec
                                    scelerisque sollicitudin enim eu venenatis.
                                </p>
                            </div> */}
                            <div className="shadow-sm">
                                {loading
                                    ? [...Array(5).keys()].map((i) => (
                                          <div className="border border-gray-300 mb-0 mt-0">
                                              <Skeleton
                                                  variant="rect"
                                                  height={200}
                                                  width={"100%"}
                                                  style={{
                                                      marginBottom: "20px",
                                                  }}
                                              />
                                          </div>
                                      ))
                                    : products[activeIndex]?.products?.length
                                    ? products[activeIndex]?.products.map(
                                          (product, index) => (
                                              <div className="border border-gray-300 mb-0 mt-0">
                                                  <Product
                                                      desc={product.description}
                                                      name={product.title}
                                                      price={product.price}
                                                      currency={
                                                          product.currency
                                                      }
                                                      key={product._id}
                                                      id={product._id}
                                                  />
                                              </div>
                                          )
                                      )
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
