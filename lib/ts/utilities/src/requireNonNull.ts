export const requireNonNull = <T>(value: T | null, message?: string): T => {
  if (value === null) {
    throw new EvalError(
      "expected value to be non-null" + (message ? ": " + message : "")
    );
  }
  return value;
};
