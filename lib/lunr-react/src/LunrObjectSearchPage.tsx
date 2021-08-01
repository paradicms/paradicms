import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {
  Configuration,
  Dataset,
  IndexedDataset,
  JoinedDataset,
  ObjectJoinSelector,
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
  objectJoinSelector: ObjectJoinSelector;
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
}> = ({children, configuration, dataset, objectJoinSelector, objectsPerPage}) => {
  const [objectsQueryQueryParam, setObjectsQuery] = useQueryParam<ObjectsQuery | undefined>(
    "query",
    new JsonQueryParamConfig<ObjectsQuery>(),
  );
  const objectsQuery = useMemo(() => objectsQueryQueryParam ?? {filters: [], text: null}, [objectsQueryQueryParam]);

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam,
  );
  const page = useMemo(() => pageQueryParam ?? 0, [pageQueryParam]);

  const objectQueryService = useMemo<ObjectQueryService>(() => new LunrObjectQueryService({
    configuration,
    dataset: new IndexedDataset(dataset),
    objectJoinSelector,
  }), [configuration, dataset]);

  const [objectsQueryResults, setObjectsQueryResults] = useState<ObjectsQueryResults | null>(null);

  useEffect(() => {
    console.debug("Objects query:", JSON.stringify(objectsQuery));
    console.debug("Page:", page);
    objectQueryService.getObjects({
      limit: objectsPerPage,
      offset: page * objectsPerPage,
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
    page,
    pageMax: Math.ceil(objectsQueryResults.totalObjectsCount / objectsPerPage) - 1,
    setObjectsQuery,
    setPage,
  });
}