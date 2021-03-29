import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import Card from "../Home/card";
import { useRestaurantConetxt } from "../../Context/restaurantContext";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { reserveTable } from "../../actions/reserveTableActions";
import { Spinner } from "react-bootstrap";
import EventButton from "./EventButton";
import dayjs from "dayjs";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

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
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

function TableRes() {
    const { token } = useRestaurantConetxt();
    const [number, setNumber] = useState(3);
    const [services, setServices] = useState("lunch");
    const [time, setTime] = useState("19:30:00");
    const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [showDate, setShowDate] = useState(false);
    const [startDate, setStartDate] = useState(Date.now());
    const { handleSubmit } = useForm();
    var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
    dayjs.extend(isSameOrBefore);
    const dispatch = useDispatch();
    const tableReserve = () => {
        if (!dayjs(dayjs().format("YYYY-MM-DD")).isSameOrBefore(dayjs(date))) {
            toast.error("Please provide correct date");
        } else {
            dispatch(
                reserveTable({
                    startTime: date + " " + time,
                    numberOfPeople: number,
                    services: services,
                })
            );
        }
    };
    const { loading } = useSelector((state) => state.loadingReducer);
    const [image, setImage] = useState(
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    );

    console.log({ date });
    console.log(
        "is before",
        dayjs(dayjs().format("YYYY-MM-DD")).isSameOrBefore(dayjs(date))
    );
    // console.log("tomorrow", dayjs().add(1, "day").format("MMMM D, YYYY"));

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

            <Container
                style={{
                    padding: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <strong style={{ fontSize: "20px" }}>Table Reservation</strong>
                <form
                    onSubmit={handleSubmit(tableReserve)}
                    style={{ width: "50%", marginTop: "20px" }}
                >
                    {/* <div className="d-flex flew-wrap w-full mb-4 justify-content-center">
                <input
                  className="rounded-pill py-1 px-3 mr-2 bg-grey-lighter border border-grey-lighter test-xs w-1/2 border-1 font font-weight-light border-gray-500 shadow-sm"
                  placeholder="Full name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="rounded-pill py-1 px-3 bg-grey-lighter border border-grey-lighter test-xs w-1/2 border-1 font-weight-light border-gray-500 shadow-sm"
                  placeholder="Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}

                    <div
                        className="  text-left flew-wrap w-full "
                        style={{ marginBottom: "20px" }}
                    >
                        <label
                            htmlFor="grid-state"
                            className="text-sm text-left text-gray-500 font-weight-bolder"
                        >
                            Number of people
                        </label>

                        <div
                            className="text-left mr-2 flex flex-wrap "
                            style={{ justifyContent: "space-between" }}
                        >
                            {[...Array(5).keys()].map((i) => (
                                <button
                                    className={`text-gray-500 font-weight-light text-xs mr-1  py-3 w-1/6  border border-gray-500 rounded-pill `}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setNumber(i);
                                    }}
                                    style={{
                                        backgroundColor:
                                            number === i &&
                                            "rgba(16, 185, 129,1)",
                                        color: number === i ? "#fff" : "#000",
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div
                        className="  text-left flew-wrap w-full "
                        style={{ marginBottom: "20px" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "20px",
                            }}
                        >
                            <label
                                htmlFor="grid-state"
                                className="text-sm text-left text-gray-500 font-weight-bolder"
                            >
                                Date
                            </label>
                            <div>
                                <label
                                    htmlFor="grid-state"
                                    className="text-sm text-left text-gray-500 font-weight-bolder"
                                    style={{ marginRight: "10px" }}
                                >
                                    Other Date
                                </label>
                                {/* <input
                                    type="datetime-local"
                                    defaultValue={Date.now()}
                                    onChange={(e) => setTime(e.target.value)}
                                /> */}
                                {showDate ? (
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => {
                                            setDate(
                                                dayjs(date).format("YYYY-MM-DD")
                                            );
                                            setStartDate(date);
                                        }}
                                    />
                                ) : (
                                    <CalendarTodayIcon
                                        onClick={() => setShowDate(true)}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="text-left mr-2 flex flex-wrap justify-content-between ">
                            <EventButton
                                data={date}
                                setData={setDate}
                                localState={dayjs().format("YYYY-MM-DD")}
                                text="Today"
                            />
                            <EventButton
                                data={date}
                                setData={setDate}
                                localState={dayjs()
                                    .add(1, "day")
                                    .format("YYYY-MM-DD")}
                                text="Tomorrow"
                            />
                            <EventButton
                                data={date}
                                setData={setDate}
                                localState={dayjs()
                                    .add(2, "day")
                                    .format("YYYY-MM-DD")}
                                text={dayjs()
                                    .add(2, "day")
                                    .format("MMMM D, YYYY")}
                            />
                        </div>
                    </div>
                    <div
                        className="  text-left flew-wrap w-full "
                        style={{ marginBottom: "20px" }}
                    >
                        <label
                            htmlFor="grid-state"
                            className="text-sm text-left text-gray-500 font-weight-bolder"
                        >
                            Services
                        </label>

                        <div className="text-left mr-2 flex flex-wrap justify-content-between ">
                            <EventButton
                                data={services}
                                setData={setServices}
                                localState="breakfast"
                                text="Breakfast"
                            />
                            <EventButton
                                data={services}
                                setData={setServices}
                                localState="lunch"
                                text="Lunch"
                            />
                            <EventButton
                                data={services}
                                setData={setServices}
                                localState="dinner"
                                text="Dinner"
                            />
                        </div>
                    </div>

                    <div className="  text-left flew-wrap w-full ">
                        <label
                            htmlFor="grid-state"
                            className="text-sm text-left text-gray-500 font-weight-bolder"
                        >
                            Schedule
                        </label>

                        <div className="text-left mr-2 flex flex-wrap justify-content-between ">
                            <EventButton
                                data={time}
                                setData={setTime}
                                localState="19:30:00"
                                text="19:30"
                            />
                            <EventButton
                                data={time}
                                setData={setTime}
                                localState="08:00:00"
                                text="08:00"
                            />
                            <EventButton
                                data={time}
                                setData={setTime}
                                localState="08:30:00"
                                text="08:30"
                            />
                        </div>
                    </div>

                    <div className="mt-4 px-2 w-full">
                        {token && (
                            <button
                                className=" b   g-white px-12 py-3 text-black text-center text-sm mb-12"
                                style={{
                                    backgroundColor: "rgba(245, 158, 11, 1)",
                                    color: "#fff",
                                    width: "60%",
                                    borderRadius: "6px",
                                    marginTop: "20px",
                                }}
                                type="submit"
                            >
                                {loading && (
                                    <Spinner
                                        animation="border"
                                        size="sm"
                                        style={{ marginRight: "10px" }}
                                    />
                                )}
                                Book Now
                            </button>
                        )}
                        {/* <textarea
                  className=" p-2 w-full rounded max-h-25 bg-grey-lighter border border-grey-lighter"
                  placeholder="other info"
                ></textarea> */}
                    </div>
                </form>
            </Container>

            {/* <div className='flex py-24 justify-content-center px-52'>
                <div className='w-2/3 mr-4'>
                    <div className="text-gray-900   w-full mb-2 	 px-0 py-0 border border-gray-300 shadow-sm">
                        <h1 className='w-full p-2 bg-yellow-500 text-xl text-white text-left font-weight-bold'>Our menu</h1>

                        <div className=" ml-0  w-full  py-0 px-0 md:flex-row p-4  ">
                            <div className=" px-0 w-full  ml-0   md:mb-0">
                                <img className="object-cover px-0 object-center ml-0 max-h-80 w-full " alt="hero" src={image}/>
                            </div>
                            <div className='w-full mt-4 border border-gray-300 shadow-sm'>
                                <Carousel
                                    ssr
                                    partialVisbile
                                    itemClass="image-item"
                                    responsive={responsive}
                                >
                                    {images.slice(0, 5).map(image => {
                                        return (
                                            <Image
                                                draggable={false}
                                                style={{ width: "100%", height: "100%" }}
                                                src={image}
                                                onClick={()=>setImage(image)}
                                            />
                                        );
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className='w-full my-4 border border-gray-300 shadow-sm'>
                        <div className='w-full py-2 px-4 bg-green-500 flex justify-content-center'>
                            <p className='text-white mx-2  text-center text-md'>Menu</p>
                            <p className='text-white mx-2  text-center text-md'>Promotions</p>
                            <p className='text-white mx-2   text-center text-md'>User photos</p>
                            <p className='text-white mx-2  text-center text-md'>Table res</p>

                        </div>
                        <div className='p-4'>
                            <p className=' mt-2 text-xs text-left font-weight-bold mb-1 w-full'>Chef Mario Rossi</p>
                            <p className=' text-xs text-left font-weight-bold w-full'>Average price 38$</p>
                            <div className='mr-0  w-full min-w-2/3  '>
                                <div className='flex justify-content-between w-full mb-0'>
                                    <div className='flex-grow py-2 '>
                                        <h6 className='text-left font-weight-bold'>Pizza margherita</h6>
                                        <p className='text-xs text-left'>Pomodoro mozzarella</p>
                                    </div>
                                    <div className=' mt-2 py-2'>
                                        <span className='text-xl mt-2 py-2 font-weight-bold text-yellow-500 text-right'>15$</span>
                                    </div>
                                </div>
                                <div className='flex justify-content-between w-full mb-0'>
                                    <div className='flex-grow py-2 '>
                                        <h6 className='text-left font-weight-bold'>Pizza margherita</h6>
                                        <p className='text-xs text-left'>Pomodoro mozzarella</p>
                                    </div>
                                    <div className=' mt-2 py-2'>
                                        <span className='text-xl mt-2 py-2 font-weight-bold text-yellow-500 text-right'>15$</span>
                                    </div>
                                </div>
                                <div className='flex justify-content-between w-full mb-0'>
                                    <div className='flex-grow py-2 '>
                                        <h6 className='text-left font-weight-bold'>Pizza margherita</h6>
                                        <p className='text-xs text-left'>Pomodoro mozzarella</p>
                                    </div>
                                    <div className=' mt-2 py-2'>
                                        <span className='text-xl mt-2 py-2 font-weight-bold text-yellow-500 text-right'>15$</span>
                                    </div>
                                </div>
                                <div className=' text-left w-full mt-0 border-b border-dashed border-gray-300'>

                                    <h6 className='text-left font-weight-bold w-full'>Food Options</h6>
                                    <p className='text-xs text-left w-full mb-4'>vegan</p>

                                    <button
                                        className=" mb-4  text-green-500 bg-opacity-50 border-2 border-green-500 bg-green-500 font-weight-bold w-full   py-2 px-6 focus:outline-none   text-lg">View complete menu
                                    </button>
                                </div>

                                <div className='w-full mt-8 '>
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
                                                    min: 1024
                                                },
                                                items: 2,
                                                partialVisibilityGutter: 40
                                            },
                                            mobile: {
                                                breakpoint: {
                                                    max: 464,
                                                    min: 0
                                                },
                                                items: 1,
                                                partialVisibilityGutter: 30
                                            },
                                            tablet: {
                                                breakpoint: {
                                                    max: 1024,
                                                    min: 464
                                                },
                                                items: 1,
                                                partialVisibilityGutter: 30
                                            }
                                        }}
                                        showDots={false}
                                        sliderClass=""
                                        slidesToSlide={1}
                                        swipeable
                                    >

                                        <Card price={'15'} desc={'15% off on the menu'} promo={'Starter + dessert'}/>
                                        <Card price={'15'} desc={'15% off on the menu'} promo={'Starter + dessert'}/>
                                        <Card price={'15'} desc={'15% off on the menu'} promo={'Starter + dessert'}/>


                                    </Carousel>
                                </div>

                            </div>
                        </div>



                    </div>
                    <section id='info' className="text-gray-700 body-font w-full">
                        <div className="container  py-4 mx-auto w-full">
                            <div className="flex flex-col text-left w-full mb-4">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-500">Other informations</h1>
                                <div className=' w-full p-3 '>
                                    <div className='mb-3'>
                                        <h6 className='text-gray-900 font-weight-bold text-xs'>Info</h6>
                                        <p className='text-gray-300'>info about the restaurant</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-gray-900 font-weight-bold text-xs'>Info</h6>
                                        <p className='text-gray-300'>info about the restaurant</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-gray-900 font-weight-bold text-xs'>Info</h6>
                                        <p className='text-gray-300'>info about the restaurant</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h6 className='text-gray-900 font-weight-bold text-xs'>Info</h6>
                                        <p className='text-gray-300'>info about the restaurant</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                </div>
                <div className=" leading-relaxed   w-2/3  ml-4 shadow-xl lg:min-h-80 max-h-80 border border-gray-300	px-8 py-4 flex flex-col md:items-start md:text-left  ">
                    <div className=' d-flex justify-content-around w-75 px-0 ml-0  '>
                        <h2 className=" sm:text-3xl text-green-500  text-3xl mb-2 flex-grow -1 mr-2  ">Arcane</h2>
                        <h2 className="sm:text-3xl  text-3xl mb-2 text-gray-300 ">8.3<span className='text-xs '>/10</span></h2>
                    </div>
                    <div className=' d-flex justify-content-around w-full  py-1'>

                        <p className='w-50 text-xs flex-grow-1 text-gray-300 leading-relaxed'>Viale san Michele del carso 7 Milan 20144</p>


                        <span className=' text-xs text-inigo-500  '>See on map</span>


                    </div>
                    <div className='w-full mb-4'>
                        <p className=" leading-relaxed text-xs w-full py-1">Average price 38 accepts returns</p>
                        <p className=" leading-relaxed text-s w-full text-yellow-500 py-1 px-1   font-weight-bold">-50% at checkout</p>

                        <div className="flex justify-center mt-8 mb-4 py-4">
                            <button
                                className="text-center  text-white bg-green-500 font-weight-bold  py-3 px-2 mb-4 w-full    text-sm">Book nup to 50%
                            </button>

                        </div>
                    </div>

                </div>

            </div> */}
            <Footer />
        </div>
    );
}
export default TableRes;
