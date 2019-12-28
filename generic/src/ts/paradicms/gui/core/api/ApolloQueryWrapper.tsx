import {ApolloQueryResult, DocumentNode, OperationVariables} from "apollo-boost";
import * as React from "react";
import {Query} from "react-apollo";
import {ApolloException} from "paradicms/gui/generic/api/ApolloException";
import {GenericErrorHandler} from "paradicms/gui/generic/components/error/GenericErrorHandler";
import * as ReactLoader from "react-loader";
import * as invariant from "invariant";

export class ApolloQueryWrapper<DataT, VariablesT = OperationVariables> extends React.Component<{
  children: (kwds: {
    data: DataT;
    refetch?: (variables?: VariablesT) => Promise<ApolloQueryResult<DataT>>;
    fetchMore?: (
      updateQuery: (prev: DataT, newData: { fetchMoreResult: DataT }) => DataT,
      variables?: VariablesT
    ) => Promise<ApolloQueryResult<DataT>>;
  }) => React.ReactNode;
  query: DocumentNode;
  [index: string]: any;
}> {
  render() {
    const { children, ...queryProps } = this.props;
    return (
        <Query<DataT, VariablesT> {...queryProps}>
          {queryResult => {
            const {data, error, loading, refetch} = queryResult;

            if (error) {
              const exception = new ApolloException(error);
              if (typeof (exception.httpStatusCode) !== "undefined") {
                throw new EvalError("handle non-failure exceptions");
              }

              return <GenericErrorHandler exception={new ApolloException(error)}></GenericErrorHandler>;
            } else if (loading) {
              return <ReactLoader loaded={false}></ReactLoader>;
            }

            invariant(data, "expect query to have data if it's not loading or errored");

            return children({ data: data!, refetch });
        }}
      </Query>
    );
  }
}
