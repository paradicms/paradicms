import CollectionJson = GatsbyTypes.CollectionJson;

export type CollectionSummary = Pick<
  CollectionJson,
  "rights" | "title" | "uri"
>;
