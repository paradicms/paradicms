import {CreateSchemaCustomizationArgs} from "gatsby";

export const createSchemaCustomization = (
  args: CreateSchemaCustomizationArgs
) => {
  const {actions} = args;
  const {createTypes} = actions;
  createTypes(`
  type CollectionJson implements Node {
    object_uris: [String!]!
  }  
  
  type CollectionJsonRights {
    holder: String!
    statements: [String!]!
  }
  
  type InstitutionJson implements Node {
    collection_uris: [String!]!
    name: String!
    owner_uri: String!
    uri: String!
  }

  type InstitutionJsonRights {
    holder: String!
    statements: [String!]!
  }  
  
  type ObjectJson implements Node {
    descriptions: [String!]
    image_uris: [String!]
    subjects: [String!]
    title: String!
    uri: String!
  }
  
  type ObjectJsonRights {
    holder: String!
    statements: [String!]!
  }
  `);
};
