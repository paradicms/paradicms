export interface Sort<PropertyT> {
  readonly ascending: boolean;
  readonly property: PropertyT;
}
