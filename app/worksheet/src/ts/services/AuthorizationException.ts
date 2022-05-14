import {Exception} from "~/Exception";

export class AuthorizationException extends Exception {
  constructor(readonly causeMessage: string) {
    super();
  }
}
