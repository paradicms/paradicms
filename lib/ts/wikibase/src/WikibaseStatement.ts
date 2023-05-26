import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {WikibaseStatementQualifier} from "./WikibaseStatementQualifier";
import {Literal, NamedNode} from "@rdfjs/types";

export interface WikibaseStatement {
  readonly propertyDefinition: WikibasePropertyDefinition;
  readonly normalizedValue: Literal | NamedNode | null;
  readonly qualifiers: readonly WikibaseStatementQualifier[];
  readonly type: "Direct" | "Full";
  readonly value: Literal | NamedNode;
}
