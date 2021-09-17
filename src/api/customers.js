import axiosIntance from "../axios-configured";

export const customerSignUp = (payload) => {
  return axiosIntance.post("/api/v1/customers/auth/signUp", payload);
};

export const customerSignIn = (payload) => {
  return axiosIntance.post("/api/v1/customers/auth/login", payload);
};

// export const addDeliveryAddress = (payload) => {
//   return axiosIntance.post("/api/v1/address/customers", payload);
// };

export const addDeliveryAddress = (payload) => {
  return axiosIntance.patch("/api/v1/customers/add-delivery-address", payload);
};

export const getDeliveryAddressList = () => {
  return axiosIntance.get("/api/v1/customers/delivery-address-list");
};

export const addContactUs = (payload) => {
  return axiosIntance.post("/api/v1/contact_us/customers", payload);
};

export const updateCustomerInfo = (payload) => {
  return axiosIntance.patch("/api/v1/customers", payload);
};

export const deleteAddressById = (id) => {
  return axiosIntance.patch(`/api/v1/customers/delivery-address/${id}`, {
    isDeleted: true,
  });
};

export const updateAddressById = (id, payload) => {
  return axiosIntance.patch(
    `/api/v1/customers/delivery-address/${id}`,
    payload
  );
};

export const getDeliveryDiscounts = () => {
  return axiosIntance.get("/api/v1/delivery/discount/public");
};

export const getDeliverableMenus = () => {
  return axiosIntance.get("/api/v1/menu/deliverables/customers/public");
};

export const getHotDeals = () => {
  return axiosIntance.get("/api/v1/delivery/discount/hotdeals/public");
};

export const uploadTempLogo = async (logo) => {
  return axiosIntance.post(`/api/v1/logo/owners`, logo);
};

export const changePassword = (payload) => {
  return axiosIntance.patch("/api/v1/customers/change-password", payload);
};

export const verifyResetPassCode = ({ data, id }) => {
  return axiosIntance.patch(
    `/api/v1/customers/auth/verify-reset-password-code/${id}`,
    data
  );
};

export const forgotPassword = (payload) => {
  return axiosIntance.patch("/api/v1/customers/auth/forgot-password", payload);
};

export const resetPassword = ({ id, data }) => {
  return axiosIntance.patch(
    `/api/v1/customers/auth/reset-password/${id}`,
    data
  );
};
