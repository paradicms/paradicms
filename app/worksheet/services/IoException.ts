import {Exception} from "~/Exception";

export class IoException extends Exception {
  constructor(readonly causeMessage: string) {
    super();
  }
}
