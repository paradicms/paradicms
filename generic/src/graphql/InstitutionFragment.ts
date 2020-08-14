import {graphql} from "gatsby";

export const InstitutionFragment = graphql`
  fragment InstitutionFragment on InstitutionJson {
    name
    rights {
      holder
      statements
    }
    uri
  }
`;
