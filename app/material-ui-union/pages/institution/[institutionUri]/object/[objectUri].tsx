import * as React from "react";
import {Layout} from "components/Layout";
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import {GuiMetadata, JoinedImage, JoinedRights, Property, PropertyDefinition} from "@paradicms/models";
import {ObjectImagesCarousel, PropertiesTable, RightsTable} from "@paradicms/material-ui";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {joinImage, joinRights} from "@paradicms/model-utils";

interface StaticProps {
  readonly guiMetadata: GuiMetadata | null;
  readonly institution: {
    readonly name: string;
    readonly object: {
      readonly images: readonly JoinedImage[];
      readonly properties: readonly Property[] | null;
      readonly rights: JoinedRights | null;
      readonly title: string;
      readonly uri: string;
    };
    readonly rights: JoinedRights | null;
    readonly uri: string;
  };
  readonly propertyDefinitions: readonly PropertyDefinition[];
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  institution,
  propertyDefinitions,
}) => {
  const object = institution.object;
  const rights = object.rights ?? institution.rights ?? null;

  return (
    <Layout
      breadcrumbs={{institution, object}}
      documentTitle={"Object - " + object.title}
      guiMetadata={guiMetadata}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ObjectImagesCarousel images={object.images} />
        </Grid>
        {object.properties && object.properties.length > 0 ? (
          <Grid item>
            <Accordion defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>Properties</h3>
              </AccordionSummary>
              <AccordionDetails>
                <PropertiesTable
                  properties={object.properties}
                  propertyDefinitions={propertyDefinitions}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ) : null}
        {rights ? (
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>Metadata rights</h3>
              </AccordionSummary>
              <AccordionDetails>
                <RightsTable rights={rights} />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ) : null}
      </Grid>
    </Layout>
  );
};

export default ObjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = Data.instance;
  const paths: {params: {institutionUri: string; objectUri: string}}[] = [];
  for (const institution of data.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const object of data.institutionObjects(institution.uri)) {
      paths.push({
        params: {
          institutionUri: encodedInstitutionUri,
          objectUri: encodeFileName(object.uri),
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
  const data = Data.instance;
  const institutionUri = decodeFileName(params!.institutionUri as string);
  const objectUri = decodeFileName(params!.objectUri as string);

  const institution = data.institutionByUri(institutionUri);
  const object = data.objectByUri(objectUri);
  const objectImages = data.imagesDepictingUri(objectUri);

  return {
    props: {
      guiMetadata: data.guiMetadata,
      institution: {
        name: institution.name,
        object: {
          images: objectImages.map(image =>
            joinImage({
              licenseTitlesByUri: data.licenseTitlesByUri,
              image,
              rightsStatementPrefLabelsByUri:
                data.rightsStatementPrefLabelsByUri,
            })
          ),
          properties: object.properties,
          rights: object.rights
            ? joinRights({
                licenseTitlesByUri: data.licenseTitlesByUri,
                rights: object.rights,
                rightsStatementPrefLabelsByUri:
                  data.rightsStatementPrefLabelsByUri,
              })
            : null,
          title: object.title,
          uri: object.uri,
        },
        rights: institution.rights
          ? joinRights({
              licenseTitlesByUri: data.licenseTitlesByUri,
              rights: institution.rights,
              rightsStatementPrefLabelsByUri:
                data.rightsStatementPrefLabelsByUri,
            })
          : null,
        uri: institution.uri,
      },
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
