import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {WikibaseValue} from "./WikibaseValue";
import {WikibaseStatementQualifier} from "./WikibaseStatementQualifier";

export interface WikibaseStatement {
  readonly propertyDefinition: WikibasePropertyDefinition;
  normalizedValue: WikibaseValue | null;
  readonly qualifiers: readonly WikibaseStatementQualifier[];
  value: WikibaseValue;
}
