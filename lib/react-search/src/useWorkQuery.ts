import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import {useEffect, useMemo, useState} from "react";
import {
  WorkQuery,
  WorkQueryResults,
  WorkQueryService,
} from "@paradicms/services";
import {Filter} from "@paradicms/filters";

export const useWorkQuery = (kwds: {
  defaultFilters: readonly Filter[];
  workQueryService: WorkQueryService;
  worksPerPage: number;
}): {
  page: number;
  pageMax: number;
  setWorkQuery: (workQuery: WorkQuery) => void;
  setPage: (page: number | undefined) => void;
  workQuery: WorkQuery;
  workQueryResults: WorkQueryResults | null;
} => {
  const {defaultFilters, workQueryService, worksPerPage} = kwds;

  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >("query", new JsonQueryParamConfig<WorkQuery>());
  const workQuery = useMemo(
    () =>
      workQueryQueryParam ?? {
        filters: defaultFilters,
      },
    [defaultFilters, workQueryQueryParam]
  );

  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = useMemo(() => pageQueryParam ?? 0, [pageQueryParam]);

  const [
    workQueryResults,
    setWorkQueryResults,
  ] = useState<WorkQueryResults | null>(null);

  useEffect(() => {
    console.debug("Works query:", JSON.stringify(workQuery));
    console.debug("Page:", page);
    workQueryService
      .getWorks({
        limit: worksPerPage,
        offset: page * worksPerPage,
        query: workQuery,
      })
      .then(setWorkQueryResults);
  }, [page, workQuery, workQueryService, worksPerPage]);

  return {
    page,
    pageMax: workQueryResults
      ? Math.ceil(workQueryResults.totalWorksCount / worksPerPage) - 1
      : page,
    setPage,
    setWorkQuery,
    workQuery,
    workQueryResults,
  };
};
