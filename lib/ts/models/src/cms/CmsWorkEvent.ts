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
      label: this.title
        ? this.displayDate
          ? `${this.displayDate}: ${this.title}`
          : this.title
        : null,
      location: this.location,
    };
  }

  protected get workLocationRole(): WorkLocationRole {
    // This class can't be abstract since it's used as a mixin.
    throw new EvalError("not implemented");
  }
}
