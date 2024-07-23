// import Get from "./RequestorApi";

import { Get, Post } from "./RequestorApi";

export const ListAllApi = {
  // faq
  getFAQ: async () => await Get(`/faq`),

  // products
  getProduct: async () => await Get("/getAllproduct"),
  getProductById: async (id) => await Get(`/getproductbyid/${id}`),
  getProductListByCategoryId: async (id) => await Get(`/getproductbycategoryid/${id}`),

  // category

   getCategory: async () => await Get("/categoryList"),

  //users
  getUsers: async () => await Get("/users/list"),

  //vote
  getvotes: async () => await Get("/votes/getAllvotes"),


  RegisterApi: async (json) => {
    return await Post("/users/createorloginuser", json);
  },

};
