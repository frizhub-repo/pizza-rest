import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import axiosInstance from "../axios-configured";
import { getPaypalStatus } from "api/public";

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

  const [paypalData, setPaypalData] = React.useState({});
  const [isPaypalLoading, setIsPaypalLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        setIsPaypalLoading(true);
        const res = await getPaypalStatus();
        setPaypalData(res.data);
        setIsPaypalLoading(false);
      } catch (error) {
        setIsPaypalLoading(false);
        console.log({ error });
      }
    })();
  }, []);

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
        paypalData,
        isPaypalLoading,
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
