import axios from "axios";
import { START_LOADING, STOP_LOADING } from "./utils/types";
import store from "./store";
import { toast } from "react-toastify";

let axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const setAuthHeader = (clientId, token) => {
  axiosIntance.defaults.headers.common["clientid"] = clientId;
  axiosIntance.defaults.headers.common["Authorization"] = token;
};

setAuthHeader(
  process.env.REACT_APP_CLIENT_ID,
  window.localStorage.getItem("token")
);

axiosIntance.interceptors.request.use(
  (config) => {
    store.dispatch({ type: START_LOADING });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosIntance.interceptors.response.use(
  (response) => {
    store.dispatch({ type: STOP_LOADING });
    return response.data;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.data.status >= 400 &&
      error.response.data.status < 500;
    if (expectedError) {
      // toast.error(error.response.data.message);
      console.log({ error });
    } else {
      console.log(error);
    }
    store.dispatch({ type: STOP_LOADING });
    return Promise.reject(error);
  }
);

export default axiosIntance;
