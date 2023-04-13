import {NamedModel} from "./NamedModel";
import {Mixin} from "ts-mixer";
import {HasImages} from "./HasImages";
import {HasName} from "./HasName";
import {HasPage} from "./HasPage";
import {HasRelations} from "./HasRelations";

export class Agent extends Mixin(
  NamedModel,
  HasImages,
  HasName,
  HasPage,
  HasRelations
) {
  override toString() {
    return this.name;
  }
}
