import {ImageDimensions} from "./ImageDimensions";
import {Rights} from "./Rights";

export interface Image {
  readonly depictsUri: string;
  readonly exactDimensions: ImageDimensions | null;
  readonly institutionUri: string;
  readonly maxDimensions: ImageDimensions | null;
  readonly originalImageUri: string | null;
  readonly rights: Rights | null;
  readonly uri: string;
}
