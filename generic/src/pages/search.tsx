import {NumberParam, useQueryParams} from "use-query-params";
import {JsonQueryParamConfig} from "~/components/JsonQueryParamConfig";
import {ObjectQuery} from "~/models/ObjectQuery";
import * as React from "react";
import {ObjectIndex} from "~/ObjectIndex";
import {graphql} from "gatsby";

const LIMIT_DEFAULT = 10;
const OFFSET_DEFAULT = 0;

const SearchPage: React.FunctionComponent = () => {
  // @ts-ignore
  const [queryParams, setQueryParams] = useQueryParams({
    limit: NumberParam,
    offset: NumberParam,
    query: new JsonQueryParamConfig<ObjectQuery>(),
  });

  const limit = queryParams.limit ?? LIMIT_DEFAULT;
  const offset = queryParams.offset ?? OFFSET_DEFAULT;
  const query = queryParams.query ?? {};

  const [index, setIndex] = React.useState<ObjectIndex>();
  React.useEffect(() => {
    ObjectIndex.loaded().then(index => setIndex(index));
  }, []);

  if (!index) {
    return null;
  }

  let results = index.search(query);
  results = results.slice(offset, offset + limit);
  results.map(result => {});

  return (
    <div>
      <div>Limit: {limit}</div>
      <div>Offset: {offset}</div>
      <div>Query: {JSON.stringify(query)}</div>
    </div>
  );
};

export default SearchPage;

export const query = graphql`
  query SearchPage {
    allCollectionJson {
      nodes {
        ...CollectionFragment
      }
    }
  }
`;
