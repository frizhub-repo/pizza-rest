import axiosIntance from "../axios-configured";
import { GET_PRODUCTS_BY_CATEGORY } from "../utils/types";

export const productsByCategory = () => async (dispatch) => {
    const res = await axiosIntance.get("/api/v1/products/category/public");
    if (res?.status === 200) {
        dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: res?.data });
    }
};
