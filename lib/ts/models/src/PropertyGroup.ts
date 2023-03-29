import {NamedModel} from "./NamedModel";
import {HasComment, HasImages, HasLabel} from "./mixins";
import {Mixin} from "ts-mixer";
import {Property} from "./Property";

export class PropertyGroup extends Mixin(
  NamedModel,
  HasComment,
  HasImages,
  HasLabel
) {
  get properties(): readonly Property[] {
    return this.modelSet.propertiesByGroupUri(this.uri);
  }
}
