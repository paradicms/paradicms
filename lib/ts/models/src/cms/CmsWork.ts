import {cms, dcterms} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Text} from "../Text";
import {Work} from "../Work";
import {WorkAgent} from "../WorkAgent";
import {WorkEventUnion} from "../WorkEventUnion";
import {WorkLocation} from "../WorkLocation";
import {CmsDescriptionMixin} from "./CmsDescriptionMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsRelationsMixin} from "./CmsRelationsMixin";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {CmsTitleMixin} from "./CmsTitleMixin";
import {CmsNamedModel} from "./CmsNamedModel";
import {mapTermToText} from "../mapTermToText";
import {mapTermToLocation} from "../mapTermToLocation";
import {mapTermToWorkEvent} from "../mapTermToWorkEvent";
import {OwlSameAsMixin} from "../owl/OwlSameAsMixin";
import {getWorkAgents} from "../getWorkAgents";
import {getWorkDisplayDate} from "../getWorkDisplayDate";

export class CmsWork extends Mixin(
  CmsNamedModel,
  CmsDescriptionMixin,
  CmsImagesMixin,
  CmsTitleMixin,
  CmsRelationsMixin,
  CmsRightsMixin,
  OwlSameAsMixin
) implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    return getWorkAgents(this);
  }

  @Memoize()
  override get description(): Text | null {
    return this.findAndMapObject(dcterms.description, term =>
      mapTermToText(this, term)
    );
  }

  @Memoize()
  get displayDate(): string | null {
    return getWorkDisplayDate(this);
  }

  @Memoize()
  get events(): readonly WorkEventUnion[] {
    return this.filterAndMapObjects(cms.event, term => mapTermToWorkEvent(this, term));
  }

  get label(): string {
    return this.title;
  }

  @Memoize()
  get location(): WorkLocation | null {
    const location = this.findAndMapObject(dcterms.spatial, term => mapTermToLocation(this, term));
    if (location) {
      return {
        label: this.title,
        location,
        role: "Current",
      };
    } else {
      return null;
    }
  }
}
