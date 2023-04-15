import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {Text} from "./Text";
import {Work} from "./Work";

export interface Collection extends NamedModel, ImagesMixin {
  readonly description: string | Text | null;
  readonly title: string;
  readonly works: readonly Work[];
}
