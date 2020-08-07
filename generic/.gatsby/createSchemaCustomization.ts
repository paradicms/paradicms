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
    derived_image_uris: [String!]
    exact_dimensions: ImageJsonExact_dimensions
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
    collection_uris: [String!]!
    descriptions: [String!]
    image_uris: [String!]
    institution_uri: String!
    subjects: [String!]
    title: String!
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
