import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react-dom";
import {WorkQuery} from "@paradicms/services";

export const useWorkQueryParam = (
  defaultWorkQuery: WorkQuery,
  name: string
): [WorkQuery, (workQuery: WorkQuery) => void] => {
  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >(name, new JsonQueryParamConfig<WorkQuery>());

  if (!workQueryQueryParam) {
    return [defaultWorkQuery, setWorkQuery];
  }

  let {filters, ...otherWorkQuery} = workQueryQueryParam;
  if (filters.length === 0) {
    filters = defaultWorkQuery.filters;
  }
  return [{filters, ...otherWorkQuery}, setWorkQuery];
};
