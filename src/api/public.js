import axiosIntance from "../axios-configured";

export const productsByCategory = () => {
  return axiosIntance.get("/api/v1/products/category/public");
};
