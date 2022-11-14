export const parseIntOrNull = (value: string): number | null => {
  const parsedInt = parseInt(value);
  if (!isNaN(parsedInt)) {
    return parsedInt;
  } else {
    return null;
  }
};
