import {Collection} from "./Collection";
import {ImagesMixin} from "./ImagesMixin";
import {NamedModel} from "./NamedModel";
import {PropertyValue} from "./PropertyValue";
import {RelationsMixin} from "./RelationsMixin";
import {RightsMixin} from "./RightsMixin";
import {Text} from "./Text";
import {WorkAgent} from "./WorkAgent";
import {WorkEvent} from "./WorkEvent";
import {WorkLocation} from "./WorkLocation";

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
  readonly events: readonly WorkEvent[];
  readonly label: string;
  readonly location: WorkLocation | null;
  propertyValues(propertyUri: string): readonly PropertyValue[];
}
