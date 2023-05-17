import {PropertyValue} from "./PropertyValue";
import {AgentUnion} from "./AgentUnion";
import {Property} from "./Property";

export class AgentPropertyValue extends PropertyValue {
  constructor(readonly agent: AgentUnion, property: Property) {
    super(property);
  }

  get label() {
    return this.agent.label;
  }

  get value() {
    return this.agent.uri ?? this.agent.label;
  }
}
