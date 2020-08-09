import {ImageJson} from "~/graphql/types";

export type Image = Pick<
  ImageJson,
  | "exactDimensions"
  | "institutionUri"
  | "maxDimensions"
  | "objectUri"
  | "originalImageUri"
  | "uri"
>;
