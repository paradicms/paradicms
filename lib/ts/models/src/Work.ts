import { ContributorsMixin } from "./ContributorsMixin";
import { CreatorsMixin } from "./CreatorsMixin";
import { DescriptionMixin } from "./DescriptionMixin";
import { ImagesMixin } from "./ImagesMixin";
import { Model } from "./Model";
import { PropertyValue } from "./PropertyValue";
import { SameAsMixin } from "./SameAsMixin";
import { ThumbnailMixin } from "./ThumbnailMixin";
import { WorkAgent } from "./WorkAgent";
import { WorkEvent } from "./WorkEvent";
import { WorkLocation } from "./WorkLocation";

export interface Work
  extends Model,
    ContributorsMixin,
    CreatorsMixin,
    DescriptionMixin,
    ImagesMixin,
    SameAsMixin,
    ThumbnailMixin {
  readonly agents: readonly WorkAgent[];
  readonly displayDate: string | null;
  readonly events: readonly WorkEvent[];
  readonly label: string;
  readonly location: WorkLocation | null;
  get propertyValues(): readonly PropertyValue[];
  propertyValuesByPropertyIri(propertyIri: string): readonly PropertyValue[];
  readonly wikipediaUrl: string | null;
  readonly wikidataConceptIri: string | null;
}
