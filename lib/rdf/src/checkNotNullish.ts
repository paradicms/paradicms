import {RdfReaderException} from "./RdfReaderException";

export function checkNotNullish<T>(
  object: T | null | undefined,
  message: string
): T {
  if (object == null) {
    throw new RdfReaderException(message);
  }
  return object;
}
