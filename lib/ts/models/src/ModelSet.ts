import {DatasetCore} from "@rdfjs/types";
import {JsonLd} from "jsonld/jsonld-spec";
import {Agent} from "./Agent";
import {AppConfiguration} from "./AppConfiguration";
import {Collection} from "./Collection";
import {Concept} from "./Concept";
import {Event} from "./Event";
import {Image} from "./Image";
import {License} from "./License";
import {Location} from "./Location";
import {Organization} from "./Organization";
import {PartialDateTimeDescription} from "./PartialDateTimeDescription";
import {Person} from "./Person";
import {Property} from "./Property";
import {PropertyGroup} from "./PropertyGroup";
import {ResourceBackedModelParameters} from "./ResourceBackedModelParameters";
import {RightsStatement} from "./RightsStatement";
import {Text} from "./Text";
import {Work} from "./Work";

export interface ModelSet {
  agentByIri(agentIri: string): Agent | null;
  readonly appConfiguration: AppConfiguration | null;
  readonly collections: readonly Collection[];
  collectionByKey(collectionKey: string): Collection | null;
  conceptByIri(conceptIri: string): Concept | null;
  readonly concepts: readonly Concept[];
  eventByKey(eventKey: string): Event | null;
  readonly events: readonly Event[];
  imageByIri(imageIri: string): Image | null;
  licenseByIri(licenseIri: string): License | null;
  locationByIri(locationIri: string): Location | null;
  organizationByIri(organizationIri: string): Organization | null;
  partialDateTimeDescriptionByIri(
    parameters: ResourceBackedModelParameters
  ): PartialDateTimeDescription | null;
  personByIri(personIri: string): Person | null;
  readonly properties: readonly Property[];
  propertyByIri(propertyIri: string): Property | null;
  propertyGroupByIri(propertyGroupIri: string): PropertyGroup | null;
  propertyGroupsByPropertyKey(propertyKey: string): readonly PropertyGroup[];
  readonly propertyGroups: readonly PropertyGroup[];
  rightsStatementByIri(rightsStatementIri: string): RightsStatement | null;
  textByIri(parameters: ResourceBackedModelParameters): Text | null;
  toJsonLd(): Promise<JsonLd>;
  toRdf(): DatasetCore;
  workByIri(workIri: string): Work | null;
  workByKey(workKey: string): Work | null;
  readonly works: readonly Work[];
  worksByAgentIri(agentIri: string): readonly Work[];
}
