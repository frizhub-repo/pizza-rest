import axiosIntance from "../axios-configured";

export const productsByCategory = () => {
  return axiosIntance.get("/api/v1/products/category/public");
};

export const customerMenu = () => {
  return axiosIntance.get("/api/v1/menu/customers/public");
};

export const getGoogleMyBusinessLocations = () => {
  return axiosIntance.get("/api/v1/my_business/locations/public");
};

export const getSpecialMenus = () =>
  axiosIntance.get("/api/v1/menu/special/customers/public");
