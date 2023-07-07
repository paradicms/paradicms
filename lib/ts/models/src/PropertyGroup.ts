import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {Property} from "./Property";
import {Text} from "./Text";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface PropertyGroup extends NamedModel, ImagesMixin, ThumbnailMixin {
  readonly comment: Text | null;
  readonly label: string;
  readonly properties: readonly Property[];
}
