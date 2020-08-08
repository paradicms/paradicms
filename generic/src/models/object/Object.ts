import {ObjectJson} from "~/graphql/types";

export type Object = Pick<
  ObjectJson,
  | "collection_uris"
  | "descriptions"
  | "institution_uri"
  | "rights"
  | "subjects"
  | "title"
  | "uri"
>;
