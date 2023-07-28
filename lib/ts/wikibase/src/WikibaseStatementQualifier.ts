import {WikibaseProperty} from "./WikibaseProperty";
import {WikibaseStatementValue} from "./WikibaseStatementValue";

export interface WikibaseStatementQualifier {
  readonly normalizedValues: readonly WikibaseStatementValue[];
  readonly property: WikibaseProperty;
  readonly values: readonly WikibaseStatementValue[];
}
