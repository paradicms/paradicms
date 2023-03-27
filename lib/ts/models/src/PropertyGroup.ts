import {NamedModel} from "./NamedModel";
import {HasLabel} from "./mixins";
import {Mixin} from "ts-mixer";
import {Property} from "./Property";

export class PropertyGroup extends Mixin(NamedModel, HasLabel) {
  get properties(): readonly Property[] {
    return this.modelSet.propertiesByGroupUri(this.uri);
  }
}
