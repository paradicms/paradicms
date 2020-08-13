import {graphql} from "gatsby";
import * as React from "react";
import {Layout} from "~/components/Layout";
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
import {Institution} from "~/models/Institution";
import {ObjectPageQuery} from "~/graphql/types";
import {Object} from "~/models/Object";
import {RightsTable} from "~/components/RightsTable";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {ObjectImagesCarousel} from "~/components/ObjectImagesCarousel";

const ObjectPage: React.FunctionComponent<{
  data: ObjectPageQuery;
  pageContext: {
    object: Object;
    institution: Institution;
  };
}> = ({
  data: {
    allImageJson: {nodes: objectImages},
    allPropertyDefinitionJson: {nodes: propertyDefinitions},
  },
  pageContext: {institution, object},
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
        {object.properties ? (
          <Grid item>
            <Accordion defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>Properties</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Table>
                  <TableBody>
                    {propertyDefinitions
                      .sort((left, right) => left.key.localeCompare(right.key))
                      .map(propertyDefinition => {
                        const properties = object.properties!.filter(
                          property => property.key === propertyDefinition.key
                        );
                        if (properties.length === 0) {
                          return null;
                        }
                        return (
                          <>
                            {properties.map((property, propertyIndex) => (
                              <TableRow
                                key={`property-${propertyDefinition.key}-${propertyIndex}`}
                              >
                                <TableCell>
                                  <strong>
                                    {propertyDefinition.labelSingular}
                                  </strong>
                                </TableCell>
                                <TableCell>{property.value}</TableCell>
                              </TableRow>
                            ))}
                          </>
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
                <h3>Rights</h3>
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

export const query = graphql`
  query ObjectPage($objectUri: String!) {
    allImageJson(filter: {objectUri: {eq: $objectUri}}) {
      nodes {
        ...ImageFragment
      }
    }
    allPropertyDefinitionJson {
      nodes {
        ...PropertyDefinitionFragment
      }
    }
  }
`;
