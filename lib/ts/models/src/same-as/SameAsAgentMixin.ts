import {Agent} from "../Agent";
import {SameAsModelMixin} from "./SameAsModelMixin";
import {Work} from "../Work";

export abstract class SameAsAgentMixin<
  AgentT extends Agent
> extends SameAsModelMixin<AgentT> {
  get label(): string {
    return this.getBestValue(model => model.label)!;
  }

  get works(): readonly Work[] {
    return this.getUniqueLinkedModels(model => model.works);
  }
}
