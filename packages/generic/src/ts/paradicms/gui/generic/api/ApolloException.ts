import {ApolloError} from "apollo-boost";
import {Exception} from "paradicms/gui/generic/Exception";
import {get} from "lodash";
import {Environment} from "paradicms-gui-lib";

export class ApolloException extends Exception {
  constructor(readonly apolloError: ApolloError) {
    super();
  }

  get httpStatusCode(): number | undefined {
    for (const graphQlError of this.apolloError.graphQLErrors) {
      if (typeof (graphQlError.extensions) === "undefined") {
        continue;
      }
      if (typeof (graphQlError.extensions.httpStatusCode) === "undefined") {
        continue;
      }
      return graphQlError.extensions.httpStatusCode;
    }
    return undefined;
  }

  get message() {
    const errors = get(this.apolloError, "networkError.result.errors");
    if (errors && errors.length > 0 && Environment.development) {
      return errors.map((error: Exception) => error.message).join("/n");
    }
    return this.apolloError.message;
  }
}
