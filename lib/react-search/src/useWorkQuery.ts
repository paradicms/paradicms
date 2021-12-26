import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import {useEffect, useState} from "react";
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
  workQueryResults: WorkQueryResults;
} | null => {
  const {defaultFilters, workQueryService, worksPerPage} = kwds;

  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >("query", new JsonQueryParamConfig<WorkQuery>());
  const workQuery = workQueryQueryParam ?? {
    filters: defaultFilters,
  };

  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = pageQueryParam ?? 0;

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
  }, [workQuery, workQueryService, worksPerPage, page]);

  if (workQueryResults !== null) {
    return {
      page,
      pageMax: Math.ceil(workQueryResults.totalWorksCount / worksPerPage) - 1,
      setPage,
      setWorkQuery,
      workQuery,
      workQueryResults,
    };
  } else {
    return null;
  }
};
