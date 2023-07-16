import {Mixin} from "ts-mixer";
import {LinkedArtModel} from "./LinkedArtModel";
import {Work} from "../Work";
import {requireNonNull} from "@paradicms/utilities";
import {Memoize} from "typescript-memoize";
import {LinkedArtProduction} from "./LinkedArtProduction";
import {crm} from "@paradicms/vocabularies";
import {mapTermToLinkedArtModel} from "./mapTermToLinkedArtModel";
import {WorkAgentsMixin} from "../WorkAgentsMixin";
import {AgentUnion} from "../AgentUnion";
import {WorkEventUnion} from "../WorkEventUnion";
import {LinkedArtDescriptionMixin} from "./LinkedArtDescriptionMixin";
import {LinkedArtImagesMixin} from "./LinkedArtImagesMixin";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {ModelIdentifier} from "../ModelIdentifier";

export class LinkedArtHumanMadeObject
  extends Mixin(LinkedArtModel, LinkedArtDescriptionMixin, LinkedArtImagesMixin, SomeImageThumbnailMixin, WorkAgentsMixin)
  implements Work {
  get contributors(): readonly AgentUnion[] {
    return [];
  }

  get creators(): readonly AgentUnion[] {
    return this.wasProducedBy?.carriedOutBy ?? [];
  }

  get displayDate(): string | null {
    return this.wasProducedBy?.hasTimeSpan?.label ?? null;
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
