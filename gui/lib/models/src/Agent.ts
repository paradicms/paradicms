import {NamedModel} from "./NamedModel";
import {Mixin} from "ts-mixer";
import {HasImages, HasName, HasPage, HasRelations} from "./mixins";

export class Agent extends Mixin(
  NamedModel,
  HasImages,
  HasName,
  HasPage,
  HasRelations
) {
  toString() {
    return this.name;
  }
}
