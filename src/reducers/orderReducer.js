const initialState = {
    total: 0,
    products: [],
    minimum: 0,
    delivery: 0,
    currency: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const index = state.products
                .map(function (e) {
                    return e.product;
                })
                .indexOf(action.payload.product);
            if (index !== -1) {
                const products = state.products;
                products[index].quantity = products[index].quantity + 1;
                return { ...state, products };
            } else
                return {
                    ...state,
                    products: state.products.concat(action.payload),
                };

        case "TOTAL":
            return {
                ...state,
                total: state.total + action.payload,
            };
        case "ADD_CURRENCY":
            return {
                ...state,
                currency: action.payload,
            };

        case "REMOVE_ORDER_ITEMS":
            return {
                ...state,
                products: [],
                total: 0,
            };
        default:
            return state;
    }
}
