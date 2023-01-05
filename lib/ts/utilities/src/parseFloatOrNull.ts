export const parseFloatOrNull = (value: string): number | null => {
  const parsedFloat = parseFloat(value);
  if (!isNaN(parsedFloat)) {
    return parsedFloat;
  } else {
    return null;
  }
};
