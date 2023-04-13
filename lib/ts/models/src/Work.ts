import {NamedModel} from "./NamedModel";
import {Collection} from "./Collection";
import {Text} from "./Text";
import {PropertyValue} from "./PropertyValue";
import {WorkAgent} from "./WorkAgent";
import {WorkEvent} from "./WorkEvent";
import {WorkLocation} from "./WorkLocation";
import {RightsMixin} from "./RightsMixin";
import {ImagesMixin} from "./ImagesMixin";
import {RelationsMixin} from "./RelationsMixin";

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
  readonly location: WorkLocation | null;
  readonly page: string | null;
  propertyValues(propertyUri: string): readonly PropertyValue[];
  readonly title: string;
}
