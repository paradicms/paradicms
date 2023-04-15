import {Person} from "Person";
import {Organization} from "Organization";

/**
 * Visitor pattern for concrete Agent instances.
 */
export interface AgentVisitor<T> {
  visitOrganization(organization: Organization): T;
  visitPerson(person: Person): T;
}
