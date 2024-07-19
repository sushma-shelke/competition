// import Get from "./RequestorApi";

import { Get, Post } from "./RequestorApi";

export const ListAllApi = {
  // faq
  getFAQ: async () => await Get(`/faq`),

  // products
  getProduct: async () => await Get("/getAllproduct"),
  getProductById: async (id) => await Get(`/getproductbyid/${id}`),

  // category
  getCategory: async () => {
    await Get("/categoryList");
  },
  RegisterApi: async (json) => {
    return await Post("/users/createorloginuser", json);
  },
};
