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

  get license(): License | null {
    return this.getBestLinkedModel(model => model.license);
  }

  get requiresAttribution(): boolean {
    const license = this.license;
    return license ? license.requiresAttribution : false;
  }

  get rightsHolders(): readonly AgentUnion[] {
    return this.getUniqueLinkedModels(model => model.rightsHolders);
  }

  get rightsStatement(): RightsStatement | null {
    return this.getBestLinkedModel(model => model.rightsStatement);
  }
}
