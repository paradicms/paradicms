import {AgentUnion} from "./AgentUnion";

/**
 * Data structure summarizing an agent associated with a work.
 *
 * This structure is used to capture the values of multiple properties,
 * such as dcterms:creator and dcterms:publisher, in order to display them
 * on a single screen.
 */
export interface WorkAgent {
  readonly agent: AgentUnion;
  readonly role: string;
}
