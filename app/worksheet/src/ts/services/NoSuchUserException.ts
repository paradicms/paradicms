import {Exception} from "~/Exception";

export class NoSuchUserException extends Exception {
  constructor(readonly id?: string) {
    super();
  }
}
