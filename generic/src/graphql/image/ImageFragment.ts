import {graphql} from "gatsby";

export const ImageFragment = graphql`
  fragment ImageFragment on ImageJson {
    institutionUri
    exactDimensions {
      height
      width
    }
    maxDimensions {
      height
      width
    }
    objectUri
    originalImageUri
    uri
  }
`;
