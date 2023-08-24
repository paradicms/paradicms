import { requireNonNull } from "@paradicms/utilities";
import { crm } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Agent } from "../Agent";
import { ModelIdentifier } from "../ModelIdentifier";
import { SomeImageThumbnailMixin } from "../SomeImageThumbnailMixin";
import { Work } from "../Work";
import { WorkAgentsMixin } from "../WorkAgentsMixin";
import { WorkEventUnion } from "../WorkEventUnion";
import { LinkedArtDescriptionMixin } from "./LinkedArtDescriptionMixin";
import { LinkedArtImagesMixin } from "./LinkedArtImagesMixin";
import { LinkedArtModel } from "./LinkedArtModel";
import { LinkedArtProduction } from "./LinkedArtProduction";
import { mapTermToLinkedArtModel } from "./mapTermToLinkedArtModel";

export class LinkedArtHumanMadeObject
  extends Mixin(LinkedArtModel, LinkedArtDescriptionMixin, LinkedArtImagesMixin, SomeImageThumbnailMixin, WorkAgentsMixin)
  implements Work {
  get contributors(): readonly Agent[] {
    return [];
  }

  get creators(): readonly Agent[] {
    return this.wasProducedBy?.carriedOutBy ?? [];
  }

  get displayDate(): string | null {
    return this.wasProducedBy?.hasTimeSpan?.displayDate ?? null;
  }

  get events(): readonly WorkEventUnion[] {
    const events: WorkEventUnion[] = [];
    if (this.wasProducedBy) {
      events.push(this.wasProducedBy);
    }
    return events;
  }

  override get label(): string {
    return requireNonNull(super.label);
  }

  readonly location = null;

  get sameAsIdentifiers(): readonly ModelIdentifier[] {
    return [];
  }

  @Memoize()
  get wasProducedBy(): LinkedArtProduction | null {
    return this.findAndMapObject(crm.P108i_was_produced_by, term => {
      const model = mapTermToLinkedArtModel(this, term);
      return model instanceof LinkedArtProduction
        ? (model as LinkedArtProduction)
        : null;
    });
  }

  readonly wikidataConceptIri = null;
  readonly wikipediaUrl = null;
}
