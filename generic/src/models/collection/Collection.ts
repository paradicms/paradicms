import CollectionJson = GatsbyTypes.CollectionJson;

export type Collection = Pick<
  CollectionJson,
  "institution_uri" | "rights" | "title" | "uri"
>;
