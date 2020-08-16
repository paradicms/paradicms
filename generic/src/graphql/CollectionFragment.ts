import {graphql} from "gatsby";

export const CollectionFragment = graphql`
  fragment CollectionFragment on CollectionJson {
    institutionUri
    title
    uri
  }
`;
