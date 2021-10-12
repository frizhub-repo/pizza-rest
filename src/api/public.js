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

export const getReservationOffers = () =>
  axiosIntance.get("/api/v1/reservation/discount/public");

export const getOwnerFacebookPageId = () =>
  axiosIntance.get("/api/v1/owners/facebook/page-id/public");

export const getPaypalStatus = () =>
  axiosIntance.get("/api/v1/paypal/status/public");

export const createDiscountStats = (payload) =>
  axiosIntance.post("/api/v1/discountStats/customers/create", payload);
