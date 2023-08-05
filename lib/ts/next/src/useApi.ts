import {ApiContext} from "./ApiContext";
import {requireNonNull} from "@paradicms/utilities";
import {useContext} from "react";

/**
 * Hook to access an Api implementation provided by <ApiProvider>.
 */
export const useApi = () => requireNonNull(useContext(ApiContext));
