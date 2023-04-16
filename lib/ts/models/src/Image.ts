import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {RightsMixin} from "./RightsMixin";
import {ThumbnailSelector} from "./ThumbnailSelector";

export interface Image extends NamedModel, RightsMixin {
  readonly depictsUri: string;
  readonly derivedImages: readonly Image[];
  readonly exactDimensions: ImageDimensions | null;
  readonly isOriginal: boolean;
  readonly label: string | null;
  readonly maxDimensions: ImageDimensions | null;
  readonly originalImageUri: string | null;
  readonly originalImage: Image;
  readonly src: string | null;
  thumbnail(selector: ThumbnailSelector): Image | null;
}
