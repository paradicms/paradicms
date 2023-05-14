import {Exception} from "~/Exception";

export class NoSuchWorksheetStateException extends Exception {
  constructor(readonly id: string) {
    super();
  }
}
