import axiosIntance from "../axios-configured";

export const customerSignUp = (payload) => {
  return axiosIntance.post("/api/v1/customers/auth/signUp", payload);
};

export const customerSignIn = (payload) => {
  return axiosIntance.post("/api/v1/customers/auth/login", payload);
};

export const addDeliveryAddress = (payload) => {
  return axiosIntance.post("/api/v1/address/customers", payload);
};

export const getDeliveryAddressList = () => {
  return axiosIntance.get("/api/v1/address/customers");
};

export const addContactUs = (payload) => {
  return axiosIntance.post("/api/v1/contact_us/customers", payload);
};

export const updateCustomerInfo = (payload) => {
  return axiosIntance.patch("/api/v1/customers", payload);
};

export const deleteAddressById = (id) => {
  return axiosIntance.patch(`/api/v1/address/customers/${id}`, {
    isDeleted: true,
  });
};

export const updateAddressById = (id, payload) => {
  return axiosIntance.patch(`/api/v1/address/customers/${id}`, payload);
};
