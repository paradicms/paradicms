import {ObjectSearchPageProps} from "./ObjectSearchPageProps";
import {NumberParam, useQueryParam} from "use-query-params";
import {
  JoinedDataset,
  ObjectQuery,
  ObjectQueryResults,
} from "@paradicms/models";
import {JsonQueryParamConfig} from "@paradicms/react";
import {useEffect, useMemo, useState} from "react";

export const ObjectSearchPage: React.FunctionComponent<ObjectSearchPageProps> = ({
  children,
  objectsPerPage,
  objectQueryService,
}) => {
  const [objectQueryQueryParam, setObjectQuery] = useQueryParam<
    ObjectQuery | undefined
  >("query", new JsonQueryParamConfig<ObjectQuery>());
  const objectQuery = useMemo(
    () => objectQueryQueryParam ?? {filters: [], text: null},
    [objectQueryQueryParam]
  );

  let [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = useMemo(() => pageQueryParam ?? 0, [pageQueryParam]);

  const [
    objectQueryResults,
    setObjectQueryResults,
  ] = useState<ObjectQueryResults | null>(null);

  useEffect(() => {
    console.debug("Objects query:", JSON.stringify(objectQuery));
    console.debug("Page:", page);
    objectQueryService
      .getObjects({
        limit: objectsPerPage,
        offset: page * objectsPerPage,
        query: objectQuery,
      })
      .then(setObjectQueryResults);
  }, [objectQuery, objectQueryService, pageQueryParam]);

  const objectQueryResultsJoinedDataset = useMemo(
    () =>
      objectQueryResults !== null
        ? JoinedDataset.fromDataset(objectQueryResults.dataset)
        : null,
    [objectQueryResults]
  );

  if (objectQueryResults === null || objectQueryResultsJoinedDataset === null) {
    return null;
  }

  return children({
    objectQuery,
    objectQueryResults,
    objectQueryResultsJoinedDataset,
    page,
    pageMax:
      Math.ceil(objectQueryResults.totalObjectsCount / objectsPerPage) - 1,
    setObjectQuery,
    setPage,
  });
};
