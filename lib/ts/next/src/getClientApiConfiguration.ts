import {ApiConfiguration} from "./ApiConfiguration";
import {getStaticApiConfiguration} from "./getStaticApiConfiguration";

export const getClientApiConfiguration = async (): Promise<ApiConfiguration> => {
  if (process.env.PARADICMS_CLIENT_API?.toLowerCase() === "rest") {
    // log.info("using REST client API");
    return {
      type: "rest",
    };
  }

  return getStaticApiConfiguration();
};
