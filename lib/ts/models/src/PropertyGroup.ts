import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {Property} from "./Property";
import {Text} from "./Text";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface PropertyGroup extends Model, ImagesMixin, ThumbnailMixin {
  readonly comment: Text | null;
  readonly label: string;
  readonly properties: readonly Property[];
}
