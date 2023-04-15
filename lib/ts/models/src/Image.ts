import {ImageDimensions} from "./ImageDimensions";
import {NamedModel} from "./NamedModel";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {RightsMixin} from "./RightsMixin";

export interface Image extends NamedModel, RightsMixin {
  readonly depictsUri: string;
  readonly derivedImages: readonly Image[];
  readonly exactDimensions: ImageDimensions | null;
  readonly isOriginal: boolean;
  readonly maxDimensions: ImageDimensions | null;
  readonly originalImageUri: string | null;
  readonly originalImage: Image;
  readonly src: string | null;
  thumbnail(selector: ThumbnailSelector): Image | null;
  readonly title: string | null;
}
