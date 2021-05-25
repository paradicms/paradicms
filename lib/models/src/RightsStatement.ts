export interface RightsStatement {
  readonly identifier: string;
  readonly prefLabel: string;
  readonly definition: string | null;
  readonly description: string | null;
  // Ignore notes
  // Ignore scopeNote
  readonly uri: string;
}
