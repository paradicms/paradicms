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
import {Dataset} from "@rdfjs/types";

export const dummyModelSet: ModelSet = {
  get appConfiguration(): AppConfiguration | null {
    throw new EvalError("not implemented");
  },
  get collections(): readonly Collection[] {
    throw new EvalError("not implemented");
  },
  get concepts(): readonly Concept[] {
    throw new EvalError("not implemented");
  },
  get properties(): readonly Property[] {
    throw new EvalError("not implemented");
  },
  get propertyGroups(): readonly PropertyGroup[] {
    throw new EvalError("not implemented");
  },
  get works(): readonly Work[] {
    throw new EvalError("not implemented");
  },
  agentByUri(agentUri: string): AgentUnion {
    throw new EvalError("not implemented");
  },
  agentWorks(agentUri: string): readonly Work[] {
    throw new EvalError("not implemented");
  },
  collectionByUri(collectionUri: string): Collection {
    throw new EvalError("not implemented");
  },
  collectionWorks(collectionUri: string): readonly Work[] {
    throw new EvalError("not implemented");
  },
  conceptByUri(conceptUri: string): Concept {
    throw new EvalError("not implemented");
  },
  conceptByUriOptional(conceptUri: string): Concept | null {
    throw new EvalError("not implemented");
  },
  imageByUri(imageUri: string): Image {
    throw new EvalError("not implemented");
  },
  imagesByDepictsUri(depictsUri: string): readonly Image[] {
    throw new EvalError("not implemented");
  },
  imagesByOriginalImageUri(originalImageUri: string): readonly Image[] {
    throw new EvalError("not implemented");
  },
  licenseByUri(licenseUri: string): License {
    throw new EvalError("not implemented");
  },
  locationByUri(locationUri: string): Location {
    throw new EvalError("not implemented");
  },
  organizationByUri(organizationUri: string): Organization {
    throw new EvalError("not implemented");
  },
  organizationByUriOptional(organizationUri: string): Organization | null {
    throw new EvalError("not implemented");
  },
  personByUri(personUri: string): Person {
    throw new EvalError("not implemented");
  },
  personByUriOptional(personUri: string): Person | null {
    throw new EvalError("not implemented");
  },
  propertiesByGroupUri(propertyGroupUri: string): readonly Property[] {
    throw new EvalError("not implemented");
  },
  propertyByUri(propertyUri: string): Property {
    throw new EvalError("not implemented");
  },
  propertyGroupByUri(propertyGroupUri: string): PropertyGroup {
    throw new EvalError("not implemented");
  },
  propertyGroupByUriOptional(propertyGroupUri: string): PropertyGroup | null {
    throw new EvalError("not implemented");
  },
  rightsStatementByUri(rightsStatementUri: string): RightsStatement {
    throw new EvalError("not implemented");
  },
  toFastRdfString(): string {
    throw new EvalError("not implemented");
  },
  toRdf(): Dataset {
    throw new EvalError("not implemented");
  },
  workByUri(workUri: string): Work {
    throw new EvalError("not implemented");
  },
  workByUriOptional(workUri: string): Work | null {
    throw new EvalError("not implemented");
  },
  workEventByUri(workEventUri: string): WorkEventUnion {
    throw new EvalError("not implemented");
  },
  get workEvents(): readonly WorkEventUnion[] {
    throw new EvalError("not implemented");
  },
  workEventsByWorkUri(workUri: string): readonly WorkEventUnion[] {
    throw new EvalError("not implemented");
  },
};
