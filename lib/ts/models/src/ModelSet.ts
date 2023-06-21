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
  agentByIri(agentIri: string): AgentUnion;
  agentByKey(agentKey: string): AgentUnion;
  readonly appConfiguration: AppConfiguration | null;
  readonly collections: readonly Collection[];
  collectionByIri(collectionIri: string): Collection;
  collectionByKey(collectionKey: string): Collection;
  conceptByIri(conceptIri: string): Concept;
  conceptByIriOptional(conceptIri: string): Concept | null;
  readonly concepts: readonly Concept[];
  imageByIri(imageIri: string): Image;
  imageByIriOptional(imageIri: string): Image | null;
  licenseByIri(licenseIri: string): License;
  locationByIri(locationIri: string): Location;
  organizationByIri(organizationIri: string): Organization;
  organizationByIriOptional(organizationIri: string): Organization | null;
  personByIri(personIri: string): Person;
  personByIriOptional(personIri: string): Person | null;
  readonly properties: readonly Property[];
  propertiesByGroupIri(propertyGroupIri: string): readonly Property[];
  propertyByIri(propertyIri: string): Property;
  propertyGroupByIri(propertyGroupIri: string): PropertyGroup;
  propertyGroupByIriOptional(propertyGroupIri: string): PropertyGroup | null;
  readonly propertyGroups: readonly PropertyGroup[];
  rightsStatementByIri(rightsStatementIri: string): RightsStatement;
  toFastRdfString(): string;
  toRdf(): DatasetCore;
  workByIri(workIri: string): Work;
  workByIriOptional(workIri: string): Work | null;
  workByKey(workKey: string): Work;
  get workEvents(): readonly WorkEventUnion[];
  workEventsByWorkIri(workIri: string): readonly WorkEventUnion[];
  workEventByIri(workEventIri: string): WorkEventUnion;
  readonly works: readonly Work[];
  worksByAgentIri(agentIri: string): readonly Work[];
}
