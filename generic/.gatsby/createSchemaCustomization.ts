import {CreateSchemaCustomizationArgs} from "gatsby";

export const createSchemaCustomization = async (
  args: CreateSchemaCustomizationArgs
): Promise<void> => {
  const {actions} = args;
  const {createTypes} = actions;
  createTypes(`
  type CollectionJson implements Node {
    institutionUri: String!
    title: String!
    uri: String!
  }  
  
  type CollectionJsonRights {
    holder: String!
    statements: [String!]!
  }
  
  type ImageJson implements Node {
    exactDimensions: ImageJsonExactDimensions
    institutionUri: String!
    objectUri: String!
    originalImageUri: String
    maxDimensions: ImageJsonMaxDimensions
    uri: String!
  }
  
  type ImageJsonExactDimensions {
    height: Int!
    width: Int!
  }
  
  type ImageJsonMaxDimensions {
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
    alternativeTitles: [String!]
    collectionUris: [String!]!
    creators: [String!]
    culturalContexts: [String!]
    dates: [String!]
    descriptions: [String!]
    extents: [String!]
    identifiers: [String!]
    institutionUri: String!
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
