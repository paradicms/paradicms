import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {WikibaseStatementQualifier} from "./WikibaseStatementQualifier";
import {WikibaseStatementValue} from "./WikibaseStatementValue";

export interface WikibaseStatement {
  readonly propertyDefinition: WikibasePropertyDefinition;
  readonly normalizedValues: readonly WikibaseStatementValue[];
  readonly qualifiers: readonly WikibaseStatementQualifier[];
  readonly type: "Direct" | "Full";
  readonly values: readonly WikibaseStatementValue[];
}
