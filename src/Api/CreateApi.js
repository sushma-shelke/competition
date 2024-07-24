import { Post, Login } from "./RequestorApi";

export const CreateApi = {
  PostSurvey: async (json) => {
    return await Post("entry", json);
  },

  // LOGIN
  LoginApi: async (json) => {
    return await Login("login", json);
  },
  RegisterApi: async (json) => {
    return await Post("users/createorloginuser", json);
  },
  // Participation Form
  AddProduct: async (json) => {
    return await Post("/addproduct", json);
  },
};
