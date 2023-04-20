import {PropertyValue} from "./PropertyValue";
import {AgentUnion} from "./AgentUnion";

export class AgentPropertyValue extends PropertyValue {
  constructor(readonly agent: AgentUnion) {
    super();
  }

  get label() {
    return this.agent.label;
  }

  get value() {
    return this.agent.uri ?? this.agent.label;
  }
}
