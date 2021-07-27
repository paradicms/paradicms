import {NumberParam, useQueryParam} from "use-query-params";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {JsonQueryParamConfig} from "@paradicms/react";
import * as React from "react";
import {Layout} from "components/Layout";
import {Configuration, JoinedImage, JoinedRights, ObjectFilters, PropertyDefinition} from "@paradicms/models";
import {Data} from "lib/Data";
import {GetStaticPaths, GetStaticProps} from "next";
import {ObjectCardObject, ObjectFacetedSearchGrid, thumbnailTargetDimensions} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {joinImage, joinRights, selectThumbnail} from "@paradicms/model-utils";

interface StaticProps {
  readonly configuration: Configuration;
  readonly institution: {
    readonly collection: {
      readonly objects: readonly {
        readonly abstract: string | null;
        readonly rights: JoinedRights | null;
        readonly thumbnail: JoinedImage | null;
        readonly title: string;
        readonly uri: string;
      }[];
      readonly title: string;
      readonly uri: string;
    };
    readonly name: string;
    readonly uri: string;
  };
  propertyDefinitions: readonly PropertyDefinition[];
}

const CollectionPage: React.FunctionComponent<StaticProps> = ({
                                                                configuration,
                                                                institution,
                                                                propertyDefinitions,
                                                              }) => {
  // if (typeof window === "undefined") {
  //   return null; // Don't render on the server
  // }

  const collection = institution.collection;

  const [filters, setFilters] = useQueryParam<ObjectFilters>(
    "filters",
    new JsonQueryParamConfig<ObjectFilters>()
  );
  const [page, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );

  // The gallery expects each Object to have a nested Institution,
  // but we have an Institution->Object tree in order to save space.
  const objects: readonly ObjectCardObject[] = React.useMemo(
    () =>
      institution.collection.objects.map(object => ({
        ...object,
        institution,
      })),
    [institution]
  );

  return (
    <Layout
      breadcrumbs={{collection, institution}}
      cardTitle={
        <span>
          <span>
            Collection&nbsp;&mdash;&nbsp;
            <span data-cy="collection-title">{collection.title}</span>
          </span>
        </span>
      }
      documentTitle={"Collection - " + collection.title}
      configuration={configuration}
    >
      <ObjectFacetedSearchGrid
        objects={objects}
        onChangeFilters={setFilters}
        onChangePage={setPage}
        page={page ?? 0}
        propertyDefinitions={propertyDefinitions}
        renderObjectLink={(object, children) => (
          <Link
            href={Hrefs.institution(object.institution.uri).object(object.uri)}
          >
            {children}
          </Link>
        )}
        query={{filters, text: null}}
      />
    </Layout>
  );
};

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = Data.instance;
  const paths: {params: {collectionUri: string; institutionUri: string}}[] = [];
  for (const institution of data.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const collection of data.institutionCollections(institution.uri)) {
      paths.push({
        params: {
          collectionUri: encodeFileName(collection.uri),
          institutionUri: encodedInstitutionUri,
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{props: StaticProps}> => {
  const collectionUri = decodeFileName(params!.collectionUri as string);
  const institutionUri = decodeFileName(params!.institutionUri as string);

  const data = Data.instance;
  const collection = data.collectionByUri(collectionUri);
  const institution = data.institutionByUri(institutionUri);

  return {
    props: {
      configuration: data.configuration,
      institution: {
        collection: {
          objects: data.collectionObjects(collection.uri).map(object => {
            const images = data.imagesDepictingUri(object.uri);
            const thumbnail = selectThumbnail({
              images,
              targetDimensions: thumbnailTargetDimensions,
            });
            return {
              abstract: object.abstract,
              rights: object.rights
                ? joinRights({
                    licenseTitlesByUri: data.licenseTitlesByUri,
                    rights: object.rights,
                    rightsStatementPrefLabelsByUri:
                      data.rightsStatementPrefLabelsByUri,
                  })
                : null,
              thumbnail: thumbnail
                ? joinImage({
                    image: thumbnail,
                    licenseTitlesByUri: data.licenseTitlesByUri,
                    rightsStatementPrefLabelsByUri:
                      data.rightsStatementPrefLabelsByUri,
                  })
                : null,
              title: object.title,
              uri: object.uri,
            };
          }),
          title: collection.title,
          uri: collection.uri,
        },
        name: institution.name,
        uri: institution.uri,
      },
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
