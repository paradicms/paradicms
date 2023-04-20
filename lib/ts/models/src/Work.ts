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

export interface Work
  extends NamedModel,
    ImagesMixin,
    RelationsMixin,
    RightsMixin {
  readonly agents: readonly WorkAgent[];
  readonly agentUris: readonly string[];
  readonly collections: readonly Collection[];
  readonly collectionUris: readonly string[];
  readonly description: string | Text | null;
  readonly displayDate: string | null;
  readonly events: readonly WorkEventUnion[];
  readonly label: string;
  readonly location: WorkLocation | null;
  propertyValues(propertyUri: string): readonly PropertyValue[];
}
