export const requireDefined = <T>(
  value: T | undefined,
  message?: string
): T => {
  if (typeof value === "undefined") {
    throw new EvalError(
      "expected value to be defined" + (message ? ": " + message : "")
    );
  }
  return value;
};
