import {DatasetCore, NamedNode} from "@rdfjs/types";
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
  agentByIri(agentIri: NamedNode): Agent | null;
  readonly appConfiguration: AppConfiguration | null;
  readonly collections: readonly Collection[];
  collectionByIri(collectionByIri: NamedNode): Collection | null;
  conceptByIri(conceptIri: NamedNode): Concept | null;
  readonly concepts: readonly Concept[];
  eventByIri(eventByIri: NamedNode): Event | null;
  readonly events: readonly Event[];
  imageByIri(imageIri: NamedNode): Image | null;
  licenseByIri(licenseIri: NamedNode): License | null;
  locationByIri(locationIri: NamedNode): Location | null;
  organizationByIri(organizationIri: NamedNode): Organization | null;
  partialDateTimeDescriptionByIri(
    parameters: ResourceBackedModelParameters
  ): PartialDateTimeDescription | null;
  personByIri(personIri: NamedNode): Person | null;
  readonly properties: readonly Property[];
  propertyByIri(propertyIri: NamedNode): Property | null;
  propertyGroupByIri(propertyGroupIri: NamedNode): PropertyGroup | null;
  propertyGroupsByPropertyIri(propertyIri: NamedNode): readonly PropertyGroup[];
  readonly propertyGroups: readonly PropertyGroup[];
  rightsStatementByIri(rightsStatementIri: NamedNode): RightsStatement | null;
  textByIri(parameters: ResourceBackedModelParameters): Text | null;
  toJsonLd(): Promise<JsonLd>;
  toRdf(): DatasetCore;
  workByIri(workIri: NamedNode): Work | null;
  readonly works: readonly Work[];
  worksByAgentIri(agentIri: NamedNode): readonly Work[];
}
