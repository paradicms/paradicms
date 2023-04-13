import {Work} from "./Work";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {Text} from "./Text";
import {NamedModel} from "./NamedModel";

export interface Collection extends NamedModel, CmsImagesMixin {
  readonly description: string | Text | null;
  readonly works: readonly Work[];
}
