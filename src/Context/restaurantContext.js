import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
import axiosInstance from "../axios-configured";

const RestaurantConetxt = React.createContext();

export function RestaurantProvider({ children }) {
    const [token, setToken] = React.useState(
        window?.localStorage?.getItem("token")
    );
    const [restaurant, setRestaurant] = useState({});
    const [customerData, setCustomerData] = useState({});

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
    }, [token]);

    useEffect(async () => {
        const data = await fetchRestaurantInfo();
        setRestaurant(data);
    }, []);

    return (
        <RestaurantConetxt.Provider
            value={{ token, setToken, restaurant, customerData }}
        >
            {children}
        </RestaurantConetxt.Provider>
    );
}

export function useRestaurantConetxt() {
    const context = React.useContext(RestaurantConetxt);
    if (context === undefined) {
        throw new Error(
            "useRestaurantConetxt can only be used inside UserProvider"
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
        axiosInstance.defaults.headers.common[
            "Authorization"
        ] = window.localStorage.getItem("token");
        const res = await axiosInstance.get("/api/v1/customers");
        return res?.data;
    } catch (error) {
        console.log({ error });
    }
}
