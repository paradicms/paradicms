import {CreateSchemaCustomizationArgs} from "gatsby";

export const createSchemaCustomization = async (
  args: CreateSchemaCustomizationArgs
): Promise<void> => {
  const {actions} = args;
  const {createTypes} = actions;
  createTypes(`
  type CollectionJson implements Node {
    institution_uri: String!
    title: String!
    uri: String!
  }  
  
  type CollectionJsonRights {
    holder: String!
    statements: [String!]!
  }
  
  type ImageJson implements Node {
    exact_dimensions: ImageJsonExact_dimensions
    institution_uri: String!
    object_uri: String!
    original_image_uri: String
    max_dimensions: ImageJsonMax_dimensions
    uri: String!
  }
  
  type ImageJsonExact_dimensions {
    height: Int!
    width: Int!
  }
  
  type ImageJsonMax_dimensions {
    height: Int!
    width: Int!
  }
  
  type InstitutionJson implements Node {
    name: String!
    uri: String!
  }

  type InstitutionJsonRights {
    holder: String!
    statements: [String!]!
  }  
  
  type ObjectJson implements Node {
    alternative_titles: [String!]
    collection_uris: [String!]!
    creators: [String!]
    cultural_contexts: [String!]
    dates: [String!]
    descriptions: [String!]
    extents: [String!]
    identifiers: [String!]
    institution_uri: String!
    languages: [String!]
    materials: [String!]
    media: [String!]
    provenances: [String!]
    publishers: [String!]
    rights: ObjectJsonRights
    sources: [String!]
    spatials: [String!]
    subjects: [String!]
    techniques: [String!]
    temporals: [String!]
    title: String!
    types: [String!]
    uri: String!
  }
  
  type ObjectJsonRights {
    holder: String!
    statements: [String!]!
  }

  type Site implements Node {  
    siteMetadata: SiteSiteMetadata!
  }
  
  type SiteSiteMetadata {
    author: SiteSiteMetadataAuthor!
    description: String!
    gitHubUrl: String!
    keywords: String!
    title: String!
  }
  
  type SiteSiteMetadataAuthor {
    name: String!
    url: String!
    email: String!
  }
  `);

  return Promise.resolve();
};
