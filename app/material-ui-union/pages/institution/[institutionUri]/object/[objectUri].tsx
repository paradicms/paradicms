import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import {
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  IndexedDataset,
  JoinedDataset,
} from "@paradicms/models";
import {ObjectImagesCarousel, PropertiesTable, RightsTable} from "@paradicms/material-ui";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {decodeFileName, encodeFileName} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import {readDataset} from "lib/readDataset";

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
  readonly objectUri: string;
}

const ObjectPage: React.FunctionComponent<StaticProps> = ({
                                                            configuration,
                                                            dataset, objectUri,
                                                          }) => {
  const joinedDataset = useMemo(() => JoinedDataset.fromDataset(dataset), [dataset]);
  const object = joinedDataset.objectByUri(objectUri);
  const institution = object.institution;

  return (
    <Layout
      breadcrumbs={{institution, object}}
      documentTitle={"Object - " + object.title}
      configuration={configuration}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ObjectImagesCarousel object={object} />
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
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ) : null}
        {object.rights ? (
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>Metadata rights</h3>
              </AccordionSummary>
              <AccordionDetails>
                <RightsTable rights={object.rights} />
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
  const dataset = readDataset();
  const indexedDataset = new IndexedDataset(dataset);
  const paths: {params: {institutionUri: string; objectUri: string}}[] = [];
  for (const institution of dataset.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const object of indexedDataset.institutionObjects(institution.uri)) {
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
  // const institutionUri = decodeFileName(params!.institutionUri as string);
  const objectUri = decodeFileName(params!.objectUri as string);

  return {
    props: {
      configuration: defaultConfiguration,
      dataset: DataSubsetter.fromDataset(readDataset()).objectDataset(objectUri, {
        allImages: true,
        collections: {},
        institution: {rights: true},
      }),
      objectUri,
    },
  };
};
