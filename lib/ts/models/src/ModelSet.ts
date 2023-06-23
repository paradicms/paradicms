import {DatasetCore} from "@rdfjs/types";
import {AgentUnion} from "./AgentUnion";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Organization} from "./Organization";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {RightsStatement} from "./RightsStatement";
import {Work} from "./Work";
import {WorkEventUnion} from "./WorkEventUnion";

export interface ModelSet {
  agentByIri(agentIri: string): AgentUnion | null;
  agentByKey(agentKey: string): AgentUnion | null;
  readonly appConfiguration: AppConfiguration | null;
  readonly collections: readonly Collection[];
  collectionByKey(collectionKey: string): Collection | null;
  conceptByIri(conceptIri: string): Concept | null;
  readonly concepts: readonly Concept[];
  imageByIri(imageIri: string): Image | null;
  licenseByIri(licenseIri: string): License | null;
  locationByIri(locationIri: string): Location | null;
  organizationByIri(organizationIri: string): Organization | null;
  personByIri(personIri: string): Person | null;
  readonly properties: readonly Property[];
  propertyByIri(propertyIri: string): Property | null;
  propertyGroupByIri(propertyGroupIri: string): PropertyGroup | null;
  propertyGroupsByPropertyKey(propertyKey: string): readonly PropertyGroup[];
  readonly propertyGroups: readonly PropertyGroup[];
  rightsStatementByIri(rightsStatementIri: string): RightsStatement | null;
  toFastRdfString(): string;
  toRdf(): DatasetCore;
  workByIri(workIri: string): Work | null;
  workByKey(workKey: string): Work | null;
  get workEvents(): readonly WorkEventUnion[];
  workEventByIri(workEventIri: string): WorkEventUnion | null;
  readonly works: readonly Work[];
  worksByAgentIri(agentIri: string): readonly Work[]
}
