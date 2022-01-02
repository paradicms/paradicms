import * as React from "react";
import {useMemo} from "react";
import {Layout} from "components/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@material-ui/core";
import {Dataset, DataSubsetter} from "@paradicms/models";
import {RightsTable, WorkImagesCarousel} from "@paradicms/material-ui";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  decodeFileName,
  encodeFileName,
  readAppConfigurationFile,
  readDatasetFile,
} from "@paradicms/next";
import {GetStaticPaths, GetStaticProps} from "next";
import fs from "fs";
import {AppConfiguration} from "@paradicms/configuration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: AppConfiguration;
  readonly datasetString: string;
  readonly workUri: string;
}

const WorkPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
  workUri,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);
  const work = dataset.workByUri(workUri);
  const institution = work.institution;

  return (
    <Layout
      breadcrumbs={{institution, work}}
      documentTitle={"Work - " + work.title}
      configuration={configuration}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <WorkImagesCarousel work={work} />
        </Grid>
        {/*{work.properties && work.properties.length > 0 ? (*/}
        {/*  <Grid item>*/}
        {/*    <Accordion defaultExpanded={true}>*/}
        {/*      <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
        {/*        <h3>Properties</h3>*/}
        {/*      </AccordionSummary>*/}
        {/*      <AccordionDetails>*/}
        {/*        <PropertiesTable properties={work.properties} />*/}
        {/*      </AccordionDetails>*/}
        {/*    </Accordion>*/}
        {/*  </Grid>*/}
        {/*) : null}*/}
        {work.rights ? (
          <Grid item>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>Metadata rights</h3>
              </AccordionSummary>
              <AccordionDetails>
                <RightsTable rights={work.rights} />
              </AccordionDetails>
            </Accordion>
          </Grid>
        ) : null}
      </Grid>
    </Layout>
  );
};

export default WorkPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dataset = readDatasetFile(readFileSync);
  const paths: {params: {institutionUri: string; workUri: string}}[] = [];
  for (const institution of dataset.institutions) {
    const encodedInstitutionUri = encodeFileName(institution.uri);
    for (const work of dataset.institutionWorks(institution.uri)) {
      paths.push({
        params: {
          institutionUri: encodedInstitutionUri,
          workUri: encodeFileName(work.uri),
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
  const workUri = decodeFileName(params!.workUri as string);
  const completeDataset = readDatasetFile(readFileSync);
  const configuration = readAppConfigurationFile(readFileSync);

  return {
    props: {
      configuration,
      datasetString: new DataSubsetter({
        completeDataset,
        configuration,
      })
        .workDataset(completeDataset.workByUri(workUri), {
          allImages: true,
          collections: {},
          institution: {},
        })
        .stringify(),
      workUri,
    },
  };
};
