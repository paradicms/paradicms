import {ObjectSearchPageProps} from "./ObjectSearchPageProps";
import {NumberParam, useQueryParam} from "use-query-params";
import {
  JoinedDataset,
  JoinedObjectQueryResults,
  ObjectQuery,
} from "@paradicms/models";
import {JsonQueryParamConfig} from "@paradicms/react";
import {useEffect, useMemo, useState} from "react";

export const ObjectSearchPage: React.FunctionComponent<ObjectSearchPageProps> = ({
  children,
  configuration,
  objectsPerPage,
  objectQueryService,
}) => {
  const [objectQueryQueryParam, setObjectQuery] = useQueryParam<
    ObjectQuery | undefined
  >("query", new JsonQueryParamConfig<ObjectQuery>());
  const objectQuery = useMemo(
    () =>
      objectQueryQueryParam ?? {
        filters: configuration.filters,
        text: null,
      },
    [objectQueryQueryParam]
  );

  const [pageQueryParam, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const page = useMemo(() => pageQueryParam ?? 0, [pageQueryParam]);

  const [
    objectQueryResults,
    setObjectQueryResults,
  ] = useState<JoinedObjectQueryResults | null>(null);

  useEffect(() => {
    console.debug("Objects query:", JSON.stringify(objectQuery));
    console.debug("Page:", page);
    objectQueryService
      .getObjects({
        limit: objectsPerPage,
        offset: page * objectsPerPage,
        query: objectQuery,
      })
      .then(objectQueryResults => {
        const {dataset, ...otherObjectQueryResults} = objectQueryResults;
        setObjectQueryResults({
          joinedDataset: JoinedDataset.fromDataset(dataset),
          ...otherObjectQueryResults,
        });
      });
  }, [objectQuery, objectQueryService, objectsPerPage, page]);

  if (objectQueryResults === null) {
    return null;
  }

  return children({
    objectQuery,
    objectQueryResults,
    page,
    pageMax:
      Math.ceil(objectQueryResults.totalObjectsCount / objectsPerPage) - 1,
    setObjectQuery,
    setPage,
  });
};
