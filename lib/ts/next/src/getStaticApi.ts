import {Api} from "@paradicms/api";
import {getStaticApiConfiguration} from "./getStaticApiConfiguration";
import {createApi} from "./createApi";

let _staticApi: Api | undefined;

/**
 * Get an Api implementation for use in getStaticPath/getStaticProps.
 */
export const getStaticApi = async (): Promise<Api> => {
  if (typeof _staticApi !== "undefined") {
    return Promise.resolve(_staticApi);
  }

  _staticApi = await createApi(await getStaticApiConfiguration());
  return _staticApi!;
};
