import {WikibaseProperty} from "./WikibaseProperty";
import {WikibaseStatementQualifier} from "./WikibaseStatementQualifier";
import {WikibaseStatementValue} from "./WikibaseStatementValue";

export interface WikibaseStatement {
  readonly property: WikibaseProperty;
  readonly normalizedValues: readonly WikibaseStatementValue[];
  readonly qualifiers: readonly WikibaseStatementQualifier[];
  readonly type: "Direct" | "Full";
  readonly values: readonly WikibaseStatementValue[];
}
