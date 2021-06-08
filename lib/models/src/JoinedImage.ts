import {ImageDimensions} from "./ImageDimensions";
import {JoinedRights} from "./JoinedRights";

export interface JoinedImage {
  readonly depictsUri: string;
  readonly exactDimensions: ImageDimensions | null;
  readonly institutionUri: string;
  readonly maxDimensions: ImageDimensions | null;
  readonly originalImageUri: string | null;
  readonly rights: JoinedRights | null;
  readonly src: string | null;
  readonly uri: string;
}
