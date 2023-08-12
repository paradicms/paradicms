import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react-dom";
import {WorksQuery} from "@paradicms/api";

export const useWorksQueryParam = (
  defaultWorksQuery: WorksQuery,
  name: string
): [WorksQuery, (worksQuery: WorksQuery) => void] => {
  const [worksQueryQueryParam, setWorksQuery] = useQueryParam<
    WorksQuery | undefined
  >(name, new JsonQueryParamConfig<WorksQuery>(WorksQuery));

  if (!worksQueryQueryParam) {
    return [{filters: defaultWorksQuery.filters}, setWorksQuery];
  }

  let {filters, ...otherWorksQuery} = worksQueryQueryParam;
  if (!filters || filters.length === 0) {
    filters = defaultWorksQuery.filters;
  }
  return [{filters, ...otherWorksQuery}, setWorksQuery];
};
