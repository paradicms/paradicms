import { crm } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Agent } from "../Agent";
import { DateTimeDescription } from "../DateTimeDescription";
import { EventDerivedDatesMixin } from "../EventDerivedDatesMixin";
import { Image } from "../Image";
import { Text } from "../Text";
import { ThumbnailSelector } from "../ThumbnailSelector";
import { WorkCreationEvent } from "../WorkCreationEvent";
import { LinkedArtModel } from "./LinkedArtModel";
import { LinkedArtPerson } from "./LinkedArtPerson";
import { LinkedArtTimeSpan } from "./LinkedArtTimeSpan";
import { mapTermToLinkedArtModel } from "./mapTermToLinkedArtModel";

export class LinkedArtProduction
  extends Mixin(LinkedArtModel, EventDerivedDatesMixin)
  implements WorkCreationEvent {
  get agents(): readonly Agent[] {
    return this.creators;
  }

  get contributors(): readonly Agent[] {
    return [];
  }

  get creators(): readonly Agent[] {
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
    return this.hasTimeSpan?.displayDate ?? super.displayDate;
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
    if (super.label) {
      return super.label;
    } else {
      return "Production";
    }
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
