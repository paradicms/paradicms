import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {
  Configuration,
  Dataset,
  IndexedDataset,
  JoinedDataset,
  ObjectsQuery,
  ObjectsQueryResults,
} from "@paradicms/models";
import {NumberParam, useQueryParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/react";
import {ObjectQueryService} from "@paradicms/services";
import {LunrObjectQueryService} from "@paradicms/lunr";

export const LunrObjectSearchPage: React.FunctionComponent<{
  configuration: Configuration;
  dataset: Dataset;
  objectsPerPage: number;
  children: (kwds: {
    objectsQuery: ObjectsQuery;
    objectsQueryResults: ObjectsQueryResults;
    objectsQueryResultsJoinedDataset: JoinedDataset;
    page: number;
    pageMax: number;
    setObjectsQuery: (objectsQuery: ObjectsQuery) => void;
    setPage: (page: number | undefined) => void
  }) => React.ReactElement
}> = ({children, configuration, dataset, objectsPerPage}) => {
  const [objectsQuery, setObjectsQuery] = useQueryParam<ObjectsQuery>(
    "query",
    new JsonQueryParamConfig<ObjectsQuery>(),
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam,
  );

  const objectQueryService = useMemo<ObjectQueryService>(() => new LunrObjectQueryService({
    configuration,
    dataset: new IndexedDataset(dataset),
  }), [configuration, dataset]);

  const [objectsQueryResults, setObjectsQueryResults] = useState<ObjectsQueryResults | null>(null);

  useEffect(() => {
    objectQueryService.getObjects({
      limit: objectsPerPage,
      offset: (pageQueryParam ?? 0) * objectsPerPage,
      query: objectsQuery,
    }).then(setObjectsQueryResults);
  }, [objectsQuery, objectQueryService, pageQueryParam]);

  const objectsQueryResultsJoinedDataset = useMemo(() => objectsQueryResults !== null ? JoinedDataset.fromDataset(objectsQueryResults.dataset) : null, [objectsQueryResults]);

  if (objectsQueryResults === null || objectsQueryResultsJoinedDataset === null) {
    return null;
  }

  return children({
    objectsQuery,
    objectsQueryResults,
    objectsQueryResultsJoinedDataset,
    page: pageQueryParam ?? 0,
    pageMax: Math.ceil(objectsQueryResults.totalObjectsCount / objectsPerPage) - 1,
    setObjectsQuery,
    setPage,
  });
}