import { GET_PRODUCTS_BY_CATEGORY } from "../utils/types";
const initialState = {
    productsByCategory: [],
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case GET_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                productsByCategory: [
                    ...state.productsByCategory,
                    ...actions.payload,
                ],
            };
        default:
            return state;
    }
}
