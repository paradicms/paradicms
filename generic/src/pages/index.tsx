import * as React from "react";
import {Layout} from "~/components/layout/Layout";
import {graphql} from "gatsby";
import {InstitutionsList} from "~/components/institution/InstitutionsList";
import {IndexPageQuery} from "~/graphql/types";

const IndexPage: React.FunctionComponent<{
  data: IndexPageQuery;
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
