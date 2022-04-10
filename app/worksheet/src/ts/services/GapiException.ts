import {AuthorizationException} from "~/services/AuthorizationException";
import {IoException} from "~/services/IoException";

export type GapiException = AuthorizationException | IoException;

export function convertGapiErrorToException(reason: any): GapiException {
  const error = reason.result.error;
  if (error.code === 401) {
    return new AuthorizationException(error.message);
  } else {
    return new IoException(JSON.stringify(error));
  }
}
