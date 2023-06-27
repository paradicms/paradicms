import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {WorkEvent} from "../WorkEvent";
import {WorkLocation} from "../WorkLocation";
import {WorkLocationRole} from "../WorkLocationRole";
import {CmsEvent} from "./CmsEvent";

export abstract class CmsWorkEvent extends Mixin(CmsEvent)
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
