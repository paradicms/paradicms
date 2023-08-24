import {Agent} from "../Agent";
import {License} from "../License";
import {Model} from "../Model";
import {RightsMixin} from "../RightsMixin";
import {RightsStatement} from "../RightsStatement";
import {SameAsModelMixin} from "./SameAsModelMixin";

export abstract class SameAsRightsMixin<ModelT extends Model & RightsMixin>
  extends SameAsModelMixin<ModelT>
  implements RightsMixin {
  get contributors(): readonly Agent[] {
    return this.getUniqueLinkedModels(model => model.contributors);
  }

  get creators(): readonly Agent[] {
    return this.getUniqueLinkedModels(model => model.creators);
  }

  get licenses(): readonly License[] {
    return this.getUniqueLinkedModels(model => model.licenses);
  }

  get requiresAttribution(): boolean {
    for (const model of this.models) {
      if (model.requiresAttribution) {
        return true;
      }
    }
    return false;
  }

  get rightsHolders(): readonly Agent[] {
    return this.getUniqueLinkedModels(model => model.rightsHolders);
  }

  get rightsStatements(): readonly RightsStatement[] {
    return this.getUniqueLinkedModels(model => model.rightsStatements);
  }
}
