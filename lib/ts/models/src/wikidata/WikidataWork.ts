import {WikidataModel} from "./WikidataModel";
import {Work} from "../Work";
import {WorkLocation} from "../WorkLocation";
import {WorkAgent} from "../WorkAgent";
import {Collection} from "../Collection";
import {WorkEventUnion} from "../WorkEventUnion";
import {Text} from "../Text";
import {getWorkAgents} from "../getWorkAgents";
import {Memoize} from "typescript-memoize";
import {mapTermToText} from "../mapTermToText";
import {DataFactory} from "@paradicms/rdf";
import {getWorkDisplayDate} from "../getWorkDisplayDate";

export class WikidataWork extends WikidataModel implements Work {
  @Memoize()
  get agents(): readonly WorkAgent[] {
    return getWorkAgents(this);
  }

  readonly collections: readonly Collection[] = [];

  get description(): Text | null {
    return this.findAndMapObject(
      DataFactory.namedNode("http://schema.org/description"),
      term => mapTermToText(this, term)
    );
  }

  get displayDate(): string | null {
    return getWorkDisplayDate(this);
  }

  readonly events: readonly WorkEventUnion[] = [];
  readonly location: WorkLocation | null = null;
}
