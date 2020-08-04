import ObjectJson = GatsbyTypes.ObjectJson;

export type Object = Pick<
  ObjectJson,
  | "collection_uris"
  | "descriptions"
  | "image_uris"
  | "institution_uri"
  | "rights"
  | "subjects"
  | "title"
  | "uri"
>;
