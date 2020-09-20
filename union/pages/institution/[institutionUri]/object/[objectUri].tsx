import * as React from "react";
import {Layout} from "components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import {
  Image,
  Institution,
  Object,
  PropertyDefinition,
} from "@paradicms/models";
import {ObjectImagesCarousel, RightsTable} from "@paradicms/material-ui";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Data} from "lib/Data";
import {decodeFileName, encodeFileName} from "@paradicms/base";
import {GetStaticPaths, GetStaticProps} from "next";

const ObjectPage: React.FunctionComponent<{
  institution: Institution;
  object: Object;
  objectImages: readonly Image[];
  propertyDefinitions: readonly PropertyDefinition[];
}> = ({institution, object, objectImages, propertyDefinitions}) => {
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
                <Table>
                  <TableBody>
                    {propertyDefinitions
                      .concat()
                      .sort((left, right) => left.uri.localeCompare(right.uri))
                      .map(propertyDefinition => {
                        const properties = object.properties!.filter(
                          property =>
                            property.propertyDefinitionUri ===
                            propertyDefinition.uri
                        );
                        if (properties.length === 0) {
                          return null;
                        }
                        return (
                          <React.Fragment key={propertyDefinition.uri}>
                            {properties.map((property, propertyIndex) => (
                              <TableRow
                                key={`property-${propertyDefinition.uri}-${propertyIndex}`}
                              >
                                <TableCell>
                                  <strong>{propertyDefinition.label}</strong>
                                </TableCell>
                                <TableCell>{property.value}</TableCell>
                              </TableRow>
                            ))}
                          </React.Fragment>
                        );
                      })}
                  </TableBody>
                </Table>
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
  for (const institutionUri of Data.getInstitutionUris()) {
    for (const objectUri of Data.getObjectUrisByInstitutionUri(
      institutionUri
    )) {
      paths.push({
        params: {
          institutionUri: encodeFileName(institutionUri),
          objectUri: encodeFileName(objectUri),
        },
      });
    }
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const institutionUri = decodeFileName(params!.institutionUri as string);
  const objectUri = decodeFileName(params!.objectUri as string);

  return {
    props: {
      institution: Data.getInstitutionByUri(institutionUri),
      object: Data.getObjectByUri(objectUri),
      objectImages: Data.getImagesByObjectUri(objectUri),
      propertyDefinitions: Data.getPropertyDefinitions(),
    },
  };
};
