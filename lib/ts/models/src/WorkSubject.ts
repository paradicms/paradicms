import {Agent} from "./Agent";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {Location} from "./Location";
import {ThumbnailSelector} from "./ThumbnailSelector";

interface WorkSubjectBase {
  readonly label: string;
  thumbnail(selector: ThumbnailSelector): Image | null;
  readonly value: string;
}

interface AgentWorkSubject extends WorkSubjectBase {
  readonly agent: Agent;
  readonly type: "Agent";
}

interface ConceptWorkSubject extends WorkSubjectBase {
  readonly concept: Concept;
  readonly type: "Concept";
}

interface LocationWorkSubject extends WorkSubjectBase {
  readonly location: Location;
  readonly type: "Location";
}

export type WorkSubject =
  | AgentWorkSubject
  | ConceptWorkSubject
  | LocationWorkSubject;
