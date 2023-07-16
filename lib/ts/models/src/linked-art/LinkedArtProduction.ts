import {Mixin} from "ts-mixer";
import {LinkedArtModel} from "./LinkedArtModel";
import {LinkedArtPerson} from "./LinkedArtPerson";
import {crm} from "@paradicms/vocabularies";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";
import {Memoize} from "typescript-memoize";
import {LinkedArtTimeSpan} from "./LinkedArtTimeSpan";
import {WorkCreationEvent} from "../WorkCreationEvent";
import {AgentUnion} from "../AgentUnion";
import {EventDerivedDatesMixin} from "../EventDerivedDatesMixin";
import {DateTimeDescription} from "../DateTimeDescription";
import {Text} from "../Text";
import {Image} from "../Image";
import {ThumbnailSelector} from "../ThumbnailSelector";
import {requireNonNull} from "@paradicms/utilities";

export class LinkedArtProduction
  extends Mixin(LinkedArtModel, EventDerivedDatesMixin)
  implements WorkCreationEvent {
  get agents(): readonly AgentUnion[] {
    return this.creators;
  }

  get contributors(): readonly AgentUnion[] {
    return [];
  }

  get creators(): readonly AgentUnion[] {
    return this.carriedOutBy;
  }

  @Memoize()
  get carriedOutBy(): readonly LinkedArtPerson[] {
    return this.filterAndMapObjects(crm.P14_carried_out_by, term =>
      mapTermToLinkedArtModel(this, term)
    ).filter(model => model instanceof LinkedArtPerson) as LinkedArtPerson[];
  }

  get date(): DateTimeDescription | null {
    return null;
  }

  get description(): Text | null {
    return null;
  }

  override get displayDate(): string | null {
    return this.hasTimeSpan?.label ?? super.displayDate;
  }

  get endDate(): DateTimeDescription | null {
    return this.hasTimeSpan?.endOfTheEnd ?? null;
  }

  @Memoize()
  get hasTimeSpan(): LinkedArtTimeSpan | null {
    return this.findAndMapObject(crm["P4_has_time-span"], term => {
      const model = mapTermToLinkedArtModel(this, term);
      return model instanceof LinkedArtTimeSpan
        ? (model as LinkedArtTimeSpan)
        : null;
    });
  }

  get images(): readonly Image[] {
    return [];
  }

  override get label(): string {
    return requireNonNull(super.label);
  }

  readonly location = null;

  get startDate(): DateTimeDescription | null {
    return this.hasTimeSpan?.beginOfTheBegin ?? null;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  readonly type: "WorkCreation" = "WorkCreation";
  readonly workLocation = null;
}
