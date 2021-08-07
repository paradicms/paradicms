import * as React from "react";
import {ObjectQueryService} from "@paradicms/services";
import {ObjectQuery, ObjectQueryResults} from "@paradicms/models";

class MissingObjectQueryService implements ObjectQueryService {
  getObjects(kwds: {
    limit: number;
    offset: number;
    query: ObjectQuery;
  }): Promise<ObjectQueryResults> {
    return Promise.reject("not implemented");
  }
}

export const ObjectQueryServiceContext = React.createContext<
  ObjectQueryService
>(new MissingObjectQueryService());
