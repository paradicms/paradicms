import {
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  ObjectJoinSelector,
} from "@paradicms/models";
import * as React from "react";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {
\  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {readDataset} from "lib/readDataset";
import {LunrObjectSearchPage} from "@paradicms/react-services";
import {ObjectSearchGrid} from "@paradicms/material-ui";

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  collections: {},
  institution: {rights: true},
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const SearchPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  dataset,
}) => (
  <LunrObjectSearchPage
    configuration={configuration.objectSearch}
    dataset={dataset}
    objectJoinSelector={OBJECT_JOIN_SELECTOR}
    objectsPerPage={10}
  >
    {({
      objectQuery,
      objectQueryResults,
      objectQueryResultsJoinedDataset,
      page,
      pageMax,
      setObjectQuery,
      setPage,
    }) => (
      <Layout
        cardTitle={
          objectQuery?.text ? (
            <span>
              <span>Search results for</span>
              &nbsp;
              <i data-cy="query-text">{objectQuery.text}</i>
            </span>
          ) : (
            "Search results"
          )
        }
        documentTitle={
          objectQuery?.text
            ? `Search results for "${objectQuery.text}"`
            : "Search results"
        }
        configuration={configuration}
        onSearch={text => setObjectQuery({filters: configuration.objectSearch.filters, text})}
      >
        <ObjectSearchGrid
          facets={objectQueryResults.facets}
          objects={objectQueryResultsJoinedDataset.objects}
          onChangeFilters={filters => setObjectQuery({...objectQuery, filters})}
          onChangePage={setPage}
          page={page}
          pageMax={pageMax}
          renderInstitutionLink={(institution, children) => (
            <Link href={Hrefs.institution(institution.uri).home}>
              {children}
            </Link>
          )}
          renderObjectLink={(object, children) => (
            <Link
              href={Hrefs.institution(object.institution.uri).object(
                object.uri
              )}
            >
              {children}
            </Link>
          )}
          query={objectQuery}
        />
      </Layout>
    )}
  </LunrObjectSearchPage>
);

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDataset();
  const searchDataset = DataSubsetter.fromDataset(dataset).objectsDataset(
    dataset.objects.map(object => object.uri),
    OBJECT_JOIN_SELECTOR
  );

  console.log(
    "Search dataset:",
    Object.keys(searchDataset)
      .map(key => `${key}: ${((searchDataset as any)[key] as any[]).length}`)
      .join(", ")
  );

  return {
    props: {
      configuration: defaultConfiguration,
      dataset: searchDataset,
    },
  };
};
