import {NumberParam, useQueryParam} from "use-query-params";

export const usePageQueryParam = (
  name: string
): {
  page: number;
  setPage: (page: number | undefined) => void;
} => {
  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    name,
    NumberParam
  );

  return {
    page: pageQueryParam ?? 0,
    setPage,
  };
};
