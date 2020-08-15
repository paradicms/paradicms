import * as React from "react";
import {Layout} from "~/components/Layout";
import {graphql} from "gatsby";
import {InstitutionsList} from "~/components/InstitutionsList";
import {IndexPageQuery} from "~/graphql/types";

const IndexPage: React.FunctionComponent<{
  data: IndexPageQuery;
}> = ({data}) => {
  return (
    <Layout documentTitle="Institutions">
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
