import axiosIntance from "../axios-configured";

export const getSocialImages = () => {
  return axiosIntance.get("/api/v1/cms/social-accounts-images/public");
};
