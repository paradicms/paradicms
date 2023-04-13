import {Collection} from "./Collection";
import {Image} from "./Image";
import {License} from "./License";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {Person} from "./Person";
import {Concept} from "./Concept";
import {Organization} from "./Organization";
import {Agent} from "./Agent";
import {WorkEvent} from "./WorkEvent";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {AppConfiguration} from "./AppConfiguration";
import {Location} from "./Location";

export interface ModelSetCore {
  readonly agents: readonly Agent[];
  readonly appConfiguration: AppConfiguration | null;
  readonly collections: readonly Collection[];
  readonly concepts: readonly Concept[];
  readonly images: readonly Image[];
  readonly licenses: readonly License[];
  logContents(): void;
  readonly namedLocations: readonly Location[];
  readonly organizations: readonly Organization[];
  readonly people: readonly Person[];
  readonly properties: readonly Property[];
  readonly propertyGroups: readonly PropertyGroup[];
  readonly rightsStatements: readonly RightsStatement[];
  readonly workEvents: readonly WorkEvent[];
  readonly works: readonly Work[];
}
