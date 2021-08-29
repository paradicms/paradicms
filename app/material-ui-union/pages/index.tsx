import * as React from "react";
import {GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";
import {Layout} from "components/Layout";
import {Link} from "@paradicms/material-ui-next";
import {
  InstitutionsGallery,
  thumbnailTargetDimensions,
} from "@paradicms/material-ui";
import {
  Configuration,
  Dataset,
  DataSubsetter,
  defaultConfiguration,
  JoinedDataset,
} from "@paradicms/models";
import fs from "fs";
import {readDatasetFile} from "@paradicms/next";

const readFileSync = (filePath: string) => fs.readFileSync(filePath).toString();

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  configuration,
  dataset,
}) => {
  const joinedDataset = React.useMemo(
    () => JoinedDataset.fromDataset(dataset),
    [dataset]
  );

  return (
    <Layout documentTitle="Institutions" configuration={configuration}>
      <InstitutionsGallery
        institutions={joinedDataset.institutions}
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
  const dataset = readDatasetFile(readFileSync);
  const institutionsDataset = DataSubsetter.fromDataset(
    dataset
  ).institutionsDataset(
    dataset.institutions.map(institution => institution.uri),
    {
      thumbnail: {targetDimensions: thumbnailTargetDimensions},
    }
  );

  console.log(
    "Institutions dataset:",
    Object.keys(institutionsDataset)
      .map(
        key => `${key}: ${((institutionsDataset as any)[key] as any[]).length}`
      )
      .join(", ")
  );

  return {
    props: {
      configuration: defaultConfiguration,
      dataset: institutionsDataset,
    },
  };
};
