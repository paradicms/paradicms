import {CollectionJson, InstitutionJson, ObjectJson} from "~/graphql/types";

export interface BreadcrumbsProps {
  collection?: Pick<CollectionJson, "title" | "uri">;
  institution?: Pick<InstitutionJson, "name" | "uri">;
  object?: Pick<ObjectJson, "title" | "uri">;
}
