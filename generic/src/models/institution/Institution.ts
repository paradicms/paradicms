import InstitutionJson = GatsbyTypes.InstitutionJson;

export type Institution = Pick<
  InstitutionJson,
  "collection_uris" | "name" | "owner_uri" | "rights" | "uri"
>;
