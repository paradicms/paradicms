import {NamedModel} from "./NamedModel";
import {Mixin} from "ts-mixer";
import {HasPage} from "./mixins/HasPage";
import {HasImages} from "./mixins/HasImages";
import {HasName} from "./mixins/HasName";
import {HasRelations} from "./HasRelations";

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
