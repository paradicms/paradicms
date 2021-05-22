import {useQueryParam, NumberParam} from "use-query-params";
import {JsonQueryParamConfig} from "@paradicms/base";
import {
  GuiMetadata,
  JoinedImage,
  JoinedRights,
  ObjectQuery,
  PropertyDefinition,
} from "@paradicms/models";
import * as React from "react";
import {Layout} from "components/Layout";
import {Data} from "lib/Data";
import {GetStaticProps} from "next";
import {
  ObjectCardObject,
  ObjectFacetedSearchGrid,
  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {Link} from "@paradicms/material-ui-next";
import {Hrefs} from "lib/Hrefs";
import {joinImage, joinRights, selectThumbnail} from "@paradicms/model-utils";

interface StaticProps {
  readonly guiMetadata: GuiMetadata | null;
  readonly institutions: readonly {
    readonly objects: readonly {
      readonly abstract: string | null;
      readonly rights: JoinedRights | null;
      readonly title: string;
      readonly thumbnail: JoinedImage | null;
      readonly uri: string;
    }[];
    readonly name: string;
    readonly uri: string;
  }[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const SearchPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  institutions,
  propertyDefinitions,
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

  // The gallery expects each Object to have a nested Institution,
  // but we have an Institution->Object tree in order to save space.
  const objects: readonly ObjectCardObject[] = React.useMemo(
    () =>
      institutions.flatMap(institution =>
        institution.objects.map(object => ({
          ...object,
          institution,
        }))
      ),
    [institutions]
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
      onSearch={text => setQuery({filters: null, text})}
    >
      <ObjectFacetedSearchGrid
        objects={objects}
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

  return {
    props: {
      guiMetadata: data.guiMetadata,
      institutions: data.institutions.map(institution => ({
        name: institution.name,
        objects: data.institutionObjects(institution.uri).map(object => {
          const thumbnail = selectThumbnail({
            images: data.imagesDepictingUri(object.uri),
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
                  licenseTitlesByUri: data.licenseTitlesByUri,
                  image: thumbnail,
                  rightsStatementPrefLabelsByUri:
                    data.rightsStatementPrefLabelsByUri,
                })
              : null,
            title: object.title,
            uri: object.uri,
          };
        }),
        uri: institution.uri,
      })),
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
