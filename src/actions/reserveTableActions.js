import axiosIntance from "../axios-configured";

export const reserveTable = (payload) => {
    return axiosIntance.post("/api/v1/reservations/create/customers", payload);
};
