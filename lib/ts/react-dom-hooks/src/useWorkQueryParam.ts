import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react-dom";
import {Filter, workQuerySchema, WorksQuery} from "@paradicms/services";

export const useWorkQueryParam = (
  defaultWorkQuery: {
    filters: readonly Filter[];
  },
  name: string
): [WorksQuery, (workQuery: WorksQuery) => void] => {
  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorksQuery | undefined
  >(name, new JsonQueryParamConfig<WorksQuery>(workQuerySchema));

  if (!workQueryQueryParam) {
    return [{filters: defaultWorkQuery.filters}, setWorkQuery];
  }

  let {filters, ...otherWorkQuery} = workQueryQueryParam;
  if (filters.length === 0) {
    filters = defaultWorkQuery.filters;
  }
  return [{filters, ...otherWorkQuery}, setWorkQuery];
};
