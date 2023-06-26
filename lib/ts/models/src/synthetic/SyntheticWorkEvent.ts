import {Mixin} from "ts-mixer";
import {SyntheticEvent} from "./SyntheticEvent";
import {WorkEvent} from "../WorkEvent";
import {WorkLocation} from "../WorkLocation";
import {WorkLocationRole} from "../WorkLocationRole";
import {Memoize} from "typescript-memoize";

export abstract class SyntheticWorkEvent extends Mixin(SyntheticEvent)
  implements WorkEvent {
  @Memoize()
  get workLocation(): WorkLocation | null {
    if (!this.location) {
      return null;
    }

    return {
      role: this.workLocationRole,
      label: this.label
        ? this.displayDate
          ? `${this.displayDate}: ${this.label}`
          : this.label
        : null,
      location: this.location,
    };
  }

  protected abstract readonly workLocationRole: WorkLocationRole;
}
