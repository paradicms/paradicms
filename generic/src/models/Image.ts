import {ImageDimensions} from "~/models/ImageDimensions";

export interface Image {
  readonly exactDimensions?: ImageDimensions | null;
  readonly institutionUri: string;
  readonly maxDimensions?: ImageDimensions | null;
  readonly objectUri: string;
  readonly originalImageUri?: string | null;
  readonly uri: string;
}
