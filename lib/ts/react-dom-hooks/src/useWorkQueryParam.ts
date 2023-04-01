import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react-dom";
import {Filter, WorkQuery, workQuerySchema} from "@paradicms/services";

export const useWorkQueryParam = (
  defaultWorkQuery: {
    filters: readonly Filter[];
  },
  name: string
): [WorkQuery, (workQuery: WorkQuery) => void] => {
  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >(name, new JsonQueryParamConfig<WorkQuery>(workQuerySchema));

  if (!workQueryQueryParam) {
    return [{filters: defaultWorkQuery.filters}, setWorkQuery];
  }

  let {filters, ...otherWorkQuery} = workQueryQueryParam;
  if (filters.length === 0) {
    filters = defaultWorkQuery.filters;
  }
  return [{filters, ...otherWorkQuery}, setWorkQuery];
};
