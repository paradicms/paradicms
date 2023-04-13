import {Work} from "./Work";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {Text} from "./Text";

export interface Collection extends CmsImagesMixin {
  readonly description: string | Text | null;
  readonly works: readonly Work[];
}
