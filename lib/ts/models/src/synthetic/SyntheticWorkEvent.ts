import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {WorkLocation} from "../WorkLocation";
import {WorkLocationRole} from "../WorkLocationRole";
import {SyntheticEvent} from "./SyntheticEvent";

export abstract class SyntheticWorkEvent extends Mixin(SyntheticEvent) {
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
