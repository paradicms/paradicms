import {Event} from "./Event";
import {Work} from "./Work";
import {cms} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {WorkLocation} from "./WorkLocation";
import {WorkLocationRole} from "./WorkLocationRole";
import {Memoize} from "typescript-memoize";
import {Location} from "./Location";

export class WorkEvent extends Event {
  get work(): Work {
    return this.modelSet.workByUri(this.workUri);
  }

  @Memoize()
  get workLocation(): WorkLocation | null {
    if (!(this.location instanceof Location)) {
      return null;
    }

    return {
      location: this.location,
      role: this.workLocationRole,
      title: this.title
        ? this.displayDate
          ? `${this.displayDate}: ${this.title}`
          : this.title
        : null,
    };
  }

  protected get workLocationRole(): WorkLocationRole {
    // This class can't be abstract since it's used as a mixin.
    throw new EvalError("not implemented");
  }

  get workUri(): string {
    return requireNonNull(this.findAndMapObject(cms.work, this.mapUriObject));
  }
}
