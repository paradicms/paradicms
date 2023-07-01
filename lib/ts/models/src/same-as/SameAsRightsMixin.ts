import {Model} from "../Model";
import {SameAsModelMixin} from "./SameAsModelMixin";
import {RightsMixin} from "../RightsMixin";
import {License} from "../License";
import {AgentUnion} from "../AgentUnion";
import {RightsStatement} from "../RightsStatement";

export abstract class SameAsRightsMixin<ModelT extends Model & RightsMixin>
  extends SameAsModelMixin<ModelT>
  implements RightsMixin {
  get contributors(): readonly AgentUnion[] {
    return this.getUniqueLinkedModels(model => model.contributors);
  }

  get creators(): readonly AgentUnion[] {
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

  get rightsHolders(): readonly AgentUnion[] {
    return this.getUniqueLinkedModels(model => model.rightsHolders);
  }

  get rightsStatements(): readonly RightsStatement[] {
    return this.getUniqueLinkedModels(model => model.rightsStatements);
  }
}
