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
    default:
      return state;
  }
}
