import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import axiosInstance from "../axios-configured";

const RestaurantContext = React.createContext();

export function RestaurantProvider({ children }) {
  const [token, setToken] = React.useState(
    window?.localStorage?.getItem("token")
  );
  const [restaurant, setRestaurant] = useState({});
  const [customerData, setCustomerData] = useState({});
  const [refetchCustomer, setRefetchCustomer] = useState(false);

  const refetchCustomerHandler = () => {
    setRefetchCustomer(!refetchCustomer);
  };

  useEffect(async () => {
    if (token) {
      try {
        const data = await fetchCustomerInfo();
        setCustomerData(data);
        let decoded = jwtDecode(token);
        if (Date.now() >= decoded.exp * 1000) {
          throw Error("token expired");
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        window.location.reload();
      }
    }
  }, [token, refetchCustomer]);

  useEffect(async () => {
    const data = await fetchRestaurantInfo();

    let config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${data?.restaurant?.placeId}&fields=name,rating,formatted_phone_number,formatted_address&key=AIzaSyDDANw8GBVlla0rxNNegrBFhxjQizW6ZjE`,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios(config)
      .then((res) => console.log("Place data =>", JSON.stringify(res?.data)))
      .catch((err) => console.log({ err }));

    setRestaurant(data);
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        token,
        setToken,
        restaurant,
        customerData,
        refetchCustomerHandler,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurantContext() {
  const context = React.useContext(RestaurantContext);
  if (context === undefined) {
    throw new Error(
      "useRestaurantContext can only be used inside UserProvider"
    );
  }
  return context;
}

async function fetchRestaurantInfo() {
  try {
    const res = await axiosInstance.get("/api/v1/app/public/restaurant");
    return res?.data;
  } catch (error) {
    console.log({ error });
  }
}

async function fetchCustomerInfo() {
  try {
    axiosInstance.defaults.headers.common["Authorization"] =
      window.localStorage.getItem("token");
    const res = await axiosInstance.get("/api/v1/customers");
    return res?.data;
  } catch (error) {
    console.log({ error });
  }
}
