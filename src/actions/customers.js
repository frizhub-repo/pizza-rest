export const addAddress = (item) => {
  return { type: "ADD_ADDRESS", payload: item };
};

export const getAddressList = (arr) => {
  return { type: "GET_DELIVERY_ADDRESS", payload: arr };
};

export const deleteAddress = (id) => {
  return { type: "DELETE_DELIVERY_ADDRESS", payload: id };
};

export const editAddress = (id, data) => {
  return { type: "EDIT_DELIVERY_ADDRESS", payload: { id, data } };
};
