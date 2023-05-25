import {WikibasePropertyDefinition} from "./WikibasePropertyDefinition";
import {WikibaseValue} from "./WikibaseValue";

export interface WikibaseStatementQualifier {
  normalizedValue: WikibaseValue;
  readonly propertyDefinition: WikibasePropertyDefinition;
  value: WikibaseValue;
}
