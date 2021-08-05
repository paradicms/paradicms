import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import {
  Configuration,
  Dataset,
  IndexedDataset,
  JoinedDataset,
  ObjectJoinSelector,
  ObjectQuery,
  ObjectQueryResults,
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
    objectQuery: ObjectQuery;
    objectQueryResults: ObjectQueryResults;
    objectQueryResultsJoinedDataset: JoinedDataset;
    page: number;
    pageMax: number;
    setObjectQuery: (objectQuery: ObjectQuery) => void;
    setPage: (page: number | undefined) => void
  }) => React.ReactElement
}> = ({children, configuration, dataset, objectJoinSelector, objectsPerPage}) => {
  const [objectQueryQueryParam, setObjectQuery] = useQueryParam<ObjectQuery | undefined>(
    "query",
    new JsonQueryParamConfig<ObjectQuery>(),
  );
  const objectQuery = useMemo(() => objectQueryQueryParam ?? {filters: [], text: null}, [objectQueryQueryParam]);

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

  const [objectQueryResults, setObjectQueryResults] = useState<ObjectQueryResults | null>(null);

  useEffect(() => {
    console.debug("Objects query:", JSON.stringify(objectQuery));
    console.debug("Page:", page);
    objectQueryService.getObjects({
      limit: objectsPerPage,
      offset: page * objectsPerPage,
      query: objectQuery,
    }).then(setObjectQueryResults);
  }, [objectQuery, objectQueryService, pageQueryParam]);

  const objectQueryResultsJoinedDataset = useMemo(() => objectQueryResults !== null ? JoinedDataset.fromDataset(objectQueryResults.dataset) : null, [objectQueryResults]);

  if (objectQueryResults === null || objectQueryResultsJoinedDataset === null) {
    return null;
  }

  return children({
    objectQuery,
    objectQueryResults,
    objectQueryResultsJoinedDataset,
    page,
    pageMax: Math.ceil(objectQueryResults.totalObjectsCount / objectsPerPage) - 1,
    setObjectQuery,
    setPage,
  });
}