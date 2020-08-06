import {graphql} from "gatsby";

export const ObjectFragment = graphql`
  fragment ObjectFragment on ObjectJson {
    collection_uris
    descriptions
    image_uris
    institution_uri
    rights {
      holder
      statements
    }
    subjects
    title
    uri
  }
`;
