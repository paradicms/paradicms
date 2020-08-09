import {CollectionJson} from "~/graphql/types";

export type Collection = Pick<
  CollectionJson,
  "institutionUri" | "rights" | "title" | "uri"
>;
