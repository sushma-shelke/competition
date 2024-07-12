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
    return await Post("users", json);
  },
};
