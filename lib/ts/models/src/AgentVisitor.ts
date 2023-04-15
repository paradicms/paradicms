import {Organization} from "./Organization";
import {Person} from "./Person";

/**
 * Visitor pattern for concrete Agent instances.
 */
export interface AgentVisitor<T> {
  visitOrganization(organization: Organization): T;
  visitPerson(person: Person): T;
}
