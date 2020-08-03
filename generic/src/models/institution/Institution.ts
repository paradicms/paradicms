import InstitutionJson = GatsbyTypes.InstitutionJson;

export type Institution = Pick<InstitutionJson, "name" | "rights" | "uri">;
