/**
 * Sort events in place.
 */
export const sortProperties = <
  PropertyT extends {
    readonly label: string;
  }
>(
  properties: PropertyT[]
): void => {
  properties.sort((left, right) => left.label.localeCompare(right.label));
};
