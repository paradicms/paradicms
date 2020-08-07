import {CollectionJson} from "~/graphql/types";

export type Collection = Pick<
  CollectionJson,
  "institution_uri" | "rights" | "title" | "uri"
>;
