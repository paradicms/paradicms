import {Agent} from "./Agent";
import {Concept} from "./Concept";
import {Location} from "./Location";

interface AgentWorkSubject {
  readonly agent: Agent;
  readonly type: "Agent";
}

interface ConceptWorkSubject {
  readonly concept: Concept;
  readonly type: "Concept";
}

interface LocationWorkSubject {
  readonly location: Location;
  readonly type: "Location";
}

export type WorkSubject =
  | AgentWorkSubject
  | ConceptWorkSubject
  | LocationWorkSubject;
