import {NamedModel} from "./NamedModel";
import {Mixin} from "ts-mixer";
import {Property} from "./Property";
import {HasComment} from "./HasComment";
import {HasLabel} from "./HasLabel";
import {HasImages} from "./HasImages";

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
