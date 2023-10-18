import {DatasetCore, NamedNode} from "@rdfjs/types";
import {JsonLd} from "jsonld/jsonld-spec";
import {
  Agent,
  AppConfiguration,
  Collection,
  Concept,
  Event,
  Image,
  License,
  Location,
  ModelSet,
  Organization,
  PartialDateTimeDescription,
  Person,
  Property,
  PropertyGroup,
  ResourceBackedModelParameters,
  RightsStatement,
  Text,
  Work,
} from "../src";

export const dummyModelSet: ModelSet = {
  agentByIri(agentIri: NamedNode): Agent | null {
    throw new EvalError("not implemented");
  },
  get appConfiguration(): AppConfiguration | null {
    throw new EvalError("not implemented");
  },
  collectionByIri(collectionIri: NamedNode): Collection | null {
    throw new EvalError("not implemented");
  },
  get collections(): readonly Collection[] {
    throw new EvalError("not implemented");
  },
  get concepts(): readonly Concept[] {
    throw new EvalError("not implemented");
  },
  conceptByIri(conceptIri: NamedNode): Concept | null {
    throw new EvalError("not implemented");
  },
  eventByIri(eventIri: NamedNode): Event | null {
    throw new EvalError("not implemented");
  },
  get events(): readonly Event[] {
    throw new EvalError("not implemented");
  },
  imageByIri(imageIri: NamedNode): Image | null {
    throw new EvalError("not implemented");
  },
  licenseByIri(licenseIri: NamedNode): License | null {
    throw new EvalError("not implemented");
  },
  locationByIri(locationIri: NamedNode): Location | null {
    throw new EvalError("not implemented");
  },
  organizationByIri(organizationIri: NamedNode): Organization | null {
    throw new EvalError("not implemented");
  },
  partialDateTimeDescriptionByIri: function(
    parameters: ResourceBackedModelParameters
  ): PartialDateTimeDescription {
    throw new Error("Function not implemented.");
  },
  personByIri(personIri: NamedNode): Person | null {
    throw new EvalError("not implemented");
  },
  get propertyGroups(): readonly PropertyGroup[] {
    throw new EvalError("not implemented");
  },
  get properties(): readonly Property[] {
    throw new EvalError("not implemented");
  },
  propertyByIri(propertyIri: NamedNode): Property | null {
    throw new EvalError("not implemented");
  },
  propertyGroupByIri(propertyGroupIri: NamedNode): PropertyGroup | null {
    throw new EvalError("not implemented");
  },
  propertyGroupsByPropertyIri(
    propertyIri: NamedNode
  ): readonly PropertyGroup[] {
    throw new EvalError("not implemented");
  },
  rightsStatementByIri(rightsStatementIri: NamedNode): RightsStatement | null {
    throw new EvalError("not implemented");
  },
  textByIri: function(parameters: ResourceBackedModelParameters): Text {
    throw new Error("Function not implemented.");
  },
  toJsonLd(): Promise<JsonLd> {
    throw new EvalError("not implemented");
  },
  toRdf(): DatasetCore {
    throw new EvalError("not implemented");
  },
  workByIri(workIri: NamedNode): Work | null {
    throw new EvalError("not implemented");
  },
  workByIri(workIri: NamedNode): Work | null {
    throw new EvalError("not implemented");
  },
  get works(): readonly Work[] {
    throw new EvalError("not implemented");
  },
  worksByAgentIri(agentIri: NamedNode): readonly Work[] {
    throw new EvalError("not implemented");
  },
};
