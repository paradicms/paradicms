import {
  AgentUnion,
  AppConfiguration,
  Collection,
  Concept,
  Image,
  License,
  Location,
  ModelSet,
  Organization,
  Person,
  Property,
  PropertyGroup,
  RightsStatement,
  Work,
  WorkEventUnion,
} from "../src";
import {DatasetCore} from "@rdfjs/types";

export const dummyModelSet: ModelSet = {
  agentByIri(agentIri: string): AgentUnion {
    throw new EvalError("not implemented");
  },
  agentByKey(agentKey: string): AgentUnion {
    throw new EvalError("not implemented");
  },
  get appConfiguration(): AppConfiguration | null {
    throw new EvalError("not implemented");
  },
  collectionByKey(collectionKey: string): Collection {
    throw new EvalError("not implemented");
  },
  get collections(): readonly Collection[] {
    throw new EvalError("not implemented");
  },
  get concepts(): readonly Concept[] {
    throw new EvalError("not implemented");
  },
  collectionByIri(collectionIri: string): Collection {
    throw new EvalError("not implemented");
  },
  conceptByIri(conceptIri: string): Concept {
    throw new EvalError("not implemented");
  },
  conceptByIriOptional(conceptIri: string): Concept | null {
    throw new EvalError("not implemented");
  },
  imageByIri(imageIri: string): Image {
    throw new EvalError("not implemented");
  },
  imageByIriOptional(imageIri: string): Image | null {
    throw new EvalError("not implemented");
  },
  licenseByIri(licenseIri: string): License {
    throw new EvalError("not implemented");
  },
  locationByIri(locationIri: string): Location {
    throw new EvalError("not implemented");
  },
  organizationByIri(organizationIri: string): Organization {
    throw new EvalError("not implemented");
  },
  organizationByIriOptional(organizationIri: string): Organization | null {
    throw new EvalError("not implemented");
  },
  personByIri(personIri: string): Person {
    throw new EvalError("not implemented");
  },
  personByIriOptional(personIri: string): Person | null {
    throw new EvalError("not implemented");
  },
  get propertyGroups(): readonly PropertyGroup[] {
    throw new EvalError("not implemented");
  },
  get properties(): readonly Property[] {
    throw new EvalError("not implemented");
  },
  propertiesByGroupIri(propertyGroupIri: string): readonly Property[] {
    throw new EvalError("not implemented");
  },
  propertyByIri(propertyIri: string): Property {
    throw new EvalError("not implemented");
  },
  propertyGroupByIri(propertyGroupIri: string): PropertyGroup {
    throw new EvalError("not implemented");
  },
  propertyGroupByIriOptional(propertyGroupIri: string): PropertyGroup | null {
    throw new EvalError("not implemented");
  },
  rightsStatementByIri(rightsStatementIri: string): RightsStatement {
    throw new EvalError("not implemented");
  },
  toFastRdfString(): string {
    throw new EvalError("not implemented");
  },
  toRdf(): DatasetCore {
    throw new EvalError("not implemented");
  },
  workByIri(workIri: string): Work {
    throw new EvalError("not implemented");
  },
  workByIriOptional(workIri: string): Work | null {
    throw new EvalError("not implemented");
  },
  workByKey(workKey: string): Work {
    throw new EvalError("not implemented");
  },
  workEventByIri(workEventIri: string): WorkEventUnion {
    throw new EvalError("not implemented");
  },
  get workEvents(): readonly WorkEventUnion[] {
    throw new EvalError("not implemented");
  },
  workEventsByWorkIri(workIri: string): readonly WorkEventUnion[] {
    throw new EvalError("not implemented");
  },
  get works(): readonly Work[] {
    throw new EvalError("not implemented");
  },
  worksByAgentIri(agentIri: string): readonly Work[] {
    throw new EvalError("not implemented");
  },
};
