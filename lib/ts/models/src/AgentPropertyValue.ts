import {Agent} from "./Agent";
import {PropertyValue} from "./PropertyValue";

export class AgentPropertyValue extends PropertyValue {
  constructor(readonly agent: Agent) {
    super();
  }

  get label() {
    return this.agent.label;
  }

  get value() {
    return this.agent.uri ?? this.agent.label;
  }
}
