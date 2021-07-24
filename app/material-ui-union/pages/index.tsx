import * as React from "react";
import {GetStaticProps} from "next";
import {Hrefs} from "lib/Hrefs";
import {Data} from "lib/Data";
import {Layout} from "components/Layout";
import {Link} from "@paradicms/material-ui-next";
import {InstitutionCardInstitution, InstitutionsGallery, thumbnailTargetDimensions} from "@paradicms/material-ui";
import {joinImage, selectThumbnail} from "@paradicms/model-utils";
import {Configuration} from "@paradicms/models";

interface StaticProps {
  readonly configuration: Configuration;
  readonly institutions: readonly InstitutionCardInstitution[];
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
                                                           configuration,
                                                           institutions,
                                                         }) => {
  return (
    <Layout documentTitle="Institutions" configuration={configuration}>
      <InstitutionsGallery
        institutions={institutions}
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
  const data = Data.instance;

  const institutions = data.institutions;

  return {
    props: {
      configuration: data.configuration,
      institutions: institutions.map(institution => {
        const thumbnail = selectThumbnail({
          images: data.institutionImages(institution.uri),
          targetDimensions: thumbnailTargetDimensions,
        });

        return {
          name: institution.name,
          thumbnail: thumbnail
            ? joinImage({
                image: thumbnail,
                licenseTitlesByUri: data.licenseTitlesByUri,
                rightsStatementPrefLabelsByUri:
                  data.rightsStatementPrefLabelsByUri,
              })
            : null,
          uri: institution.uri,
        };
      }),
    },
  };
};
