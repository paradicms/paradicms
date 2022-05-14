export const requireDefined = <T>(value: T | undefined): T => {
  if (typeof value === "undefined") {
    throw new EvalError("expected value to be defined");
  }
  return value;
};
