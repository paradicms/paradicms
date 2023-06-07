import {Literal, NamedNode} from "@rdfjs/types";

export interface WikibasePropertyDefinition {
  readonly claim: NamedNode | null;
  readonly directClaimNormalized: NamedNode | null;
  readonly directClaim: NamedNode | null;
  readonly labels: readonly Literal[];
  readonly node: NamedNode;
  readonly qualifier: NamedNode | null;
  readonly qualifierValueNormalized: NamedNode | null;
  readonly qualifierValue: NamedNode | null;
  readonly statementProperty: NamedNode | null;
  readonly statementValueNormalized: NamedNode | null;
  readonly statementValue: NamedNode | null;
}
