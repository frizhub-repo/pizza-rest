import { toast } from "react-toastify";
import axiosIntance from "../axios-configured";
import { IS_SUCCESS } from "../utils/types";

export const customerSignUp = (payload) => (dispatch) => {
    axiosIntance.post("/api/v1/customers/auth/signUp", payload).then((res) => {
        if (res.status === 200) {
            toast.success("Registeration successfull!");
            axiosIntance.defaults.headers.common["Authorization"] =
                res.data.token;
            authConfig(res.data.token);
            dispatch({ type: IS_SUCCESS, payload: true });
        }
    });
};

export const customerSignIn = (payload) => (dispatch) => {
    axiosIntance.post("/api/v1/customers/auth/login", payload).then((res) => {
        if (res.status === 200) {
            toast.success("Login successfull!");
            axiosIntance.defaults.headers.common["Authorization"] =
                res.data.token;
            authConfig(res.data.token);
        }
    });
};

const authConfig = (token) => {
    localStorage.setItem("token", token);
};
