export const requireNonNull = <T>(value: T | null): T => {
  if (value === null) {
    throw new EvalError("expected value to be non-null");
  }
  return value;
};
