import {ObjectJson} from "~/graphql/types";

export type Object = Pick<
  ObjectJson,
  | "alternativeTitles"
  | "collectionUris"
  | "creators"
  | "culturalContexts"
  | "dates"
  | "descriptions"
  | "extents"
  | "identifiers"
  | "institutionUri"
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
