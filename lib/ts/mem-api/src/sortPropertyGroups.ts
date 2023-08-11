/**
 * Sort events in place.
 */
export const sortPropertyGroups = <
  PropertyGroupT extends {
    readonly label: string;
  }
>(
  propertyGroups: PropertyGroupT[]
): void => {
  propertyGroups.sort((left, right) => left.label.localeCompare(right.label));
};
