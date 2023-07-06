import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {Text} from "./Text";
import {Work} from "./Work";
import {ThumbnailMixin} from "./ThumbnailMixin";

export interface Collection extends NamedModel, ImagesMixin, ThumbnailMixin {
  readonly description: Text | null;
  readonly label: string;
  readonly works: readonly Work[];
}
