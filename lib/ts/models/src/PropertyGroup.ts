import {NamedModel} from "./NamedModel";
import {Property} from "./Property";
import {ImagesMixin} from "./ImagesMixin";

export interface PropertyGroup extends NamedModel, ImagesMixin {
  readonly comment: string | null;
  readonly label: string;
  readonly properties: readonly Property[];
}
