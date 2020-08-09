import {ObjectJson} from "~/graphql/types";

export type Object = Pick<
  ObjectJson,
  | "alternative_titles"
  | "collection_uris"
  | "creators"
  | "cultural_contexts"
  | "dates"
  | "descriptions"
  | "extents"
  | "identifiers"
  | "institution_uri"
  | "languages"
  | "materials"
  | "media"
  | "provenances"
  | "publishers"
  | "rights"
  | "sources"
  | "spatials"
  | "subjects"
  | "techniques"
  | "temporals"
  | "title"
  | "types"
  | "uri"
>;
