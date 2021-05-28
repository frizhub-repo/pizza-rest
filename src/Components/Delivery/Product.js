import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, setTotal, addCurrency } from "../../actions";
import { useRestaurantContext } from "../../Context/restaurantContext";

function Product({ name, price, desc, key, currency, id }) {
  const disp = useDispatch();

  const { restaurant } = useRestaurantContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      product: id,
      name: name,
      price: price,
      quantity: 1,
    };
    disp(addItem(product));
    disp(setTotal(price));
    disp(addCurrency(currency));
  };
  return (
    <section className="text-gray-700 body-font mt-0  h-28 w-full mb-8">
      <div className="px-2 py-4">
        <div className="  flex  align-content-center m-2">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full h-24 object-cover object-center rounded"
            src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
          />
          <div className="lg:w-1/2 w-full px-3   flex-grow-1">
            <div className="d-flex w-full justify-content-between ">
              <h1 className="text-green-500 text-md text-left title-font font-weight-bold mb-2 flex-grow-1">
                {name}
              </h1>
              <button
                className="h-6  border-2 border-green-300 text-center text-green-500 bg-green-500 bg-opacity-50   text-xs focus:outline-none py-1 px-2 "
                onClick={handleSubmit}
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Add to Cart
              </button>
            </div>

            <p className="leading-relaxed text-sm mb-0 text-left text-gray-400 font-weight-normal">
              {desc}
            </p>
            <div className="flex  items-center mt-1  ">
              {price} {currency}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
