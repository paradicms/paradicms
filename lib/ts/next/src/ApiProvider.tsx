import * as React from "react";
import {ApiConfiguration} from "./ApiConfiguration";
import {useEffect, useState} from "react";
import {Api} from "@paradicms/api";
import {createApi} from "./createApi";
import {ApiContext} from "./ApiContext";

/**
 * Component that creates an Api instance from an ApiConfiguration and provides it to the useApi hook.
 */
export const ApiProvider: React.FunctionComponent<React.PropsWithChildren<{
  apiConfiguration: ApiConfiguration;
}>> = ({apiConfiguration, children}) => {
  const [api, setApi] = useState<Api | null>(null);

  useEffect(() => {
    if (api !== null) {
      return;
    }
    createApi(apiConfiguration).then(setApi);
  }, [apiConfiguration]);

  if (api == null) {
    return null;
  }

  return <ApiContext.Provider value={api}>children</ApiContext.Provider>;
};
