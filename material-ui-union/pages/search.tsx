import {useQueryParam, NumberParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/base";
import {
  Collection,
  GuiMetadata,
  Image,
  Institution,
  License,
  Object,
  ObjectQuery,
  PropertyDefinition,
  RightsStatement,
} from "@paradicms/models";
import * as React from "react";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {
  ObjectFacetedSearchGrid,
  THUMBNAIL_TARGET_DIMENSIONS,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {
  indexImagesByDepictsUri,
  indexModelsByUri,
  indexLicenseTitlesByUri,
  indexObjectsByCollectionUri,
  indexRightsStatementPrefLabelsByUri,
  joinCollection,
  joinImage,
  joinInstitution,
  joinObject,
  selectThumbnail,
} from "@paradicms/model-utils";

interface StaticProps {
  collections: readonly Collection[];
  guiMetadata: GuiMetadata | null;
  images: readonly Image[];
  institutions: readonly Institution[];
  licenses: readonly License[];
  objects: readonly Object[];
  propertyDefinitions: readonly PropertyDefinition[];
  rightsStatements: readonly RightsStatement[];
}

const SearchPage: React.FunctionComponent<StaticProps> = ({
  collections,
  guiMetadata,
  images,
  institutions,
  licenses,
  objects,
  propertyDefinitions,
  rightsStatements,
}) => {
  // if (typeof window === "undefined") {
  //   return null; // Don't render on the server
  // }

  const [page, setPage] = useQueryParam<number | null | undefined>(
    "page",
    NumberParam
  );
  const [query, setQuery] = useQueryParam<ObjectQuery>(
    "query",
    new JsonQueryParamConfig<ObjectQuery>()
  );

  const licenseTitlesByUri = React.useMemo(
    () => indexLicenseTitlesByUri(licenses),
    [licenses]
  );

  const rightsStatementPrefLabelsByUri = React.useMemo(
    () => indexRightsStatementPrefLabelsByUri(rightsStatements),
    [rightsStatements]
  );

  const imagesByDepictsUri = React.useMemo(
    () =>
      indexImagesByDepictsUri(
        images.map(image =>
          joinImage({
            image,
            licenseTitlesByUri,
            rightsStatementPrefLabelsByUri,
          })
        )
      ),
    [images, licenseTitlesByUri, rightsStatementPrefLabelsByUri]
  );

  const institutionsByUri = React.useMemo(
    () =>
      indexModelsByUri(
        institutions.map(institution =>
          joinInstitution({
            imagesByDepictsUri,
            institution,
            licenseTitlesByUri,
            rightsStatementPrefLabelsByUri,
          })
        )
      ),
    [
      imagesByDepictsUri,
      institutions,
      licenseTitlesByUri,
      rightsStatementPrefLabelsByUri,
    ]
  );

  const collectionsByUri = React.useMemo(() => {
    const objectsByCollectionUri = indexObjectsByCollectionUri(objects);
    return indexModelsByUri(
      collections.map(collection =>
        joinCollection({
          collection,
          imagesByDepictsUri,
          institutionsByUri,
          objectsByCollectionUri,
        })
      )
    );
  }, [
    collections,
    institutionsByUri,
    licenseTitlesByUri,
    objects,
    rightsStatementPrefLabelsByUri,
  ]);

  const joinedObjects = React.useMemo(
    () =>
      objects.map(object =>
        joinObject({
          collectionsByUri,
          imagesByDepictsUri,
          institutionsByUri,
          licenseTitlesByUri,
          object,
          rightsStatementPrefLabelsByUri,
        })
      ),
    [
      collectionsByUri,
      imagesByDepictsUri,
      institutionsByUri,
      licenses,
      objects,
      rightsStatementPrefLabelsByUri,
    ]
  );

  return (
    <Layout
      cardTitle={
        query?.text ? (
          <span>
            <span>Search results for</span>
            &nbsp;
            <i data-cy="query-text">{query.text}</i>
          </span>
        ) : (
          "Search results"
        )
      }
      documentTitle={
        query?.text ? `Search results for "${query.text}"` : "Search results"
      }
      guiMetadata={guiMetadata}
      onSearch={text => setQuery({text})}
    >
      <ObjectFacetedSearchGrid
        objects={joinedObjects}
        page={page ?? 0}
        onChangeFilters={filters => setQuery({...query, filters})}
        onChangePage={setPage}
        propertyDefinitions={propertyDefinitions}
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
        query={query ?? {}}
      />
    </Layout>
  );
};

export default SearchPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const data = Data.instance;

  const objectThumbnails: Image[] = [];
  for (const object of data.objects) {
    const objectImages = data.imagesDepictingUri(object.uri);
    if (objectImages.length === 0) {
      continue;
    }
    const objectThumbnail = selectThumbnail({
      images: objectImages,
      targetDimensions: THUMBNAIL_TARGET_DIMENSIONS,
    });
    if (!objectThumbnail) {
      continue;
    }
    objectThumbnails.push(objectThumbnail);
  }

  return {
    props: {
      collections: data.collections,
      guiMetadata: data.guiMetadata,
      images: objectThumbnails,
      licenses: data.licenses,
      institutions: data.institutions,
      objects: data.objects,
      propertyDefinitions: data.propertyDefinitions,
      rightsStatements: data.rightsStatements,
    },
  };
};
