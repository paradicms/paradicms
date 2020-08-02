export interface BreadcrumbsProps {
  collection?: Pick<GatsbyTypes.CollectionJson, "title" | "uri">;
  institution?: Pick<GatsbyTypes.InstitutionJson, "name" | "uri">;
  object?: Pick<GatsbyTypes.ObjectJson, "title" | "uri">;
}
