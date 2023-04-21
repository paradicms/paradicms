import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {Property} from "./Property";
import {Text} from "./Text";

export interface PropertyGroup extends NamedModel, ImagesMixin {
  readonly comment: Text | null;
  readonly label: string;
  readonly properties: readonly Property[];
}
