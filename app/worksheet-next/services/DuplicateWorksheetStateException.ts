import {Exception} from "~/Exception";

export class DuplicateWorksheetStateException extends Exception {
  constructor(readonly id: string) {
    super();
  }
}
