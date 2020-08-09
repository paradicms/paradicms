import {graphql} from "gatsby";

export const ObjectFragment = graphql`
  fragment ObjectFragment on ObjectJson {
    alternative_titles
    collection_uris
    creators
    cultural_contexts
    dates
    descriptions
    extents
    identifiers
    institution_uri
    languages
    materials
    media
    provenances
    publishers
    rights {
      holder
      statements
    }
    sources
    spatials
    subjects
    techniques
    temporals
    title
    types
    uri
  }
`;
