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
import {NamedLocation} from "NamedLocation";
import {Dataset} from "@rdfjs/types";

export interface ModelSet {
  agentByUri(agentUri: string): Agent;
  readonly agents: readonly Agent[];
  agentWorks(agentUri: string): readonly Work[];
  readonly appConfiguration: AppConfiguration | null;
  collectionWorks(collectionUri: string): readonly Work[];
  readonly collections: readonly Collection[];
  collectionByUri(collectionUri: string): Collection;
  readonly concepts: readonly Concept[];
  conceptByUri(conceptUri: string): Concept;
  conceptByUriOptional(conceptUri: string): Concept | null;
  imageByUri(imageUri: string): Image;
  readonly images: readonly Image[];
  imagesByDepictsUri(depictsUri: string): readonly Image[];
  imagesByOriginalImageUri(originalImageUri: string): readonly Image[];
  licenseByUri(licenseUri: string): License;
  readonly licenses: readonly License[];
  logContents(): void;
  readonly namedLocations: readonly NamedLocation[];
  namedLocationByUri(locationUri: string): NamedLocation;
  organizationByUri(organizationUri: string): Organization;
  organizationByUriOptional(organizationUri: string): Organization | null;
  readonly organizations: readonly Organization[];
  readonly people: readonly Person[];
  personByUri(personUri: string): Person;
  personByUriOptional(personUri: string): Person | null;
  readonly properties: readonly Property[];
  propertiesByGroupUri(propertyGroupUri: string): readonly Property[];
  readonly propertyGroups: readonly PropertyGroup[];
  propertyGroupByUriOptional(propertyGroupUri: string): PropertyGroup | null;
  readonly rightsStatements: readonly RightsStatement[];
  rightsStatementByUri(rightsStatementUri: string): RightsStatement;
  toRdf(): Dataset;
  workByUri(workUri: string): Work;
  readonly workEvents: readonly WorkEvent[];
  workEventsByWork(workUri: string): readonly WorkEvent[];
  workEventByUri(workEventUri: string): WorkEvent;
  readonly works: readonly Work[];
}
