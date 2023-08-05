import React from "react";
import {Api} from "@paradicms/api";

/**
 * Context for ApiProvide/useApi.
 */
export const ApiContext = React.createContext<Api | null>(null);
