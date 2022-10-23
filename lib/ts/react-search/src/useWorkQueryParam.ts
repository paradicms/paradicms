import {useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "../../react-dom";
import {WorkQuery} from "@paradicms/services";

export const useWorkQueryParam = (
  defaultWorkQuery: WorkQuery,
  name: string
): [WorkQuery, (workQuery: WorkQuery) => void] => {
  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >(name, new JsonQueryParamConfig<WorkQuery>());

  return [workQueryQueryParam ?? defaultWorkQuery, setWorkQuery];
};
