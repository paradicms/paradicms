import {DcmiTypePropertyValue} from "./DcmiTypePropertyValue";
import {ConceptPropertyValue} from "./ConceptPropertyValue";
import {TextPropertyValue} from "./TextPropertyValue";
import {LiteralPropertyValue} from "./LiteralPropertyValue";
import {AgentPropertyValue} from "./AgentPropertyValue";

export type PropertyValueUnion =
  | AgentPropertyValue
  | ConceptPropertyValue
  | DcmiTypePropertyValue
  | LiteralPropertyValue
  | TextPropertyValue;
