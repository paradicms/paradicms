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

const OBJECTS_PER_PAGE = 10;

export const NextSearchPage: React.FunctionComponent<{
  configuration: Configuration;
  dataset: Dataset;
  children: (kwds: {
    objectsQuery: ObjectsQuery;
    objectsQueryResults: ObjectsQueryResults;
    objectsQueryResultsJoinedDataset: JoinedDataset;
    page: number;
    pageMax: number;
    setObjectsQuery: (objectsQuery: ObjectsQuery) => void;
    setPage: (page: number | undefined) => void
  }) => React.ReactElement}> = ({children, configuration, dataset}) => {
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
      limit: OBJECTS_PER_PAGE,
      offset: (pageQueryParam ?? 0) * OBJECTS_PER_PAGE,
      query: objectsQuery,
    }).then(setObjectsQueryResults);
  }, [objectsQuery, objectQueryService, pageQueryParam]);

  const objectsQueryResultsJoinedDataset = useMemo(() => objectsQueryResults !== null ? JoinedDataset.fromDataset(objectsQueryResults.dataset) : null, [objectsQueryResults]);

  if (objectsQueryResults === null || objectsQueryResultsJoinedDataset === null) {
    return null;
  }

  return children({
    page: pageQueryParam ?? 0,
    pageMax: Math.ceil(objectsQueryResults.totalObjectsCount / OBJECTS_PER_PAGE) - 1,
    objectsQuery,
    objectsQueryResults,
    objectsQueryResultsJoinedDataset,
    setObjectsQuery,
    setPage,
  });
}