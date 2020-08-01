import * as React from "react";
import {Layout} from "components/layout/Layout";
import {InstitutionsList} from "components/institution/InstitutionsList";

const IndexPage: React.FunctionComponent<{
  data: GatsbyTypes.IndexPageQuery;
}> = ({data}) => {
  return (
    <Layout documentTitle="Home" cardTitle="Home">
      <InstitutionsList institutions={data.allInstitutionJson.nodes} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allInstitutionJson {
      nodes {
        name
        uri
      }
    }
  }
`;
