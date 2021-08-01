import * as React from "react";
import {GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";
import {Layout} from "components/Layout";
import {Link} from "@paradicms/material-ui-next";
import {InstitutionsGallery} from "@paradicms/material-ui";
import {Configuration, Dataset, defaultConfiguration, JoinedDataset} from "@paradicms/models";
import {readDataset} from "lib/readDataset";

interface StaticProps {
  readonly configuration: Configuration;
  readonly dataset: Dataset;
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           configuration,
                                                           dataset,
                                                         }) => {
  const joinedDataset = React.useMemo(() => JoinedDataset.fromDataset(dataset), [dataset]);

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
  return {
    props: {
      configuration: defaultConfiguration,
      dataset: readDataset(),
    },
  };
};
