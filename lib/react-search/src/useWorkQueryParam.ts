import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import {WorkQuery} from "@paradicms/services";

export const useWorkQueryParam = (
  defaultWorkQuery: WorkQuery
): {
  setWorkQuery: (workQuery: WorkQuery) => void;
  workQuery: WorkQuery;
} => {
  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >("query", new JsonQueryParamConfig<WorkQuery>());

  return {
    setWorkQuery,
    workQuery: workQueryQueryParam ?? defaultWorkQuery,
  };
};
