import {ApiConfiguration} from "./ApiConfiguration";
import {Api} from "@paradicms/api";
import {ModelSetFactory} from "@paradicms/models";
import {MemApi} from "@paradicms/mem-api";

/**
 * Factory for Api implementations.
 */
export const createApi = async (
  apiConfiguration: ApiConfiguration
): Promise<Api> => {
  switch (apiConfiguration.type) {
    case "mem":
      return new MemApi({
        modelSet: await ModelSetFactory.fromJsonLd(
          apiConfiguration.modelSetJsonLd
        ),
      });
  }
};
