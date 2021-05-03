const initialState = {
  addresses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.concat(action.payload),
      };
    case "GET_DELIVERY_ADDRESS":
      return { ...state, addresses: action.payload };
    case "DELETE_DELIVERY_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "EDIT_DELIVERY_ADDRESS":
      const address = state.addresses.findIndex(
        (address) => address._id === action.payload.id
      );
      state.addresses[address] = {
        ...state.addresses[address],
        ...action.payload.data,
      };
      return {
        ...state,
      };
    default:
      return state;
  }
}
