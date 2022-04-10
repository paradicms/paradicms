import {Exception} from "~/Exception";

export class AuthenticationException extends Exception {
  constructor(readonly causeMessage: string) {
    super();
  }
}
