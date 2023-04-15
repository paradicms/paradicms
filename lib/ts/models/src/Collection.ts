import {Work} from "./Work";
import {Text} from "./Text";
import {NamedModel} from "./NamedModel";
import {ImagesMixin} from "ImagesMixin";

export interface Collection extends NamedModel, ImagesMixin {
  readonly description: string | Text | null;
  readonly works: readonly Work[];
}
