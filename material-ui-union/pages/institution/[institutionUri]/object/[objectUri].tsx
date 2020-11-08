import * as React from "react";
import {Layout} from "components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import {
  GuiMetadata,
  Image,
  Institution,
  Object,
  PropertyDefinition,
} from "@paradicms/models";
import {
  ObjectImagesCarousel,
  PropertiesTable,
  RightsTable,
} from "@paradicms/material-ui";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {GetStaticPaths, GetStaticProps} from "next";

interface StaticProps {
  guiMetadata: GuiMetadata | null;
  institution: Institution;
  object: Object;
  objectImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  institution,
  object,
  objectImages,
  propertyDefinitions,
}) => {
  const rights = object.rights ?? institution.rights ?? undefined;

  return (
    <Layout
      breadcrumbs={{institution, object}}
      documentTitle={"Object - " + object.title}
      guiMetadata={guiMetadata}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ObjectImagesCarousel images={objectImages} />
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
    for (const object of data.objectsByInstitutionUri[institution.uri] ?? []) {
      paths.push({
        params: {
          institutionUri: encodeFileName(institution.uri),
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

  return {
    props: {
      guiMetadata: data.guiMetadata,
      institution: data.institutionByUri(institutionUri),
      object: data.objectByUri(objectUri),
      objectImages: data.imagesByDepictsUri[objectUri] ?? [],
      propertyDefinitions: data.propertyDefinitions,
    },
  };
};
