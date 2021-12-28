import * as React from "react";
import {useMemo} from "react";
import {GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";
import {Layout} from "components/Layout";
import {Link} from "@paradicms/material-ui-next";
import {
  InstitutionsGallery,
  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {Dataset, DataSubsetter} from "@paradicms/models";
import fs from "fs";
import {readAppConfigurationFile, readDatasetFile} from "@paradicms/next";
import {AppConfiguration} from "@paradicms/configuration";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: AppConfiguration;
  readonly datasetString: string;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  datasetString,
}) => {
  const dataset = useMemo(() => Dataset.parse(datasetString), [datasetString]);

  return (
    <Layout documentTitle="Institutions" configuration={configuration}>
      <InstitutionsGallery
        institutions={dataset.institutions}
        renderInstitutionLink={(institution, children) => (
          <Link
            href={Hrefs.institution(institution.uri).home}
            data-cy={"institution-link-" + institution.uri}
          >
            {children}
          </Link>
        )}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: StaticProps;
}> => {
  const completeDataset = readDatasetFile(readFileSync);
  const configuration = readAppConfigurationFile(readFileSync);

  return {
    props: {
      configuration,
      datasetString: new DataSubsetter({completeDataset, configuration})
        .institutionsDataset(
          completeDataset.institutions.map(institution => institution.uri),
          {
            thumbnail: {targetDimensions: thumbnailTargetDimensions},
          }
        )
        .stringify(),
    },
  };
};
