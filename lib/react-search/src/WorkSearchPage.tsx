import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {
  JoinedWorkQueryResults,
  WorkQuery,
  WorkSearchConfiguration,
} from "@paradicms/models";
import {WorkQueryService} from "@paradicms/services";

export const WorkSearchPage: React.FunctionComponent<{
  configuration: WorkSearchConfiguration;
  workQueryService: WorkQueryService;
  worksPerPage: number;
  children: (kwds: {
    workQuery: WorkQuery;
    workQueryResults: JoinedWorkQueryResults;
    page: number;
    pageMax: number;
    setWorkQuery: (workQuery: WorkQuery) => void;
    setPage: (page: number | undefined) => void;
  }) => React.ReactElement;
}> = ({children, configuration, worksPerPage, workQueryService}) => {
  const [workQueryQueryParam, setWorkQuery] = useQueryParam<
    WorkQuery | undefined
  >("query", new JsonQueryParamConfig<WorkQuery>());
  const workQuery = useMemo(
    () =>
      workQueryQueryParam ?? {
        filters: configuration.filters,
      },
    [workQueryQueryParam]
  );

  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = useMemo(() => pageQueryParam ?? 0, [pageQueryParam]);

  const [
    workQueryResults,
    setWorkQueryResults,
  ] = useState<JoinedWorkQueryResults | null>(null);

  useEffect(() => {
    console.debug("Works query:", JSON.stringify(workQuery));
    console.debug("Page:", page);
    workQueryService
      .getWorks({
        limit: worksPerPage,
        offset: page * worksPerPage,
        query: workQuery,
      })
      .then(workQueryResults => {
        setWorkQueryResults({
          dataset: workQueryResults.dataset,
          facets: workQueryResults.facets.map(facet =>
            workQueryResults.dataset.facet(facet)
          ),
          totalWorksCount: workQueryResults.totalWorksCount,
        });
      });
  }, [workQuery, workQueryService, worksPerPage, page]);

  if (workQueryResults === null) {
    return null;
  }

  return children({
    workQuery,
    workQueryResults,
    page,
    pageMax: Math.ceil(workQueryResults.totalWorksCount / worksPerPage) - 1,
    setWorkQuery,
    setPage,
  });
};
