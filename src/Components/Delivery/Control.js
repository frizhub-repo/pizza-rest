import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import axiosIntance from "../../axios-configured";
import { toast } from "react-toastify";
import { removeOrderItems } from "../../actions/index";
import { useRestaurantConetxt } from "../../Context/restaurantContext";
import AuthModal from "../Auth/AuthModal";

function Control() {
    let { token } = useRestaurantConetxt();
    const [modalShow, setModalShow] = React.useState(false);

    const total = useSelector((state) => state.orders).total;
    const products = useSelector((state) => state.orders).products;
    const minimum = useSelector((state) => state.orders).minimum;
    const delivery = useSelector((state) => state.orders).delivery;
    const currency = useSelector((state) => state.orders).currency;

    const { loading } = useSelector((state) => state.loadingReducer);
    const disp = useDispatch();

    const orderNow = async () => {
        try {
            const res = await axiosIntance.post("/api/v1/orders/customers", {
                products,
            });
            toast.success("Order created successfully");
            disp(removeOrderItems());
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full ml-4 p-1">
            <h1 className="text-justify text-gray-500 font-weight-bold text-lg mb-2">
                <i className="fas fa-shopping-basket"></i> Toltal: {total}
            </h1>
            <section className="p-4 border border-gray-300 shadow-sm">
                <div className="mb-3">
                    {/* {minimum - total > 0 && (
                        <p className="text-xs text-left text-gray-500 mt-1 mb-3">
                            ${minimum - total} to reach the minimum order
                        </p>
                    )} */}
                    {token ? (
                        <button
                            disabled={products.length ? false : true}
                            onClick={orderNow}
                            className="w-full  bg-yellow-500 text-white text-center text-xs py-2 mb-4  font-weight-normal"
                        >
                            {loading && (
                                <Spinner
                                    animation="border"
                                    size="sm"
                                    style={{ marginRight: "10px" }}
                                />
                            )}
                            ORDER NOW
                        </button>
                    ) : (
                        <p
                            className="text-xs text-center text-indigo-500 "
                            onClick={() => setModalShow(true)}
                            style={{ cursor: "pointer" }}
                        >
                            Register yourself to place order
                        </p>
                    )}
                    {/* <p className="text-xs text-center text-indigo-500 ">
                        If you have any food allergy please click here
                    </p> */}
                </div>
                <div>
                    {/* <p className="text-black text-center p-2 text-xs border-2 border-yellow-500  mt-1 font-weight-normal">
                        Home delivery {total}
                    </p> */}

                    {products.length > 0 && (
                        <div className=" w-full p-2 mt-2 ">
                            {products.map((item) => {
                                return (
                                    <div className="flex justify-content-between w-full">
                                        <div className="w-1/6 px-1">
                                            <p className="text-xs text-left ">
                                                x{item.quantity}
                                            </p>
                                        </div>
                                        <div className="flex-grow-1 flex justify-content-between px-1 w-full">
                                            <div>
                                                <p className="text-gray-500 text-left text-xs mb-1">
                                                    {item.name}
                                                </p>
                                            </div>
                                            <div className="flex-grow-1 ml-4">
                                                <p className="text-black mb-0  text-xs text-right">
                                                    {currency}
                                                    {item.price}
                                                </p>
                                                {/* <p className="text-indigo-500 text-xs text-right">
                                                    Ingredients
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                {/* <div className="flex justify-content-between mt-2">
                    <p className="flex-grow-1 text-left text-xs text-black">
                        Subtotal
                    </p>
                    <p className="text-left text-xs text-black">{total}$</p>
                </div>
                <div className="flex justify-content-between">
                    <p className="flex-grow-1 text-left text-xs text-black">
                        Delivery
                    </p>
                    <p className="text-left text-xs text-black">{delivery}$</p>
                </div> */}
                <div className="flex justify-content-between ">
                    <p className="flex-grow-1 text-left text-xs text-black">
                        Total
                    </p>
                    <p className="text-left text-xs text-black">
                        {total + delivery}
                        {currency}
                    </p>
                </div>
            </section>
            <AuthModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}

export default Control;
