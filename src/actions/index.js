export const setTotal = (price) => {
  return {
    type: "TOTAL",
    payload: price,
  };
};

export const addItem = (item) => {
  return { type: "ADD_ITEM", payload: item };
};

export const addDeliveryItem = (item) => {
  return { type: "ADD_DELIVERY_TIME", payload: item };
};

export const addOrderAddress = (item) => {
  return { type: "ADD_ORDER_ADDRESS", payload: item };
};

export const removeItem = (key) => {
  debugger;
  return { type: "REMOVE_ITEM", payload: { key } };
};

export const addQuantity = (key) => {
  debugger;
  return { type: "ADD_QUANTITY", payload: { key } };
};

export const removeQuantity = (key) => {
  debugger;
  return { type: "REMOVE_QUANTITY", payload: { key } };
};

export const addCurrency = (currency) => {
  return {
    type: "ADD_CURRENCY",
    payload: currency,
  };
};

export const removeOrderItems = () => {
  return {
    type: "REMOVE_ORDER_ITEMS",
  };
};
