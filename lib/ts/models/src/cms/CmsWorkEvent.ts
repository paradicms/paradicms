import { requireNonNull } from "@paradicms/utilities";
import { cms } from "@paradicms/vocabularies";
import { Memoize } from "typescript-memoize";
import { Work } from "../Work";
import { WorkEvent } from "../WorkEvent";
import { WorkEventVisitor } from "../WorkEventVisitor";
import { WorkLocation } from "../WorkLocation";
import { WorkLocationRole } from "../WorkLocationRole";
import { CmsEvent } from "./CmsEvent";

export abstract class CmsWorkEvent extends CmsEvent implements WorkEvent {
  abstract accept<T>(visitor: WorkEventVisitor<T>): T;
  
  get work(): Work {
    return this.modelSet.workByUri(this.workUri);
  }

  @Memoize()
  get workLocation(): WorkLocation | null {
    if (!this.location || typeof(this.location) === "string") {
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
