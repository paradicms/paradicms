import {ObjectJson} from "~/graphql/types";

export type Object = Pick<
  ObjectJson,
  | "collectionUris"
  | "institutionUri"
  | "properties"
  | "rights"
  | "title"
  | "uri"
>;
