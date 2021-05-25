export interface StringFilter {
  readonly exclude: readonly string[] | null;
  readonly include: readonly string[] | null;
}
