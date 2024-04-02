import { initClient } from "@ts-rest/core";
import { GetServerSidePropsContext } from "next";

import { makeWithApi } from "@luminate/nextjs";
import { mainContract } from "@luminate/rest";

import { envClient } from "../env/client";

async function createApiClient({ req }: GetServerSidePropsContext) {
  const accessToken = req.cookies.token;
  return initClient(mainContract, {
    baseUrl: envClient.NEXT_PUBLIC_API_BASE_URL,
    baseHeaders: {
      "Content-Type": "application/json",
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
    jsonQuery: true,
  });
}

export const withApi = makeWithApi(createApiClient, {
  basePath: envClient.NEXT_PUBLIC_BASE_PATH,
  unauthorizedRedirectPath: envClient.NEXT_PUBLIC_LOGIN_PAGE_PATH,
});
