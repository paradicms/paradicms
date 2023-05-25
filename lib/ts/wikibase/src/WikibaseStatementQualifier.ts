import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {WikibaseValue} from "./WikibaseValue";

export interface WikibaseStatementQualifier {
  normalizedValue: WikibaseValue | null;
  readonly propertyDefinition: WikibasePropertyDefinition;
  value: WikibaseValue;
}
