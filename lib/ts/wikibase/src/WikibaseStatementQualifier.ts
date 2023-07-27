import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {WikibaseStatementValue} from "./WikibaseStatementValue";

export interface WikibaseStatementQualifier {
  readonly normalizedValues: readonly WikibaseStatementValue[];
  readonly propertyDefinition: WikibasePropertyDefinition;
  readonly values: readonly WikibaseStatementValue[];
}
