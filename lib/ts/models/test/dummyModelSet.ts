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
} from "../src";
import {DatasetCore} from "@rdfjs/types";

export const dummyModelSet: ModelSet = {
  agentByIri(agentIri: string): AgentUnion | null {
    throw new EvalError("not implemented");
  },
  get appConfiguration(): AppConfiguration | null {
    throw new EvalError("not implemented");
  },
  collectionByKey(collectionKey: string): Collection | null {
    throw new EvalError("not implemented");
  },
  get collections(): readonly Collection[] {
    throw new EvalError("not implemented");
  },
  get concepts(): readonly Concept[] {
    throw new EvalError("not implemented");
  },
  conceptByIri(conceptIri: string): Concept | null {
    throw new EvalError("not implemented");
  },
  imageByIri(imageIri: string): Image | null {
    throw new EvalError("not implemented");
  },
  licenseByIri(licenseIri: string): License | null {
    throw new EvalError("not implemented");
  },
  locationByIri(locationIri: string): Location | null {
    throw new EvalError("not implemented");
  },
  organizationByIri(organizationIri: string): Organization | null {
    throw new EvalError("not implemented");
  },
  personByIri(personIri: string): Person | null {
    throw new EvalError("not implemented");
  },
  get propertyGroups(): readonly PropertyGroup[] {
    throw new EvalError("not implemented");
  },
  get properties(): readonly Property[] {
    throw new EvalError("not implemented");
  },
  propertyByIri(propertyIri: string): Property | null {
    throw new EvalError("not implemented");
  },
  propertyGroupByIri(propertyGroupIri: string): PropertyGroup | null {
    throw new EvalError("not implemented");
  },
  propertyGroupsByPropertyKey(propertyKey: string): readonly PropertyGroup[] {
    throw new EvalError("not implemented");
  },
  rightsStatementByIri(rightsStatementIri: string): RightsStatement | null {
    throw new EvalError("not implemented");
  },
  toFastRdfString(): string {
    throw new EvalError("not implemented");
  },
  toRdf(): DatasetCore {
    throw new EvalError("not implemented");
  },
  workByIri(workIri: string): Work | null {
    throw new EvalError("not implemented");
  },
  workByKey(workKey: string): Work | null {
    throw new EvalError("not implemented");
  },
  get works(): readonly Work[] {
    throw new EvalError("not implemented");
  },
  worksByAgentIri(agentIri: string): readonly Work[] {
    throw new EvalError("not implemented");
  },
};
