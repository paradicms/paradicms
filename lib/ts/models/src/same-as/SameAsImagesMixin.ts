import {Model} from "../Model";
import {SameAsModelMixin} from "./SameAsModelMixin";
import {ImagesMixin} from "../ImagesMixin";
import {Image} from "../Image";

export abstract class SameAsImagesMixin<ModelT extends Model & ImagesMixin>
  extends SameAsModelMixin<ModelT>
  implements ImagesMixin {
  get images(): readonly Image[] {
    return this.getUniqueLinkedModels(model => model.images);
  }
}
