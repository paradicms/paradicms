import {ImagesMixin} from "./ImagesMixin";
import {Model} from "./Model";
import {WorkAgent} from "./WorkAgent";
import {WorkLocation} from "./WorkLocation";
import {WorkEventUnion} from "./WorkEventUnion";
import {SameAsMixin} from "./SameAsMixin";
import {ThumbnailMixin} from "./ThumbnailMixin";
import {CreatorsMixin} from "./CreatorsMixin";
import {ContributorsMixin} from "./ContributorsMixin";
import {DescriptionMixin} from "./DescriptionMixin";
import {PropertyValueUnion} from "./PropertyValueUnion";

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
  readonly events: readonly WorkEventUnion[];
  readonly label: string;
  readonly location: WorkLocation | null;
  get propertyValues(): readonly PropertyValueUnion[];
  propertyValuesByPropertyIri(propertyIri: string): readonly PropertyValueUnion[];
  readonly wikipediaUrl: string | null;
  readonly wikidataConceptIri: string | null;
}
