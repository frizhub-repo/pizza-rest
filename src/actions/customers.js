export const addAddress = (item) => {
  return { type: "ADD_ADDRESS", payload: item };
};

export const getAddressList = (item) => {
  return { type: "GET_DELIVERY_ADDRESS", payload: item };
};
