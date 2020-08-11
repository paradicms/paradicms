import {graphql} from "gatsby";

export const ObjectPropertyDefinitionFragment = graphql`
  fragment ObjectPropertyDefinitionFragment on ObjectPropertyDefinitionJson {
    faceted
    key
    labelPlural
    labelSingular
  }
`;
