import InstitutionJson = GatsbyTypes.InstitutionJson;

export type InstitutionSummary = Pick<
  InstitutionJson,
  "name" | "rights" | "uri"
>;
