import axiosIntance from "../axios-configured";

export const productsByCategory = () => {
  return axiosIntance.get("/api/v1/menu/customers/public");
};

export const getGoogleMyBusinessLocations = () => {
  return axiosIntance.get("/api/v1/my_business/locations/public");
};
