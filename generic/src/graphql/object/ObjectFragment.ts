import {graphql} from "gatsby";

export const ObjectFragment = graphql`
  fragment ObjectFragment on ObjectJson {
    collectionUris
    institutionUri
    properties {
      key
      value
    }
    rights {
      holder
      statements
    }
    title
    uri
  }
`;
