import {Collection} from "./Collection";
import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {PropertyValue} from "./PropertyValue";
import {RelationsMixin} from "./RelationsMixin";
import {RightsMixin} from "./RightsMixin";
import {Text} from "./Text";
import {WorkAgent} from "./WorkAgent";
import {WorkLocation} from "./WorkLocation";
import {WorkEventUnion} from "./WorkEventUnion";
import {SameAsMixin} from "./SameAsMixin";

export interface Work
  extends NamedModel,
    ImagesMixin,
    RelationsMixin,
    RightsMixin,
    SameAsMixin<Work> {
  readonly agents: readonly WorkAgent[];
  readonly collections: readonly Collection[];
  readonly description: Text | null;
  readonly displayDate: string | null;
  readonly events: readonly WorkEventUnion[];
  readonly label: string;
  readonly location: WorkLocation | null;
  get propertyValues(): readonly PropertyValue[];
  propertyValuesByPropertyUri(propertyUri: string): readonly PropertyValue[];
}
