import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {Literal, NamedNode} from "@rdfjs/types";

export interface WikibaseStatementQualifier {
  readonly normalizedValue: Literal | NamedNode | null;
  readonly propertyDefinition: WikibasePropertyDefinition;
  readonly value: Literal | NamedNode;
}
