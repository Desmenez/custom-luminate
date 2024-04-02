import { contract } from "../../contracts";
import { GetBannerQueryParams, GetBannerResponse } from "./dto";

export * from "./dto";

export const bannerContract = contract.router({
  getBanners: contract.query({
    method: "GET",
    path: "",
    query: GetBannerQueryParams,
    responses: {
      200: GetBannerResponse,
    },
  }),
});
