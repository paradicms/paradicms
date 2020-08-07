import {ImageJson} from "~/graphql/types";

export type Image = Pick<
  ImageJson,
  "derived_image_uris" | "exact_dimensions" | "max_dimensions" | "uri"
>;
