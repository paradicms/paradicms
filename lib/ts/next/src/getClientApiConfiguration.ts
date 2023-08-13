import {ApiConfiguration} from "./ApiConfiguration";
import {getStaticApiConfiguration} from "./getStaticApiConfiguration";

export const getClientApiConfiguration = async (): Promise<ApiConfiguration> =>
  getStaticApiConfiguration();
