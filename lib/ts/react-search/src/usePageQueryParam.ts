import {NumberParam, useQueryParam} from "use-query-params";

export const usePageQueryParam = (
  name: string
): [number, (page: number | undefined) => void] => {
  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    name,
    NumberParam
  );

  return [pageQueryParam ?? 0, setPage];
};
