import {Configuration, Dataset, DataSubsetter, defaultConfiguration, ObjectJoinSelector} from "@paradicms/models";
import * as React from "react";
import {Layout} from "components/Layout";
import {GetStaticProps} from "next";
import {ObjectFacetedSearchGrid, thumbnailTargetDimensions} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {readDataset} from "lib/readDataset";
import {LunrObjectSearchPage} from "@paradicms/lunr-react";

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const OBJECT_JOIN_SELECTOR: ObjectJoinSelector = {
  institution: {},
  collections: {},
  thumbnail: {targetDimensions: thumbnailTargetDimensions},
};

const SearchPage: React.FunctionComponent<StaticProps> = ({
                                                            configuration,
                                                            dataset,
                                                          }) => (
  <LunrObjectSearchPage configuration={configuration} dataset={dataset} objectJoinSelector={OBJECT_JOIN_SELECTOR}
                        objectsPerPage={10}>
    {({
        objectsQuery,
        objectsQueryResults,
        objectsQueryResultsJoinedDataset,
        page,
        pageMax,
        setObjectsQuery,
        setPage,
      }) => (
      <Layout
        cardTitle={
          objectsQuery?.text ? (
            <span>
            <span>Search results for</span>
              &nbsp;
              <i data-cy="query-text">{objectsQuery.text}</i>
          </span>
          ) : (
            "Search results"
          )
        }
        documentTitle={
          objectsQuery?.text ? `Search results for "${objectsQuery.text}"` : "Search results"
        }
        configuration={configuration}
        onSearch={text => setObjectsQuery({filters: [], text})}
      >
        <ObjectFacetedSearchGrid
          facets={objectsQueryResults.facets}
          objects={objectsQueryResultsJoinedDataset.objects}
          onChangeFilters={filters => setObjectsQuery({...objectsQuery, filters})}
          onChangePage={setPage}
          page={page}
          pageMax={pageMax}
          renderInstitutionLink={(institution, children) => (
            <Link href={Hrefs.institution(institution.uri).home}>{children}</Link>
          )}
          renderObjectLink={(object, children) => (
            <Link
              href={Hrefs.institution(object.institution.uri).object(object.uri)}
            >
              {children}
            </Link>
          )}
          query={objectsQuery}
        />
      </Layout>
    )}
  </LunrObjectSearchPage>);

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const dataset = readDataset();
  const searchDataset = DataSubsetter.fromDataset(dataset).objectsDataset(dataset.objects.map(object => object.uri), OBJECT_JOIN_SELECTOR);

  console.debug("Search dataset:", Object.keys(searchDataset).map(key => `${key}: ${((searchDataset as any)[key] as any[]).length}`).join(", "));

  return {
    props: {
      configuration: defaultConfiguration,
      dataset: searchDataset,
    },
  };
};
