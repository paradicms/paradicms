import {Literal, NamedNode} from "@rdfjs/types";
import {Agent} from "./Agent";
import {Concept} from "./Concept";
import {Image} from "./Image";
import {Property} from "./Property";
import {Text} from "./Text";
import {ThumbnailSelector} from "./ThumbnailSelector";

interface PropertyValueBase {
  readonly label: string;
  readonly property: Property;
  thumbnail(selector: ThumbnailSelector): Image | null;
  readonly value: string;
}

interface AgentPropertyValue extends PropertyValueBase {
  readonly agent: Agent;
  readonly type: "Agent";
}

interface ConceptPropertyValue extends PropertyValueBase {
  readonly concept: Concept;
  readonly type: "Concept";
}

interface DcmiTypePropertyValue extends PropertyValueBase {
  readonly node: NamedNode;
  readonly type: "DcmiType";
}

interface LiteralPropertyValue extends PropertyValueBase {
  readonly literal: Literal;
  readonly type: "Literal";
}

interface TextPropertyValue extends PropertyValueBase {
  readonly text: Text;
  readonly type: "Text";
}

export type PropertyValue =
  | AgentPropertyValue
  | ConceptPropertyValue
  | DcmiTypePropertyValue
  | LiteralPropertyValue
  | TextPropertyValue;
