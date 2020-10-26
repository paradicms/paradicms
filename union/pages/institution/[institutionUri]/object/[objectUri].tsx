import * as React from "react";
import {Layout} from "components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import {
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
  institution: Institution;
  object: Object;
  objectImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
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
  const paths: {params: {institutionUri: string; objectUri: string}}[] = [];
  for (const institution of Data.institutions) {
    for (const object of Data.objects.filter(
      object => object.institutionUri === institution.uri
    )) {
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
  const institutionUri = decodeFileName(params!.institutionUri as string);
  const objectUri = decodeFileName(params!.objectUri as string);

  return {
    props: {
      institution: Data.institutions.find(
        institution => institution.uri === institutionUri
      )!,
      object: Data.objects.find(object => object.uri === objectUri)!,
      objectImages: Data.images.filter(image => image.depictsUri === objectUri),
      propertyDefinitions: Data.propertyDefinitions,
    },
  };
};
