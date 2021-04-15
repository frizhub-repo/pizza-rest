import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import axiosIntance from "../../axios-configured";
import { toast } from "react-toastify";
import {
  removeOrderItems,
  removeItem,
  addQuantity,
  removeQuantity,
} from "../../actions/index";
import { useRestaurantContext } from "../../Context/restaurantContext";
import AuthModal from "../Auth/AuthModal";
import { createOrder } from "../../api/orders";
import { useHistory } from "react-router";
import CompleteOrderModal from "../CustomComponents/CompleteOrderModal";
import { Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Control() {
  let { token } = useRestaurantContext();
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const total = useSelector((state) => state.orders).total;
  const products = useSelector((state) => state.orders).products;
  const minimum = useSelector((state) => state.orders).minimum;
  const delivery = useSelector((state) => state.orders).delivery;
  const currency = useSelector((state) => state.orders).currency;
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const disp = useDispatch();
  const [showBtn, setShowBtn] = useState("toOrder");
  const [status, setStatus] = useState(null);

  var fundingSource = window.paypal.FUNDING.PAYPAL;

  const orderNow = async () => {
    try {
      setLoading(true);
      const res = await axiosIntance.post("/api/v1/orders/customers", {
        products: products,
      });
      toast.success("Order created successfully");
      disp(removeOrderItems());
      setLoading(false);

      // setShowBtn("toOrder");
    } catch (error) {
      setLoading(false);

      console.log({ error });
    }
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Restaurant Club",
          amount: {
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    setStatus("inProgress");
    const order = await actions.order.capture();
    if (order?.status === "COMPLETED") {
      // toast.success("Payment got successfull");
      setStatus("COMPLETED");
      await orderNow();
    } else {
      setStatus("ERROR");
      toast.error("Something went wrong");
    }
    console.log({ order });
  };

  const onError = (err) => {
    setStatus("ERROR");
    toast.error("Error occured while sending money");
    console.log({ err });
  };

  const onCancel = (data) => {
    setStatus("CANCEL");
    // toast.error("Payment cancel by user");
    console.log({ data });
  };

  return (
    <div className="w-full ml-4 p-1">
      <h1 className="text-justify text-gray-500 font-weight-bold text-lg mb-2">
        <i className="fas fa-shopping-basket"></i> Toltal: {total ? total : 0}
        {currency}
      </h1>
      {showBtn === "Payment" ? (
        <section>
          <Card style={{ padding: "20px" }}>
            <p style={{ textAlign: "start", padding: "5px" }}>Pay With</p>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
              fundingSource={fundingSource}
              onError={(err) => onError(err)}
              onCancel={(data) => onCancel(data)}
            />
            {status === "inProgress" && (
              <p style={{ fontSize: "12px" }}>Your payment is in progress...</p>
            )}
          </Card>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => setShowBtn("toOrder")}
          >
            <ArrowBackIcon style={{ cursor: "pointer" }} />
            <label style={{ cursor: "pointer" }}>Go Back</label>
          </div>
        </section>
      ) : (
        <section className="p-3 border border-gray-300 shadow-sm">
          <div className="mb-3">
            {/* {minimum - total > 0 && (
                        <p className="text-xs text-left text-gray-500 mt-1 mb-3">
                            ${minimum - total} to reach the minimum order
                        </p>
                    )} */}
            {token ? (
              <button
                disabled={products?.length ? false : true}
                // onClick={() => setShowBtn("Payment")}
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

            {products?.length > 0 && (
              <div className=" w-full p-2 mt-2 ">
                {products?.map((item) => {
                  return (
                    <div
                      className="flex justify-content-between w-full"
                      style={{ alignItems: "center" }}
                    >
                      <div
                        style={{
                          width: "15%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <button>
                          <ArrowDropUpIcon
                            onClick={() => {
                              disp(addQuantity(item.product));
                            }}
                            style={{ cursor: "pointer" }}
                          />
                        </button>
                        <button disabled={item.quantity > 1 ? false : true}>
                          <ArrowDropDownIcon
                            onClick={() => {
                              disp(removeQuantity(item.product));
                            }}
                            style={{ cursor: "pointer" }}
                          />
                        </button>
                      </div>
                      <div style={{ width: "10%", marginTop: "3px" }}>
                        <label className="text-xs text-left ">
                          x{item.quantity}
                        </label>
                      </div>
                      <div style={{ width: "40%" }}>
                        <label className="text-gray-500 text-left text-xs mb-1">
                          {item.name}
                        </label>
                      </div>
                      <div style={{ width: "20%" }}>
                        <label className="text-black mb-0  text-xs text-right">
                          {currency}
                          {item.price}
                        </label>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "15%",
                          justifyContent: "flex-end",
                        }}
                      >
                        <DeleteIcon
                          style={{ height: 15 }}
                          onClick={() => {
                            disp(removeItem(item.product));
                          }}
                        />
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
            <p className="flex-grow-1 text-left text-xs text-black">Total</p>
            <p className="text-left text-xs text-black">
              {total ? total + delivery : 0}
              {currency}
            </p>
          </div>
        </section>
      )}

      <AuthModal show={modalShow} onHide={() => setModalShow(false)} />
      <CompleteOrderModal show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Control;
