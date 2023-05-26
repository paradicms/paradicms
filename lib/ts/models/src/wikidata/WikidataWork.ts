import {WikidataModel} from "./WikidataModel";
import {Work} from "../Work";
import {PropertyValue} from "../PropertyValue";
import {WorkLocation} from "../WorkLocation";
import {WorkAgent} from "../WorkAgent";
import {Collection} from "../Collection";
import {WorkEventUnion} from "../WorkEventUnion";
import {Text} from "../Text";

export class WikidataWork extends WikidataModel implements Work {
  readonly agents: readonly WorkAgent[] = [];
  readonly collections: readonly Collection[] = [];
  readonly description: Text | null = null;
  readonly displayDate: string | null = null;
  readonly events: readonly WorkEventUnion[] = [];
  readonly location: WorkLocation | null = null;
  readonly propertyValues: readonly PropertyValue[] = [];
  propertyValuesByPropertyUri(propertyUri: string): readonly PropertyValue[] {
    return [];
  }
}
