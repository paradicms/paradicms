import * as React from "react";
import {GetStaticProps} from "next";
import {
  GuiMetadata,
  Image,
  Institution,
  License,
  RightsStatement,
} from "@paradicms/models";
import {Hrefs} from "lib/Hrefs";
import {Data} from "lib/Data";
import {Layout} from "components/Layout";
import {Link} from "@paradicms/material-ui-next";
import {InstitutionsGallery} from "@paradicms/material-ui";
import {
  indexImagesByDepictsUri,
  indexLicenseTitlesByUri,
  indexRightsStatementPrefLabelsByUri,
  joinImage,
  joinInstitution,
} from "@paradicms/model-utils";

interface StaticProps {
  guiMetadata: GuiMetadata | null;
  images: readonly Image[];
  institutions: readonly Institution[];
  licenses: readonly License[];
  rightsStatements: readonly RightsStatement[];
}

const IndexPage: React.FunctionComponent<StaticProps> = ({
  guiMetadata,
  images,
  institutions,
  licenses,
  rightsStatements,
}) => {
  const licenseTitlesByUri = React.useMemo(
    () => indexLicenseTitlesByUri(licenses),
    [licenses]
  );

  const rightsStatementPrefLabelsByUri = React.useMemo(
    () => indexRightsStatementPrefLabelsByUri(rightsStatements),
    [rightsStatements]
  );

  const imagesByDepictsUri = React.useMemo(
    () =>
      indexImagesByDepictsUri(
        images.map(image =>
          joinImage({
            image,
            licenseTitlesByUri,
            rightsStatementPrefLabelsByUri,
          })
        )
      ),
    [images, licenseTitlesByUri, rightsStatementPrefLabelsByUri]
  );

  const joinedInstitutions = React.useMemo(
    () =>
      institutions.map(institution =>
        joinInstitution({
          institution,
          imagesByDepictsUri,
          licenseTitlesByUri,
          rightsStatementPrefLabelsByUri,
        })
      ),
    [institutions, imagesByDepictsUri]
  );

  return (
    <Layout documentTitle="Institutions" guiMetadata={guiMetadata}>
      <InstitutionsGallery
        institutions={joinedInstitutions}
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
  const institutionUris = new Set<string>(
    institutions.map(institution => institution.uri)
  );
  return {
    props: {
      guiMetadata: data.guiMetadata,
      images: data.images.filter(image =>
        institutionUris.has(image.depictsUri)
      ),
      institutions,
      licenses: data.licenses,
      rightsStatements: data.rightsStatements,
    },
  };
};
