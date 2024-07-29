// import Get from "./RequestorApi";

import { Get, Post } from "./RequestorApi";

export const ListAllApi = {
  // faq
  getFAQ: async () => await Get(`/faq`),

  // products
  getProduct: async () => await Get("/getAllproduct"),
  // getproductpagination: async()=>await Get('/getproduct'),
   getProductPagination :async (page, size) => 
     await Get(`/getproduct?page=${page}&size=${size}`),
  
  getProductById: async (id) => await Get(`/getproductbyid/${id}`),
  getProductListByCategoryId: async (id) =>
    await Get(`/getproductbycategoryid/${id}`),

  // category

  getCategory: async () => await Get("/categoryList"),


  //users
  getUsers: async () => await Get("/users/list"),

  //vote
  getvotes: async () => await Get("/votes/getAllvotes"),


  getTopVotedProduct: async () => await Get("/votes/top-voted"),

  RegisterApi: async (json) => {
    return await Post("/users/createorloginuser", json);
  },
};
