import {Work} from "../Work";
import {SameAsModelMixin} from "./SameAsModelMixin";

export abstract class SameAsAgentMixin<
  AgentT extends {
    readonly label: string;
    readonly works: readonly Work[];
  }
> extends SameAsModelMixin<AgentT> {
  get label(): string {
    return this.getBestValue(model => model.label)!;
  }

  get works(): readonly Work[] {
    return this.getUniqueLinkedModels(model => model.works);
  }
}
