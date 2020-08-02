import * as React from "react";
import {Layout} from "~/components/layout/Layout";

const InstitutionPage: React.FunctionComponent<{
  pageContext: {institution: GatsbyTypes.InstitutionJson};
}> = ({pageContext: {institution}}) => {
  return (
    <Layout documentTitle={"Institution - " + institution.name}>
      <div></div>
    </Layout>
  );
};

export default InstitutionPage;
