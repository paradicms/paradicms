import {ImageJson} from "~/graphql/types";

export type Image = Pick<
  ImageJson,
  | "exact_dimensions"
  | "institution_uri"
  | "max_dimensions"
  | "object_uri"
  | "original_image_uri"
  | "uri"
>;
