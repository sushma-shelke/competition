// import Get from "./RequestorApi";

import { Get } from "./RequestorApi";

export const ListAllApi = {
  // faq
  getFAQ: async () => await Get(`/faq`),

// products
  getProduct: async () => await Get("/getAllproduct"),
  getProductById: async (id) => await Get(`/getproductbyid/${id}`),
  getProductListByCategoryId: async (id) => await Get(`/getproductbycategoryid/${id}`),

  // category
   getCategory: async () => await Get("/categoryList"),
};
