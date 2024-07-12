// import Get from "./RequestorApi";

import { Get } from "./RequestorApi";

export const ListAllApi = {
  // faq
  getFAQ: async () => await Get(`/faq`),
};
