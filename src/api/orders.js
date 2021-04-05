import axiosInstance from "../axios-configured";

export const createOrder = (payload) => {
  return axiosInstance.post("/api/v1/orders/customers", payload);
};

export const getOrders = (payload) => {
  return axiosInstance.get("/api/v1/orders/customers");
};
