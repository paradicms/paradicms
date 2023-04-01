import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react-dom";
import {WorkQuery} from "@paradicms/services";
import {Filter} from "@paradicms/filters";
import {workQuerySchema} from "@paradicms/services/dist/workQuerySchema";

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
