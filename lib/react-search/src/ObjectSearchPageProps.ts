import {
  JoinedObjectQueryResults,
  ObjectQuery,
  ObjectSearchConfiguration,
} from "@paradicms/models";
import * as React from "react";
import {ObjectQueryService} from "@paradicms/services";

export interface ObjectSearchPageProps {
  configuration: ObjectSearchConfiguration;
  objectQueryService: ObjectQueryService;
  objectsPerPage: number;
  children: (kwds: {
    objectQuery: ObjectQuery;
    objectQueryResults: JoinedObjectQueryResults;
    page: number;
    pageMax: number;
    setObjectQuery: (objectQuery: ObjectQuery) => void;
    setPage: (page: number | undefined) => void;
  }) => React.ReactElement;
}
