import {Work} from "./Work";
import {cms} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {WorkLocation} from "./WorkLocation";
import {WorkLocationRole} from "./WorkLocationRole";
import {Memoize} from "typescript-memoize";
import {WorkEvent} from "./WorkEvent";
import {CmsEvent} from "./CmsEvent";
import {CmsLocation} from "./CmsLocation";

export abstract class CmsWorkEvent extends CmsEvent implements WorkEvent {
  get work(): Work {
    return this.modelSet.workByUri(this.workUri);
  }

  @Memoize()
  get workLocation(): WorkLocation | null {
    if (!(this.location instanceof CmsLocation)) {
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

  @Memoize()
  override get title(): string {
    if (super.title) {
      return super.title;
    } else {
      return `${this.workLocationRole}: "${this.work.title}"`;
    }
  }

  get workUri(): string {
    return requireNonNull(this.findAndMapObject(cms.work, this.mapUriObject));
  }
}
