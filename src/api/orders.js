import formatUrl from "utils/formatUrl";
import axiosInstance from "../axios-configured";

export const createOrder = ({ payload, queryParams = {} }) => {
  return axiosInstance.post(
    formatUrl("/api/v1/orders/customers", queryParams),
    payload
  );
};

export const getOrders = (payload) => {
  return axiosInstance.get("/api/v1/orders/customers");
};

export const getOrderById = (orderId) =>
  axiosInstance.get(`/api/v1/orders/${orderId}`);
