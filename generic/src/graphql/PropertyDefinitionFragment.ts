import {graphql} from "gatsby";

export const PropertyDefinitionFragment = graphql`
  fragment PropertyDefinitionFragment on PropertyDefinitionJson {
    faceted
    key
    labelPlural
    labelSingular
  }
`;
