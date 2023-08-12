/**
 * Delete undefined members from a JSON-compatible value.
 */
export const deleteUndefined = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};
