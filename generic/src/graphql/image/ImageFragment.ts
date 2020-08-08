import {graphql} from "gatsby";

export const ImageFragment = graphql`
  fragment ImageFragment on ImageJson {
    institution_uri
    exact_dimensions {
      height
      width
    }
    max_dimensions {
      height
      width
    }
    object_uri
    original_image_uri
    uri
  }
`;
