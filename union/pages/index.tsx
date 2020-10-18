import * as React from "react";
import {GetStaticProps} from "next";
import {Image, Images, Institution, Institutions} from "@paradicms/models";
import {Hrefs} from "lib/Hrefs";
import {Data} from "lib/Data";
import {Layout} from "components/Layout";
import {Link} from "@paradicms/material-ui-next";
import {InstitutionsGallery} from "@paradicms/material-ui";

const IndexPage: React.FunctionComponent<{
  images: readonly Image[];
  institutions: readonly Institution[];
}> = ({images, institutions}) => {
  const joinedInstitutions = Institutions.join({
    institutions,
    imagesByDepictsUri: Images.indexByDepictsUri(images),
  });

  return (
    <Layout documentTitle="Institutions">
      <InstitutionsGallery
        institutions={joinedInstitutions}
        renderInstitutionLink={(institution, children) => (
          <Link
            {...Hrefs.institution(institution.uri).home}
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

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {images: Data.images, institutions: Data.institutions},
  };
};
