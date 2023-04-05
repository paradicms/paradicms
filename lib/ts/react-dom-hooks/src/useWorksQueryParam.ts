import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react-dom";
import {Filter, WorksQuery, worksQuerySchema} from "@paradicms/services";

export const useWorksQueryParam = (
  defaultWorksQuery: {
    filters: readonly Filter[];
  },
  name: string
): [WorksQuery, (worksQuery: WorksQuery) => void] => {
  const [worksQueryQueryParam, setWorksQuery] = useQueryParam<
    WorksQuery | undefined
  >(name, new JsonQueryParamConfig<WorksQuery>(worksQuerySchema));

  if (!worksQueryQueryParam) {
    return [{filters: defaultWorksQuery.filters}, setWorksQuery];
  }

  let {filters, ...otherWorksQuery} = worksQueryQueryParam;
  if (filters.length === 0) {
    filters = defaultWorksQuery.filters;
  }
  return [{filters, ...otherWorksQuery}, setWorksQuery];
};
