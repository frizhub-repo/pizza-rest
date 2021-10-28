import axiosIntance from "../axios-configured";

export const setupIntent = async () => {
  return axiosIntance.post("/api/v1/stripe/setup-intent");
};
