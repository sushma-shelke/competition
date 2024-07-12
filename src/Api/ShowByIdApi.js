import { Get } from "./RequestorApi";

export const ShowByIdApi = {
  showCompitation: async (id) => await Get(`/competitions/${id}`),

  // show compitation Media
  showCompitationMedia: async (id) => await Get(`uploads?competition_id=${id}`),
  showCompetitionByEntry: async (id) => await Get(`entries/competition/${id}`),
};
