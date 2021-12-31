import {NumberParam, useQueryParam} from "use-query-params";

export const usePageQueryParam = (): {
  page: number;
  setPage: (page: number | undefined) => void;
} => {
  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );

  return {
    page: pageQueryParam ?? 0,
    setPage,
  };
};
