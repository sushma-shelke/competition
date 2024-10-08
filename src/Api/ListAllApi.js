// import Get from "./RequestorApi";

import { Get, Post, Delete } from "./RequestorApi";

export const ListAllApi = {
  // faq
  getFAQ: async () => await Get(`/faq`),

  // products
  getProduct: async () => await Get("/getAllproduct"),
  getProductPagination: async (page, size) =>
    await Get(`/getproduct?page=${page}&size=${size}`),

  getProductById: async (id) => await Get(`/getproductbyid/${id}`),
  getProductListByCategoryId: async (id) =>
    await Get(`/getproductbycategoryid/${id}`),

  // category
  getCategory: async () => await Get("/categoryList"),
  getCategoryPagination: async (id, page, size) =>
    await Get(`/getproductbycategoryid/${id}?page=${page}&size=${size}`),

  //users
  getUsers: async () => await Get("/users/list"),

  //vote
  getvotes: async () => await Get("/votes/getAllvotes"),
  // deletevote: async (json) => await Delete("/votes/delete", json),
   deletevote : async (votedata) => {
    return Delete('/votes/delete', votedata);
  },

  
  getTopVotedProduct: async () => await Get("/votes/top-voted"),
  getCategoryWiseTopVotedProduct: async (id) =>
    await Get(`/votes/category-wise-top-voted/${id}`),

  RegisterApi: async (json) => {
    return await Post("/users/createorloginuser", json);
  },
  CategorywiseWinner: async () => await Get("/votes/categorywisetopvoted"),
};
