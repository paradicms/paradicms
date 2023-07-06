import {Mixin} from "ts-mixer";
import {SyntheticEvent} from "./SyntheticEvent";
import {WorkEvent} from "../WorkEvent";
import {WorkLocation} from "../WorkLocation";
import {WorkLocationRole} from "../WorkLocationRole";
import {Memoize} from "typescript-memoize";
import {AgentUnion} from "../AgentUnion";

export abstract class SyntheticWorkEvent extends Mixin(SyntheticEvent)
  implements WorkEvent {
  abstract readonly agents: readonly AgentUnion[];

  @Memoize()
  get workLocation(): WorkLocation | null {
    if (!this.location) {
      return null;
    }

    return {
      label: this.label
        ? this.displayDate
          ? `${this.displayDate}: ${this.label}`
          : this.label
        : null,
      location: this.location,
      role: this.workLocationRole,
    };
  }

  protected abstract readonly workLocationRole: WorkLocationRole;
}
