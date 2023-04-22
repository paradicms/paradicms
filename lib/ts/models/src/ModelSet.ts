import {Dataset} from "@rdfjs/types";
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
  agentByUri(agentUri: string): AgentUnion;
  agentWorks(agentUri: string): readonly Work[];
  readonly appConfiguration: AppConfiguration | null;
  collectionWorks(collectionUri: string): readonly Work[];
  readonly collections: readonly Collection[];
  collectionByUri(collectionUri: string): Collection;
  conceptByUri(conceptUri: string): Concept;
  conceptByUriOptional(conceptUri: string): Concept | null;
  readonly concepts: readonly Concept[];
  imageByUri(imageUri: string): Image;
  imagesByDepictsUri(depictsUri: string): readonly Image[];
  imagesByOriginalImageUri(originalImageUri: string): readonly Image[];
  licenseByUri(licenseUri: string): License;
  locationByUri(locationUri: string): Location;
  organizationByUri(organizationUri: string): Organization;
  organizationByUriOptional(organizationUri: string): Organization | null;
  personByUri(personUri: string): Person;
  personByUriOptional(personUri: string): Person | null;
  readonly properties: readonly Property[];
  propertiesByGroupUri(propertyGroupUri: string): readonly Property[];
  propertyGroupByUriOptional(propertyGroupUri: string): PropertyGroup | null;
  readonly propertyGroups: readonly PropertyGroup[];
  rightsStatementByUri(rightsStatementUri: string): RightsStatement;
  toFastRdfString(): string;
  toRdf(): Dataset;
  workByUri(workUri: string): Work;
  get workEvents(): readonly WorkEventUnion[];
  workEventsByWorkUri(workUri: string): readonly WorkEventUnion[];
  workEventByUri(workEventUri: string): WorkEventUnion;
  readonly works: readonly Work[];
}
