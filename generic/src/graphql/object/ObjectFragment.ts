import {graphql} from "gatsby";

export const ObjectFragment = graphql`
  fragment ObjectFragment on ObjectJson {
    alternativeTitles
    collectionUris
    creators
    culturalContexts
    dates
    descriptions
    extents
    identifiers
    institutionUri
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
