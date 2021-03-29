import { IS_SUCCESS } from "../utils/types";
const initialState = {
    isSuccess: false,
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case IS_SUCCESS:
            return { ...state, isSuccess: actions.payload };
        default:
            return state;
    }
}
